import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Vacancies from './Components/VacanciesDetail';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
  return(
    <div>
      <Header />
      <Vacancies />
    </div>
  )
}
root.render(<App />);