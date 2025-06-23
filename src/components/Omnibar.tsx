import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Mode } from '../types';
import { MODE } from '../types';
import { Send, MicOff, VideoOff } from 'react-feather';

interface OmnibarProps {
  mode: Mode;
}

function ChatInput() {
  const navigate = useNavigate();

  const handleSend = () => {
    navigate('/definition');
  };

  return (
    <div className="input h-40">
      <textarea
        placeholder="What do you want to chat about?"
        className="flex-1 w-full text-lg resize-none bg-transparent border-0 focus:outline-none placeholder-slate-400"
        rows={3}
      />
      
      <div className="flex justify-end mt-2">
        <button 
          onClick={handleSend}
          className="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
        >
          <Send className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
}

function AudioInput({ isActive }: { isActive: boolean }) {
  const [audioLevel, setAudioLevel] = useState(0);

  // Simulate audio level animation
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div className="input h-40 flex items-center justify-center">
      {/* Waveform visualization */}
      { isActive ? (
        <div className="flex h-full items-end gap-1 w-full align-middle">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 rounded-sm transition-all duration-100 bg-blue-500"
              style={{
                height: `${Math.max(4, (Math.sin((audioLevel + i * 8) * 0.08) + 1) * 60)}px`
              }}
            />
          ))}
        </div>
      ) : (
        <MicOff className="w-12 h-12 text-slate-500" />
      )}
    </div>
  );
}

function VideoInput({ isActive }: { isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Auto-start video when component becomes active
  useEffect(() => {
    if (isActive && !stream) {
      startVideo();
    } else if (!isActive && stream) {
      // Pause video but keep the stream
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    } else if (isActive && stream) {
      // Resume video with existing stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
  }, [isActive]);

  const startVideo = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(newStream);
      if (videoRef.current && isActive) {
        videoRef.current.srcObject = newStream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="input h-100">
      <div className="flex-1 rounded-md overflow-hidden relative">
        {isActive && stream ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            <div className="text-center">
              <VideoOff className="w-12 h-12" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Omnibar({ mode }: OmnibarProps) {
  return (
    <div className="flex items-center justify-center h-full w-full max-w-2xl">
      {mode === MODE.CHAT && <ChatInput />}
      {(mode === MODE.AUDIO || mode === MODE.AUDIO_PAUSED) && <AudioInput isActive={mode === MODE.AUDIO} />}
      {(mode === MODE.VIDEO || mode === MODE.VIDEO_PAUSED) && <VideoInput isActive={mode === MODE.VIDEO} />}
    </div>
  );
}
