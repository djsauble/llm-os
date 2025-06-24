import { createContext, useContext, type ReactNode } from 'react';
import { useApps } from '../hooks/useApps';

type AppContextType = ReturnType<typeof useApps>;

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const appState = useApps();
  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
