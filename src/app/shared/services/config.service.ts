import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Config } from '../models/config';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    public config: Config | undefined;
    private config$: Observable<Config>;

    constructor(private httpClient: HttpClient) {
        this.config$ = this.httpClient.get<Config>('./assets/config.json').pipe(
            take(1),
            tap((config) => (this.config = config)),
        );
    }

    getConfig() {
        return this.config ? of(this.config) : this.config$;
    }
}
