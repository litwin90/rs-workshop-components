import { Component } from '@angular/core';
import { AdminCategory } from '../../models/admin-category';
import { CategoriesStateService } from '../../services/categories-state.service';

@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
    styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent {
    constructor(public categoriesState: CategoriesStateService) {
        this.categoriesState.initData();
    }

    onOpenCategory(id: AdminCategory['id']) {
        console.log(`Open: ${id}`);
    }

    onEditCategory(id: AdminCategory['id']) {
        console.log(`Edit: ${id}`);
    }
    onDeleteCategory(id: AdminCategory['id']) {
        console.log(`Delete: ${id}`);
        this.categoriesState.delete(id);
    }
    onActivateCategory(id: AdminCategory['id']) {
        console.log(`Activate: ${id}`);
    }
    onDeactivateCategory(id: AdminCategory['id']) {
        console.log(`Deactivate: ${id}`);
    }
}
