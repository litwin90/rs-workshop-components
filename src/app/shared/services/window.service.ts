import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BaseWindow } from '../models/base-window';

@Injectable()
export class WindowService {
    public windowRef: BaseWindow;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.windowRef = this.getWindowRef();
    }

    private getWindowRef(): BaseWindow {
        if (isPlatformBrowser(this.platformId)) {
            return window;
        }

        if (isPlatformServer(this.platformId)) {
            return this.getServerWindow();
        }

        return this.getDefaultWindow();
    }

    private getServerWindow(): BaseWindow {
        const serverWindow: BaseWindow = {
            alert: (message: string) => {
                console.log(message);
            },
        };
        return serverWindow;
    }

    private getDefaultWindow(): BaseWindow {
        const serverWindow: BaseWindow = {
            alert: (message: string) => {},
        };
        return serverWindow;
    }
}
