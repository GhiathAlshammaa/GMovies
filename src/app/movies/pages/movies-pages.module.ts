import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponentsModule } from '../components/movies-components.module';

@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesComponentsModule],
  exports: [MoviesListComponent, MovieDetailComponent],
})
export class MoviesPagesModule {}
