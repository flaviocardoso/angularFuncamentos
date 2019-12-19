import { NgModule } from '@angular/core';
import { ImmedieateClickDirective } from './immediate-click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ImmedieateClickDirective],
    exports: [ImmedieateClickDirective],
    imports: [CommonModule]
})
export class ImmediateClickModule {}
