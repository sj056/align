import './App.css';
import Header from './components/Header.component';
import Navbar from './components/Navbar.component.jsx';
import TopOffers from './components/TopOffers.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NewArrivals from './components/NewArrivals.component';
import About from './components/About.component';
import Overlay from './components/Overlay.component';

function App() {
  return (
    <>
    <Overlay />
    <div className="App">
     <Navbar />
     <Header/>
     <TopOffers/>
     <NewArrivals/>
     <About/>
    </div>
    </>
  );
}

export default App;
