import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config.service';
import { AdminCategory } from '../models/admin-category';

@Injectable({
    providedIn: 'root',
})
export class CategoriesHttpService {
    constructor(private http: HttpClient, private configService: ConfigService) {}

    getCategories() {
        return this.configService.getConfig().pipe(
            switchMap((config) => {
                return this.http.get<AdminCategory[]>(
                    `${config.apiUrl}${config.adminUrl}`,
                );
            }),
        );
    }

    delete(id: AdminCategory['id']) {
        return this.configService.getConfig().pipe(
            switchMap((config) => {
                return this.http.delete(`${config.apiUrl}${config.adminUrl}/${id}`);
            }),
        );
    }
}
