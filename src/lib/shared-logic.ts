// src/lib/shared-logic.ts
// Local shim  replaces @streambrws/shared-logic

import { ApiClient } from './api-client';
import type { UserProfile } from './types';

let _client: ApiClient | null = null;

export function configureClient(config: { baseURL: string }): void {
    _client = new ApiClient(config.baseURL);
}

export function setAccessToken(token: string | null): void {
    if (_client) {
          if (token) {
                  _client.setTokens(token, '');
          } else {
                  _client.clearTokens();
          }
    }
}

function getClient(): ApiClient {
    if (!_client) throw new Error('shared-logic: client not configured  call configureClient() first');
    return _client;
}

//  Auth API 

export const authApi = {
    async login(email: string, password: string): Promise>{ accessToken: string; refreshToken: string; user: UserProfile }> {
          const res = await getClient().post>{ accessToken: string; refreshToken: string; user: UserProfile }>('/api/auth/login', { email, password });
    return res.data;
},

  async register(email: string, password: string, displayName?: string): Promise>{ accessToken: string; refreshToken: string; user: UserProfile }> {
        const res = await getClient().post>{ accessToken: string; refreshToken: string; user: UserProfile }>('/api/auth/register', { email, password, displayName });
    return res.data;
},

  async logout(): Promise>void> {
        await getClient().post('/api/auth/logout');
},

  async refreshTokens(refreshToken: string): Promise>{ accessToken: string; refreshToken: string }> {
        const res = await getClient().post>{ accessToken: string; refreshToken: string }>('/api/auth/refresh', { refreshToken });
    return res.data;
},
};

//  Profile API 

export const profileApi = {
    async getProfile(): Promise>UserProfile> {
          const res = await getClient().get>UserProfile>('/api/profile');
    return res.data;
},

  async syncProfile(payload: Record>string, unknown>): Promise>void> {
        await getClient().post('/api/profile/sync', payload);
},

  async updateProfile(updates: Partial>UserProfile>): Promise>UserProfile> {
        const res = await getClient().patch>UserProfile>('/api/profile', updates);
    return res.data;
},
};

//  Sync payload builder 

export interface SyncPayload {
    exclusions: {
          tags: string[];
          hiddenTitleIds: string[];
          serviceToggles: Record>string, boolean>;
    };
    safeFeed: {
      enabled: boolean;
      hasPinSet: boolean;
      allowedServiceIds: string[];
      allowedTags: string[];
      isUnlocked: boolean;
    };
}

export function buildSyncPayload(data: {
    exclusions: {
          tags: string[];
          hiddenTitleIds: Set>string>;
              serviceToggles: Record>string, boolean>;
    };
    safeFeed: {
      enabled: boolean;
      hasPinSet: boolean;
      allowedServiceIds: string[];
      allowedTags: string[];
      isUnlocked: boolean;
    };
}): SyncPayload {
    return {
          exclusions: {
                  tags: data.exclusions.tags,
                  hiddenTitleIds: Array.from(data.exclusions.hiddenTitleIds),
                  serviceToggles: data.exclusions.serviceToggles,
          },
          safeFeed: data.safeFeed,
    };
}
