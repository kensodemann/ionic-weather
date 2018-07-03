import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';

import { ComponentsModule } from '../../components/components.module';
import { ForecastPage } from './forecast.page';
import { WeatherService } from '../../services/weather.service';

describe('ForecastPage', () => {
  let component: ForecastPage;
  let fixture: ComponentFixture<ForecastPage>;

  let weatherServiceSpy;

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', {
      forecast: empty()
    });
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
      declarations: [ForecastPage],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
