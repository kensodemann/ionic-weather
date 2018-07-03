import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';

import { ComponentsModule } from '../../components/components.module';
import { UvIndexPage } from './uv-index.page';
import { WeatherService } from '../../services/weather.service';

describe('UvIndexPage', () => {
  let component: UvIndexPage;
  let fixture: ComponentFixture<UvIndexPage>;

  let weatherServiceSpy;

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', {
      uvIndex: empty()
    });
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
      declarations: [UvIndexPage],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
