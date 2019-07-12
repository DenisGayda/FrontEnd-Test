import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() elements;
  @Input() template: TemplateRef<any>;

  constructor() { }
}
