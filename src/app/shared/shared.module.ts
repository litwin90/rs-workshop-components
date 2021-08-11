import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BaseCategoryCardComponent } from './components/base-category-card/base-category-card.component';
import { BaseCategoryCardDirective } from './directives/base-category-card.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [BaseCategoryCardDirective, BaseCategoryCardComponent],
    imports: [CommonModule, MaterialModule, HttpClientModule],
    exports: [CommonModule, MaterialModule, BaseCategoryCardComponent, HttpClientModule],
})
export class SharedModule {}
