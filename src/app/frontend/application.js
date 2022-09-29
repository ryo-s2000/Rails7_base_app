import React from 'react';
import { createRoot } from 'react-dom/client';

import './css/app.css';
import Top from './javascript/pages/Top';

const root = createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Top name="World" />);
});
