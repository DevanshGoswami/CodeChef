import React from 'react';
import {Footer} from './footer';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
export const NotFound = () => {
    return(
        <div class="container text-center">
        <h1 style={{fontWeight:"800",marginTop:"150px",fontSize:"70px",color:"#713e20"}}>Error 404</h1>
        <p style={{fontSize:"20px"}}>Page Not Found</p>
        <a href="https://codechefsrm.in/" style={{fontWeight:"600",marginTop:"50px",color:"#713e20",textDecoration:"none"}}>Go Back to HomePage</a>
        <hr></hr>
        <Footer/>
        </div>
    );
}