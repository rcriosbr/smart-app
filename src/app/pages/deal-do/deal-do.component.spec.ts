import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDoComponent } from './deal-do.component';

describe('DealDoComponent', () => {
  let component: DealDoComponent;
  let fixture: ComponentFixture<DealDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
