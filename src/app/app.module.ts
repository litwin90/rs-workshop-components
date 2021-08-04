import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, UserModule, BrowserAnimationsModule, AdminModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
