import CreateSessionController from './controllers/CreateSessionController';
import JoinSessionController from './controllers/JoinSessionController';
import SyncController from './controllers/SyncController';
import StartController from './controllers/StartController';
import PauseController from './controllers/PauseController';
import ResumeController from './controllers/ResumeController';
import ResetController from './controllers/ResetController';
import { Controller } from './types/Controller';

interface Routes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: Controller<any>['handle'];
}

export const routes: Routes = {
  'create-session': CreateSessionController.handle,
  'join-session': JoinSessionController.handle,
  'sync': SyncController.handle,
  'start': StartController.handle,
  'pause': PauseController.handle,
  'resume': ResumeController.handle,
  'reset': ResetController.handle,
};
