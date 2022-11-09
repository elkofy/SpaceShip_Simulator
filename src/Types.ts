export enum company {
  NASA = "NASA",
  SPACEX = "SPACE X",
  BOEING = "BOEING",
}

export type HeatSensor = {
  temperature: number;
  company: company;
};

export type MotionSensor = {
  speed: number;
  company: company;
};

export type Sensor = {
  id: string;
  type: HeatSensor | MotionSensor | undefined;
};
export function isMotion(
  sensor: HeatSensor | MotionSensor | undefined
): sensor is MotionSensor {
  return (sensor as MotionSensor).speed !== undefined;
}
