import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { BaseCategoryCardDirective } from 'src/app/shared/directives/base-category-card.directive';
import { AdminCategory } from '../../models/admin-category';

@Component({
    selector: 'app-admin-category-card',
    templateUrl: './admin-category-card.component.html',
    styleUrls: ['./admin-category-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCategoryCardComponent
    extends BaseCategoryCardDirective<AdminCategory>
    implements OnInit
{
    @Output() editCategory = new EventEmitter<AdminCategory['id']>();
    @Output() deleteCategory = new EventEmitter<AdminCategory['id']>();
    @Output() activateCategory = new EventEmitter<AdminCategory['id']>();
    @Output() deactivateCategory = new EventEmitter<AdminCategory['id']>();

    ngOnInit(): void {}
}
