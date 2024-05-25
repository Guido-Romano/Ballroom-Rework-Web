import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { QuestionsComponent } from './questions/questions.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClassComponent } from './class/class.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClasesComponent } from './clases/clases.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TextComponent } from './text/text.component';
import { IndumentariaComponent } from './indumentaria/indumentaria.component';
import { ProductsComponent } from './products/products.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    BannerComponent,
    FooterComponent,
    FormComponent,
    QuestionsComponent,
    TestimonialComponent,
    ClassComponent,
    AboutComponent,
    PhotoComponent,
    InicioComponent,
    NosotrosComponent,
    ClasesComponent,
    ContactoComponent,
    TextComponent,
    IndumentariaComponent,
    ProductsComponent,
    PricingComponent,
    ProductCardComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

