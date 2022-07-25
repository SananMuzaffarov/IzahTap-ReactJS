import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard';
import Charts from './Components/Charts';
import './index.css';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () =>{
  return(
    <div>
      <Dashboard />
      <div className='container'>
        <Charts count = '20.000' type = 'Users' />
        <Charts count = '30.000' type = 'Workers' />
        <Charts count = '40.000' type = 'Parents' />
        <Charts count = '50.000' type = 'Students' />
      </div>
    </div>
  );
}
root.render(<App />);
