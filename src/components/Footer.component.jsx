import React from 'react';
import './assets/css/footer.css'
import chair from './assets/images/footerArmChair.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
const Footer=()=>{
return(
<footer>
    <div className="d-flex socialContainer">
    <img src={chair} alt="armchair" />
    <div className="column-container">
    <div class="column d-flex flex-row">
   <a href="#" title="Facebook"><PinterestIcon style={{height:"35px",width:"35px"}}/></a>
   <a href="#" title="Instagram"><InstagramIcon style={{height:"35px",width:"35px"}}/></a>
   <a href="#" title="Twitter"><TwitterIcon style={{height:"35px",width:"35px"}}/></a>
   </div>
   
   <div class="column">
   <a class="footer_title">GET IN TOUCH</a>
   <a title="Address"><i class="fa fa-map-marker"></i> 007, street, province/state, country - zipcode</a>
   <a href="emailto:" title="Email"><i class="fa fa-envelope"></i> email@align.domain</a>
   <a href="tel:" title="Contact"><i class="fa fa-phone"></i> +(x)-xxxx-xxxxx</a>
   </div>
   
    </div>

    </div>
<div class="sub-footer">
© CopyRights 2021 ALIGN || All rights reserved
</div>
</footer>
);
}
export default Footer;