import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Backv from './home/content/backv';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Backv></Backv>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);
