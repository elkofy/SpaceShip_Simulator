interface ICommand {
  execute(): void;
}

interface ISwitchCommand {
  execute(commandName: string): void;
}

export class Commander {
  commands: { [id: string]: ICommand };
  history: [number, string][];

  constructor() {
    this.commands = {};
    this.history = [];
  }

  showHistory(): void {
    this.history.forEach((row) => {
      console.log(`${row[0]} : ${row[1]}`);
    });
  }

  register(commandName: string, command: ICommand): void {
    this.commands[commandName] = command;
  }

  execute(commandName: string): void {
    if (commandName in this.commands) {
      this.commands[commandName].execute();
      this.history.push([Date.now(), commandName]);
    } else {
      console.log(`Command [${commandName}] not recognised`);
    }
  }

  replayLast(numberOfCommands: number): void {
    const commands = this.history.slice(
      this.history.length - numberOfCommands,
      this.history.length
    );
    commands.forEach((command) => {
      this.commands[command[1]].execute();
    });
  }
}

export class ShieldChangeStatusCommand implements ISwitchCommand {
  private shieldStatus: boolean;
  constructor(shieldStatus: boolean) {
    this.shieldStatus = shieldStatus;
  }

  execute(): void {
    console.log("ShieldOnCommand.execute()");
  }
}
export class MissileLaunchCommand implements ISwitchCommand {
  missile: number;

  constructor(missile: number) {
    this.missile = missile;
  }

  execute(): void {
    console.log("missile launched");
  }
}
