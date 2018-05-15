import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Forecast } from '../models/forecast';
import { UVIndex } from '../models/uv-index';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appId = '0b663aa131e512cef7bc3de17fe39bb7';
  private baseUrl = 'http://api.openweathermap.org/data/2.5';

  private latitude = 43.5709016;
  private longitude = -89.7707362;

  private sunny = 1;
  private cloudy = 10;
  private lightRain = 20;
  private shower = 30;
  private fog = 40;
  private sunnyThunderStorm = 50;
  private thunderStorm = 60;
  private snow = 70;

  constructor(private http: HttpClient) {}

  current(): Observable<Weather> {
    return this.http
      .get(
        `${this.baseUrl}/weather?lat=${this.latitude}&lon=${
          this.longitude
        }&appid=${this.appId}`
      )
      .pipe(map((res: any) => this.unpackWeather(res)));
  }

  forecast(): Observable<Forecast> {
    return this.http
      .get(
        `${this.baseUrl}/forecast?lat=${this.latitude}&lon=${
          this.longitude
        }&appid=${this.appId}`
      )
      .pipe(map((res: any) => this.unpackForecast(res)));
  }

  uvIndex(): Observable<UVIndex> {
    return this.http
      .get(
        `${this.baseUrl}/uvi?lat=${this.latitude}&lon=${this.longitude}&appid=${
          this.appId
        }`
      )
      .pipe(map((res: any) => this.unpackUVIndex(res)));
  }

  private unpackForecast(res: any): Forecast {
    let currentDay: Array<Weather>;
    let prevDate: number;
    const forecast: Forecast = {
      daily: [],
      summary: []
    };

    res.list.forEach(item => {
      const w = this.unpackWeather(item);
      if (w.date.getDate() != prevDate) {
        prevDate = w.date.getDate();
        currentDay = [];
        forecast.daily.push(currentDay);
        forecast.summary.push(w);
      }
      currentDay.push(w);
    });

    this.processSummaries(forecast);

    return forecast;
  }

  private processSummaries(forecast: Forecast) {
    forecast.summary.forEach((s, i) => {
      forecast.daily[i].forEach(d => {
        s.lowTemperature =
          !s.lowTemperature || d.temperature < s.lowTemperature
            ? d.temperature
            : s.lowTemperature;
        s.highTemperature =
          !s.highTemperature || d.temperature > s.highTemperature
            ? d.temperature
            : s.highTemperature;
        if (d.conditionRank > s.conditionRank) {
          s.conditionIcon = d.conditionIcon;
          s.conditionRank = d.conditionRank;
        }
      });
    });
  }

  private unpackUVIndex(res: any): UVIndex {
    const descriptions = ['Low', 'Moderate', 'High', 'Very High', 'Extreme'];
    const level = this.riskLevel(res.value);
    return {
      value: res.value,
      riskLevel: level,
      riskLevelDescription: descriptions[level]
    };
  }

  private unpackWeather(res: any): Weather {
    return {
      description: res.weather[0].main,
      temperature: res.main.temp,
      conditionIcon: this.conditionIcon(res.weather[0].id),
      conditionRank: this.conditionRank(res.weather[0].id),
      date: new Date(res.dt * 1000)
    };
  }

  private conditionRank(condition): number {
    let rank = 0;
    if (condition >= 200 && condition <= 229) {
      rank = this.thunderStorm;
    }

    if (condition >= 230 && condition <= 299) {
      rank = this.sunnyThunderStorm;
    }

    if (condition >= 300 && condition <= 399) {
      rank = this.lightRain;
    }

    if (condition >= 500 && condition <= 599) {
      rank = this.shower;
    }

    if ((condition >= 600 && condition <= 699) || condition === 903) {
      rank = this.snow;
    }

    if (condition >= 701 && condition <= 771) {
      rank = this.fog;
    }

    if (condition === 800 || condition === 904) {
      rank = this.sunny;
    }

    if (condition > 800 && condition < 810) {
      rank = this.cloudy;
    }

    return rank;
  }

  private conditionIcon(condition: number): string {
    let fileName;
    switch (this.conditionRank(condition)) {
      case this.cloudy:
        fileName = 'cloudy';
        break;

      case this.fog:
        fileName = 'fog';
        break;

      case this.lightRain:
        fileName = 'light-rain';
        break;

      case this.shower:
        fileName = 'shower';
        break;

      case this.snow:
        fileName = 'snow';
        break;

      case this.sunny:
        fileName = 'sunny';
        break;

      case this.sunnyThunderStorm:
        fileName = 'sunny-tstorm';
        break;

      case this.thunderStorm:
        fileName = 'tstorm';
        break;

      default:
        fileName = 'dunno';
        break;
    }

    return `assets/imgs/${fileName}.png`;
  }

  private riskLevel(value: number) {
    if (value < 3) {
      return 0;
    }
    if (value < 6) {
      return 1;
    }
    if (value < 8) {
      return 2;
    }
    if (value < 11) {
      return 3;
    }
    return 4;
  }
}
