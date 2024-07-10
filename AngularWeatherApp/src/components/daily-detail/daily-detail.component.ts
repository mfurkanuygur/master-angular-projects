import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.css'],
})
export class DailyDetailComponent implements OnChanges {
  @Input() weather: any;
  dayName: string = '';
  minTemp: any;
  maxTemp: any;

  mintempIcon:string="assets/mintemp.png"
  maxtempIcon:string="assets/maxtemp.png"
  ngOnChanges(changes: SimpleChanges): void {
    if (this.weather && this.weather.length) {
      this.setDayName();
      this.setTemperatures();
    }
  }

  setDayName(): void {
    const day = new Date(this.weather[0].dt_txt).getDay();
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    this.dayName = dayNames[day];
  }

  setTemperatures(): void {
    const sortedByMinTemp = [...this.weather].sort(
      (a, b) => a.main.temp_min - b.main.temp_min
    );
    const sortedByMaxTemp = [...this.weather].sort(
      (a, b) => b.main.temp_max - a.main.temp_max
    );
    this.minTemp = Math.floor(sortedByMinTemp[0].main.temp_min);
    this.maxTemp = Math.floor(sortedByMaxTemp[0].main.temp_max);
  }

  floorValue(value: number): number {
    return Math.floor(value);
  }
  ceilValue(value: number): number {
    return Math.ceil(value);
  }
}
