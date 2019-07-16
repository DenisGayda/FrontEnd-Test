import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd-Test';
  tests = [{ title: 'js' }, { title: 'html' }, { title: 'css' }];

  public testBegin(title: string) {
    console.log(title);
  }
}
