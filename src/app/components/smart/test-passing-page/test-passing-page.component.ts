import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TestInterface} from "../../../../config/interfaces/test.interface";

@Component({
  selector: 'app-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPassingPageComponent implements OnInit {
  @Input() test: TestInterface;
  questions: object[] = this.test.questions;

  constructor() {}

  ngOnInit() {}
}
