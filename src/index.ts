import 'dotenv/config';
import { type WebSocket, WebSocketServer } from 'ws';
import { routes } from './routes';
import { Message } from './types/Message';

const server = new WebSocketServer({ port: Number(process.env.PORT) });

const sessions = new Map<string, {
  host: WebSocket;
  clients: Set<WebSocket>;
}
>();

server.on('connection', (socket) => {
  let currentSession: string | undefined;

  socket.on('message', (rawMessage: string) => {
    const message = JSON.parse(rawMessage) as Message;

    if (!currentSession && 'sessionId' in message) {
      currentSession = message.sessionId;
    }

    const handler = routes[message.type];
    handler(sessions, socket, message, currentSession);
  });

  socket.on('close', () => {
    if (currentSession && sessions.has(currentSession)) {
      sessions.get(currentSession)?.clients.delete(socket);

      if (sessions.get(currentSession)?.clients.size === 0) {
        sessions.delete(currentSession);
      }
    }
  });
});
