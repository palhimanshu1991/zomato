import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from '../services/add-header.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true }
  ]
})
export class UserModule { }
