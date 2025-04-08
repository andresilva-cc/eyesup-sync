import type { Controller } from '../types/Controller';
import type { CreateSessionMessage, SessionCreatedMessage } from '../types/Message';
import { generateSessionId } from '../utils/string';

export default {
  handle: (sessions, socket) => {
    const newSessionId = generateSessionId();
    sessions.set(newSessionId, { host: socket, clients: new Set([socket]) });

    const response: SessionCreatedMessage = {
      type: 'session-created',
      sessionId: newSessionId,
    };
    socket.send(JSON.stringify(response));
  },
} as Controller<CreateSessionMessage>;
