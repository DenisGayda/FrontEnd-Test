import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './components/dumb/text-button/text-button.component';
import { InputComponent } from './components/dumb/input/input.component';
import { CheckboxComponent } from './components/dumb/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { TestsListComponent } from './components/smart/tests-list/tests-list.component';
import { TestItemComponent } from './components/smart/test-item/test-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    TestsListComponent,
    TestItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
