import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

function App() {
  return (
    <div>
      <div className="p-0 m-0">
        <h1>Hello !</h1>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
