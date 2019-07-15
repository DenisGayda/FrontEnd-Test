import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-passing-page',
  templateUrl: './test-passing-page.component.html',
  styleUrls: ['./test-passing-page.component.css']
})
export class TestPassingPageComponent implements OnInit {
  @Input() test: object[];

  constructor() {}

  ngOnInit() {}
}
