import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { CurrentWeatherPage } from '../pages/current-weather/current-weather';
import { ForecastPage } from '../pages/forecast/forecast';
import { TabsPage } from '../pages/tabs/tabs';
import { UVIndexPage } from '../pages/uv-index/uv-index';
import { WeatherProvider } from '../providers/weather/weather';

@NgModule({
  declarations: [
    MyApp,
    CurrentWeatherPage,
    ForecastPage,
    TabsPage,
    UVIndexPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CurrentWeatherPage,
    ForecastPage,
    TabsPage,
    UVIndexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider
  ]
})
export class AppModule {}
