import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import c1 from './assets/images/headerCrouselImgs/c1.jpg';
import c2 from './assets/images/headerCrouselImgs/c20.jpg';
import c3 from './assets/images/headerCrouselImgs/c30.jpg';

import './assets/css/header.css';

const Header=()=>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

return(
<div className="header">
     <Slider {...settings}>
      <div ><img src={c1}/></div>
      <div ><img src={c2} /></div>
      <div ><img src={c3} /></div>
      </Slider>
      <h5 className="headerTxt">Find the perfect furniture for your place.</h5>
</div>
);
}
export default Header;