// src/lib/tokens.ts
// Local shim  replaces @streaming/tokens AND @streambrws/ui-tokens

export const colors = {
    bg: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2a2a2a',
          900: '#1a1a1a',
          950: '#0d0d0d',
    },
    text: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
    },
    brand: {
          purple:      '#7c3aed',
          purpleLight: '#a78bfa',
          purpleDark:  '#5b21b6',
          red:         '#e50914',
          redLight:    '#ff4d4d',
    },
    safeFeed: {
          amber:      '#f59e0b',
          amberLight: '#fcd34d',
          green:      '#22c55e',
          blue:       '#3b82f6',
    },
    border:  '#2a2a2a',
    error:   '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    overlay: 'rgba(0,0,0,0.6)',
};

export const spacing = {
    0:   0,
    1:   4,
    2:   8,
    3:   12,
    4:   16,
    5:   20,
    6:   24,
    8:   32,
    10:  40,
    12:  48,
    16:  64,
    xs:  4,
    sm:  8,
    md:  16,
    lg:  24,
    xl:  32,
    xxl: 48,
};

export const radius = {
    none: 0,
    xs:   2,
    sm:   4,
    md:   8,
    lg:   16,
    xl:   24,
    full: 9999,
};

export const typographyPresets = {
    h1:        { fontSize: 28, fontWeight: '700' as const, lineHeight: 34 },
    h2:        { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
    h3:        { fontSize: 18, fontWeight: '600' as const, lineHeight: 24 },
    body:      { fontSize: 16, fontWeight: '400' as const, lineHeight: 22 },
    bodySmall: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
    caption:   { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
    label:     { fontSize: 14, fontWeight: '600' as const, lineHeight: 20 },
    button:    { fontSize: 16, fontWeight: '600' as const, lineHeight: 22 },
};
