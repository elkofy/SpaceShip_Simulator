class Message {
  constructor(
    public readonly text: string,
    public readonly createdAt: Date = new Date(),
  ) {}
}