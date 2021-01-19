import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagbarComponent } from './nagbar.component';

describe('NagbarComponent', () => {
  let component: NagbarComponent;
  let fixture: ComponentFixture<NagbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NagbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
