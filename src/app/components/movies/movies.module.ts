import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { DataViewModule } from 'primeng/dataview';
// import { PickListModule } from 'primeng/picklist';
// import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MoviesRoutingModule,
		DataViewModule,
		// PickListModule,
		// OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
		ButtonModule,
		ToggleButtonModule
	],
	declarations: [MoviesComponent]
})
export class MoviesModule { }
