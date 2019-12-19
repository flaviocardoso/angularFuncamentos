import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmedieateClickDirective implements OnInit {
    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlataformDetectorService
    ) {}

    ngOnInit(): void {
        // tslint:disable-next-line: no-unused-expression
        this.platFormDetector.isPlatformBrowser &&
        this.element.nativeElement.click();
    }
}
