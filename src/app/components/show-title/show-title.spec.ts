import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTitle } from './show-title';

describe('ShowTitle', () => {
  let component: ShowTitle;
  let fixture: ComponentFixture<ShowTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
