import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
  }

}
