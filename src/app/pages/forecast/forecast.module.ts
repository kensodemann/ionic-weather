import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ForecastPage } from './forecast.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: ForecastPage }])
  ],
  declarations: [ForecastPage]
})
export class ForecastPageModule {}
