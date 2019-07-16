import {Component, Input} from '@angular/core';
import {Answer} from '../../../../config/interfaces/test.interface';

@Component({
  selector: 'app-test-answers',
  templateUrl: './test-answers.component.html',
  styleUrls: ['./test-answers.component.scss']
})
export class TestAnswersComponent {
  @Input() answers: Answer[];
}
