import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { CurrentWeatherPage } from './current-weather.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: CurrentWeatherPage }])
  ],
  declarations: [CurrentWeatherPage]
})
export class CurrentWeatherPageModule {}
