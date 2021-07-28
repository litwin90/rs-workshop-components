import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, UserModule, BrowserAnimationsModule, AdminModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
