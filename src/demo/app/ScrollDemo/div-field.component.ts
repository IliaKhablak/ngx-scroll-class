import { Component, AfterViewInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'div-field',
    templateUrl: './div-field.component.html',
    styleUrls: ['./div-field.component.css']
})

export class DivFieldComponent implements AfterViewInit {
    @ViewChild('container') container: ElementRef;
    templateElement: any;
    queryElement: any;

    constructor(
        private readonly renderer: Renderer2,
        @Inject(DOCUMENT) private readonly doc: any
    ) { }

    ngAfterViewInit(): void {
            setTimeout(() => {
                this.templateElement = this.container.nativeElement;
                this.queryElement = this.doc.querySelector('[container]');
            }, 0);
    }
}
