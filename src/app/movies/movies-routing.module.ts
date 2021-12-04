import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent, MovieDetailComponent } from './pages';
import { MoviesPagesModule } from './pages/movies-pages.module';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
    data: { pageTitle: 'Movie List' },
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule],
})
export class MoviesRoutingModule {}
