import React from 'react';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';

import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';


export const NotFound = () => {
    return(
        <>
        <Helmet>
        <meta charset="utf-8" />
        
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<meta
name="Error"
content="Page Not Found"
/> 
<title>Error 404</title>
</Helmet>
<div id="wrapper" className="divided">


<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right" >
<div className="content">
<h2 style={{fontWeight:"800",fontSize:"40px"}}><span style={{color:'#713e20'}}>Error </span>404</h2>

										<header>
											<h3>Kirsten Beyer</h3>
										</header>
										

											<blockquote>No one is truly lost when they remain in the hearts and minds of those who love them</blockquote>

									
									

<p className="major" style={{fontSize:"20px",fontWeight:"700"}}>Page <span style={{color:"#713e20"}}>Not</span> Found.</p>
<ul className="actions stacked">
                <li><Link to="/"  className="button big wide smooth-scroll-middle">HOME</Link></li>
            </ul>
</div>
</section>







</div>

</>

    );
}


