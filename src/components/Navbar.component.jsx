import React from 'react';

import './assets/css/navbar.css';
import logo from './assets/images/logo.png';

const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#"><img src={logo} style={{width:"auto", height:"7vh"}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
}
export default Navbar;