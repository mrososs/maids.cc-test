/**
 * InterceptorService class that implements the HttpInterceptor interface.
 * This service is responsible for intercepting HTTP requests and handling loader service.
 */
import { LoaderService } from './loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(public LoaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.LoaderService.isLoading.next(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.LoaderService.isLoading.next(false)));
  }
}
