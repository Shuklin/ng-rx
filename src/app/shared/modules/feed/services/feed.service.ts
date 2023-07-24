import {Injectable} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GetFeedResponseInterface} from "../types/getFeedResponse.interface";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {
  }

  getFeed(url: String): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;

    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }

  // register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
  //   const url = environment.apiUrl + '/users';
  //
  //   return this.http.post<AuthResponseInterface>(url, data).pipe(
  //     map(this.getUser)
  //   );
  // }
  //
  // login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
  //   const url = environment.apiUrl + '/users/login';
  //
  //   return this.http.post<AuthResponseInterface>(url, data).pipe(
  //     map(this.getUser)
  //   );
  // }
  //
  // getCurrentUser(): Observable<CurrentUserInterface> {
  //   const url = environment.apiUrl + '/user';
  //
  //   return this.http.get(url).pipe(
  //     tap((data) => {
  //       console.log('data', data);
  //     }),
  //     map(this.getUser)
  //   );
  // }
}
