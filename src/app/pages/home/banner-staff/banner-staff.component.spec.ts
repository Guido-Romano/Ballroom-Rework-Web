import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStaffComponent } from './banner-staff.component';

describe('BannerStaffComponent', () => {
  let component: BannerStaffComponent;
  let fixture: ComponentFixture<BannerStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerStaffComponent]
    });
    fixture = TestBed.createComponent(BannerStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
