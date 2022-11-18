import { EventManager, Observer } from "../EventManager";
import { MotionSensor, HeatSensor, isMotion } from "../Types";
import { Message } from "./Message";
import { Sensor } from "./Sensor";

export class Spaceship {
  name: string;
  shieldsStatus: boolean = false;
  threatLevel: number = 0;
  cockpit: Observer;
  eventManager: EventManager = EventManager.getInstance();
  sensors: any[] = [];

  constructor(name: string, cockpit: Observer, sensors: any[]) {
    this.name = name;
    this.cockpit = cockpit;
    this.sensors = sensors;
  }

  changeShieldStatus() {
    this.shieldsStatus = !this.shieldsStatus;
    console.log(`Shields are ${this.shieldsStatus ? "ON" : "OFF"}`);
  }

  getShieldsStatus() {
    console.log(`Shields are ${this.shieldsStatus ? "ON" : "OFF"}`);
    return this.shieldsStatus;
  }

  fireMissile() {
    this.eventManager.emit("missile", this);
  }

  getThreatLevel() {
    return this.threatLevel;
  }

  setThreatLevel(threat: number) {
    this.threatLevel = threat > 0 ? threat : 0;
    if (threat > 0 && this.getShieldsStatus() === false) {
      this.changeShieldStatus();
    }
    else if (threat == 0 && this.getShieldsStatus() === true) {
      this.changeShieldStatus();
    }
    
  }

  getSensor(id: string) {
    return this.sensors.find((sensor) => sensor.id === id);
  }

  addSensor(sensor: any) {
    this.sensors.push(sensor);
  }

  getSensorValue(id: string): number | undefined {
    const sensor = this.getSensor(id);
    if (sensor) {
      return isMotion(sensor?.type)
        ? sensor?.type.speed
        : (sensor?.type.temperature as number);
    }
  }

  getSensorType(id: string): string | undefined {
    const sensor = this.getSensor(id);
    return isMotion(sensor?.type) ? "motion" : "heat";
  }

  emitSensorValue(id: string) {
    const sensor: Sensor = this.getSensor(id);
    const sensorValue = this.getSensorValue(id);
    const sensorType = this.getSensorType(id) || "unknown";
    if (sensorValue !== undefined) {
      if (sensorValue > 0) {
        this.setThreatLevel(this.getThreatLevel() + 1);
      } else if (sensorValue == 0) {
        this.setThreatLevel(0);
      }
      sensor.sendMessage(this.eventManager);
    }
    return [sensorType, sensorValue];
  }
}
