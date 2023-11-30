import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path:'', component: LandingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
