import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MovieDetailsComponent }
	])],
	exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
