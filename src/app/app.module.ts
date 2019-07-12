import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './components/dumb/text-button/text-button.component';
import { InputComponent } from './components/dumb/input/input.component';
import { CheckboxComponent } from './components/dumb/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { ProfilePageComponent } from './components/smart/profile-page/profile-page.component';
import { ListOfPassedTestsComponent } from './components/smart/list-of-passed-tests/list-of-passed-tests.component';
import { ListComponent } from './components/dumb/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    ProfilePageComponent,
    ListOfPassedTestsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
