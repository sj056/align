import { useState} from "react";
import React from 'react';
import img1 from './assets/images/showMore/showMoreImg1.png';
import img2 from './assets/images/showMore/showMoreImg2.png';
import img3 from './assets/images/showMore/showMoreImg3.png';

import { useEffect } from "react";
import more from './assets/images/showMore.gif';
import './assets/css/showMore.css';

const ShowMore=()=>{
    const [show, setShow]=useState(false);
    const [status,setStatus]=useState("more");

   useEffect(()=>{
       if(show){
           setStatus("less");
       }
       else{
        setStatus("more");
       }
   },[show])

    return(
        <div className="showMore">
        <div className="btnContainer">
            <button onClick={e=>{setShow(!show)}}>Show {status} {!show?<img src={more} alt="more" />:""}</button>
        </div>
        {show?<Content/>:""}
        </div>
      
    );
}

const Content=()=>{
    return(
        <div className="row">
           <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
          <img src={img1} alt="couch"/>
         
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Grey stool</p>
              <p className="price">₹ 4,888 &nbsp;&nbsp;<span>60% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body" >
          <img src={img2} alt="couch" style={{height:"123px"}}/>
         
          <div className="btmContainer">
              <div className="d-flex flex-column">
              <p className="name">Powder Blue 3-seater sofa</p>
              <p className="price">₹ 59,888 &nbsp;&nbsp;<span>38% off</span></p>
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
              <p className="name">1 seater sofa in light yellow color</p>
              <p className="price">₹ 29,888 &nbsp;&nbsp;<span>70% off</span></p>
              </div>
              
          </div>
      </div>
    </div>
  </div>
        </div>
    );
}

export default ShowMore;