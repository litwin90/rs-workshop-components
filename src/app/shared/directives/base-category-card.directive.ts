import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BaseCategory } from '../models/base-category';

@Directive({
    selector: '[appBaseCategoryCard]',
})
export class BaseCategoryCardDirective<T extends BaseCategory> {
    @Input() category?: T;

    @Output() openCategory = new EventEmitter<T['id']>();

    constructor() {}
}
