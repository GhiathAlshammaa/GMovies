import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () =>
      import('@app/main-pages/main-pages.module').then(
        (m) => m.MainPagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
