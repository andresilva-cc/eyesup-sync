import crypto from 'crypto';

export const generateSessionId = () => {
  return crypto.randomBytes(4).toString('base64url');
};
