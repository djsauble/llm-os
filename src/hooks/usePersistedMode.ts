import { useState, useEffect } from 'react';
import type { Mode } from '../types';
import { MODES, MODE } from '../types';

const STORAGE_KEY = 'llm-os-mode';

export function usePersistedMode(): [Mode, (mode: Mode) => void] {
  const [mode, setMode] = useState<Mode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isValidMode(stored)) {
        return stored as Mode;
      }
    } catch (error) {
      console.warn('Failed to read mode from localStorage:', error);
    }
    return MODE.CHAT;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Failed to save mode to localStorage:', error);
    }
  }, [mode]);

  return [mode, setMode];
}

function isValidMode(value: string): value is Mode {
  return MODES.includes(value as Mode);
}
