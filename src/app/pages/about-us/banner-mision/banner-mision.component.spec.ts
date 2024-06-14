import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMisionComponent } from './banner-mision.component';

describe('BannerMisionComponent', () => {
  let component: BannerMisionComponent;
  let fixture: ComponentFixture<BannerMisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerMisionComponent]
    });
    fixture = TestBed.createComponent(BannerMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
