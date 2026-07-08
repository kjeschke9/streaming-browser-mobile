const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
    '@streaming/api-client':    path.resolve(__dirname, 'src/lib/api-client'),
    '@streaming/types':         path.resolve(__dirname, 'src/lib/types'),
    '@streaming/tokens':        path.resolve(__dirname, 'src/lib/tokens'),
    '@streambrws/shared-logic': path.resolve(__dirname, 'src/lib/shared-logic'),
    '@streambrws/shared-types': path.resolve(__dirname, 'src/lib/types'),
    '@streambrws/ui-tokens':    path.resolve(__dirname, 'src/lib/tokens'),
};

module.exports = config;
