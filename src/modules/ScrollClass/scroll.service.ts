import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { ScrollContainers } from './scroll-container.model';


@Injectable()
export class ScrollService {

    private containers: ScrollContainers;

    get isBrowser() { return typeof document === 'object' && !!document; }

    constructor() { }

    pushContainer(name: string, element: any) {
        this.containers[name] = element;
    }

    getContainer(name: string) {
        return this.containers[name];
    }

    observeScroll(containerName: string): Observable<any> {
        if (!!this.containers[containerName]) {
            return Observable.fromEvent(this.containers[containerName], 'scroll');
        }
        return null;
    }
}
