import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as tests from './tests.json';

const urls = [
    {
        url: 'https://jsonplaceholder.typicode.com/tests',
        json: tests
    }
];

@Injectable()
export class HttpMockRequestInterceptor<T> implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        for (const element of urls) {
            if (request.url === element.url) {
                console.log('Loaded from json : ' + request.url);
                return of(new HttpResponse({status: 200, body: ((element.json) as any).default}));
            }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    }
}
