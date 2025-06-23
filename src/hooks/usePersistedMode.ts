import { useState, useEffect } from 'react';
import type { Mode } from '../types';
import { MODES, MODE } from '../types';

const STORAGE_KEY = 'llm-os-mode';

export function usePersistedMode(): [Mode, (mode: Mode) => void] {
  const [mode, setMode] = useState<Mode>(() => {
    // Initialize from localStorage or default to 'chat'
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
    // Persist to localStorage whenever mode changes
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Failed to save mode to localStorage:', error);
    }
  }, [mode]);

  return [mode, setMode];
}

// Type guard to validate mode values
function isValidMode(value: string): value is Mode {
  return MODES.includes(value as Mode);
}
