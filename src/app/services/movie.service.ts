import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovies() {
        return this.http.get<any>('./assets/data/movies.json')
            .toPromise()
            .then(res => res.data as Movie[])
            .then(data => {
                data.forEach(movie => {
                    if(window.localStorage.getItem('movie'+movie.id)){
                        movie.onWatchlist = true;
                        console.log(movie.title);
                    }
                });
                return data;
              })
    }

    addToWatchlist(movie: Movie): void {
        window.localStorage.setItem('movie'+movie.id, movie.title);
    }
    
    removeFromWatchlist(movie: Movie): void {
        window.localStorage.removeItem('movie'+movie.id);
    }
    
}
