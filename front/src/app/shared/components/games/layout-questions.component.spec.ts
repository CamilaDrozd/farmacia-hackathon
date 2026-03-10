import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutQuestionsComponent } from './layout-questions.component';

describe('GamesComponent', () => {
  let component: LayoutQuestionsComponent;
  let fixture: ComponentFixture<LayoutQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
