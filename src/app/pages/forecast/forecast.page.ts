import { Component, OnInit } from '@angular/core';

import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-page-forecast',
  templateUrl: 'forecast.page.html',
  styleUrls: ['forecast.page.scss']
})
export class ForecastPage implements OnInit {
  weather: Array<Weather> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.forecast().subscribe(w => (this.weather = w.summary));
  }
}
