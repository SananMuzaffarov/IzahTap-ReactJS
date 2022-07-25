import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Maintext from './Components/Maintext';
import Jobtypes from './Components/JobTypes';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
  return(
    <div className='vacancy'>
        <Header /> 
        <Maintext />
        <div className='container'>
          <Jobtypes type = 'Front-End Developer' info = 'HTML, CSS, SASS, Bootstrap, JS, jQuery' />
          <Jobtypes type = 'Back-End Developer' info = 'PHP, Laravel' />
          <Jobtypes type = 'Database Developer' info = 'MySQL, PostgreSQL, Oracle' />
          <Jobtypes type = 'UI/UX Designer' info = 'Adobe Photoshop' />
          <Jobtypes type = 'Video Editor' info = 'Adobe Premier Pro, Sony Vegas Pro' />
          <Jobtypes type = 'Project Manager' info = 'Look after everyone' />
        </div>
    </div>
  );
}
root.render(<App />);