import { Directive, Input, ElementRef, OnInit } from '@angular/core';

import { ScrollService } from './scroll.service';

@Directive({ selector: '[scrollContainer]' })
export class ScrollContainerDirective implements OnInit {
    @Input() scrollContainer;

    constructor(
        private readonly element: ElementRef,
        private readonly scrollService: ScrollService
    ) { }

    ngOnInit(): void {
        if (!this.scrollContainer) { throw new Error('Attribute \'scrollContainer\' is required'); }
        if (this.scrollService.isBrowser && !this.scrollService.getContainer(this.scrollContainer)) {
            this.scrollService.pushContainer(this.scrollContainer, this.element.nativeElement);
        }
    }
}
