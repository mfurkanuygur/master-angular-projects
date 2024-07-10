import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../request/weather.service';
@Component({
  selector: 'app-enter-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enter-form.component.html',
  styleUrl: './enter-form.component.css',
})
export class EnterFormComponent {
  locationName: string = '';
  constructor(private weatherService: WeatherService) {}
  data: Array<any> = [];

  searchCity = (e: Event) => {
    e.preventDefault();
    this.weatherService.getRequestWeatherData(this.locationName);
  };
}
