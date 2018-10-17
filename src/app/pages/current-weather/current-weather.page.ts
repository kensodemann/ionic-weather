import { Component } from '@angular/core';

import { IconMapService } from '../../services/icon-map.service';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-page-current-weather',
  templateUrl: 'current-weather.page.html',
  styleUrls: ['current-weather.page.scss']
})
export class CurrentWeatherPage {
  currentWeather: Weather;
  myColor: string;

  constructor(
    public iconMap: IconMapService,
    private weather: WeatherService
  ) {}

  changeColor() {
    this.myColor = this.myColor ? undefined : 'red';
  }

  ionViewDidEnter() {
    this.weather.current().subscribe(w => (this.currentWeather = w));
  }
}
