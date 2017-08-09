import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UtilService} from '../../services/util.service';
import {Observable} from 'rxjs';
import {Movie} from './../../classes/movie';
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    // imagePath: string = 'http://image.tmdb.org/t/p/w185/';

    @Input() movies: Movie[];

    constructor(private util: UtilService, public moviesService: MoviesService) {
    }

    ngOnInit() {

        // this.moviesService.activeTab == 'top-rated'
        //     ? this.movies = this.moviesService.topRatedMovies
        //     : this.movies = this.moviesService.watchlistMovies;
    }

    switchArray() {

    }
}
