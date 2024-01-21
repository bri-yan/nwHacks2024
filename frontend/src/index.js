import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MapPage from './pages/MapPage';
import BackendPage from './pages/BackendPage';
import LandingPage from './pages/LandingPage'
import MapComponent from './components/Map';
import { CartProvider } from './components/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const CartContext = createContext();

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MapPage /> */}
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MapPage />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/landing" element={<App /> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
