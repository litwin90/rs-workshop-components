import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { INTERCEPTOR_PROVIDERS } from './shared/interceptors/providers';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        UserModule,
        BrowserAnimationsModule,
        AdminModule,
        SharedModule,
    ],
    providers: [INTERCEPTOR_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule {}
