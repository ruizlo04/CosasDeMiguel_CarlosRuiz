import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePrefixListComponent } from './phone-prefix-list.component';

describe('PhonePrefixListComponent', () => {
  let component: PhonePrefixListComponent;
  let fixture: ComponentFixture<PhonePrefixListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonePrefixListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonePrefixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
