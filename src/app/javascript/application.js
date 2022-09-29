import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloMessage from './components/HelloMessage';

const root = createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  root.render(<HelloMessage name="World" />);
});
