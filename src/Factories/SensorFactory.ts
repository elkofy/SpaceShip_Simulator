import { Sensor, MotionSensor, HeatSensor, isMotion, company } from "../Types";

export interface SensorFactory {
  createBasicHeatsensor(): Sensor;
  createBasicMotionsensor(): Sensor;
}

export class SensorFactoryImpl implements SensorFactory {
    createBasicHeatsensor(): Sensor {
    return {
      id: "H00DHZU",
      type: {
        temperature: 0,
        company: company.NASA,
      },
    };
  }
  createBasicMotionsensor(): Sensor {
    return {
      id: "H00DHZU",
      type: {
        speed: 0,
        company: company.BOEING,
      },
    };
  }
}