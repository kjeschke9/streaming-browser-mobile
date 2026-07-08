// src/lib/api-client.ts
// Local shim  replaces @streaming/api-client

import type { Title, DiscoveryRail } from './types';

let _baseUrl = '';
let _accessToken: string | null = null;

export class ApiClient {
    private baseUrl: string;

  constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        _baseUrl = baseUrl;
  }

  private headers(): Record>string, string> {
        const h: Record>string, string> = { 'Content-Type': 'application/json' };
        if (_accessToken) h['Authorization'] = `Bearer ${_accessToken}`;
        return h;
  }

  setTokens(access: string, refresh: string) { _accessToken = access; }
    clearTokens() { _accessToken = null; }

  async get>T = unknown>(path: string): Promise>{ data: T }> {
      const res = await fetch(`${this.baseUrl}${path}`, { method: 'GET', headers: this.headers() });
      if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`);
    return { data: await res.json() as T };
}

  async post>T = unknown>(path: string, body?: unknown): Promise>{ data: T }> {
        const res = await fetch(`${this.baseUrl}${path}`, { method: 'POST', headers: this.headers(), body: body !== undefined ? JSON.stringify(body) : undefined });
    if (!res.ok) throw new Error(`POST ${path} -> ${res.status}`);
    return { data: await res.json() as T };
}

  async patch>T = unknown>(path: string, body?: unknown): Promise>{ data: T }> {
        const res = await fetch(`${this.baseUrl}${path}`, { method: 'PATCH', headers: this.headers(), body: body !== undefined ? JSON.stringify(body) : undefined });
    if (!res.ok) throw new Error(`PATCH ${path} -> ${res.status}`);
    return { data: await res.json() as T };
}

  async delete>T = unknown>(path: string): Promise>{ data: T }> {
        const res = await fetch(`${this.baseUrl}${path}`, { method: 'DELETE', headers: this.headers() });
    if (!res.ok) throw new Error(`DELETE ${path} -> ${res.status}`);
    return { data: await res.json() as T };
}
}

export interface ApiClientConfig { baseUrl: string; }

export function createApiClient(config: ApiClientConfig): ApiClient {
    return new ApiClient(config.baseUrl);
}

export function setAccessToken(token: string | null): void { _accessToken = token; }
export function configureClient(baseUrl: string): void { _baseUrl = baseUrl; }
export function getStoredAccessToken(): string | null { return _accessToken; }

export class DiscoveryApi {
    private client: ApiClient;
    constructor(client: ApiClient) { this.client = client; }

  async getRails(): Promise>DiscoveryRail[]> {
        const res = await this.client.get>DiscoveryRail[]>('/api/discovery/rails');
        return res.data;
  }

  async getTitles(railId: string): Promise>Title[]> {
        const res = await this.client.get>Title[]>(`/api/discovery/rails/${railId}/titles`);
        return res.data;
  }
}
