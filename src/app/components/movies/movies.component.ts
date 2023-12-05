import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

    movies: Movie[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    constructor(private movieService: MovieService, private router: Router) { }

    ngOnInit() {
        this.movieService.getMovies().then(data => this.movies = data);

        this.sortOptions = [
            { label: 'By Title', value: 'title' },
            { label: 'By Release Date', value: 'releasedDate' }
        ];
    }

    onSortChange(event: any) {
        const value = event.value;
        this.sortOrder = 1;
        this.sortField = value;
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
    
    goToDetails(movie: Movie) {
        console.log(movie)
         this.router.navigate(['movies/details'], { state: { movie: movie } });
      }
    
    setWatchlist(movie: Movie){
        if(movie.onWatchlist){
            movie.onWatchlist = false;
            this.movieService.removeFromWatchlist(movie);
        }else{
            movie.onWatchlist = true;
            this.movieService.addToWatchlist(movie);
        }
    }
}
