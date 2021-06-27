import {React,useEffect} from 'react';

import img1 from './assets/images/topOffer/topOfferImg1.png';
import img2 from './assets/images/topOffer/topOfferImg2.png';
import img3 from './assets/images/topOffer/topOfferImg3.png';
import AOS from "../../node_modules/aos";

import "aos/dist/aos.css";
import './assets/css/topOffers.css';

const TopOffers=()=>{

  useEffect(() => {
       
    AOS.init();
    AOS.refresh();
  }, []);

    return(
        <div className="topOffers">
            <h5 className="heading">Top Offers</h5>
            <div className="cardsContainer row" data-aos="fade-right">
            <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <div className="circle1">
          <div className="circle2">
          <img src={img1} alt="couch"/>
          </div>
          </div>
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Tufted Arm Chair in White color</p>
              <p className="price">₹ 7888 &nbsp;&nbsp;&nbsp;<span>38% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <div className="circle1">
          <div className="circle2">
          <img src={img2} alt="couch" style={{height:"123px",width:"auto",marginTop:"10%"}}/>
          </div>
          </div>
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">2 seater cafe set</p>
              <p className="price">₹ 10,888 &nbsp;&nbsp;&nbsp;<span>38% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <div className="circle1">
          <div className="circle2">
          <img src={img3} alt="couch"/>
          </div>
          </div>
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Yellow ArmChair</p>
              <p className="price">₹ 9888 &nbsp;&nbsp;&nbsp;<span>38% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
}
export default TopOffers;