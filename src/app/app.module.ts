import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { MoviesModule } from './movies/movies.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPagesModule } from './main-pages/main-pages.module';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    /* Modules */
    CoreModule,
    MaterialModule,
    SharedModule,
    MoviesModule,
    PagesModule,
    AdminModule,
    AuthModule,
    BrowserAnimationsModule,
    LayoutModule,
    MainPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
