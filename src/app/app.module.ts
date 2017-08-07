import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UtilService} from './services/util.service';
import {MoviesComponent} from './components/movies/movies.component';
import {FilterPipe} from './pipes/filter.pipe';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {WatchlistComponent} from './components/watchlist/watchlist.component';
import {HttpModule} from '@angular/http';
import {StarRatingModule} from 'angular-star-rating';


@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        FilterPipe,
        SidebarComponent,
        WatchlistComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        StarRatingModule.forRoot()

    ],
    providers: [UtilService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
