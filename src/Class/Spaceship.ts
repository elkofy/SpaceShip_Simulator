import { EventManager } from "../EventManager";
import { Sensor, MotionSensor, HeatSensor, isMotion } from "../Types";

export class Spaceship {
  name: string;
  shieldsStaus: boolean = false;
  threatLevel: number = 0;
  eventManager: EventManager = EventManager.getInstance();

  sensors: Sensor[] = [];

  constructor(name: string, sensors: Sensor[]) {
    this.name = name;
    this.sensors = sensors;
  }

  changeShieldStatus() {
    this.shieldsStaus = !this.shieldsStaus;
  }

  getThreatLevel() {}

  setThratLevel() {}

  getSensor(id: string): Sensor | undefined {
    return this.sensors.find((sensor) => sensor.id === id);
  }
  addSensor(sensor: Sensor) {
    this.sensors.push(sensor);
  }

  getSensorValue(id: string): number | undefined {
    const sensor = this.getSensor(id);
    let sensorValue: number | undefined;

    isMotion(sensor?.type)
      ? (sensorValue = sensor?.type.speed)
      : (sensorValue = sensor?.type?.temperature);
    return sensorValue;
  }

  getSensorType(id: string): string | undefined {
    const sensor = this.getSensor(id);
    let sensorType: string | undefined;
    isMotion(sensor?.type) ? (sensorType = "motion") : (sensorType = "heat");
    return sensorType;
  }

  emitSensorValue(id: string) {
    const sensorValue = this.getSensorValue(id);
    const sensorType = this.getSensorType(id) || "unknown";
    if (sensorValue!==undefined) {
      console.log(sensorType, sensorValue);
      this.eventManager.emit(sensorType, sensorValue);
    }
    return[ sensorType, sensorValue];
  }
}
