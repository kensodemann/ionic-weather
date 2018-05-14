import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('handles undefied inputs', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(undefined, 'C')).toEqual('');
    expect(pipe.transform(null, 'C')).toEqual('');
  });

  it('defaults to kelvin scale', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(287)).toEqual('287 K');
  });

  it('returns empty string for unknown scales', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(287, 'B')).toEqual('');
  });

  it('converts freezing to celcius properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(273.15, 'C')).toEqual('0 ℃');
  });

  it('converts freezing to fahrenheit properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(273.15, 'F')).toEqual('32 ℉');
  });

  it('converts boiling to celcius properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(373.15, 'C')).toEqual('100 ℃');
  });

  it('converts boiling to fahrenheit properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(373.15, 'F')).toEqual('212 ℉');
  });

  it('converts middle temps to celcius properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(288.15, 'C')).toEqual('15 ℃');
  });

  it('converts middle temps to fahrenheit properly', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(288.15, 'F')).toEqual('59 ℉');
  });

  it('rounds to the nearest degree', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(288.65, 'F')).toEqual('60 ℉');
    expect(pipe.transform(288.65, 'C')).toEqual('16 ℃');
    expect(pipe.transform(288.65, 'K')).toEqual('289 K');
    expect(pipe.transform(288.40, 'F')).toEqual('59 ℉');
    expect(pipe.transform(288.55, 'C')).toEqual('15 ℃');
    expect(pipe.transform(288.45, 'K')).toEqual('288 K');
  });
});
