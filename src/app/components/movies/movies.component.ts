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
  movieDetails: any[] = [];


  constructor(private util: UtilService) {
  }

  ngOnInit() {
    this.util.get('movie/top_rated')
      .do(data => {
        this.movies = data.results;
        console.log(this.movies, 'movies...');
      })
      .switchMap(data => {
        return Observable.forkJoin(this.movies.map(movie => {
          console.log(movie.id, 'movie...');
          this.util.get(`movie/${movie.id}`)
            .subscribe(data => {
              console.log(data, 'data???');
              this.movieDetails.push([{
                "genre": data.genres.map(genre => genre.name),
                "length": data.runtime,
                "rating": data.vote_average / 2
              }]);
              console.log(this.movieDetails, 'moviedetilas/');
            });
        }));
      })
      .subscribe(data => {
        console.log(data, 'details..?');
      });
  }

  logClick() {
    console.log('HEART IS CLICKED');
  }
}
