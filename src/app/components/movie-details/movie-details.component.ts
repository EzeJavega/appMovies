import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {

    movie: Movie = {} as Movie;

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    constructor(private movieService: MovieService, private route: ActivatedRoute) { }

    ngOnInit() {
        // this.route.params.subscribe((params) => {
        //     this.movie = params['movie']; 
        //     console.log(this.movie)
        //   });
        this.movie = history.state.movie;
        console.log(this.movie)

    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
    
}
