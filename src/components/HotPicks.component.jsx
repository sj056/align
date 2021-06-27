import {React,useEffect} from 'react';

import img1 from './assets/images/hotPicks/hotPicksImg1.png';
import img2 from './assets/images/hotPicks/hotPicksImg2.png';
import img3 from './assets/images/hotPicks/hotPicksImg3.png';
import AOS from "../../node_modules/aos";

import "aos/dist/aos.css";
import './assets/css/topOffers.css';

const HotPicks=()=>{

    useEffect(() => {
       
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="topOffers">
            <h5 className="heading">Hot Picks</h5>
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
              <p className="name">Chaise Lounger</p>
              <p className="price">₹ 29,888 &nbsp;&nbsp;&nbsp;<span>40% off</span></p>
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
          <img src={img2} alt="couch" />
          </div>
          </div>
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Mid-size Cabinet</p>
              <p className="price">₹ 39,888 &nbsp;&nbsp;&nbsp;<span>10% off</span></p>
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
              <p className="name">Beige Office chair</p>
              <p className="price">₹ 29,888 &nbsp;&nbsp;&nbsp;<span>38% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
}
export default HotPicks;