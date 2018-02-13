import { Component, Injectable } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ScrollClassDirective } from './scroll-class.directive';
import { ScrollService } from './scroll.service';
import { ScrollContainers } from './scroll-container.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ViewChild } from '@angular/core/src/metadata/di';


describe('ScrollClassDirective', () => {
    let fixture: ComponentFixture<ScrollClassDirectiveTestComponent>;
    let scrollContainer: HTMLElement;
    let scrollService: ScrollService;
    const containerName = 'container';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ScrollClassDirective,
                ScrollClassDirectiveTestComponent
            ],
            providers: [
                { provide: ScrollService, useClass: MockedScrollService }
            ]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(ScrollClassDirectiveTestComponent);
        scrollContainer = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    }));

    beforeEach(() => {
        scrollService = TestBed.get(ScrollService);
    });

    it('Assert scrollIn is fired when the element is in the container view', () => {
        scrollService.pushContainer(containerName, scrollContainer);
        const directive = fixture.componentInstance.scrollClassDirective;
        let isScrollIn = false;

        directive.ngAfterViewInit();
        directive.scrollIn.subscribe(() => isScrollIn = true);

        scrollContainer.scroll();
        fixture.detectChanges();

        expect(isScrollIn).toBeTruthy();
    });

    //   it('should create the app', async(() => {
    //     const fixture = TestBed.createComponent(ScrollClassDirectiveTestComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    //   }));
    //   it(`should have as title 'app'`, async(() => {
    //     const fixture = TestBed.createComponent(ScrollClassDirectiveTestComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('app');
    //   }));
    //   it('should render title in a h1 tag', async(() => {
    //     const fixture = TestBed.createComponent(ScrollClassDirectiveTestComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    //   }));
});

class MockedScrollService {
    private containers: ScrollContainers = new ScrollContainers();

    isBrowser = true;

    pushContainer(name: string, element: any) {
        this.containers[name] = element;
    }

    getContainer(name: string) {
        return this.containers[name];
    }

    observeScroll(containerName: string): Observable<any> {
        if (!!this.containers[containerName]) {
            return Observable.of(this.containers[containerName]);
        }
        return null;
    }
}

@Component({
    template: `
    <div>
        <div class="default"
             scrollClass
             inScreenClassName="in"
             outScreenClassName="out"
             [repeatAnimate]="true"
             containerName="container"></div>
    </div>
    `
})
class ScrollClassDirectiveTestComponent {
    @ViewChild(ScrollClassDirective) scrollClassDirective: ScrollClassDirective;
}

