import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BaseCategoryCardComponent } from './components/base-category-card/base-category-card.component';

@NgModule({
    declarations: [
    BaseCategoryCardComponent
  ],
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule, BaseCategoryCardComponent],
})
export class SharedModule {}
