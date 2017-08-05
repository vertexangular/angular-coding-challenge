import {Component, OnInit} from '@angular/core';
import {UtilService} from '../../services/util.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    imagePath: string = 'http://image.tmdb.org/t/p/w185/';
    movies: Observable<any>;
    constructor(private util: UtilService) {
    }

    ngOnInit() {
        this.util.get('movie/top_rated')
            .switchMap(data => {
                this.movies = data.results;
                return this.movies.map(movie => {
                    console.log(movie.id)
                    this.util.get(`movie/${movie.id}`)
            })
            })
            .subscribe(data => {
                console.log(data, 'details..?')
            })

    }

}
