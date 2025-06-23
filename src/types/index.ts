// Mode constants
export const MODE = {
  CHAT: 'chat',
  AUDIO: 'audio',
  VIDEO: 'video',
  AUDIO_PAUSED: 'audio-paused',
  VIDEO_PAUSED: 'video-paused',
} as const;

export const MODES = Object.values(MODE);
export type Mode = typeof MODES[number];
