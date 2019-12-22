import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
    constructor (private loadService: LoadingService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(req)
            .pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.loadService.stop();
                } else {
                    this.loadService.start();
                }
            }));
    }

}