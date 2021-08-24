import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesRoutingModule } from './main-pages-routing.module';
import { HomeComponent, PageNotFoundComponent } from '.';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [SharedModule, MainPagesRoutingModule],
  exports: [HomeComponent, PageNotFoundComponent, MainPagesRoutingModule],

})
export class MainPagesModule {}
