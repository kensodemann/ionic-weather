import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  template: '<span>{{formattedTemperature}}</span>',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  @Input() temperature: number;
  @Input() scale: string;

  get formattedTemperature(): string {
    return this.scale === 'F' ? this.fahrenheit : this.celcius;
  }

  get celcius(): string {
    return this.temperature && `${(this.temperature - 273.15).toFixed(0)} ℃`;
  }

  get fahrenheit(): string {
    return (
      this.temperature &&
      `${((this.temperature * 9) / 5 - 459.67).toFixed(0)} ℉`
    );
  }
}
