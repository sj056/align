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
<h6>Align your home<br/>Every place should feel like an oasis</h6>
    </div>
    );
}
export default Overlay;