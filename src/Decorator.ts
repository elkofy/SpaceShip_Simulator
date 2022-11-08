interface VeryLegacy {
    veryComplex():string
}

export class VeryLegacyCode implements VeryLegacy {
    veryComplex(): string {
        return "I'm very legacy code"
    }
}

export class Decorator implements VeryLegacyCode {
    protected VeryLegacyCode: VeryLegacyCode;

    constructor(VeryLegacyCode: VeryLegacyCode) {
        this.VeryLegacyCode = VeryLegacyCode;
    }


    public veryComplex(): string {
        return `Decorator(${this.VeryLegacyCode.veryComplex()})`;
    }
}

export class DecoratorA extends Decorator {
    
    public veryComplex(): string {
        return `Decorator A (${super.veryComplex()})`;
    }
}

export class DecoratorB extends Decorator {
    
    public veryComplex(): string {
        return `Decorator B (${super.veryComplex()})`;
    }
}
