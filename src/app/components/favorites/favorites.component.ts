import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private util: UtilService) {
  }

  ngOnInit() {

  }
}
