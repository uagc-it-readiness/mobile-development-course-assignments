import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GithubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubService {
  readonly BASE_URL = "https://api.github.com/users/";

  constructor(public http: Http) {
    console.log('Hello GithubService Provider');
  }



  getProfile(username: string){
    return this.http.get(`${this.BASE_URL}${username}`).map(response => response.json());
  }

  getRepos(username: string){
    return this.http.get(`${this.BASE_URL}${username}/repos`).map(response => response.json());
  }

}
