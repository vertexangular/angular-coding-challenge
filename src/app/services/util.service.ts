import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UtilService {

    apiKey: string = 'api_key=451a5c46225283a9a3e766eee8fa80ac';
    baseUrl: string = 'https://api.themoviedb.org/3';
    headers;
    localData: any = {};
    constructor(private http: Http) {
        this.headers = new Headers({'Content-Type': 'application/json'})
    }

    get(path: string) {
        let uri = `${this.baseUrl}/${path}?${this.apiKey}`;
        return this.http.get(uri, {headers: this.headers})
            .map((res: Response) => res.json())

    }
    setLocalData(data) {
        this.localData = data;
        localStorage.setItem('userData', JSON.stringify(data));
    }

    getLocalData() {
        let data = JSON.parse(localStorage.getItem('userData'));
        if (data) {
            this.localData = data;
        }
    }
    showError(err: any) {
        alert(err); //TODO: maybe a modal?
    }


}
