import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
  return(
    <div>
      <Dashboard />
    </div>
  );
}
root.render(<App />);