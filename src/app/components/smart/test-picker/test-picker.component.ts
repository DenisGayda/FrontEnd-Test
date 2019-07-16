import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TestInterface } from '../../../../config/interfaces/test.interface';

@Component({
  selector: 'app-test-picker',
  templateUrl: './test-picker.component.html',
  styleUrls: ['./test-picker.component.css']
})
export class TestPickerComponent {
  @Input() test: TestInterface;
  @Output() testBegin = new EventEmitter<string>();
}
