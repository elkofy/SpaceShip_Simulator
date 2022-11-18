import { Message } from "./Message";

export class MessageAdapter extends Message {
  private message: Message;
  constructor(message: Message) {
    super(message.text, message.createdAt);
    this.message = message;
  }

  getText(): string {
    let text = this.message.getText();
    let matches = text.match(/\d+/g);
    if (text.includes("s̷p̷e̴e̸d̷") || text.includes("speed")) {
      return `The speed is:  ${matches ? matches[0] : 0} km/h`;
    } else if (text.includes("t̸e̴m̸p̵e̴r̴a̸t̶u̴r̷e̸") || text.includes("temperature")) {
      return `The temperature is: ${matches ? matches[0] : 0}  °̶C̵`;
    } else {
      console.log(text);
      return "Message is beyond corrupted";
    }
  }
}
