import { MessageRouter } from './message-router';

export class PostMessageRouter implements MessageRouter {
  private listeners: Map<string, Set<(message: any) => void>> = new Map();

  constructor(
    private readonly targetWindow: Window,
    private readonly targetOrigin: string
  ) {
    this.targetWindow = targetWindow;
    this.targetOrigin = targetOrigin;
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  publish(topic: string, message: unknown): void {
    this.targetWindow.postMessage({ topic, message }, this.targetOrigin);
  }

  subscribe(topic: string, callback: (message: unknown) => void): void {
    if (!this.listeners.has(topic)) {
      this.listeners.set(topic, new Set());
    }

    this.listeners.get(topic)!.add(callback);
  }

  unsubscribe(topic: string, callback: (message: unknown) => void): void {
    this.listeners.get(topic)?.delete(callback);
  }

  private handleMessage(event: MessageEvent): void {
    if (event.origin === this.targetOrigin) {
      const { topic, message } = event.data;

      this.listeners.get(topic)?.forEach((callback) => callback(message));
    }
  }

  close(): void {
    window.removeEventListener('message', this.handleMessage.bind(this));
  }
}
