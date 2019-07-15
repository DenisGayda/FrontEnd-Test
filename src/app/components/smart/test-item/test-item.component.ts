import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent implements OnInit {
  @Input() test = {
    id: '12345',
    title: 'test JS',
    questions: [],
    neededRightAnswers: 1
  };
  constructor() {}

  ngOnInit() {}
}
