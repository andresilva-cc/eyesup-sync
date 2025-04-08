import type { Controller } from '../types/Controller';
import type { ResumeMessage } from '../types/Message';

export default {
  handle: (sessions, socket, _message, sessionId) => {
    sessions.get(sessionId as string)?.clients.forEach((client) => {
      if (client !== socket && client.readyState === socket.OPEN) {
        const response: ResumeMessage = {
          type: 'resume',
          sessionId: sessionId as string,
        };
        client.send(JSON.stringify(response));
      }
    });
  },
} as Controller<ResumeMessage>;
