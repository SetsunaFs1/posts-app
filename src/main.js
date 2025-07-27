import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import ThemeProvider from './shared/lib/theme/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './app/providers/store.ts';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(Provider, { store: store, children: _jsx(App, {}) }) }) }));
