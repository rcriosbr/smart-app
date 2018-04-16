import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealUploadComponent } from './deal-upload.component';

describe('DealUploadComponent', () => {
  let component: DealUploadComponent;
  let fixture: ComponentFixture<DealUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
