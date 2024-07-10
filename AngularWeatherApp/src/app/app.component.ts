import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../views/homepage/homepage.component';
import { WeatherService } from '../request/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  defaultLocation: string = 'kayseri';
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getRequestWeatherData(this.defaultLocation);
  }
}
