import React from 'react';
import './App.css';

import {Helmet} from 'react-helmet';

export const Load = () => {
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
             <title>Loading..</title>
                </Helmet>
        <div id="wrapper" className="divided">


    <section className="spotlight style1 orient-center content-align-center image-position-right fullscreen onload-image-fade-in onload-content-fade-right" >
        <div className="content" style={{marginTop:"150px"}}>
           
        <div class="loader"></div>
         <br></br>
         
        </div>
    </section>
</div>

        </>
    );
}