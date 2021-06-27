import React,{useRef,useEffect} from 'react';
import logo from './assets/images/animatedLogo.mp4';
import './assets/css/overlay.css';
const Overlay=()=>{
    return(
        <div className="overlay">
    <video autoPlay loop muted>
  <source src={logo} type="video/mp4" />
Your browser does not support the video tag.
</video>
<h6>align your dream home furnishing with reality..</h6>
    </div>
    );
}
export default Overlay;