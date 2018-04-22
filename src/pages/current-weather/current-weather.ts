import { Component } from '@angular/core';

import { Weather } from '../../models/weather';

@Component({
  selector: 'page-current-weather',
  templateUrl: 'current-weather.html'
})
export class CurrentWeatherPage {
  currentWeather: Weather;

  constructor() {}

  ionViewDidEnter() {
    this.currentWeather = {
      description: 'Sunny',
      temperature: 58.0,
      highTemperature: 42.0,
      lowTemperature: 64.0,
      conditionIcon: 'assets/imgs/sunny.png',
      conditionRank: 1,
      date: new Date()
    };
  }
}
