import './App.css';
import "./styles/styles_components/main.css"
import Header from './components/header/Header' 
import Footer from './components/footer/Footer';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductCardListContainer } from './components/main/mainComponents/cards/ProductCardListConteiner';
import Main from './components/main/Main'


function App() {
 
  return (
    <div>
   <Header/>
       <Routes>
          <Route path ="/" element={<Main/>} />
          <Route path="/category/:id" element={<ProductCardListContainer />}/>
          <Route path="/item/:id" element={<ProductCardListContainer />}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
