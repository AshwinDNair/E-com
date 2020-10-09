import { Injectable } from '@angular/core';
import { HttpParams,HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'
import { environment } from '../../environments/environment';
@Injectable()
export class ApiBaseService {

  apiAuthKey: string;
  _getHeaders: any;
  _serviceURL: string;

  constructor(private _http: HttpClient) {
    this.buildHeaders();
    
    this._serviceURL = "http://localhost:3000/";
  }

  private generateParam(data: object): HttpParams {
    let params = new HttpParams();
    for (const i in data) {
      params = params.append(i, data[i]);
    }
    return params;
  }

  protected httpGet(url: string, data: object = null, showSpinner: boolean = true): any {
    let params = new HttpParams();
    this.buildHeaders()
    if (data != null) {
      params = this.generateParam(data);
    }
    const response = this._http.get(url, { params: params, headers: this._getHeaders });
    return response;
  }

  protected httpPost(url: string, data: any,): any {
    this.buildHeaders();
    const response = this._http.post(url, data, { headers: this._getHeaders });
    return this.buildResult(response);
  }
  private buildResult(response: any): Observable<Response> {
   
   
    let result = new Subject<Response>();
    response.subscribe(data => {
   
      result.next(data);
    },
      err => {
        result.error(err);
      });

    return result;
  }

//   protected getJSON(url): Observable<any> {

//     return this._http.get(url)
//       .map(res => res.json());

//   }

  private buildHeaders() {
    //this.apiAuthKey = sessionStorage.getItem('BearerToken');
    this._getHeaders = new Headers({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    //  'Authorization': this.apiAuthKey
    });
  }

}
