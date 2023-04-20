import './App.css';
import React from 'react';
import NavBar from  './components/NavBar';
import Home from './containers/Home';
import About from './containers/About';
import CartContainer from './containers/CartContainer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { Checkout } from './components/Checkout';
import { BrowserRouter as Router,
         Routes,
         Route
         } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </Router>
    </CartContextProvider>
    </div>
  );
}

export default App;

