import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent {
  @Input() weather: Weather;
}
