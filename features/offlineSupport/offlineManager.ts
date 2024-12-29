import { initializeDatabase, saveRoute, getRoutes } from './storage';

export const setupOfflineSupport = () => {
  initializeDatabase();
};

export const cacheRoute = (route: string) => {
  saveRoute(route);
};

export const loadCachedRoutes = async () => {
  return new Promise<string[]>((resolve) => {
    getRoutes(resolve);
  });
};
