import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';

const root = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(root);

createRoot(root).render(<App />);
