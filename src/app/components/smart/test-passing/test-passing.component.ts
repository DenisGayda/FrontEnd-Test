import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Question, TestInterface} from '../../../../config/interfaces/test.interface';
import {DataService} from "../../../services/data-service/data-service.service";


@Component({
  selector: 'app-test-passing',
  templateUrl: './test-passing.component.html',
  styleUrls: ['./test-passing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPassingComponent implements OnInit {
  @Input() test: TestInterface;
  questions: Question;

  ngOnInit() {
    this.dataService.getData('tests').subscribe(data => this.test = data);
    this.questions = this.test.questions;
  }

  constructor(private dataService: DataService) {}
}
