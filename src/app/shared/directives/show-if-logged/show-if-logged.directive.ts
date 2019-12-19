import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({ selector: '[showIfLogged]'})
export class ShowIfLoggedDirective implements OnInit {
    constructor (
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) {}

    ngOnInit (): void {
        !this.userService.islogged() && this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
}