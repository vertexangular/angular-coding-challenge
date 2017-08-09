import {Injectable} from '@angular/core';
import {UtilService} from "./util.service";
import {Observable} from "rxjs/Observable";
import {Movie} from "../classes/movie";

@Injectable()
export class MoviesService {

    public topRatedMovies: Movie[] = [];
    public watchlistMovies: Movie[] = [];


    constructor(public util: UtilService) {
    }

    getTopRated() {
        this.util.get('movie/top_rated')
            .do(data => data.results)
            .switchMap(data => {
                return Observable.forkJoin(data.results.map((movie, index) => {
                    this.util.get(`movie/${movie.id}`)
                        .subscribe(data => {
                            let theMovie = new Movie(movie.id, movie.title, movie.poster_path, data.genres.map(genre => genre.name), data.runtime, data.vote_average / 2);
                            this.topRatedMovies.push(theMovie);
                        });
                }));
            })
            .subscribe(data => {
                console.log(data, 'details..?');
            });
    }

    addToWatchlist(movie) {
        let added = this.isMovieInWatchlist(movie);

        added == -1
            ? this.watchlistMovies.push(movie)
            : this.watchlistMovies.splice(added, 1);

        this.util.setLocalData(this.watchlistMovies);
    }

    isMovieInWatchlist(movie) {
        return this.watchlistMovies.findIndex(i => i.id == movie.id);
    }

    getWatchListMovies() {
        this.watchlistMovies = this.util.getLocalData();
        console.log("WATHCLIST FROM LOCAL STORAGE", this.watchlistMovies);
    }
}
