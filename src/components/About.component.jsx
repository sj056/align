import {React,useEffect} from 'react';
import logo from './assets/images/greenlogo.png';
import './assets/css/about.css';
import AOS from "../../node_modules/aos";

import "aos/dist/aos.css";

const About=()=>{
    useEffect(() => {
       
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="about">
            <img src={logo} />
            <p  data-aos="fade-up">
            Since 1990, Align showcases over 50,000+ world class contemporary products in Home Furnitures. You can book your favourites with easy EMI options avalaible online as well as on stores. Our furniture designs are inspired by various themes and an amalgamation of modern and urban furniture designs with the best quality and long durability. 
            </p>
        </div>
    );
}
export default About;