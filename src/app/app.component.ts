import { Component } from '@angular/core';
import { adminCategories, userCategories } from './app.constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'components';
    userCategories = userCategories;
    adminCategories = adminCategories;
}
