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

<div className="mx-5 " data-aos="zoom-in" data-aos-duration="2000">
   <h1 style={{fontSize:"70px",fontWeight:"bold",color:"#713e20"}}>
       Error 404 
   </h1>

<p style={{fontSize:"20px"}}>Page Not Found</p>

   

<section>
										<header>
											<h3>Kirsten Beyer</h3>
										</header>
										<div class="content">

											<blockquote>No one is truly lost when they remain in the hearts and minds of those who love them</blockquote>

										</div>
									</section>

                                    <a href="http://codechefsrm.in/" style={{textDecoration:"none",fontWeight:"600",color:"#713e20",marginTop:"50px"}}>Go Back to Homepage</a>

</div>



</div>

                                 

    </div>
       
    );
}