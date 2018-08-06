import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AddHeaderInterceptor implements HttpInterceptor {

     userToken = localStorage.getItem('userToken');

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq: HttpRequest<any> = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.userToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Authorization, Content-Type'
            }
        });

        return next.handle(authReq);

    }
}
