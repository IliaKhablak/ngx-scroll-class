import { NgModule } from '@angular/core';
import { ScrollClassDirective } from './scroll-class.directive';
import { ScrollContainerDirective } from './scroll-container.directive';
import { ScrollService } from './scroll.service';

@NgModule({
    imports: [],
    exports: [ScrollClassDirective, ScrollContainerDirective],
    declarations: [ScrollClassDirective, ScrollContainerDirective],
    providers: [ScrollService],
})
export class ScrollClassModule { }
