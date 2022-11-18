export interface MessageFactory {
  createMessage(): Message;
}
export class Message {
  constructor(
    public readonly text: string,
    public readonly createdAt: Date = new Date()
  ) {}
  getText(): string {
    return this.text;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
}

export class MessageReversed extends Message {
  constructor(text: string, createdAt: Date = new Date()) {
    super(text.split("").reverse().join(""), createdAt);
  }

  getText(): string {
    return this.text;
  }
}

export class speedMessage extends Message {
  constructor(text: string, createdAt: Date = new Date()) {
    super(text, createdAt);
  }

  getText(): string {
    // Simulating corruption of the message
    return Math.random() < 0.5
      ? `The speed is: ${this.text} km/h`
      : `T̴h̸e̸ ̷s̷p̷e̴e̸d̷ ̷i̵s̷:̶ ̴${this.text} k̵m̸/̶h̸`;
  }
}

export class temperatureMessage extends Message {
  constructor(text: string, createdAt: Date = new Date()) {
    super(text, createdAt);
  }

  getText(): string {
    return Math.random() < 0.5
      ? `The temperature is: ${this.text} km/h`
      : `T̴h̷e̸ ̴t̸e̴m̸p̵e̴r̴a̸t̶u̴r̷e̸ ̴i̶s̴:̷ ̸ ${this.text} °̶C̵`;
  }
}
