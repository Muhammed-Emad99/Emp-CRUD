import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './Modules/employee.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { EditDialogComponent } from './Components/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './Components/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './Components/add-dialog/add-dialog.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './Interceptor/network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EmployeeModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
