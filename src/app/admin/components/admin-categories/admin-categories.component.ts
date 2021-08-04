import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { BaseWindow } from 'src/app/shared/models/base-window';
import { WINDOW_TOKEN } from 'src/app/shared/providers/window-token';
import { AdminCategory } from '../../models/admin-category';

@Component({
    selector: 'app-admin-categories',
    templateUrl: './admin-categories.component.html',
    styleUrls: ['./admin-categories.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // {
        //     provide: WINDOW_TOKEN,
        //     useFactory: windowFactory,
        //     deps: [PLATFORM_ID],
        // },
    ],
})
export class AdminCategoriesComponent {
    @Input() categories: AdminCategory[] = [];

    constructor(@Inject(WINDOW_TOKEN) private windowRef: BaseWindow) {}

    onOpenCategory(id: AdminCategory['id']) {
        this.windowRef.alert(`Open: ${id}`);
    }

    onEditCategory(id: AdminCategory['id']) {
        this.windowRef.alert(`Edit: ${id}`);
    }
    onDeleteCategory(id: AdminCategory['id']) {
        this.windowRef.alert(`Delete: ${id}`);
    }
    onActivateCategory(id: AdminCategory['id']) {
        this.windowRef.alert(`Activate: ${id}`);
    }
    onDeactivateCategory(id: AdminCategory['id']) {
        this.windowRef.alert(`Deactivate: ${id}`);
    }
}
