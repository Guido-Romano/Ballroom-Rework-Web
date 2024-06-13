import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPromotionsComponent } from './banner-promotions.component';

describe('BannerPromotionsComponent', () => {
  let component: BannerPromotionsComponent;
  let fixture: ComponentFixture<BannerPromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPromotionsComponent]
    });
    fixture = TestBed.createComponent(BannerPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
