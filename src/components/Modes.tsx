import { MessageCircle, Mic, Video, MicOff, VideoOff } from 'react-feather';
import type { Mode } from '../types';

interface ModesProps {
  value?: Mode;
  onChange?: (mode: Mode) => void;
}

export default function Modes({ value = 'chat', onChange }: ModesProps) {
  const handleModeClick = (targetMode: 'chat' | 'audio' | 'video') => {
    if (!onChange) return;

    if (targetMode === 'chat') {
      onChange('chat');
    } else if (targetMode === 'audio') {
      // Toggle between audio and audio-paused
      if (value === 'audio') {
        onChange('audio-paused');
      } else {
        onChange('audio');
      }
    } else if (targetMode === 'video') {
      // Toggle between video and video-paused
      if (value === 'video') {
        onChange('video-paused');
      } else {
        onChange('video');
      }
    }
  };

  return (
    <div className="flex gap-1 bg-slate-50 rounded-full">
      <button
        onClick={() => handleModeClick('chat')}
        className={`btn-icon p-4 ${value === 'chat' ? 'bg-white shadow-sm' : ''}`}
        aria-label="Chat mode"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <button
        onClick={() => handleModeClick('audio')}
        className={`btn-icon p-4 ${(value === 'audio' || value === 'audio-paused') ? 'bg-white shadow-sm' : ''}`}
        aria-label={value === 'audio-paused' ? 'Resume audio' : 'Audio mode'}
      >
        {value === 'audio-paused' ? (
          <MicOff className="w-6 h-6 text-red-500" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>

      <button
        onClick={() => handleModeClick('video')}
        className={`btn-icon p-4 ${(value === 'video' || value === 'video-paused') ? 'bg-white shadow-sm' : ''}`}
        aria-label={value === 'video-paused' ? 'Resume video' : 'Video mode'}
      >
        {value === 'video-paused' ? (
          <VideoOff className="w-6 h-6 text-red-500" />
        ) : (
          <Video className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
