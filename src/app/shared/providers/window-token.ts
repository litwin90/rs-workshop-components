import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { BaseWindow } from '../models/base-window';

export const WINDOW_TOKEN = new InjectionToken<BaseWindow>('window', {
    providedIn: 'root',
    factory: (): BaseWindow => {
        const platformId = inject(PLATFORM_ID);
        if (isPlatformBrowser(platformId)) {
            return window;
        }

        if (isPlatformServer(platformId)) {
            const serverWindow: BaseWindow = {
                alert: (message: string) => {
                    console.log(message);
                },
            };
            return serverWindow;
        }

        const serverWindow: BaseWindow = {
            alert: (message: string) => {},
        };
        return serverWindow;
    },
});
