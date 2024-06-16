import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleImgComponent } from './double-img.component';

describe('DoubleImgComponent', () => {
  let component: DoubleImgComponent;
  let fixture: ComponentFixture<DoubleImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleImgComponent]
    });
    fixture = TestBed.createComponent(DoubleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
