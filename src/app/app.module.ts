import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule, no Routes
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
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importa AppRoutingModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
