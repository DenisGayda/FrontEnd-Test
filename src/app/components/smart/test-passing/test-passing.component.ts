import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TestInterface} from '../../../../config/interfaces/test.interface';


@Component({
  selector: 'app-test-passing',
  templateUrl: './test-passing.component.html',
  styleUrls: ['./test-passing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPassingComponent implements OnInit {
  @Input() test: TestInterface;
  questions: object[] = this.test.questions;

  constructor() {}

  ngOnInit() {}
}
