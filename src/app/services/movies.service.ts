import {Injectable} from '@angular/core';
import {UtilService} from "./util.service";
import {Observable} from "rxjs/Observable";
import {Movie} from "../classes/movie";

@Injectable()
export class MoviesService {

    public activeTab: string = "top-rated";

    public topRatedMovies: Movie[] = [];
    public watchlistMovies: Movie[] = [];

    constructor(public util: UtilService) {

    }

    getTopRated() {
        this.util.get('movie/top_rated')
            .do(data => data.results)
            .switchMap(data => {
                return Observable.forkJoin(data.results.map((movie, index) => {
                    // console.log(movie.id, 'movie...');
                    this.util.get(`movie/${movie.id}`)
                        .subscribe(data => {

                            // let theMovie = new Movie();
                            // theMovie.id = movie.id;
                            // theMovie.title = movie.title;
                            // theMovie.posterPath = movie.poster_path;
                            // theMovie.genre = data.genres.map(genre => genre.name);
                            // theMovie.length = data.runtime;
                            // theMovie.rating = data.vote_average / 2;
                            let theMovie = new Movie(movie.id, movie.title, movie.poster_path, data.genres.map(genre => genre.name), data.runtime, data.vote_average / 2);

                            this.topRatedMovies.push(theMovie);

                            console.log(this.topRatedMovies, 'popular movies');
                        });
                }));
            })
            .subscribe(data => {
                console.log(data, 'details..?');
            });
    }

    addToWatchlist(index) {
        let added = this.isMovieInWatchlist(index);

        added == -1
            ? this.watchlistMovies.push(this.topRatedMovies[index])
            : this.watchlistMovies.splice(added, 1);

        this.watchlistMovies.forEach(movie => {
            console.log(movie.title + "watchlist")
        })

        this.util.setLocalData(this.watchlistMovies);
    }

    isMovieInWatchlist(index) {
        return this.watchlistMovies.findIndex(i => i.id == this.topRatedMovies[index].id);
    }

    getWatchListMovies() {
        this.watchlistMovies = this.util.getLocalData();
        console.log("WATHCLIST FROM LOCAL STORAGE", this.watchlistMovies);
    }
}
