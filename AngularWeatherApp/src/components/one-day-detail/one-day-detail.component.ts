import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-one-day-detail',
  standalone: true,
  imports: [],
  templateUrl: './one-day-detail.component.html',
  styleUrl: './one-day-detail.component.css',
})
export class OneDayDetailComponent {
  @Input() weather: any;
  clockImagePath: string = 'assets/clock.png';
  floorValue(value: number): number {
    return Math.floor(value);
  }
  ceilValue(value: number): number {
    return Math.ceil(value);
  }
}
