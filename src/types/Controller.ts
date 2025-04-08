import { type WebSocket } from 'ws';
import type { SessionMap } from './Session';

export type Controller<T> = {
  handle: (
    sessions: SessionMap,
    socket: WebSocket,
    message: T,
    sessionId?: string
  ) => void;
};
