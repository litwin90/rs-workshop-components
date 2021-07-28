import { Component } from '@angular/core';
import { BaseCategoryCardDirective } from '../../directives/base-category-card.directive';
import { BaseCategory } from '../../models/base-category';

@Component({
    selector: 'app-base-category-card',
    templateUrl: './base-category-card.component.html',
    styleUrls: ['./base-category-card.component.scss'],
})
export class BaseCategoryCardComponent extends BaseCategoryCardDirective<BaseCategory> {}
