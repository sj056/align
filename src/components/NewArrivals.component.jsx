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
              <div className="d-flex flex-row">
              <p className="name">type of furniture</p>
              <p className="price">price: Rs.9888 <span>38% off</span></p>
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
              <div className="d-flex flex-row">
              <p className="name">type of furniture</p>
              <p className="price">price: Rs.9888 <span>38% off</span></p>
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
              <div className="d-flex flex-row">
              <p className="name">type of furniture</p>
              <p className="price">price: Rs.9888 <span>38% off</span></p>
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