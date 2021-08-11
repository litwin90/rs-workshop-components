import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminCategory } from '../models/admin-category';
import { CategoriesHttpService } from './categories-http.service';

@Injectable({
    providedIn: 'root',
})
export class CategoriesStateService {
    public categories$: Observable<AdminCategory[]>;

    private categories$$ = new BehaviorSubject<AdminCategory[]>([]);
    private categories: AdminCategory[] = [];

    constructor(private categoriesHttp: CategoriesHttpService) {
        this.categories$ = this.categories$$.asObservable();
    }

    public initData() {
        this.categoriesHttp.getCategories().subscribe((categories) => {
            this.categories$$.next(categories);
            this.categories = categories;
        });
    }

    public delete(id: AdminCategory['id']) {
        const stateToRecover = [...this.categories];

        const newCategories = this.categories.filter((category) => category.id !== id);
        this.categories = newCategories;

        this.categories$$.next(newCategories);
        return this.categoriesHttp
            .delete(id)
            .pipe(
                catchError((error) => {
                    this.categories$$.next(stateToRecover);
                    this.categories = stateToRecover;
                    return throwError(error);
                }),
            )
            .subscribe();
    }
}
