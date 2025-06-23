import { MessageCircle, Mic, Video, MicOff, VideoOff } from 'react-feather';
import type { Mode } from '../types';
import { MODE } from '../types';

interface ModesProps {
  value?: Mode;
  onChange?: (mode: Mode) => void;
}

export default function Modes({ value = MODE.CHAT, onChange }: ModesProps) {
  const handleModeClick = (targetMode: 'chat' | 'audio' | 'video') => {
    if (!onChange) return;

    if (targetMode === MODE.CHAT) {
      onChange(MODE.CHAT);
    } else if (targetMode === MODE.AUDIO) {
      // Toggle between audio and audio-paused
      if (value === MODE.AUDIO) {
        onChange(MODE.AUDIO_PAUSED);
      } else {
        onChange(MODE.AUDIO);
      }
    } else if (targetMode === MODE.VIDEO) {
      // Toggle between video and video-paused
      if (value === MODE.VIDEO) {
        onChange(MODE.VIDEO_PAUSED);
      } else {
        onChange(MODE.VIDEO);
      }
    }
  };

  return (
    <div className="flex gap-1 bg-slate-50 rounded-full">
      <button
        onClick={() => handleModeClick(MODE.CHAT)}
        className={`btn-icon p-4 ${value === MODE.CHAT ? 'bg-white shadow-sm' : ''}`}
        aria-label="Chat mode"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <button
        onClick={() => handleModeClick(MODE.AUDIO)}
        className={`btn-icon p-4 ${(value === MODE.AUDIO || value === MODE.AUDIO_PAUSED) ? 'bg-white shadow-sm' : ''}`}
        aria-label={value === MODE.AUDIO_PAUSED ? 'Resume audio' : 'Audio mode'}
      >
        {value === MODE.AUDIO_PAUSED ? (
          <MicOff className="w-6 h-6 text-red-500" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>

      <button
        onClick={() => handleModeClick(MODE.VIDEO)}
        className={`btn-icon p-4 ${(value === MODE.VIDEO || value === MODE.VIDEO_PAUSED) ? 'bg-white shadow-sm' : ''}`}
        aria-label={value === MODE.VIDEO_PAUSED ? 'Resume video' : 'Video mode'}
      >
        {value === MODE.VIDEO_PAUSED ? (
          <VideoOff className="w-6 h-6 text-red-500" />
        ) : (
          <Video className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
