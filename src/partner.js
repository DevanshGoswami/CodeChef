import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fontawesome-all.min.css';

export const Sponsor = () => {
    return(
        <div>
           
            <section className="container text-center py-5 px-5">
       <h2 style={{fontWeight:"800",fontSize:"40px",color:'#713e20'}}>Education Partner</h2>
            <div className="row">
           <div className="col-12 justify-content-center">
           <div className="card pt-5 px-5 ml-4" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_200,h_200/https://xobin.com/wp-content/uploads/2020/09/XobinLogoLatest.png" alt="xobin"/>
                    <div className="card-body">
                        <h5 className="card-title"><a style={{color:"#713e20",textDecoration:"none"}} href="https://xobin.com/products/coding-skills-assessment-software/">Xobin Coding Skills Assesment Software</a></h5>
                    </div>
            </div>
           </div>
            </div>
            </section>
        </div>
    );
}