import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    tabs: any[] = [];
    private activeTab;
    isSignedIn: boolean;

    constructor(private utilService: UtilService, public moviesService: MoviesService) {
        this.tabs = [
            {
                name: "LATEST",
                icon: "fa-clock-o",
                routeTo: "top_rated"
            },
            {
                name: "POPULAR",
                icon: "fa-star",
                routeTo: "top_rated"
            },
            {
                name: "FAVORITES",
                icon: "fa-heart",
                routeTo: "favorites"
            },
            {
                name: "WATCHLIST",
                icon: "fa-list-ul",
                routeTo: "watchlist"
            },
            {
                name: "SEARCH",
                icon: "fa-search",
                routeTo: "top_rated"
            },
            {
                name: "GENRES",
                icon: "fa-th",
                routeTo: "top_rated"
            },
            {
                name: "SIGN OUT",
                icon: "fa-power-off",
                margin: 'logout',
                color: 'logout-icon',

            }


        ]

    }

    ngOnInit() {
        this.activeTab = this.tabs[0].name;
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
    setActiveTab(tab){
        this.activeTab = tab.name;
        console.log(this.activeTab==tab.name, 'tab...')
    }
}
