import { Component } from '@angular/core';
import { adminCategories, userCategories } from './app.constants';
import { ProgressBarService } from './shared/services/progress-bar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'components';
    userCategories = userCategories;
    adminCategories = adminCategories;

    constructor(public progressBar: ProgressBarService) {}
}
