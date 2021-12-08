import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () =>
      import('@app/pages/pages.module').then((m) => m.PagesModule),
  },
  // {
  //   path: 'movies',
  //   data: { preload: false }, // change to true, when user use this route
  //   loadChildren: () => import('@app/movies').then((m) => m.MoviesModule),
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
