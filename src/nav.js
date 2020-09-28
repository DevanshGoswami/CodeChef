import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = (props) => {
    return(
        <>
        		 <div class="menu-wrap">
					<input type="checkbox" class="toggler"></input>
					<div class="hamburger"><div></div></div>
					
					<div class="menu">
					<div>
						<div>
						<ul style={{marginBottom:"30px"}}>
						<li><Link to="/" style={props.style1} className={props.home}>Home</Link></li>
							<li><Link to="/team" style={props.style2} className={props.team}>Team</Link></li>
							<li><Link to="/events" style={props.style3} className={props.events}>Events</Link></li>
						</ul>
						<ul class="icons" style={{marginLeft:"15px"}}>
						<li><a href="https://twitter.com/CodeChefSRM" style={{color:"#713e20"}} class="icon brands style2 fa-twitter sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/CodeChefSRM/" style={{color:"#713e20"}}  class="icon brands style2 fa-facebook-f sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/codechefsrm/" style={{color:"#713e20"}} class="icon brands style2 fa-instagram sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Instagram</span></a></li>
							<li><a href="https://in.linkedin.com/company/ccscsrm" style={{color:"#713e20"}} class="icon brands style2 fa-linkedin-in sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">LinkedIn</span></a></li>
						</ul>
						</div>
					</div>
					</div>
				</div>
        </>
    );
}