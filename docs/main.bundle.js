webpackJsonp(["main"],{

/***/ "../../../../../src/demo/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/demo/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/div-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animated {\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    from, to {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n              transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    10%, 30%, 50%, 70%, 90% {\r\n      -webkit-transform: translate3d(-10px, 0, 0);\r\n              transform: translate3d(-10px, 0, 0);\r\n    }\r\n  \r\n    20%, 40%, 60%, 80% {\r\n      -webkit-transform: translate3d(10px, 0, 0);\r\n              transform: translate3d(10px, 0, 0);\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    from, to {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n              transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    10%, 30%, 50%, 70%, 90% {\r\n      -webkit-transform: translate3d(-10px, 0, 0);\r\n              transform: translate3d(-10px, 0, 0);\r\n    }\r\n  \r\n    20%, 40%, 60%, 80% {\r\n      -webkit-transform: translate3d(10px, 0, 0);\r\n              transform: translate3d(10px, 0, 0);\r\n    }\r\n}\r\n  \r\n.shake {\r\n    -webkit-animation-name: shake;\r\n            animation-name: shake;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/div-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-y: scroll; height:300px;\" #container>\r\n    <h2>Pass by template reference variable </h2>\r\n    <div style=\"background-color: coral; height:400px; width: 20%\"></div>\r\n    <div scrollClass style=\"background-color: aqua; height:200px; width: 20%\" inScreenClassName=\"animated shake\" [repeatAnimate]=\"true\" [containerToObserve]=\"templateElement\">Repeat: true</div>\r\n    <div scrollClass style=\"background-color: red; height:200px; width: 20%\" inScreenClassName=\"animated shake\" [repeatAnimate]=\"false\" [containerToObserve]=\"templateElement\">Repeat: false</div>\r\n</div>\r\n\r\n<div style=\"overflow-y: scroll; height:300px;\" container>\r\n        <h2>Pass by query selector </h2>\r\n        <div style=\"background-color: coral; height:400px; width: 20%\"></div>\r\n        <div scrollClass style=\"background-color: aqua; height:200px; width: 20%\" inScreenClassName=\"animated shake\" [repeatAnimate]=\"true\" [containerToObserve]=\"queryElement\">Repeat: true</div>\r\n        <div scrollClass style=\"background-color: red; height:200px; width: 20%\" inScreenClassName=\"animated shake\" [repeatAnimate]=\"false\" [containerToObserve]=\"queryElement\">Repeat: false</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/div-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DivFieldComponent = (function () {
    function DivFieldComponent(renderer, doc) {
        this.renderer = renderer;
        this.doc = doc;
    }
    DivFieldComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.templateElement = _this.container.nativeElement;
            _this.queryElement = _this.doc.querySelector('[container]');
            console.log(_this.templateElement);
            console.log(_this.queryElement);
        }, 0);
    };
    return DivFieldComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('container'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DivFieldComponent.prototype, "container", void 0);
DivFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'div-field',
        template: __webpack_require__("../../../../../src/demo/app/ScrollDemo/div-field.component.html"),
        styles: [__webpack_require__("../../../../../src/demo/app/ScrollDemo/div-field.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, Object])
], DivFieldComponent);

var _a, _b;
//# sourceMappingURL=div-field.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animated {\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n              transform: translate3d(0, -100%, 0);\r\n    }\r\n  \r\n    to {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n              transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n    from {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n              transform: translate3d(0, -100%, 0);\r\n    }\r\n  \r\n    to {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n              transform: none;\r\n    }\r\n}\r\n  \r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n            animation-name: fadeInDown;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/window.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: coral; height:1000px; width: 20%\"></div>\r\n<div scrollClass style=\"background-color: aqua; height:400px; width: 20%\" className=\"animated fadeInDown\" [repeatAnimate]=\"true\">Repeat: true</div>\r\n<div scrollClass style=\"background-color: red; height:400px; width: 20%\" className=\"animated fadeInDown\" [repeatAnimate]=\"false\">Repeat: false</div>"

/***/ }),

