import { create } from 'zustand';
import { UserProfile } from '../lib/types';

// ─── Auth Store ───────────────────────────────────────────────────────────────

interface AuthState {
  user: UserProfile | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setUser: (user: UserProfile | null) => void;
  setAccessToken: (token: string | null) => void;
  setAuthenticated: (value: boolean) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  setAccessToken: (token) => set({ accessToken: token }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  setTokens: (accessToken, refreshToken) =>
    set({ accessToken, refreshToken, isAuthenticated: true }),
  logout: () =>
    set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false }),
  resetAuth: () =>
    set({ user: null, accessToken: null, isAuthenticated: false }),
}));

// ─── Exclusion Store ──────────────────────────────────────────────────────────

interface ExclusionState {
  hiddenTitleIds: Set<string>;
  tags: string[];
  serviceToggles: Record<string, boolean>;
  isDirty: boolean;
  addHiddenTitle: (id: string) => void;
  removeHiddenTitle: (id: string) => void;
  setHiddenTitleIds: (ids: Set<string>) => void;
  setTags: (tags: string[]) => void;
  setServiceToggles: (toggles: Record<string, boolean>) => void;
  setIsDirty: (dirty: boolean) => void;
  resetExclusions: () => void;
  loadFromProfile: (profile: UserProfile) => void;
}

export const useExclusionStore = create<ExclusionState>()((set) => ({
  hiddenTitleIds: new Set<string>(),
  tags: [],
  serviceToggles: {},
  isDirty: false,
  addHiddenTitle: (id) =>
    set((s) => ({ hiddenTitleIds: new Set([...s.hiddenTitleIds, id]), isDirty: true })),
  removeHiddenTitle: (id) =>
    set((s) => {
      const next = new Set(s.hiddenTitleIds);
      next.delete(id);
      return { hiddenTitleIds: next, isDirty: true };
    }),
  setHiddenTitleIds: (ids) => set({ hiddenTitleIds: ids }),
  setTags: (tags) => set({ tags }),
  setServiceToggles: (toggles) => set({ serviceToggles: toggles }),
  setIsDirty: (dirty) => set({ isDirty: dirty }),
  resetExclusions: () =>
    set({ hiddenTitleIds: new Set<string>(), tags: [], serviceToggles: {}, isDirty: false }),
  loadFromProfile: (_profile) =>
    set({ hiddenTitleIds: new Set<string>(), tags: [], serviceToggles: {}, isDirty: false }),
}));

// ─── Safe Feed Store ──────────────────────────────────────────────────────────

interface SafeFeedState {
  enabled: boolean;
  hasPinSet: boolean;
  isUnlocked: boolean;
  allowedServiceIds: string[];
  allowedTags: string[];
  setEnabled: (value: boolean) => void;
  setHasPinSet: (value: boolean) => void;
  setIsUnlocked: (value: boolean) => void;
  setAllowedServiceIds: (ids: string[]) => void;
  setAllowedTags: (tags: string[]) => void;
  resetSafeFeed: () => void;
  loadFromProfile: (profile: UserProfile) => void;
}

export const useSafeFeedStore = create<SafeFeedState>()((set) => ({
  enabled: false,
  hasPinSet: false,
  isUnlocked: false,
  allowedServiceIds: [],
  allowedTags: [],
  setEnabled: (value) => set({ enabled: value }),
  setHasPinSet: (value) => set({ hasPinSet: value }),
  setIsUnlocked: (value) => set({ isUnlocked: value }),
  setAllowedServiceIds: (ids) => set({ allowedServiceIds: ids }),
  setAllowedTags: (tags) => set({ allowedTags: tags }),
  resetSafeFeed: () =>
    set({ enabled: false, hasPinSet: false, isUnlocked: false,
          allowedServiceIds: [], allowedTags: [] }),
  loadFromProfile: (_profile) =>
    set({ enabled: false, hasPinSet: false, isUnlocked: false,
          allowedServiceIds: [], allowedTags: [] }),
}));
