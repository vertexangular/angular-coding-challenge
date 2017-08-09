import {Routes, RouterModule} from "@angular/router";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {WatchlistComponent} from "./components/watchlist/watchlist.component";
import {TopratedComponent} from "./components/toprated/toprated.component";
/**
 * Created by Blagojce on 09.1.2017.
 */

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/top_rated', pathMatch: 'full'},
  {path: 'top_rated', component: TopratedComponent, pathMatch: 'full'},
  {path: 'favorites', component: FavoritesComponent,},
  {path: 'watchlist', component: WatchlistComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
