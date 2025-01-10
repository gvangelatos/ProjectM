import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiddlePagePage } from './riddle-page.page';

describe('RiddlePagePage', () => {
  let component: RiddlePagePage;
  let fixture: ComponentFixture<RiddlePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddlePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
