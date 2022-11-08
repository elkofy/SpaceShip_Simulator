import { VeryLegacyCode,Decorator,DecoratorA,DecoratorB } from "./Decorator";

export abstract class OldClassFactory {
  public abstract factoryMethod(type: string): VeryLegacyCode;
}
export class OldClassCreator extends OldClassFactory {
  public factoryMethod(type: string): VeryLegacyCode {
    switch (type) {
      case "legacy":
        return new VeryLegacyCode();
      case "dec":
        return new Decorator(new VeryLegacyCode());
      case "decA":
        return  new DecoratorA(new VeryLegacyCode());
      case "decB":
        return new DecoratorB(new VeryLegacyCode());
      default:
        return new VeryLegacyCode();
    }
  }
}
