import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPassingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
