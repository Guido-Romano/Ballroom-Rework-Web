import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApparelComponent } from './pages/apparel/apparel.component';
import { BannerAboutComponent } from './pages/about-us/banner-about/banner-about.component';
import { BannerClassComponent } from './pages/classes/banner-class/banner-class.component';
import { BannerHomeComponent } from './pages/home/banner-home/banner-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesComponent } from './pages/classes/classes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './resource/footer/footer.component';
import { FormComponent } from './pages/contact/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './resource/nav/nav.component';
import { PricingComponent } from './pages/classes/pricing/pricing.component';
import { QuestionsComponent } from './pages/home/questions/questions.component';
import { StaffComponent } from './pages/about-us/staff/staff.component';
import { TextComponent } from './resource/text/text.component';
import { VerticalCardComponent } from './pages/classes/vertical-card/vertical-card.component';
import { ProductCardComponent } from './pages/apparel/productcard/productcard.component';
import { CookieComponent } from './pages/home/cookie/cookie.component';
import { BannerApparelComponent } from './apparel/banner-apparel/banner-apparel.component';
import { StatsComponent } from './pages/home/stats/stats.component';
import { GalleryComponent } from './pages/home/gallery/gallery.component';
import { BannerPromotionsComponent } from './pages/home/banner-promotions/banner-promotions.component';
import { BannerStaffComponent } from './pages/home/banner-staff/banner-staff.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ApparelComponent,
    BannerAboutComponent,
    BannerClassComponent,
    BannerHomeComponent,
    ClassesComponent,
    ContactComponent,
    FooterComponent,
    FormComponent,
    HomeComponent,
    NavComponent,
    PricingComponent,
    QuestionsComponent,
    StaffComponent,
    TextComponent,
    VerticalCardComponent,
    ProductCardComponent,
    CookieComponent,
    BannerApparelComponent,
    StatsComponent,
    GalleryComponent,
    BannerPromotionsComponent,
    BannerStaffComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
