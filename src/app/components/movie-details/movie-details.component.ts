import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {

    movie: Movie = {} as Movie;

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    width: number = 560;
    height: number = 315;

    constructor(private movieService: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.movie = history.state.movie;
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

    getTrailerUrl(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerLink);
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
