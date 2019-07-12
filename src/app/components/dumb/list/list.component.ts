import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() elements;
  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
