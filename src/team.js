import React from 'react';
import './App.css';

import {Link,withRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
import {Card} from "./card";
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import {Helmet} from 'react-helmet';


class Team extends React.Component{
   

    render(){
        return(
            <div className="App" >
                <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href="https://avatars1.githubusercontent.com/u/11960354?s=400&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#000000" />
                        <meta
                        name="Team"
                        content="Board of 2020-21"
                         /> 
             <title>Team</title>
                </Helmet>
                <div class="menu-wrap">
					<input type="checkbox" class="toggler"></input>
					<div class="hamburger"><div></div></div>
					<div class="menu">
					<div>
						<div>
						<ul style={{marginBottom:"30px"}}>
							<li><Link to="/" >Home</Link></li>
							<li><Link to="/team" style={{color:"#713e20"}} className="active-link">Team</Link></li>
							<li><Link to="/events">Events</Link></li>
						</ul>
						<ul class="icons" style={{marginLeft:"15px"}}>
                        <li><a href="https://twitter.com/CodeChefSRM" class="icon brands style2 fa-twitter sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/CodeChefSRM/" class="icon brands style2 fa-facebook-f sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/codechefsrm/" class="icon brands style2 fa-instagram sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">Instagram</span></a></li>
							<li><a href="https://in.linkedin.com/company/ccscsrm" class="icon brands style2 fa-linkedin-in sept-link" target = "_blank" rel = "noopener noreferrer"><span class="label">LinkedIn</span></a></li>
						</ul>
						</div>
					</div>
					</div>
				</div>
            <section id="team" class="pb-5" style={{background:"none",marginTop:"27px"}}>
    <div class="container">
        <h5 class="section-title h1" style={{fontWeight:"800",marginTop:"50px"}}>Board</h5>
        <div class="row" data-aos="zoom-in" data-aos-duration="2000">
            
           <Card name={"Devansh Goswami"} position={"President"} 
           desc={"Devansh Goswami has great experience in leadership. He likes to design beautiful websites and works on data analysis."} class={"col-xs-12 col-sm-6"} 
           img={"https://lh3.googleusercontent.com/pw/ACtC-3fCIWSS5wHpgLuO1IzZyBvKEQEWmAUvwYfXDYSj69ezvZ7kWccIqpqbL5veKiXF1Z2z3PWcygQoic77ReeuMmEbVqVrts3irxmR-E0c-NrltgnNQcj4_dWfHbuMzJJ8n-01p8a0JKnEi5BN0H_rGmVN=w963-h954-no?authuser=0"}
           link={"https://in.linkedin.com/in/devansh-goswami-74590a187"}
           git={"https://github.com/DevanshGoswami"}
           />
           <Card name={"Nirav Agarwal"} position={"President"} 
           desc={"Nirav Agarwal is a technology enthusiast who loves to sit in front of his computer and put a dent in this world. He's keenly interested in the world of Data Science."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3fAPeBwFKn8T9Ds8llfQlU71xw2su6t4J9AKNQFgzR1c-EJBwIRw8Xh8EApfKfXhpka5_Ht1x5Pdg6n7hp-miBgU3islq_8yCLqs4GhM_Wdk35Jj_pt-bOl84Fg-SXRRY5kcmbejeiBRBPeyMWbS-gs=w1033-h955-no?authuser=0"}
           link={"https://www.linkedin.com/in/agarwalnirav/"}
           git={"https://github.com/Nirav-Agarwal"}
           />
           <Card name={"Kartikeya Bajpai"} position={"Technical Director"} 
           desc={"A word curious would do best for Kartikeya. Got a good hold on Data Analytics and Android Development concepts."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3frPNm7WlONLvN13zke273pUJNVC_o824R73ytiWERk1fp5Bp5AFYT7OX6HYKRlqXRpNayRCVSqr0TxIe6m5UG4osxciUaMOdbfJAsiVcGwTDB2jNr8pd2RnZ_IMr5y5Zq6zm7gCSNPRYKNIYot3mgH=w359-h326-no?authuser=0"}
           link={"https://www.linkedin.com/mwlite/in/kartikeya-bajpai-7687011a1"}
           git={"https://github.com/k686"}
           />
           <Card name={"Anas Khan"} position={"Technical Director"} 
           desc={"When approaching crucial problems, I tend to apply both logical and emotional aspects in a balanced manner. Thus, resulting in an amicable solution."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cSoTYA_6FYx_h_gaxiTOQ2m9tyuGvCjKTwM7Lcq-VUdmlUq84roIHGnhJsNyNm4-wxzm5h4NJCFRm8g_oV2H7PnnL1kI-SXe13GYt041F_6haMWrDZGhUoMCbsI36fm4j7YhMiJctYtbe9fk6T9lVh=w949-h954-no?authuser=0"}
           link={"https://www.linkedin.com/in/thekhananas/"}
           git={"https://github.com/chilloutwithanas"}
           />
           <Card name={"Hritik Bhandari"} position={"Projects and Research Director"} 
           desc={"Hritik is a tech evangelist with a profound interest in Data Science and full stack development."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3dYXRpD1-4N_R2G6zMDEj_lrjxXPaddRGaxCYCGcfP2TseaB27Yp4vo2v4bD-Hw-h5SZnQiOPq6Jpsb9pgYANFWO6XKeOU5cL_5Xn9Bj1z-rzmxoYuwYakJ78G1cexVpAiNcf5VwnCmqzTpqKPNbqvb=s954-no?authuser=0"}
           link={"https://www.linkedin.com/in/hritikbhandari"}
           git={"https://github.com/hritikbhandari"}
           />
           <Card name={"Takshil Mittal"} position={"Corporate Director"} 
           desc={"When it comes to organising events I had an experience of organising some big events and believs in team work rather than individual work and I love facing challenges."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3eVvL7WFRnsLXsbWhKWIxjknuEcJ8HmeDBjQsFuOJwdPlyrL89M0y2oSx0kHP2RVsPaSy8JvhxoID-1El0yRwlHX8OUq2zFAFEVu5n20KT_AdTknxNvF95n7ev1HMaq8MrDeNPFjKUNLNPOtgCSNKp2=w768-h774-no?authuser=0"}
           link={"https://www.linkedin.com/in/takshil-mittal/"}
           git={"https://github.com/takshilmittal"}
           />
           <Card name={"Sachin Agarwal"} position={"Corporate Director"} 
           desc={"Sachin is just like a book; don't judge him by his cover. He is an easy-going, adventurous person who sees a world full of opportunity."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3fAwBOQ-YdreMoUSJ3KdHdC-aPfFAWFbD0ane4INhroXRmAu5HmgRMeSFWrYQcgvPKIslhFVSbS7GKguZcYJHpE4JZSk-spg_xkxr0daBCp_U-LR6by23CLQbSvVEWlW_qarYQNTJRs2QkSIgeXrYYL=w969-h954-no?authuser=0"}
           link={"https://www.linkedin.com/in/sachin-agrawal-11418719a"}
           git={"https://github.com/sachinihcas"}
           />
           <Card name={"Aditi Patel"} position={"Creatives Director"} 
           desc={"Aditi is vibrant, persistent, and a hardworking girl who knows how to handle difficult situations very well. She is passionate about designing."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cMn10A1V2gr7sJhDX3YPo0t4ErvPoJNR_sg8E173d331GxDVZgVXYFZTOPQUMpyO6pKT6GR9cMuOl4gFPqwajTlH1qNUja_fystfSvLoFcNh0zgVjJjr9YPw8wbVOZ-fT6x0zvzescqclbjGA8sOUj=w1024-h954-no?authuser=0"}
           link={"https://www.linkedin.com/in/aditi-patel-49876718b"}
           git={"https://github.com/Aditipatel02"}
           />
           <Card name={"Rohan Singh Rajput"} position={"Chief Editor"} 
           desc={"Rohan is someone you can depend on when it really matters, he's quick with his work and responses."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cEPgvzF8Bf1E65-NqIhCWpAzRrJgEwtq7f11DWdwdnU7XufRy7wMkyIbEGJEi_Hhj_QcNvxowMKlcwO3K8EyZBzn-b3v3_PZq_cA7vWOq8WQVHfz8f0XGY1zuci_jP6kjqOqVVEgdEUmfJ6kw6sDhJ=w947-h954-no?authuser=0"}
           link={"https://www.linkedin.com/in/rohan-singh-rajput-1b504b199"}
           git={"https://www.github.com/Denx00"}
           />
           <Card name={"Yash Narang"} position={"Web Master"} 
           desc={"With industry experience in web development, Yash is an enthusiastic techie who wants to expand his work into cross platform development."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3fZ-XIa4NVvNaxbSF3ulhlk8GlwcwhQ_-q4qe1yRK6-JIImN0Jm69soDosDag0L7uDKuBcj4rurTpw35m1wUCWTD3hs_pq82X0WbQGVUc--Z6ELp-q-KGgTvMHOP2mnf_ukXYYG5O5ioe7BcNQbbJes=s200-no?authuser=0"}
           link={"https://www.linkedin.com/in/ysnarang/"}
           git={"https://github.com/yashu2001"}
           />
           <Card name={"Lavisha Gera"} position={"Web Master"} 
           desc={"Lavisha is a result-oriented Computer Science major who aims to leverage her proven knowledge of computer aided engineering skills."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cIR64PinxYF9q-3T4VGMfJdjv14iFbJlMXR-zj03rakVl9CRMiBoIHkWjJoRekBNfa8oW_tpZRPaC2MZDsdLkqL-R00CW-g6M2QyPjtccCq-3I22ZL79lbmyjOdv1bj-bPAcyAeyvYTauHtpVq6b2p=w300-h297-no?authuser=0"}
           link={"https://in.linkedin.com/in/lavisha-gera-0408"}
           git={"https://github.com/LavishaG48"}
           />
           <Card name={"Prateek Ahlawat"} position={"Digital Marketing and Outreach Lead"} 
           desc={"Being worked on and for startups, I understand how people interact engage and feel. I can network and empathize well with people and get people to say what they want to deliver the right content."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cM9QW0556RiyjDgwhi0PUGh4tf-GOEh73b1KpOPAU0WMPbDtG4o64irgEApfSlU2VoKJWKA0hLnE2QMvZIZXofSW2ktd7PZpll_h-_UTuhKKC3plTNPD9PsyXVk0DtJnT4n1rcQEk6o2hYCkKeIXsN=w960-h954-no?authuser=0"}
           link={"https://www.linkedin.com/in/prateek-ahlawat/"}
           git={"https://twitter.com/PSinghAhlawat"}
           />
           <Card name={"Dhruvraj Singh Rathore"} position={"Sponsorship Lead"} 
           desc={"After working with many organisations I have learned discipline,patience and team work that helped me in understanding different people . I also have a habit of not giving up."} class={"col-xs-12 col-sm-6"}
           img={"https://lh3.googleusercontent.com/pw/ACtC-3cU-U5OT99tSUAgURxbKW4ByiAbJH7kCgR5tA6RWLZnOQqPWaMBA3zWtTk9KlYaNm6GWjjh63UOssrNUxHYlnquxQb9bbimAU9Ovg76WJxVakBs4O6jm71mh2DHNnjImkav18ci-UHe0xEGAJUkhaB7=w769-h815-no?authuser=0"}
           link={"https://www.linkedin.com/in/dhruvraj-singh-rathore-0a1171173/"}
           git={"https://github.com/dhruvrajsinghrathore"}
           />

           

        </div>
    </div>
</section>
<hr></hr>
<footer class="wrapper style1 align-center">
					<div class="inner">
						<ul class="icons">
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

            </div>
        );
    }
}

export default withRouter(Team);