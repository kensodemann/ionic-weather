import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ConditionComponent } from './condition/condition.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    ConditionComponent,
    DailyForecastComponent,
    TemperatureComponent
  ],
  exports: [ConditionComponent, DailyForecastComponent, TemperatureComponent]
})
export class ComponentsModule {}
