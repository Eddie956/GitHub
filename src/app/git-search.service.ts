import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable()
export class GitSearchService {

  data: any = [];

  constructor(private http: HttpClient) { }

  getGitUser(username: string) {
    interface ApiResponse {
      quote: string;
      author: string;

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response => {

        this.data = response;
        console.log(this.data);
      },
        error => {
          
          reject(error)
        }
      )
    })

    return promise
  }

  

}
