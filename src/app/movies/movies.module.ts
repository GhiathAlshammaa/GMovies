import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPagesModule } from './pages/movies-pages.module';
import { MoviesListComponent, MovieDetailComponent } from './pages';

@NgModule({
  imports: [CommonModule, MoviesPagesModule, MoviesRoutingModule],
  exports: [MoviesRoutingModule],
})
export class MoviesModule {}
