import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(private utilService: UtilService, public moviesService: MoviesService) {
    }

    ngOnInit() {
    }

    isLoggedIn() {
        return this.utilService.isLoggedIn();
    }

    signIn() {
        this.utilService.setLocalData('');
        this.isLoggedIn();
    }

    signOut() {
        this.utilService.clearLocalData();
        this.isLoggedIn();
    }
}
