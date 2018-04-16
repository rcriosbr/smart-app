import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealJournalComponent } from './deal-journal.component';

describe('DealJournalComponent', () => {
  let component: DealJournalComponent;
  let fixture: ComponentFixture<DealJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
