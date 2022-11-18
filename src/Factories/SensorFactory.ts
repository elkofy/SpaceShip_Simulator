import { Sensor } from "../Class/Sensor";
import { MotionSensor, HeatSensor, isMotion, company } from "../Types";

export interface SensorFactory {
  createBasicHeatsensor(): Sensor;
  createBasicMotionsensor(): Sensor;
}

export class SensorFactoryImpl implements SensorFactory {
  createBasicHeatsensor(): Sensor {
    return new Sensor("Temp2000", company.BOEING, {
      temperature: 0,
      company: company.BOEING,
    });
  }
  createBasicMotionsensor(): Sensor {
    return new Sensor("Speed2000", company.NASA, {
      speed: 0,
      company: company.BOEING,
    });
  }
}
