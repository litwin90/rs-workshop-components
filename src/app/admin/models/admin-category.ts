import { BaseCategory } from 'src/app/shared/models/base-category';

export interface AdminCategory extends BaseCategory {
    isActive: boolean;
}
