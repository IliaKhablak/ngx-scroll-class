[![npm version](https://badge.fury.io/js/ngx-scroll-class.svg)](https://www.npmjs.com/package/ngx-scroll-class)

# NgxScrollClass

The scroll spy on html elements for Angular 4.

See live demo on: https://laxersnine.github.io/ngx-scroll-class/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Using

*   Install the npm module:

        npm i ngx-scroll-class --save

*   Import ScrollClassModule on the module that you want to use the directive.

        import { ScrollClassModule } from 'ngx-scroll-class';

        @ngModule({
            imports: [ScrollClassModule]
        })

*   Use `scrollClass` directive to spy on any element in `window`.

        <img name="elementToSpy" src="" alt="" scrollClass inScreenClassName="animated shake"/>

*   Or use `scrollContainer` directive so that you can spy on elements in a scrollable container like `<div>`

        <div scrollContainer="container">
            <img name="elementToSpy" src="" alt="" scrollClass inScreenClassName="animated shake" containerName="container"/>
        </div>

Then the `animated shake` will be appended to img class when the image appears on the screen by scroll.

## API

### ScrollContainerDirective

#### Input

*   `scrollContainer`: The container name which to make ScrollClassDirective understand who it belongs to.

### ScrollClassDirective

#### Input

*   `inScreenClassName`: Classes to be added when the element is scrolled into the screen. The default value is empty.
*   `outScreenClassName`: Classes to be added when the element is scrolled out of the screen. The default value is empty.
*   `containerName`: The container to observe. This is for the cases that the element is in a scrollable container like `div`, instead of `window`.
    The default value would be dom `window` object.
*   `repeatAnimate`: Append class to the element each time to scroll into(out) or just once.

#### Output

*   `scrollIn`: Be fired when the element is scrolled to the view. The directive emits the element itself.

# Example

Download the source code in this repo, run `ng serve` and navigate to `http://localhost:4200/`. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.