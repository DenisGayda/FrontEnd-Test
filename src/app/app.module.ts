import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextButtonComponent } from './components/dumb/text-button/text-button.component';
import { InputComponent } from './components/dumb/input/input.component';
import { CheckboxComponent } from './components/dumb/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { TestPickerComponent } from './components/smart/test-picker/test-picker.component';
import { ListComponent } from './components/dumb/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextButtonComponent,
    InputComponent,
    CheckboxComponent,
    TestPickerComponent,
    ListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
