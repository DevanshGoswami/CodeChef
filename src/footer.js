import React from 'react';
import Logo from './images/Logo2.png';
import {Link} from 'react-router-dom';

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
						<p style={{fontSize:"18px"}}><Link to="/" style={{textDecoration:"none"}}>Home</Link> | <Link to="/team"style={{textDecoration:"none"}}>Team</Link> | <Link to="/events"style={{textDecoration:"none"}}>Events</Link></p> 
                        <span style={{fontSize:"14px"}}>
                        <i class="fa fa-phone sept-link" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" class="sept" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" class="sept" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
                        </span>
					</div>
				</footer>
    );
}