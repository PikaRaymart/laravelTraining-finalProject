import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from './store';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Styled/base';

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
      <ThemeProvider theme={ Theme }>
        <Provider>
          <App {...props} />
        </Provider>
      </ThemeProvider>
      </>
    );
  },
  progress: {
      color: '#4B5563',
  },
});
