import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <Routes>
    <Route path='/'> */}
      <App />
    {/* </Route>
  </Routes> */}
  </BrowserRouter>
);
