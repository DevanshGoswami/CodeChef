import React from 'react';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';

import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';


export const NotFound = () => {
    return(
        <div className="App is-preload" style={{marginTop:"200px"}} >
      
    
<div class="container">

<div className="mx-5 text-center " data-aos="zoom-in" data-aos-duration="2000">
   <h1 style={{fontSize:"70px",fontWeight:"bold",color:"#713e20"}}>
       Error 404 
   </h1>

<p style={{fontSize:"20px"}}>Page Not Found</p>
<a href="http://codechefsrm.in/" style={{textDecoration:"none",fontWeight:"600",color:"#713e20"}}>Go Back to Homepage</a>
   

</div>
</div>



    </div>
       
    );
}