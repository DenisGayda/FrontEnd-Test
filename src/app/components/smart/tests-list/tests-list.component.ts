import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  @Input() tests = [
    {
      id: '12345',
      title: 'test JS',
      questions: [],
      neededRightAnswers: 1
    },
    {
      id: '12346',
      title: 'test CSS',
      questions: [],
      neededRightAnswers: 1
    },
    {
      id: '12347',
      title: 'test HTML',
      questions: [],
      neededRightAnswers: 1
    }
  ];
  constructor() {}

  ngOnInit() {}
}
