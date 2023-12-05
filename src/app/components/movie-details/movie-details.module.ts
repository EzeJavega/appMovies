import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MovieDetailsRoutingModule,
		DataViewModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
		ButtonModule,
		ToggleButtonModule,	
		YouTubePlayerModule	
	],
	declarations: [MovieDetailsComponent]
})
export class MovieDetailsModule { }
