import { Observer } from "../EventManager";

export class Cockpit {
    name: string;
    Observer: Observer;
    constructor(name: string, Observer: Observer) {
        this.name = name;
        this.Observer = Observer;
    }
  
}