import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/screens/home/Home.jsx'
import Cart from './components/screens/cart/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
