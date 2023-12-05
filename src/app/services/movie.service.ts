import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

const KEY = 'Watchlist';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovies() {
        window.localStorage.clear();
        return this.http.get<any>('./assets/data/movies.json')
            .toPromise()
            .then(res => res.data as Movie[])
            .then(data => data);
    }

    addToWatchlist(movie: Movie): void {
        window.localStorage.setItem('movie'+movie.id, movie.title);
    }
    
    removeFromWatchlist(movie: Movie): void {
        window.localStorage.removeItem('movie'+movie.id);
    }
    
    // getWatchlist(): string {
    //     return localStorage.getItem(KEY);
    // }
    
}
