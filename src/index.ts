import { Observer, EventManager } from "./EventManager";
import { VeryLegacyCode, DecoratorA, DecoratorB } from "./Decorator";
import { OldClassCreator } from "./Factory";
import type { HeatSensor, MotionSensor, Sensor } from "./Types";
import { company } from "./Types";
import { Spaceship } from "./Class/Spaceship";
import { SensorFactoryImpl } from "./Factories/SensorFactory";
import { Cockpit } from "./Class/Cockpit";

const eventManager = EventManager.getInstance();
const observerComptable: Observer = {
  update(data: any) {
    console.log("Je suis comptable", data);
  },
};

const observerDeveloper: Observer = {
  update(data) {
    console.log("Je suis dev");
  },
};
const observerPatron: Observer = {
  update(data) {
    console.log("Je suis Patrron");
  },
};

eventManager.on("mauvais resultat", observerComptable);
eventManager.on("réduction salaire", observerComptable);
eventManager.on("mauvais resultat", observerPatron);
eventManager.on("mauvais resultat", observerComptable);
//eventManager.emit("mauvais resultat", { name: "hehe" });

const oldClass = new VeryLegacyCode();
const decoratorA = new DecoratorA(oldClass);
const decoratorB = new DecoratorB(oldClass);

//console.log(oldClass.veryComplex());
//console.log(decoratorA.veryComplex());
//console.log(decoratorB.veryComplex());

const OGFactory = new OldClassCreator();
const decorator = OGFactory.factoryMethod("decA");
//console.log(decorator.veryComplex());
eventManager.on("mauvais resultat", observerComptable);

let sensor_1 = SensorFactoryImpl.prototype.createBasicHeatsensor();
let sensor_2 = SensorFactoryImpl.prototype.createBasicMotionsensor();
const cockpitObeserver: Observer = {
  update(data) {
    console.log("data", data);
  },
};

let Sensors: Sensor[] = [sensor_1, sensor_2];
let cockpit = new Cockpit("Cockpit_1", cockpitObeserver);
const Ariane = new Spaceship("ariane", Sensors);
eventManager.on(
  Ariane.getSensorType(sensor_1.id) || "unkown",
  cockpitObeserver
);
Ariane.emitSensorValue(sensor_1.id);
//console.log(Ariane.getSensorValue(sensor_1.id));
