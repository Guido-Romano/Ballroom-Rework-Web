import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenvestComponent } from './menvest.component';

describe('MenvestComponent', () => {
  let component: MenvestComponent;
  let fixture: ComponentFixture<MenvestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenvestComponent]
    });
    fixture = TestBed.createComponent(MenvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
