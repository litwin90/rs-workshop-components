import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminCategoryCardComponent } from './components/admin-category-card/admin-category-card.component';

@NgModule({
    declarations: [AdminCategoriesComponent, AdminCategoryCardComponent],
    imports: [SharedModule],
    exports: [AdminCategoriesComponent],
})
export class AdminModule {}
