import { Component } from '@angular/core';

import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-page-current-weather',
  templateUrl: 'current-weather.page.html',
  styleUrls: ['current-weather.page.scss']
})
export class CurrentWeatherPage {
  currentWeather: Weather;

  constructor(private weather: WeatherService) {}

  ionViewDidEnter() {
    this.weather.current().subscribe(w => (this.currentWeather = w));
  }
}
