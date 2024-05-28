import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApparelComponent } from './apparel/apparel.component';
import { BannerAboutComponent } from './banner-about/banner-about.component';
import { BannerClassComponent } from './banner-class/banner-class.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesComponent } from './classes/classes.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { QuestionsComponent } from './questions/questions.component';
import { StaffComponent } from './staff/staff.component';
import { TextComponent } from './text/text.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutUsComponent,
    ApparelComponent,
    AppComponent,
    BannerAboutComponent,
    BannerClassComponent,
    BannerComponent,
    ClassesComponent,
    ContactComponent,
    FooterComponent,
    FormComponent,
    HomeComponent,
    NavComponent,
    PricingComponent,
    ProductCardComponent,
    ProductsComponent,
    QuestionsComponent,
    StaffComponent,
    TextComponent,
    VerticalCardComponent,
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
