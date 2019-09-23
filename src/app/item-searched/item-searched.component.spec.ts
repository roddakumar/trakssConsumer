import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearchedComponent } from './item-searched.component';

describe('ItemSearchedComponent', () => {
  let component: ItemSearchedComponent;
  let fixture: ComponentFixture<ItemSearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
