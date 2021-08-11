import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';
import { ProgressBarService } from '../services/progress-bar.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(
        private progressBar: ProgressBarService,
        private configService: ConfigService,
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        if (!this.configService.config) {
            return next.handle(request);
        }

        if (
            request.url.includes(this.configService.config.adminUrl) &&
            request.method === 'GET'
        ) {
            this.progressBar.show();
            return next.handle(request).pipe(
                delay(2000),
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.progressBar.hide();
                    }
                }),
                catchError((error) => {
                    this.progressBar.hide();
                    return throwError(error);
                }),
            );
        }
        return next.handle(request);
    }
}
