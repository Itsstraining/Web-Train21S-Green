import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuouComponent } from './ruou.component';

describe('RuouComponent', () => {
  let component: RuouComponent;
  let fixture: ComponentFixture<RuouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
