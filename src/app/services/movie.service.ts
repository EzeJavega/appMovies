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
            .then(data => data);
    }

}
