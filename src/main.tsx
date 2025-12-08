import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider, useAtom } from 'jotai';
import { themeAtom } from './atom/themeAtom';
import { useEffect } from 'react';

const Root = () => {
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <Provider>
    <Root />
  </Provider>
);
