import { Observer, EventManager } from "./EventManager";
import { VeryLegacyCode, DecoratorA, DecoratorB } from "./Decorator";
import { OldClassCreator } from "./Factory";
import type { Sensor } from "./Types";
import { Spaceship } from "./Class/Spaceship";
import { SensorFactoryImpl } from "./Factories/SensorFactory";
import { Cockpit } from "./Class/Cockpit";
import { MessageAdapter } from "./Class/MessageAdapter";
import { Message } from "./Class/Message";

const eventManager = EventManager.getInstance();

const Divider = () => {
  console.log("⭐ ============================ ⭐");
};
const Scenario = () => {
  console.log("Scenario starts");
  Divider();
  console.log("Sensors are created");
  let sensor_1 = SensorFactoryImpl.prototype.createBasicHeatsensor();
  Divider();
  console.log("Heat sensor is created");
  let sensor_2 = SensorFactoryImpl.prototype.createBasicMotionsensor();
  Divider();
  console.log("Motion sensor is created");
  let Sensors: Sensor[] = [sensor_1, sensor_2];
  Divider();
  console.log("CockPit is created");
  const observerCockPit: Observer = {
    update(data: Message) {
      console.log(data);
      let message = new MessageAdapter(data);
      console.log("Je suis le cockpit", message.getText());
    },
  };
  Divider();
  console.log("Spaceship is created");
  const Ariane = new Spaceship("ariane", observerCockPit, Sensors);
  Ariane.getSensorType(sensor_1.id) || "unknown";
  Ariane.getSensorType(sensor_2.id) || "unknown";

  eventManager.on(
    Ariane.getSensorType(sensor_1.id) || "unknown",
    observerCockPit
  );

  eventManager.on(
    Ariane.getSensorType(sensor_2.id) || "unknown",
    observerCockPit
  );
  Divider();
  console.log("Sensors are linked to the eventManager");
  Divider();
  console.log("Sensors send their null values to the eventManager");
  Ariane.emitSensorValue(sensor_1.id);
  Ariane.emitSensorValue(sensor_2.id);
  Divider();
  console.log("CockPit receives the null values");
  Divider();
  console.log("Spaceship displays threat level");
  console.log(Ariane.getThreatLevel());
  Divider();
  console.log("Heat is increased");
  Divider();
  sensor_1.increaseSensorValue();
  console.log("Sensors send their new values to the eventManager");
  Divider();
  Ariane.emitSensorValue(sensor_1.id);
  Ariane.getShieldsStatus();
  console.log("Spaceship is saved");
  Divider();
  console.log("Heat is decreased");
  sensor_1.decreaseSensorValue();
  Ariane.emitSensorValue(sensor_1.id);
  Divider();
  console.log("CockPit turns off the spaceshield");
  Ariane.getShieldsStatus();
  Divider();
  console.log("Spaceship is saved");
  Divider();
  console.log("Motion is increased");
  sensor_2.increaseSensorValue();
  Ariane.emitSensorValue(sensor_2.id);
  Divider();
  console.log("Spaceship is saved");
  Divider();
  console.log("Motion is decreased");
  sensor_2.decreaseSensorValue();
  Ariane.emitSensorValue(sensor_2.id);
  Divider();
  console.log("Spaceship is saved");
  /*
  console.log("Sensors send their new values to the eventManager");
  Divider();
  console.log("Motion is increased");
  Divider();
  console.log("Sensors send their new values to the eventManager");
  Divider();
  console.log("CockPit turns on the spaceshield");
  Divider();
  console.log("Spaceship is saved");
  Divider();
  console.log("Motion is decreased");
  Divider();
  console.log("Sensors send their new values to the eventManager");
  Divider();
  console.log("CockPit turns off the spaceshield");
  Divider();
  console.log("Spaceship is saved");
  Divider();
  console.log("An Asteroid is detected");
  Divider();
  console.log("Sensors send their new values to the eventManager");
  Divider();
  console.log("CockPit displays threat level");
  Divider();
  console.log("Thread level is high");
  Divider();
  console.log("Spaceship shoots missiles");
  Divider();
  console.log("Asteroid is destroyed");
  Divider();
  console.log("Spaceship is saved");
  Divider();
  console.log("Scenario ends");*/
};
Scenario();
