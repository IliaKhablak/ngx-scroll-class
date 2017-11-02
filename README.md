[![npm version](https://badge.fury.io/js/ngx-scroll-class.svg)](https://www.npmjs.com/package/ngx-scroll-class)

# NgxScrollClass

The scroll spy on html elements for Angular 4.

See live demo on: https://laxersnine.github.io/ngx-scroll-class/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Using

*   Install the npm module:

        npm install ngx-scroll-class --save

*   Import ScrollClassModule on the module that you want to use the directive.

        import { ScrollClassModule } from 'ngx-scroll-class';

        @ngModule({
            imports: [ScrollClassModule]
        })

*   Use directive to spy on any element.

        <img name="elementToSpy" src="" alt="" scrollClass inScreenClassName="animated shake"/>

Then the `animated shake` will be appended to img class when the image appears on the screen by scroll.

## API

*   `inScreenClassName`: Classes to be added when the element is scrolled into the screen. The default value is empty.
*   `outScreenClassName`: Classes to be added when the element is scrolled out of the screen. The default value is empty.
*   `containerToObserve`: The container to observe. This is for the cases that the element is in a scrollable container like `div`, instead of `window`.
    The default value would be dom window object.
*   `repeatAnimate`: Append class to the element each time to scroll into(out) or just once.

#### `containerToObserve`

1.  Use template reference variable:

    *   html:

            <div style="overflow-y: scroll; height:300px;" #scrollableContainer>
                <div style="height:300px">other element</div>
                <div scrollClass inScreenClassName="class1 class2 class3" [containerToObserve]="templateElement">element to spy</div>
                <div style="height:300px">other element</div>
            </div>
    *   component:

            import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
            @component({......})
            export class SomeComponent implements AfterViewInit {
                @ViewChild('scrollableContainer') container: ElementRef;
                templateElement: any;

                ngAfterViewInit(): void {
                    setTimeout(() => {
                    this.templateElement = this.container.nativeElement;
                    }, 0);
                }
            }

2.  Use `querySelector`

    *   html:

            <div style="overflow-y: scroll; height:300px;" scrollableContainer>
                <div style="height:300px">other element</div>
                <div scrollClass inScreenClassName="class1 class2 class3" [containerToObserve]="templateElement">element to spy</div>
                <div style="height:300px">other element</div>
            </div>

    *   component:

            import { Component, AfterViewInit, Inject, Renderer2 } from '@angular/core';
            import { DOCUMENT } from '@angular/platform-browser';

            @Component({......})

            export class SomeComponent implements AfterViewInit {
                templateElement: any;

                constructor(
                    private readonly renderer: Renderer2,
                    @Inject(DOCUMENT) private readonly doc: any
                ) { }

                ngAfterViewInit(): void {
                        setTimeout(() => {
                            this.templateElement = this.doc.querySelector('[scrollableContainer]');
                        }, 0);
                }
            }


# Example

Download the source code in this repo, run `ng serve` and navigate to `http://localhost:4200/`. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
