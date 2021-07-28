import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseCategoryCardDirective } from 'src/app/shared/directives/base-category-card.directive';
import { UserCategory } from '../../models/user-category';

@Component({
    selector: 'app-user-category-card',
    templateUrl: './user-category-card.component.html',
    styleUrls: ['./user-category-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCategoryCardComponent
    extends BaseCategoryCardDirective<UserCategory>
    implements OnInit
{
    ngOnInit(): void {}
}
