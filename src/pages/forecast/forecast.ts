import { Component } from '@angular/core';

import { Weather } from '../../models/weather';

@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html'
})
export class ForecastPage {
  weather: Array<Weather> = [];

  constructor() {}

  ionViewDidLoad() {
    this.weather = [
      {
        description: 'Sunny',
        temperature: 58.0,
        highTemperature: 42.0,
        lowTemperature: 64.0,
        conditionIcon: 'assets/imgs/sunny.png',
        conditionRank: 1,
        date: new Date()
      },
      {
        description: 'Fog',
        temperature: 57.299405,
        highTemperature: 44.0,
        lowTemperature: 68.299405,
        conditionIcon: 'assets/imgs/fog.png',
        conditionRank: 40,
        date: new Date()
      },
      {
        description: 'Showers',
        temperature: 44.0,
        highTemperature: 38.0,
        lowTemperature: 49.0,
        conditionIcon: 'assets/imgs/shower.png',
        conditionRank: 30,
        date: new Date()
      },
      {
        description: 'Snow',
        temperature: 28.0,
        highTemperature: 22.0,
        lowTemperature: 34.0,
        conditionIcon: 'assets/imgs/snow.png',
        conditionRank: 70,
        date: new Date()
      },
      {
        description: 'Thunder Storms',
        temperature: 67.0,
        highTemperature: 83.0,
        lowTemperature: 61.0,
        conditionIcon: 'assets/imgs/tstorm.png',
        conditionRank: 60,
        date: new Date()
      },
      {
        description: 'Sunny',
        temperature: 58.0,
        highTemperature: 42.0,
        lowTemperature: 64.0,
        conditionIcon: 'assets/imgs/sunny.png',
        conditionRank: 1,
        date: new Date()
      }
    ];
  }
}
