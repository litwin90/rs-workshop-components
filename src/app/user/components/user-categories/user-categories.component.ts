import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WindowService } from 'src/app/shared/services/window.service';
import { UserCategory } from '../../models/user-category';

@Component({
    selector: 'app-user-categories',
    templateUrl: './user-categories.component.html',
    styleUrls: ['./user-categories.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCategoriesComponent implements OnInit {
    @Input() categories: UserCategory[] = [];

    constructor(private windowService: WindowService) {}

    ngOnInit(): void {}

    onOpenCategory(id: UserCategory['id']) {
        this.windowService.windowRef.alert(id);
    }
}
