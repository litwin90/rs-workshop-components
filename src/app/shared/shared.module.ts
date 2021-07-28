import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BaseCategoryCardDirective } from './directives/base-category-card.directive';
import { BaseCategoryCardComponent } from './components/base-category-card/base-category-card.component';

@NgModule({
    declarations: [
    BaseCategoryCardDirective,
    BaseCategoryCardComponent
  ],
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, BaseCategoryCardComponent],
})
export class SharedModule {}
