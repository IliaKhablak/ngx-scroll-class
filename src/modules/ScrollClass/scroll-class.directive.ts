import {
    Directive,
    Input,
    Output,
    Inject,
    HostBinding,
    AfterViewInit,
    ElementRef,
    Renderer2,
    SimpleChanges,
    OnChanges,
    EventEmitter
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[scrollClass]' })
export class ScrollClassDirective implements AfterViewInit, OnChanges {
    @Input() inScreenClassName = '';
    @Input() outScreenClassName = '';
    @Input() containerToObserve: any;
    @Input() repeatAnimate = true;
    @Output() scrollIn = new EventEmitter();
    @HostBinding('class') bindingClass: string;
    isBrowser: boolean = typeof document === 'object' && !!document;
    containerScrollTop = 0;
    containerHeight = 0;
    containerPosition = 0;
    hasAnimated = false;

    constructor(
        @Inject(DOCUMENT) private readonly doc: any,
        private readonly element: ElementRef,
        private readonly renderer: Renderer2
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['containerToObserve']) {
            this.ngAfterViewInit();
        }
    }

    ngAfterViewInit(): void {
        if (!this.isBrowser) {
            return;
        }

        if (this.containerToObserve) {
            this.renderer.listen(this.containerToObserve,
                'scroll',
                () => {
                    if (!this.hasAnimated || this.repeatAnimate) {
                        this.containerScrollTop = this.containerToObserve.scrollTop;
                        this.containerHeight = this.containerToObserve.clientHeight;
                        this.containerPosition = this.containerToObserve.offsetTop;
                        if (this.isScrolledIntoView(this.element)) {
                            this.bindingClass = this.inScreenClassName;
                            this.hasAnimated = true;
                            this.scrollIn.emit(this.element);
                        } else {
                            this.bindingClass = this.outScreenClassName;
                        }
                    }
                });
        } else {
            this.renderer.listen('window',
                'scroll',
                () => {
                    if (!this.hasAnimated || this.repeatAnimate) {
                        this.containerScrollTop = window.scrollY;
                        this.containerHeight = window.innerHeight;
                        if (this.isScrolledIntoView(this.element)) {
                            this.bindingClass = this.inScreenClassName;
                            this.hasAnimated = true;
                        } else {
                            this.bindingClass = this.outScreenClassName;
                        }
                    }
                });
        }
    }

    isScrolledIntoView(element: ElementRef): boolean {
        const top = this.containerScrollTop;
        const bottom = top + this.containerHeight;

        const eleTop = element.nativeElement.offsetTop - this.containerPosition;
        const eleBottom = eleTop + element.nativeElement.clientHeight;

        return ((eleBottom <= bottom + 1) && (eleTop >= top));
    }
}
