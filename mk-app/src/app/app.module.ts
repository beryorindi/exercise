import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { EmployeeModule } from "./components/content/employee/employee.module";
import { ScheduleModule } from "./components/content/schedule/schedule.module";
import { EmployeescheduleModule } from "./components/content/employeeschedule/employeeschedule.module";

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

import { MaterialModule } from '@angular/material';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service'
import { AlertService } from './services/alert/alert.service';
import { HomeComponent } from './components/content/home/home.component'
import { AuthGuard } from './helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    EmployeeModule,
    ScheduleModule,
    EmployeescheduleModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
