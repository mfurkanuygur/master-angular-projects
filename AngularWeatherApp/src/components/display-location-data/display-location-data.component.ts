import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../request/weather.service';
import { DetailpageComponent } from '../../views/detailpage/detailpage.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-display-location-data',
  standalone: true,
  imports: [CommonModule, DetailpageComponent,LoadingComponent],
  templateUrl: './display-location-data.component.html',
  styleUrls: ['./display-location-data.component.css'],
})
export class DisplayLocationDataComponent implements OnInit {
  summaryWeather: any;
  detailWeather: any;
  feelslike:string="assets/feelslike.png"
  humidity:string="assets/humidity.png"
  mintemp:string="assets/mintemp.png"
  maxtemp:string="assets/maxtemp.png"
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((data) => {
      if (data) {
        this.summaryWeather = data[0]
        this.detailWeather = data[1]
      }
    });
  }
  floorValue(value: number): number {
    return Math.floor(value);
  }
  ceilValue(value: number): number {
    return Math.ceil(value);
  }
}
