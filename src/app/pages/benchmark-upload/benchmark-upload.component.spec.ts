import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkUploadComponent } from './benchmark-upload.component';

describe('BenchmarkUploadComponent', () => {
  let component: BenchmarkUploadComponent;
  let fixture: ComponentFixture<BenchmarkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
