export type Cycle = 'work' | 'rest'

export type TimerState = 'idle' | 'running' | 'paused' | 'finished';

export interface Settings {
  workDuration: number
  restDuration: number
}

export type CreateSessionMessage = {
  type: 'create-session'
}

export type SessionCreatedMessage = {
  type: 'session-created'
  sessionId: string
}

export type JoinSessionMessage = {
  type: 'join-session'
  sessionId: string
}

export type SessionJoinedMessage = {
  type: 'session-joined'
  sessionId: string
}

export type SyncRequestMessage = {
  type: 'sync-request'
  sessionId: string
}

export type SyncMessage = {
  type: 'sync'
  sessionId: string
  payload: {
    state: TimerState
    duration: number
    remaining: number
    lastTick: number | null
    currentCycle: Cycle
    settings: Settings
  }
}

export type StartMessage = {
  type: 'start'
  sessionId: string
}

export type PauseMessage = {
  type: 'pause'
  sessionId: string
}

export type ResumeMessage = {
  type: 'resume'
  sessionId: string
}

export type ResetMessage = {
  type: 'reset'
  sessionId: string
}

export type ErrorMessage = {
  type: 'error'
  code: string
  message: string
}

export type Message =
  | CreateSessionMessage
  | SessionCreatedMessage
  | JoinSessionMessage
  | SessionJoinedMessage
  | SyncRequestMessage
  | SyncMessage
  | StartMessage
  | PauseMessage
  | ResumeMessage
  | ResetMessage
  | ErrorMessage
