import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: null
})
export class PostDetailService {

  constructor(
    private http: HttpClient
  ) { }

  /**
    * @ngdoc method
    * @name fetchPost
    * @description
    * fetch post
    * @param {Number} id
  */
  fetchPost(id:number){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'posts/' + id).subscribe(data => {
        resolve(data);
      },(error) => {
        reject(error);
      })
    })
  }

  /**
    * @ngdoc method
    * @name fetchPostComments
    * @description
    * fetch post comments
    * @param {Number} id
  */
  fetchPostComments(id:number){
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'posts/' + id + '/comments').subscribe(data => {
        resolve(data);
      },(error) => {
        reject(error);
      })
    })
  }
}
