import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`;

    return this.http.get<any>(url).pipe(
      tap((response) => console.log(response)), // Log the response
      catchError((error) => {
        console.error(error);
        return of({ data: [], total: 0 });
      })
    );
  }
}
