import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'https://us-east-2.aws.neurelo.com/rest/products';
  private APIKEY =
    'neurelo_9wKFBp874Z5xFw6ZCfvhXfFXS+qEk0CNKigOZhTvsKrXiEJK9aDujgjK5TMVNC7B5beDFKhDF9bEKuCXeuAb/ulD3z4HN1DUVy0ygEdwfRsCe3g+pHL+XmJDQD8JOWa3jw0ALUJzEWYCoEJDzJj1LeNElodKD2lCqSgMx0Prbxw5mTcnDqMuxp02o6K2hJUY_lLfGmru/o7M5NSDdc/jQh0pijzEY3VG9J30d+wam0j8=';
  private allProducts = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.APIKEY,
    });
    return this.http.get<any[]>(this.URL, { headers }).pipe(
      map((response) => {
        this.allProducts.next(response);
        return response;
      }),
      catchError((error) => {
        return throwError('Bir hata oluştu, ürünler alınamadı.');
      })
    );
  }
}
