import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstKeyLabelComponent } from './first-key-label.component';

describe('FirstKeyLabelComponent', () => {
  let component: FirstKeyLabelComponent;
  let fixture: ComponentFixture<FirstKeyLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstKeyLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstKeyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
