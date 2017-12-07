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
    EventEmitter,
    OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({ selector: '[scrollClass]' })
export class ScrollClassDirective implements AfterViewInit, OnChanges, OnInit {
    @Input() inScreenClassName = '';
    @Input() outScreenClassName = '';
    @Input() containerToObserve: any;
    @Input() repeatAnimate = true;
    @Output() scrollIn = new EventEmitter();
    isBrowser: boolean = typeof document === 'object' && !!document;
    containerScrollTop = 0;
    containerHeight = 0;
    containerPosition = 0;
    hasAnimated = false;
    originalClass: string;
    isElementInView: boolean;

    constructor(
        @Inject(DOCUMENT) private readonly doc: any,
        private readonly element: ElementRef,
        private readonly renderer: Renderer2
    ) { }

    ngOnInit() {
        if (this.isBrowser) {
            this.originalClass = this.element.nativeElement.className;
        }
    }

    @HostBinding('class') get bindingClass(){
        let cls = this.originalClass;
        if (this.repeatAnimate || this.hasAnimated) {
            return cls = cls + ' ' + (this.isElementInView ? this.inScreenClassName : this.outScreenClassName);
        }
        return cls.trim();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.ngAfterViewInit();
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
                            this.isElementInView = true;
                            this.hasAnimated = true;
                            this.scrollIn.emit(this.element);
                        } else {
                            this.isElementInView = false;
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
                            this.isElementInView = true;
                            this.hasAnimated = true;
                            this.scrollIn.emit(this.element);
                        } else {
                            this.isElementInView = false;
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
