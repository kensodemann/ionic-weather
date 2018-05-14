import { Component } from '@angular/core';

import { Weather } from '../../models/weather';

@Component({
  selector: 'app-page-current-weather',
  templateUrl: 'current-weather.page.html',
  styleUrls: ['current-weather.page.scss']
})
export class CurrentWeatherPage {
  currentWeather: Weather;

  constructor() {}

  ionViewDidEnter() {
    this.currentWeather = {
      description: 'Sunny',
      temperature: 288.15,
      highTemperature: 42.0,
      lowTemperature: 64.0,
      conditionIcon: 'assets/imgs/sunny.png',
      conditionRank: 1,
      date: new Date()
    };
  }
}
