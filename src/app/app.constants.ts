import { AdminCategory } from './admin/models/admin-category';
import { UserCategory } from './user/models/user-category';

export const userCategory: UserCategory = {
    id: '11111',
    name: 'Example category name',
    shortDescription: `Short description : faucibus euismod ullamcorper. Fusce consequat suscipit nisl, non malesuada
    sem convallis et. Vivamus quis condim Morbi convallis auctor luctus.`,
    description: `Duis ligula
    tellus, imperdiet eu molestie eu, lacinia eget tortor. Ut interdum aliquam accumsan.
    Maecenas faucibus euismod ullamcorper. Fusce consequat suscipit nisl, non malesuada
    sem convallis et. Vivamus quis condimentum massa. Proin sed pulvinar nisl. Duis ac
    suscipit mauris.`,
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    imageAlt: 'Photo of a Shiba Inu',
};

export const userCategories: UserCategory[] = [
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
    userCategory,
];

export const adminCategories: AdminCategory[] = userCategories.map((category) => {
    return {
        ...category,
        isActive: true,
    };
});
