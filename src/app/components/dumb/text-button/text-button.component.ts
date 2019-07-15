import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent {
  @Input() text = 'button';
}
