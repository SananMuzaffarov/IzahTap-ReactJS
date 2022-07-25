import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Mainpic from './Components/Mainpictures';
import Mainbelow from './Components/Mainbelow';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
    return(
      <div className='Home'>
        <Header />
        <Main />
        <Mainpic />
        <Mainbelow />
      </div>
    );
}
root.render(<App />);