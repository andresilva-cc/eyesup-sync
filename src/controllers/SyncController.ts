import type { Controller } from '../types/Controller';
import type { SyncMessage } from '../types/Message';

export default {
  handle: (sessions, socket, message, sessionId) => {
    sessions.get(sessionId as string)?.clients.forEach((client) => {
      if (client !== socket && client.readyState === socket.OPEN) {
        const response: SyncMessage = {
          type: 'sync',
          sessionId: sessionId as string,
          payload: message.payload
        }
        client.send(JSON.stringify(response));
      }
    });
  }
} as Controller<SyncMessage>
