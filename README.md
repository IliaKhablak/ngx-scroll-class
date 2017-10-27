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
*   `containerToObserve`: The container to observe. This is for the cases that the element is in a scrollable container like div, instead of window.
    The default value would be dom window object.
*   `repeatAnimate`: Append class to the element each time to scroll into(out) or just once.

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
