export interface Weather {
  description: string;
  temperature: number;
  conditionIcon: string;
  conditionRank: number;
  highTemperature?: number;
  lowTemperature?: number;
  date?: Date;
}
