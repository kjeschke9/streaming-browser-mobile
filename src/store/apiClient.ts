/**
 * apiClient.ts  singleton ApiClient instance for the mobile app.
 *
 * Import getApiClient() wherever you need to make API calls.
 * The client auto-refreshes tokens on 401 responses.
 */
import { ApiClient, createApiClient } from '../lib/api-client';

let _client: ApiClient | null = null;

export function getApiClient(): ApiClient {
    if (!_client) {
          const baseUrl = __DEV__
            ? 'http://localhost:4000'
                  : process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';
          _client = createApiClient({ baseUrl });
    }
    return _client;
}

export function resetApiClient(): void {
    _client = null;
}
