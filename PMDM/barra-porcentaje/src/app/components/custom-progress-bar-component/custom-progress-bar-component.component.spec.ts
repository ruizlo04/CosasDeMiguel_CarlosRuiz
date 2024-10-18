import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgressBarComponentComponent } from './custom-progress-bar-component.component';

describe('CustomProgressBarComponentComponent', () => {
  let component: CustomProgressBarComponentComponent;
  let fixture: ComponentFixture<CustomProgressBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomProgressBarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProgressBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
