import Home from './Components/Home';
import React from 'react';
import './Components/style.css'
import FavoriteContainer from './Components/favoriteContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio';


function App() {
 
  return (
    <div className="App">
        
        <BrowserRouter>
        <Header  />
        
        <Routes>
          <Route  path = '/' element = {< Home/>} />
          <Route  path = '/favorites' element = {< FavoriteContainer />} />
          <Route  path = '/portfolio' element = {< Portfolio />} />
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
