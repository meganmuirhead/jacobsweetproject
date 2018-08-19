import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectPicklistItemComponent } from './multi-select-picklist-item.component';

describe('MultiSelectThatTransfersComponent', () => {
  let component: MultiSelectPicklistItemComponent;
  let fixture: ComponentFixture<MultiSelectPicklistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectPicklistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectPicklistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
