import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { BaseWindow } from '../models/base-window';

export const windowFactory = (platformId: Object): BaseWindow => {
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
};
