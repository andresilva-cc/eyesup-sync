import type { Controller } from '../types/Controller';
import type { ErrorMessage, JoinSessionMessage, SessionJoinedMessage, SyncRequestMessage } from '../types/Message';

export default {
  handle: (sessions, socket, message) => {
    const { sessionId } = message;

    if (sessions.has(sessionId)) {
      sessions.get(sessionId)?.clients.add(socket);

      const response: SessionJoinedMessage = {
        type: 'session-joined',
        sessionId,
      };
      socket.send(JSON.stringify(response));

      const request: SyncRequestMessage = {
        type: 'sync-request',
        sessionId,
      };
      sessions.get(sessionId)?.host.send(JSON.stringify(request));
    }
    else {
      const response: ErrorMessage = {
        type: 'error',
        code: 'session_not_found',
        message: 'Session not found',
      };
      socket.send(JSON.stringify(response));
    }
  },
} as Controller<JoinSessionMessage>;
