import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from 'styled-components';
import { 
  GlobalStyle, 
  Theme } from './Styled/base';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

export type PageWithLayout = {
  layout?: ( page: React.ReactElement ) => React.ReactNode,
}

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    
    root.render(
      <>
      <GlobalStyle />
      <ThemeProvider theme={ Theme }>
        <App {...props} />
      </ThemeProvider>
      </>
    );
  },
  progress: {
      color: '#4B5563',
  },
});
