import { Component } from '@angular/core';

import { CurrentWeatherPage } from '../current-weather/current-weather';
import { ForecastPage } from '../forecast/forecast';
import { UVIndexPage } from '../uv-index/uv-index';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = CurrentWeatherPage;
  tab2Root = ForecastPage;
  tab3Root = UVIndexPage;

  constructor() {}
}
