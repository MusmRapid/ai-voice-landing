declare module "react-world-flags";
declare module 'react-scroll';

interface Window {
  fbq?: (...args: (string | Record<string, unknown>)[]) => void;
}