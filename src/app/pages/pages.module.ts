import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterationComponent } from './registeration/registeration.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
