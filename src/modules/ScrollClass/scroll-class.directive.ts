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
import { ScrollService } from './scroll.service';

@Directive({ selector: '[scrollClass]' })
export class ScrollClassDirective implements AfterViewInit, OnChanges {
    @Input() inScreenClassName = '';
    @Input() outScreenClassName = '';
    @Input() containerToObserve: string;
    @Input() repeatAnimate = true;
    @Output() scrollIn = new EventEmitter();
    @HostBinding('class') bindingClass: string;
    containerScrollTop = 0;
    containerHeight = 0;
    containerPosition = 0;
    hasAnimated = false;

    constructor(
        @Inject(DOCUMENT) private readonly doc: any,
        private readonly element: ElementRef,
        private readonly renderer: Renderer2,
        private readonly scrollService: ScrollService
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.ngAfterViewInit();
    }

    ngAfterViewInit(): void {
        if (!this.scrollService.isBrowser) {
            return;
        }

        const container = this.scrollService.getContainer(this.containerToObserve);

        if (container) {
            this.scrollService.observeScroll(this.containerToObserve).subscribe(
                (e: any) => {
                    if (!this.hasAnimated || this.repeatAnimate) {
                        this.containerScrollTop = e.scrollTop;
                        this.containerHeight = e.clientHeight;
                        this.containerPosition = e.offsetTop;
                        if (this.isScrolledIntoView(this.element)) {
                            this.bindingClass = this.handleClassName(this.bindingClass, this.inScreenClassName, this.outScreenClassName);
                            this.hasAnimated = true;
                            this.scrollIn.emit(this.element);
                        } else {
                            this.bindingClass = this.handleClassName(this.bindingClass, this.outScreenClassName, this.inScreenClassName);
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
                            this.bindingClass = this.handleClassName(this.bindingClass, this.inScreenClassName, this.outScreenClassName);
                            this.hasAnimated = true;
                            this.scrollIn.emit(this.element);
                        } else {
                            this.bindingClass = this.handleClassName(this.bindingClass, this.outScreenClassName, this.inScreenClassName);
                        }
                    }
                });
        }
    }

    handleClassName(className: string, classToAppend: string, classToRemove: string) {
        let result = className ? className : classToAppend;

        if (result.indexOf(classToAppend) >= 0) {
            result = className.replace(classToRemove, '').trim();
        } else {
            result = className.replace(classToRemove, classToAppend);

            if (result === className) { result += ' ' + classToAppend; }
        }

        return result;
    }

    isScrolledIntoView(element: ElementRef): boolean {
        const top = this.containerScrollTop;
        const bottom = top + this.containerHeight;

        const eleTop = element.nativeElement.offsetTop - this.containerPosition;
        const eleBottom = eleTop + element.nativeElement.clientHeight;

        return ((eleBottom <= bottom + 1) && (eleTop >= top));
    }
}
