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

    types :string[]=['Drama', 'Fantasy'];
    length :string[]=['170', '82'];

    constructor(private util: UtilService) {
    }

    ngOnInit() {
        this.util.get('movie/top_rated')
            .switchMap(data => {
                this.movies = data.results;
                return this.movies.map(movie => {
                    //Fixed type of genre
                    movie.genre=this.types[movie.id%2]
                    movie.length=this.length[movie.id%2]
                    console.log(movie.id)
                    console.log(movie.genre)
                    console.log(movie.length)
                    this.util.get(`movie/${movie.id}`)
            })
            })
            .subscribe(data => {
                console.log(data, 'details..?')
            })
    }
}
