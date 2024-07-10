import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChunkedService {
  constructor() {}

  *chunked(arr: any[], size: number) {
    for (let i = 0; i < arr?.length; i += size) {
      yield arr.slice(i, i + size);
    }
  }

  dailyWeathers(cityDetails: any) {
    return [...this.chunked(cityDetails?.list, 8)];
  }

  remainingDays(cityDetails: any) {
    const dateNow = new Date().toISOString().slice(0, 10);
    const remainingDayData = cityDetails?.list.filter(
      (item: any) => item.dt_txt.slice(0, 10) !== dateNow
    );
    return [...this.chunked(remainingDayData, 8)];
  }
}
