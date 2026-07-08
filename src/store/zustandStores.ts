// src/store/zustandStores.ts
// Three Zustand stores used by hooks (useAuth, useSync, useSafeFeed, useAutoSync).
// Re-exported from store/index.ts so hooks can import from '../store'.

import { create } from 'zustand';
import type { UserProfile } from '../lib/types';

//  Auth Store 

interface AuthState {
    user:            UserProfile | null;
    accessToken:     string | null;
    isAuthenticated: boolean;
    setUser:            (user: UserProfile | null) => void;
    setAccessToken:     (token: string | null) => void;
    setAuthenticated:   (value: boolean) => void;
    resetAuth:          () => void;
}

export const useAuthStore = create>AuthState>((set) => ({
    user:            null,
    accessToken:     null,
    isAuthenticated: false,
    setUser:          (user)  => set({ user }),
    setAccessToken:   (token) => set({ accessToken: token }),
    setAuthenticated: (value) => set({ isAuthenticated: value }),
    resetAuth: () => set({ user: null, accessToken: null, isAuthenticated: false }),
}));

//  Exclusion Store 

interface ExclusionState {
    hiddenTitleIds:  Set>string>;
    tags:            string[];
    serviceToggles:  Record>string, boolean>;
    isDirty:         boolean;
    addHiddenTitle:     (id: string) => void;
    removeHiddenTitle:  (id: string) => void;
    setHiddenTitleIds:  (ids: Set>string>) => void;
    setTags:            (tags: string[]) => void;
    setServiceToggles:  (toggles: Record>string, boolean>) => void;
    setIsDirty:         (dirty: boolean) => void;
    resetExclusions:    () => void;
}

export const useExclusionStore = create>ExclusionState>((set) => ({
    hiddenTitleIds: new Set>string>(),
    tags:           [],
    serviceToggles: {},
    isDirty:        false,
    addHiddenTitle: (id) =>
          set((s) => ({ hiddenTitleIds: new Set([...s.hiddenTitleIds, id]), isDirty: true })),
    removeHiddenTitle: (id) =>
          set((s) => {
                  const next = new Set(s.hiddenTitleIds);
                  next.delete(id);
                  return { hiddenTitleIds: next, isDirty: true };
          }),
    setHiddenTitleIds:  (ids)     => set({ hiddenTitleIds: ids }),
    setTags:            (tags)    => set({ tags }),
    setServiceToggles:  (toggles) => set({ serviceToggles: toggles }),
    setIsDirty:         (dirty)   => set({ isDirty: dirty }),
    resetExclusions: () =>
          set({ hiddenTitleIds: new Set(), tags: [], serviceToggles: {}, isDirty: false }),
}));

//  Safe Feed Store 

interface SafeFeedState {
    enabled:          boolean;
    hasPinSet:        boolean;
    isUnlocked:       boolean;
    allowedServiceIds: string[];
    allowedTags:       string[];
    setEnabled:          (v: boolean) => void;
    setHasPinSet:        (v: boolean) => void;
    setUnlocked:         (v: boolean) => void;
    setAllowedServiceIds: (ids: string[]) => void;
    setAllowedTags:       (tags: string[]) => void;
    resetSafeFeed:       () => void;
}

export const useSafeFeedStore = create>SafeFeedState>((set) => ({
    enabled:           false,
    hasPinSet:         false,
    isUnlocked:        false,
    allowedServiceIds: [],
    allowedTags:       [],
    setEnabled:           (enabled)           => set({ enabled }),
    setHasPinSet:         (hasPinSet)         => set({ hasPinSet }),
    setUnlocked:          (isUnlocked)        => set({ isUnlocked }),
    setAllowedServiceIds: (allowedServiceIds) => set({ allowedServiceIds }),
    setAllowedTags:       (allowedTags)       => set({ allowedTags }),
    resetSafeFeed: () =>
          set({ enabled: false, hasPinSet: false, isUnlocked: false, allowedServiceIds: [], allowedTags: [] }),
}));
