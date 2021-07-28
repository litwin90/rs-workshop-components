import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AdminCategory } from '../../models/admin-category';

@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
    styleUrls: ['./admin-categories.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCategoriesComponent implements OnInit {
    @Input() categories: AdminCategory[] = [];

    constructor() {}

    ngOnInit(): void {}

    onOpenCategory(id: AdminCategory['id']) {
        console.log(`Open: ${id}`);
    }

    onEditCategory(id: AdminCategory['id']) {
        console.log(`Edit: ${id}`);
    }
    onDeleteCategory(id: AdminCategory['id']) {
        console.log(`Delete: ${id}`);
    }
    onActivateCategory(id: AdminCategory['id']) {
        console.log(`Activate: ${id}`);
    }
    onDeactivateCategory(id: AdminCategory['id']) {
        console.log(`Deactivate: ${id}`);
    }
}
