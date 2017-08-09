import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {MoviesService} from "./services/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http, private moviesService:MoviesService) {
        this.moviesService.getTopRated();
  }

}
