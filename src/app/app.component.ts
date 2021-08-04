import { Component, Inject } from '@angular/core';
import { AdminCategory } from './admin/models/admin-category';
import { adminCategories, userCategories } from './app.constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        {
            provide: 'adminCategories',
            useValue: adminCategories,
        },
    ],
})
export class AppComponent {
    title = 'components';
    userCategories = userCategories;

    constructor(@Inject('adminCategories') public adminCategories: AdminCategory[]) {}
}
