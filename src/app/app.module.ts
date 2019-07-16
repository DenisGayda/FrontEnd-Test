import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './components/dumb/text-button/text-button.component';
import { InputComponent } from './components/dumb/input/input.component';
import { CheckboxComponent } from './components/dumb/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './components/dumb/list/list.component';
import { TestPassingComponent } from './components/smart/test-passing/test-passing.component';
import { TestAnswersComponent } from './components/smart/test-answers/test-answers.component';
import { TestPassingPageComponent } from './pages/test-passing-page/test-passing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    ListComponent,
    TestPassingComponent,
    TestAnswersComponent,
    TestPassingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
