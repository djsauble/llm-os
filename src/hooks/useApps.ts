import { useState, useCallback } from 'react';
import { type TaskFlowData } from '../schemas/taskFlow';

export interface App {
  id: string;
  name: string;
  taskFlow?: TaskFlowData; // Make it optional
  createdAt: Date;
}

export function useApps() {
  const [apps, setApps] = useState<App[]>([]);

  const createApp = useCallback((name: string, taskFlow?: TaskFlowData) => {
    const newApp: App = {
      id: `app-${Date.now()}`,
      name,
      taskFlow,
      createdAt: new Date(),
    };
    setApps(prev => [...prev, newApp]);
    return newApp;
  }, []);

  const deleteApp = useCallback((id: string) => {
    setApps(prev => prev.filter(app => app.id !== id));
  }, []);

  const getApp = useCallback((id: string) => {
    return apps.find(app => app.id === id);
  }, [apps]);

  return {
    apps,
    createApp,
    deleteApp,
    getApp,
  };
}
