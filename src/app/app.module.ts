import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './components/dumb/text-button/text-button.component';
import { InputComponent } from './components/dumb/input/input.component';
import { CheckboxComponent } from './components/dumb/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './components/dumb/list/list.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    ListComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
