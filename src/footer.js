import React from 'react';
import Logo from './images/Logo2.png';


export const Footer = () => {
    return(
        <footer class="wrapper style1 align-center">
     
        
           
					<div class="inner">
                    <img src={Logo} alt="" height="30" width="150"></img>
						<ul class="icons" style={{marginTop:"50px"}}>
							<li><a href="https://twitter.com/CodeChefSRM" class="icon brands style2 fa-twitter sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/CodeChefSRM/" class="icon brands style2 fa-facebook-f sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/codechefsrm/" class="icon brands style2 fa-instagram sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Instagram</span></a></li>
							<li><a href="https://in.linkedin.com/company/ccscsrm" class="icon brands style2 fa-linkedin-in sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">LinkedIn</span></a></li>
							<li><a href="mailto:codechefsrm@gmail.com" class="icon style2 fa-envelope sept-link"><span class="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
						</ul>
						<p><span className="sept">&copy;</span> CodeChef SRM: All Rights Reserved.</p>
						<p style={{fontSize:"13px"}}>SRM Institute of Science and Technology,<br></br> SRM Nagar, Kattankulathur, Chengalpattu District,<br></br> Tamil Nadu - 603203.</p>
					</div>
				</footer>
    );
}