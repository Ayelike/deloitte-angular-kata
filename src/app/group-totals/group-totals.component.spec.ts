import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTotalsComponent } from './group-totals.component';

describe('GroupTotalsComponent', () => {
  let component: GroupTotalsComponent;
  let fixture: ComponentFixture<GroupTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