/***/ "../../../../../src/demo/app/ScrollDemo/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowComponent = (function () {
    function WindowComponent() {
    }
    WindowComponent.prototype.ngOnInit = function () { };
    return WindowComponent;
}());
WindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'window-scroll',
        template: __webpack_require__("../../../../../src/demo/app/ScrollDemo/window.component.html"),
        styles: [__webpack_require__("../../../../../src/demo/app/ScrollDemo/window.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WindowComponent);

//# sourceMappingURL=window.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routedComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScrollDemo_window_component__ = __webpack_require__("../../../../../src/demo/app/ScrollDemo/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ScrollDemo_div_field_component__ = __webpack_require__("../../../../../src/demo/app/ScrollDemo/div-field.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'window', component: __WEBPACK_IMPORTED_MODULE_2__ScrollDemo_window_component__["a" /* WindowComponent */] },
    { path: 'div-field', component: __WEBPACK_IMPORTED_MODULE_3__ScrollDemo_div_field_component__["a" /* DivFieldComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], AppRoutingModule);

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__ScrollDemo_window_component__["a" /* WindowComponent */], __WEBPACK_IMPORTED_MODULE_3__ScrollDemo_div_field_component__["a" /* DivFieldComponent */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/demo/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}} demo!\n  </h1>\n</div>\n<ul>\n  <li>\n    <h2><a routerLink=\"/window\" routerLinkActive=\"active\">Window</a></h2>\n  </li>\n  <li>\n    <h2><a routerLink=\"/div-field\" routerLinkActive=\"active\">div field</a></h2>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/demo/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/demo/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/demo/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/demo/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_ScrollClass_scroll_class_module__ = __webpack_require__("../../../../../src/modules/ScrollClass/scroll-class.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/demo/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/demo/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ScrollDemo_div_field_component__ = __webpack_require__("../../../../../src/demo/app/ScrollDemo/div-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ScrollDemo_window_component__ = __webpack_require__("../../../../../src/demo/app/ScrollDemo/window.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ScrollDemo_window_component__["a" /* WindowComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ScrollDemo_div_field_component__["a" /* DivFieldComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__modules_ScrollClass_scroll_class_module__["a" /* ScrollClassModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/demo/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/demo/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/demo/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/demo/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modules/ScrollClass/scroll-class.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollClassDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ScrollClassDirective = (function () {
    function ScrollClassDirective(doc, element, renderer) {
        this.doc = doc;
        this.element = element;
        this.renderer = renderer;
        this.inScreenClassName = '';
        this.outScreenClassName = '';
        this.repeatAnimate = true;
        this.isBrowser = typeof document === 'object' && !!document;
        this.containerScrollTop = 0;
        this.containerHeight = 0;
        this.containerPosition = 0;
        this.hasAnimated = false;
    }
    ScrollClassDirective.prototype.ngOnChanges = function (changes) {
        if (changes['containerToObserve']) {
            this.ngAfterViewInit();
        }
    };
    ScrollClassDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        if (this.containerToObserve) {
            this.renderer.listen(this.containerToObserve, 'scroll', function () {
                console.log('element scroll');
                if (!_this.hasAnimated || _this.repeatAnimate) {
                    _this.containerScrollTop = _this.containerToObserve.scrollTop;
                    _this.containerHeight = _this.containerToObserve.clientHeight;
                    _this.containerPosition = _this.containerToObserve.offsetTop;
                    if (_this.isScrolledIntoView(_this.element)) {
                        _this.bindingClass = _this.inScreenClassName;
                        _this.hasAnimated = true;
                    }
                    else {
                        _this.bindingClass = _this.outScreenClassName;
                    }
                }
            });
        }
        else {
            this.renderer.listen('window', 'scroll', function () {
                console.log('no');
                if (!_this.hasAnimated || _this.repeatAnimate) {
                    _this.containerScrollTop = window.scrollY;
                    _this.containerHeight = window.innerHeight;
                    if (_this.isScrolledIntoView(_this.element)) {
                        _this.bindingClass = _this.inScreenClassName;
                        _this.hasAnimated = true;
                    }
                    else {
                        _this.bindingClass = _this.outScreenClassName;
                    }
                }
            });
        }
    };
    ScrollClassDirective.prototype.isScrolledIntoView = function (element) {
        var top = this.containerScrollTop;
        var bottom = top + this.containerHeight;
        var eleTop = element.nativeElement.offsetTop - this.containerPosition;
        var eleBottom = eleTop + element.nativeElement.clientHeight;
        console.log("top: " + top + ", bottom: " + bottom + ", eleTop: " + eleTop + ", eleBot: " + eleBottom);
        return ((eleBottom <= bottom + 1) && (eleTop >= top));
    };
    return ScrollClassDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ScrollClassDirective.prototype, "inScreenClassName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ScrollClassDirective.prototype, "outScreenClassName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ScrollClassDirective.prototype, "containerToObserve", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ScrollClassDirective.prototype, "repeatAnimate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
    __metadata("design:type", String)
], ScrollClassDirective.prototype, "bindingClass", void 0);
ScrollClassDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({ selector: '[scrollClass]' }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
], ScrollClassDirective);

var _a, _b;
//# sourceMappingURL=scroll-class.directive.js.map

/***/ }),

/***/ "../../../../../src/modules/ScrollClass/scroll-class.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollClassModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_class_directive__ = __webpack_require__("../../../../../src/modules/ScrollClass/scroll-class.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScrollClassModule = (function () {
    function ScrollClassModule() {
    }
    return ScrollClassModule;
}());
ScrollClassModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__scroll_class_directive__["a" /* ScrollClassDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__scroll_class_directive__["a" /* ScrollClassDirective */]],
        providers: [],
    })
], ScrollClassModule);

//# sourceMappingURL=scroll-class.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map