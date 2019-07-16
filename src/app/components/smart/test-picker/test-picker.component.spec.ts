import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPickerComponent } from './test-picker.component';

describe('TestPickerComponent', () => {
  let component: TestPickerComponent;
  let fixture: ComponentFixture<TestPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestPickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
