import crypto from 'crypto';

export const generateSessionId = () => {
  return crypto.randomBytes(3).toString('base64url');
}