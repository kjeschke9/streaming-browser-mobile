// src/lib/types.ts
// Local shim  replaces @streaming/types AND @streambrws/shared-types

export interface StreamingService {
    id: string;
    name: string;
    logoUrl?: string;
    enabled: boolean;
    isSubscribed?: boolean;
}

export interface Title {
    id: string;
    title: string;
    type: 'movie' | 'series' | 'mini-series' | 'documentary';
    services: string[];
    genres?: string[];
    year?: number;
    description?: string;
    posterUrl?: string;
    rating?: string;
}

/** ContentTitle is an alias for Title (matches @streambrws/shared-types). */
export type ContentTitle = Title;

export interface DiscoveryRail {
    id: string;
    label: string;
    titles: Title[];
}

export interface UserProfile {
    id: string;
    email: string;
    displayName?: string;
    avatarUrl?: string;
}

export interface SyncStatus {
    services: StreamingService[];
    totals: { hidden: number; services: number; tags: number };
}
