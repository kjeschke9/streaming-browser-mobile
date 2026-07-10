// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import exclusionReducer from './slices/exclusionSlice';
import servicesReducer from './slices/servicesSlice';
import syncReducer from './slices/syncSlice';

export const store = configureStore({
    reducer: {
          auth:      authReducer,
          exclusion: exclusionReducer,
          services:  servicesReducer,
          sync:      syncReducer,
    },
    middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
                  serializableCheck: {
                            ignoredActions: ['auth/hydrateFromStorage/fulfilled'],
                  },
          }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// Re-export Zustand stores so hooks can import from '../store'
export { useAuthStore, useExclusionStore, useSafeFeedStore } from './zustandStores';
