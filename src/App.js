import './App.css';
import Header from './components/Header.component';
import Navbar from './components/Navbar.component.jsx';
import TopOffers from './components/TopOffers.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NewArrivals from './components/NewArrivals.component';
import About from './components/About.component';
import Overlay from './components/Overlay.component';
import HotPicks from './components/HotPicks.component'
import ShowMore from './components/ShowMore.component';
import {React, useEffect } from 'react';
function App() {
  useEffect(()=>{
    window.onload = function () {
      window.scrollTo(0, 0);
    }
  })
  return (
    <>
    <Overlay />
    <div className="App">
     <Navbar />
     <Header/>
     <TopOffers/>
     <NewArrivals/>
     <HotPicks />
     <ShowMore />
     <About/>
    </div>
    </>
  );
}

export default App;
