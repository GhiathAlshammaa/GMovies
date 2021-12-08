import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { pagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterationComponent,
    PageNotFoundComponent,
  ],
  imports: [SharedModule, pagesRoutingModule],
  exports: [HomeComponent, PageNotFoundComponent, pagesRoutingModule],
})
export class PagesModule {}
