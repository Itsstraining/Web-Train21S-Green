import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddComponent } from './edd.component';

describe('EddComponent', () => {
  let component: EddComponent;
  let fixture: ComponentFixture<EddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
