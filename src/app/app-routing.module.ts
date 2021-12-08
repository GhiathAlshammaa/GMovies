import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './main-pages';


const routes: Routes = [
  {
    path: '',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () =>
      import('@app/main-pages/main-pages.module').then(
        (m) => m.MainPagesModule
      ),
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
