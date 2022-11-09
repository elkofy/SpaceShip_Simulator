import { Observer, EventManager } from "./EventManager";
import { VeryLegacyCode, DecoratorA, DecoratorB } from "./Decorator";
import { OldClassCreator } from "./Factory";
import type { HeatSensor,MotionSensor,Sensor } from './Types';
import  { company } from './Types';
import { Spaceship } from "./Class/SpaceShip";
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
let heatSensor:HeatSensor = {
  temperature:55,
  company: company.NASA
}
let motionSensor:MotionSensor = {
  speed:55,
  company: company.BOEING
}
let sensor_1:Sensor = {
  id:'H00DHZU',
  type:heatSensor,
}
let sensor_2:Sensor = {
  id:'H00DHZU',
  type:motionSensor,
}
let Sensors:Sensor[] = [sensor_1,sensor_2]

const Ariane= new Spaceship('ariane',Sensors);
Ariane.getSensorValue(sensor_1.id)