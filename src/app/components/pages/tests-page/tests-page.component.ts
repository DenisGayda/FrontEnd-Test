import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
