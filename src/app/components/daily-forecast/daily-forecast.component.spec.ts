import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastComponent } from './daily-forecast.component';
import { TemperatureComponent } from '../temperature/temperature.component';

describe('DailyForecastComponent', () => {
  let component: DailyForecastComponent;
  let fixture: ComponentFixture<DailyForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyForecastComponent, TemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
