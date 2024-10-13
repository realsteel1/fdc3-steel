export interface MessageRouter {
  publish(topic: string, message: unknown): void;
  subscribe(topic: string, callback: (message: unknown) => void): void;
  unsubscribe(topic: string, callback: (message: unknown) => void): void;
  close(): void;
}
