import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { UserCategoryCardComponent } from './components/user-category-card/user-category-card.component';

@NgModule({
    declarations: [UserCategoryCardComponent, UserCategoriesComponent],
    imports: [SharedModule],
    exports: [UserCategoriesComponent],
})
export class UserModule {}
