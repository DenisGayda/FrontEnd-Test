import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPassingPageComponent } from './test-passing.component';

describe('TestPassingPageComponent', () => {
  let component: TestPassingPageComponent;
  let fixture: ComponentFixture<TestPassingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPassingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPassingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
