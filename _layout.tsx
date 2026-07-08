import React from 'react';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function RootLayout() {
      return React.createElement(Provider, { store: store }, React.createElement(Slot, null));
}
