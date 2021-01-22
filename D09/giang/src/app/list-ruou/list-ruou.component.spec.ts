import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRuouComponent } from './list-ruou.component';

describe('ListRuouComponent', () => {
  let component: ListRuouComponent;
  let fixture: ComponentFixture<ListRuouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRuouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRuouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
