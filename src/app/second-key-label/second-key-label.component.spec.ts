import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondKeyLabelComponent } from './second-key-label.component';

describe('SecondKeyLabelComponent', () => {
  let component: SecondKeyLabelComponent;
  let fixture: ComponentFixture<SecondKeyLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondKeyLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondKeyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
