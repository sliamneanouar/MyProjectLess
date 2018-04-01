import {Injectable, Inject} from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpModule, Http,
 Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers} from '@angular/http';

@Injectable()
export class ServicesData {
    constructor(private _http : Http) {};
    public about = (): Observable<Object[]> => {
        return this._http.get("http://localhost:8080/api/about")
            .map((response: Response) => <Object[]>response.json());
    };
};
