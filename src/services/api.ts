import { configureClient, setAccessToken } from '../lib/shared-logic';
import { useAuthStore } from '../store';

export function bootstrapApi() {
    configureClient({ baseUrl: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000' });
    const token = useAuthStore.getState().accessToken;
    if (token) setAccessToken(token);
}

export { setAccessToken } from '../lib/shared-logic';
