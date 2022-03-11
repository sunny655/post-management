import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // here we can pass token if we are having.

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        })

        return next.handle(request).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
              
                // here we can ridirect the user to specific page based on certain errors. For i.e. if 401 - then need to log out, 403 - then need redirect to main home page

            }
            return throwError(error);
        }));
    }
}
