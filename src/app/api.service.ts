import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'bc6ef99330594982befcdea67f383bd6';
  constructor(private httpClient: HttpClient) { }
  public getGeneralNews(){
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.API_KEY}`);
  }
  public getHealthNews(){
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.API_KEY}`);
  }
  public getScienceNews(){
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${this.API_KEY}`);
  }
  public getSportsNews(){
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.API_KEY}`);
  }
  public getTechnologyNews(){
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${this.API_KEY}`);
  }

}
