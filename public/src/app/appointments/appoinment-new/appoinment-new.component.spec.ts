import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentNewComponent } from './appoinment-new.component';

describe('AppoinmentNewComponent', () => {
  let component: AppoinmentNewComponent;
  let fixture: ComponentFixture<AppoinmentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
