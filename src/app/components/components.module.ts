import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../pipes/pipes.module';
import { ConditionComponent } from './condition/condition.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';

@NgModule({
  imports: [CommonModule, IonicModule, PipesModule],
  declarations: [
    ConditionComponent,
    DailyForecastComponent,
    TemperatureComponent
  ],
  exports: [ConditionComponent, DailyForecastComponent, TemperatureComponent]
})
export class ComponentsModule {}
