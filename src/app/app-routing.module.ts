import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingComponent } from './components/landing/landing.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path: 'movies', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule) },
      { path: 'details', loadChildren: () => import('./components/movie-details/movie-details.module').then(m => m.MovieDetailsModule) },
    ],
  },
  { path: '**', redirectTo: '/movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
