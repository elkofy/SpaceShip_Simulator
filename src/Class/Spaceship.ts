import { Sensor, MotionSensor, HeatSensor, isMotion } from "../Types";

export class Spaceship {
  name: string;
  sensors: Sensor[] = [];

  constructor(name: string, sensors: Sensor[]) {
    this.name = name;
    this.sensors = sensors;
  }

  addSensor(sensor: Sensor) {
    this.sensors.push(sensor);
  }
  getSensor(id: string): Sensor | undefined {
    return this.sensors.find((sensor) => sensor.id === id);
  }

  getSensorValue(id: string): number | undefined {
    const sensor = this.getSensor(id);
    let sensorValue: any;

    isMotion(sensor?.type)
      ? (sensorValue = sensor?.type.speed)
      : (sensorValue = sensor?.type?.temperature);
        console.log(sensorValue)
    return 0;
  }
}
