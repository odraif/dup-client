import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './calculator/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/calculator' exact element={<Calculator/>} />
      </Routes>
    </BrowserRouter>
);
