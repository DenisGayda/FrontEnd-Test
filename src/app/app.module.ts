import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TextButtonComponent} from './components/dumb/text-button/text-button.component';
import {InputComponent} from './components/dumb/input/input.component';
import {CheckboxComponent} from './components/dumb/checkbox/checkbox.component';
import {ListComponent} from './components/dumb/list/list.component';
import {HttpMockRequestInterceptor} from './interceptors/HttpMockRequestInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './components/pages/registration-page/registration-page.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { TestsPageComponent } from './components/pages/tests-page/tests-page.component';
import { TestPassingPageComponent } from './components/pages/test-passing-page/test-passing-page.component';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    ListComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    UserPageComponent,
    TestsPageComponent,
    TestPassingPageComponent,
    AdminPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
