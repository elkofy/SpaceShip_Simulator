import { HeatSensor, isMotion, MotionSensor } from "../Types";
import { Message, speedMessage, temperatureMessage } from "./Message";

export class Sensor {
  id: string;
  company: string;
  type: HeatSensor | MotionSensor;

  constructor(id: string, company: string, type: HeatSensor | MotionSensor) {
    this.id = id;
    this.company = company;
    this.type = type;
  }

  sendMessage(eventManager: any) {
    let msg: Message;
    isMotion(this.type)
      ? (msg = new speedMessage(String(this.type.speed)))
      : (msg = new temperatureMessage(String(this.type.temperature)));
    eventManager.emit(this.getSensorType(), msg);
  }

  getSensorValue() {
    return isMotion(this.type) ? this.type.speed : this.type.temperature;
  }

  getSensorType() {
    return isMotion(this.type) ? "motion" : "heat";
  }

  increaseSensorValue() {
    isMotion(this.type) ? (this.type.speed += 1) : (this.type.temperature += 1);
    
  }
  decreaseSensorValue() {
    let isSpeedNull = isMotion(this.type) ? this.type.speed == 0 : false;
    isMotion(this.type)
      ? isSpeedNull
        ? (this.type.speed -= 1)
        : (this.type.speed = 0)
      : (this.type.temperature -= 1);
  }
}
