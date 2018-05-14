import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, scale?: string): string {
    if (!value && value !== 0) {
      return '';
    }

    switch (scale || 'K') {
      case 'C':
        return (value - 273.15).toFixed(0) + ' ℃';

      case 'F':
        return ((value * 9 / 5) - 459.67).toFixed(0) + ' ℉';

      case 'K':
        return value.toFixed(0) + ' K';

      default:
        return '';
    }
  }
}
