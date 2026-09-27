import type { ChartPoint } from "@/types";

type Handler = (point: ChartPoint) => void;

export class WebSocketService {
  private timer: number | undefined;
  private attempts = 0;

  constructor(private readonly onMessage: Handler) {}

  connect() {
    this.attempts = 0;
    this.timer = window.setInterval(() => {
      const previous = Date.now() % 1000;
      this.onMessage({
        date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        revenue: 28000 + (previous % 7000),
        orders: 320 + (previous % 80),
        users: 1200 + (previous % 300)
      });
    }, 5000);
  }

  disconnect() {
    if (this.timer) window.clearInterval(this.timer);
    this.timer = undefined;
  }

  reconnect() {
    this.disconnect();
    this.attempts += 1;
    window.setTimeout(() => this.connect(), Math.min(1000 * this.attempts, 5000));
  }
}