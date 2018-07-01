import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  template: '<span>{{ temperature | temperature : scale }}</span>',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  @Input() temperature: number;
  @Input() scale: string;
}
