import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ApparelComponent } from './pages/apparel/apparel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { PricingComponent } from './pages/classes/pricing/pricing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'apparel', component: ApparelComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footerpage', component: FooterPageComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

