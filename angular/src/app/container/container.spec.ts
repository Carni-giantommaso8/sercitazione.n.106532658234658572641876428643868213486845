import { ComponentFixture, TestBed } from '@angular/core/testing';

import { containerr } from './container';

describe('containerr', () => {
  let component: containerr;
  let fixture: ComponentFixture<containerr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [containerr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(containerr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
