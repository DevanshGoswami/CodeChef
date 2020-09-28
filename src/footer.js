import React from 'react';
import Logo from './images/Logo2.png';


export const Footer = () => {
    return(
        <footer class="wrapper style1 align-center">
     
        
           
					<div class="inner">
                    <img src={Logo} alt="" height="60" width="180"></img>
						<ul class="icons" style={{marginTop:"50px"}}>
							<li><a href="https://twitter.com/CodeChefSRM" class="icon brands style2 fa-twitter sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/CodeChefSRM/" class="icon brands style2 fa-facebook-f sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/codechefsrm/" class="icon brands style2 fa-instagram sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Instagram</span></a></li>
							<li><a href="https://in.linkedin.com/company/ccscsrm" class="icon brands style2 fa-linkedin-in sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">LinkedIn</span></a></li>
							<li><a href="mailto:codechefsrm@gmail.com" class="icon style2 fa-envelope sept-link"><span class="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
						</ul>
                        
						<p><span className="sept">&copy;</span> CodeChef SRM: All Rights Reserved.</p>
						<p style={{fontSize:"13px"}}><i class="fa fa-map-marker sept-link" aria-hidden="true"> </i> SRM Institute of Science and Technology,<br></br> SRM Nagar, Kattankulathur, Chengalpattu District,<br></br> Tamil Nadu - 603203.</p>
                        <span style={{fontSize:"14px"}}>
                        <i class="fa fa-phone sept-link" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" style={{textDecoration:"none"}}>+91 87916 15165</a> <br></br><a href="tel:+91 95715 66754" style={{textDecoration:"none"}}>+91 95715 66754</a>
                        </span>
					</div>
				</footer>
    );
}