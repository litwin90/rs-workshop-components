import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatSnackBarModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatSnackBarModule,
    ],
})
export class MaterialModule {}
