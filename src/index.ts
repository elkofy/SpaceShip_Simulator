import { Observer, EventManager } from "./EventManager";
import { VeryLegacyCode, DecoratorA, DecoratorB } from "./Decorator";
import { OldClassCreator } from "./Factory";

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
eventManager.emit("mauvais resultat", { name: "hehe" });

const oldClass = new VeryLegacyCode();
const decoratorA = new DecoratorA(oldClass);
const decoratorB = new DecoratorB(oldClass);

//console.log(oldClass.veryComplex());
//console.log(decoratorA.veryComplex());
//console.log(decoratorB.veryComplex());

const OGFactory = new OldClassCreator();
const decorator = OGFactory.factoryMethod("decA");
console.log(decorator.veryComplex());
