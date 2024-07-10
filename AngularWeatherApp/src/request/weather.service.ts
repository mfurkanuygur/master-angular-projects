import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private allWeathersData = new BehaviorSubject<any>(null);
  // private currentWeatherSubject = new BehaviorSubject<any>(null);
  // private weatherForecastSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getRequestWeatherData(locationName: string): Observable<any[]> {
    const currentWeather = this.http.get(
      `${this.apiUrl}/weather?q=${locationName}&appid=${this.apiKey}&lang=en&units=metric`
    );
    const weatherForecast = this.http.get(
      `${this.apiUrl}/forecast?q=${locationName}&appid=${this.apiKey}&lang=en&units=metric`
    );
    forkJoin([currentWeather, weatherForecast]).subscribe(
      (data) => {
        this.allWeathersData.next([data[0], data[1]]);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );

    return forkJoin([currentWeather, weatherForecast]);
  }
  getWeatherData(): Observable<any> {
    return this.allWeathersData.asObservable();
  }
}
