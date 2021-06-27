import {React,useEffect} from 'react';

import img1 from './assets/images/newArrivals/newArrivalImg1.png';
import img2 from './assets/images/newArrivals/newArrivalImg2.png';
import img3 from './assets/images/newArrivals/newArrivalImg3.png';
import AOS from "../../node_modules/aos";

import "aos/dist/aos.css";
import './assets/css/newArrivals.css';

const NewArrivals=()=>{

  useEffect(() => {
       
    AOS.init();
    AOS.refresh();
  }, []);

    return(
        <div className="newArrivals">
            <h5 className="heading">New Arrivals</h5>
            <div className="cardsContainer row" data-aos="fade-left">
            <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <img src={img2} alt="couch"/>
         
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Sky Blue 1 seater sofa</p>
              <p className="price">₹ 16888 &nbsp;&nbsp;&nbsp;<span>38% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <img src={img1} alt="couch"/>
       
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">White Queen-size bed</p>
              <p className="price">₹ 49888 &nbsp;&nbsp;&nbsp;<span>18% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <img src={img3} alt="couch"/>
       
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Upholstered Powder blue Armchair</p>
              <p className="price">₹ 7888 &nbsp;&nbsp;&nbsp;<span>13% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
}
export default NewArrivals;