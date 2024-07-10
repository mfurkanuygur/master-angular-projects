// import { Component, Input, OnInit } from '@angular/core';
// import { ChunkedService } from '../../chunked/chunked.service';
// import { OneDayDetailComponent } from '../../components/one-day-detail/one-day-detail.component';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-detailpage',
//   standalone: true,
//   imports: [CommonModule,OneDayDetailComponent],
//   templateUrl: './detailpage.component.html',
//   styleUrl: './detailpage.component.css',
// })
// export class DetailpageComponent  {
//   @Input() detailWeather: any;
//   remainingDays: any;
//   dailyWeathers: any;

//   constructor(private chunkedService: ChunkedService) {}
//   ngOnInit(): void {
//     console.log(this.detailWeather, 'veriiiiiiii');
    
//     if (this.detailWeather ) {
//       console.log(this.detailWeather, 'veriiiiiiii');
//       this.dailyWeathers = this.chunkedService.dailyWeathers(
//         this.detailWeather[0]
//       );
//       this.remainingDays = this.chunkedService.remainingDays(
//         this.detailWeather
//       );
//     }
//   }
// }
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChunkedService } from '../../chunked/chunked.service';
import { OneDayDetailComponent } from '../../components/one-day-detail/one-day-detail.component';
import { CommonModule } from '@angular/common';
import { DailyDetailComponent } from '../../components/daily-detail/daily-detail.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [CommonModule, OneDayDetailComponent,DailyDetailComponent,LoadingComponent],
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
})
export class DetailpageComponent implements OnInit, OnChanges {
  @Input() detailWeather: any;
  dailyWeathers: any;
  remainingDays: any;

  constructor(private chunkedService: ChunkedService) {}

  ngOnInit(): void {
    this.updateWeatherDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['detailWeather']) {
      this.updateWeatherDetails();
    }
  }

  updateWeatherDetails(): void {
    if (this.detailWeather) {
      this.dailyWeathers = this.chunkedService.dailyWeathers(this.detailWeather)[0];
      this.remainingDays = this.chunkedService.remainingDays(this.detailWeather);
    }
  }
}
