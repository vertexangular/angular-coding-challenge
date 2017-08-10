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

    @Input() movies: Movie[];
    filterKeyword = '';

    constructor(public util: UtilService, public moviesService: MoviesService) {
    }

    ngOnInit() {
    }

}
