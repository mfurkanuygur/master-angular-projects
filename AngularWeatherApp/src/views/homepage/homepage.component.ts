import { Component, OnInit } from '@angular/core';
import { EnterFormComponent } from '../../components/enter-form/enter-form.component';
import { WeatherService } from '../../request/weather.service';
import { DisplayLocationDataComponent } from '../../components/display-location-data/display-location-data.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [EnterFormComponent,DisplayLocationDataComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  // defaultLocation: string = 'Kayseri';
  // currentWeather: any;
  // weatherForecast: any;
  // constructor(private weatherService: WeatherService) {}

  // ngOnInit(): void {
  //   this.weatherService.getCurrentWeather().subscribe((data) => {
  //     this.currentWeather = data;
  //   });
  //   console.log(this.currentWeather,"home")
  // }
}
