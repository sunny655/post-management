import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: null
})
export class PostListService {

  constructor(
    private http: HttpClient
  ) { }

  /**
  * @ngdoc method
  * @name getPosts
  * @description
  * get post
  */
  getPosts(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'users/8/posts').subscribe(data => {
        resolve(data);
      },(error) => {
        reject(error);
      })
    })
  }
}
