import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { empty } from 'rxjs/observable/empty'; // TODO: remove after dev

import { Forecast } from '../../models/forecast';
import { UVIndex } from '../../models/uvindex';
import { Weather } from '../../models/weather';

@Injectable()
export class WeatherProvider {
  // private appId = 'goGetOneAndPutItHere';
  // private baseUrl = 'http://api.openweathermap.org/data/2.5';

  // private latitude = 43.074237;
  // private longitude = -89.381012;

  // private sunny = 1;
  // private cloudy = 10;
  // private lightRain = 20;
  // private shower = 30;
  // private fog = 40;
  // private sunnyThunderStorm = 50;
  // private thunderStorm = 60;
  // private snow = 70;

  constructor(public http: HttpClient) {}

  current(): Observable<Weather> {
    return empty();
  }

  forecast(): Observable<Forecast> {
    return empty();
  }

  uvIndex(): Observable<UVIndex> {
    return empty();
  }

  // private conditionRank(condition): number {
  //   let rank = 0;
  //   if (condition >= 200 && condition <= 229) {
  //     rank = this.thunderStorm;
  //   }

  //   if (condition >= 230 && condition <= 299) {
  //     rank = this.sunnyThunderStorm;
  //   }

  //   if (condition >= 300 && condition <= 399) {
  //     rank = this.lightRain;
  //   }

  //   if (condition >= 500 && condition <= 599) {
  //     rank = this.shower;
  //   }

  //   if ((condition >= 600 && condition <= 699) || condition === 903) {
  //     rank = this.snow;
  //   }

  //   if (condition >= 701 && condition <= 771) {
  //     rank = this.fog;
  //   }

  //   if (condition === 800 || condition === 904) {
  //     rank = this.sunny;
  //   }

  //   if (condition > 800 && condition < 810) {
  //     rank = this.cloudy;
  //   }

  //   return rank;
  // }

  // private conditionIcon(condition: number): string {
  //   let fileName;
  //   switch (this.conditionRank(condition)) {
  //     case this.cloudy:
  //       fileName = 'cloudy';
  //       break;

  //     case this.fog:
  //       fileName = 'fog';
  //       break;

  //     case this.lightRain:
  //       fileName = 'light-rain';
  //       break;

  //     case this.shower:
  //       fileName = 'shower';
  //       break;

  //     case this.snow:
  //       fileName = 'snow';
  //       break;

  //     case this.sunny:
  //       fileName = 'sunny';
  //       break;

  //     case this.sunnyThunderStorm:
  //       fileName = 'sunny-tstorm';
  //       break;

  //     case this.thunderStorm:
  //       fileName = 'tstorm';
  //       break;

  //     default:
  //       fileName = 'dunno';
  //       break;
  //   }

  //   return `assets/imgs/${fileName}.png`;
  // }

  // private riskLevel(value: number) {
  //   if (value < 3) {
  //     return 0;
  //   }
  //   if (value < 6) {
  //     return 1;
  //   }
  //   if (value < 8) {
  //     return 2;
  //   }
  //   if (value < 11) {
  //     return 3;
  //   }
  //   return 4;
  // }
}
