import { type WebSocket } from 'ws';

export type SessionMap = Map<string, {
  host: WebSocket,
  clients: Set<WebSocket>
}>
