import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor (
        private formBuider: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlataformDetectorService,
        private activetedRoute: ActivatedRoute
        ) {}

    ngOnInit () {
        this.activetedRoute
            .queryParams.subscribe(params =>
                    this.fromUrl = params.fromUrl
                );
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.recarrega();
    }

    login () {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.fromUrl
                        ? this.router.navigateByUrl(this.fromUrl)
                        : this.router.navigate(['user/', userName])
                ,
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.recarrega();
                }
            );
    }

    private recarrega (): void {
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }
}
