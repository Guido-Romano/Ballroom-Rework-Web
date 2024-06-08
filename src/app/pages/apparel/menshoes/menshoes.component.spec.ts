import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshoesComponent } from './menshoes.component';

describe('MenshoesComponent', () => {
  let component: MenshoesComponent;
  let fixture: ComponentFixture<MenshoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenshoesComponent]
    });
    fixture = TestBed.createComponent(MenshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
