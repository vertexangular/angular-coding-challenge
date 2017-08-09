import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Observable} from "rxjs/Observable";
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.component.html',
    styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

    constructor(private util: UtilService, public moviesService: MoviesService) {
    }

    ngOnInit() {
        this.moviesService.getWatchListMovies();
    }

    getWatchlist() {
      console.log(this.moviesService.watchlistMovies, ' lol ?')
    }

}
