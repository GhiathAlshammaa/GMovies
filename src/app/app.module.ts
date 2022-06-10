import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/modules/material/material.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './blocks/components/layout/layout.module';
import { AppComponent } from './blocks/components/app/app.component';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,

    /* Modules */
    SharedModule,
    LayoutModule,
    BlocksModule,
    CoreModule,
    MaterialModule,
    AdminModule,
    BrowserAnimationsModule,
    PagesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
