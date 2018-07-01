import { Component, Input } from '@angular/core';

import { Weather } from '../../models/weather';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {
  @Input() weather: Weather;
}
