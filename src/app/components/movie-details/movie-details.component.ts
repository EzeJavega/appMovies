import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {

    movie: Movie = {} as Movie;

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movie = history.state.movie;
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
