import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Items from './pages/Items';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='App h-auto w-full relative flex flex-row justify-center bg-neutral-50'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/item' element={<Items />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
