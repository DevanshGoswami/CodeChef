import React from 'react';

import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import banner from './images/banner2.jpg';

import {Helmet} from 'react-helmet';
import firebase from 'firebase';
import {Navbar} from './nav';


import {withRouter} from 'react-router-dom';
import {Footer} from './footer';
import {Sponsor} from './partner';

var firebaseConfig = {
    apiKey: "AIzaSyDQmu4x_FdIxQ7GJFX9S20j3Jrjhr4tLn0",
    authDomain: "contact-us-57b11.firebaseapp.com",
    databaseURL: "https://contact-us-57b11.firebaseio.com",
    projectId: "contact-us-57b11",
    storageBucket: "contact-us-57b11.appspot.com",
    messagingSenderId: "180871991549",
    appId: "1:180871991549:web:aaa5a34f3d72a50088ae94",
    measurementId: "G-KE2PFSCKR3"
  };
  
  if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
 }
  var Refer = firebase.database().ref('Messages');

  function SaveSubmit(name,email,message){
      var newSubmit = Refer.push();
      newSubmit.set({
          name : name,
          email : email,
         
          message : message,
         
        
      });
  }



class Home extends React.Component{
    constructor(props){
		super(props);
		this.state={
			name : '',
			email : '',
			message : '',
			show : true
		}
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
   
	}
	
	handleSubmit(e) {
       
      
        var N = this.state.name;
       
        var E = this.state.email;
      
        var M = this.state.message;
       


        SaveSubmit(N,E,M);
	   
	
		
     this.setState({
		 show : false
	 });

	 e.preventDefault();

	}
	
	handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div className="App">
				<Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href="https://avatars1.githubusercontent.com/u/11960354?s=400&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Home"
            content="Boring coding sessions, low grades and hours of debugging... life feels off right? Well, we have something to help you with this situation.</p>"
             /> 
             <title>CodeChef SRM - Home</title>
                </Helmet>
				 <Navbar home={"active-link"} style1={{color:"#713e20"}}/>
<div className="is-preload" style={{fontFamily:"Raleway,sans-serif",background:"none"}}>
        
		<div id="wrapper" class="divided">

				<section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right" style={{marginTop:"27px"}}  data-aos="fade-down" data-aos-duration="2000">
					<div class="content">
						<h1 style={{color:"#713e20",fontWeight:"800"}}>CodeChef <br></br> SRM Chapter</h1>
						<p>Cooking delicious code since <span className="sept">Sept 2019</span>.</p>
						<p class="major">Boring coding sessions, low grades and hours of debugging... life feels off right? Well, we have something to help you with this situation.</p>
						
					</div>
					<div class="image" style={{background:"none"}}>
						<img src={banner} alt="" />
						

					</div>
				</section>

	
				
		
				<section class="wrapper style1 align-center" data-aos="fade-right" data-aos-duration="2000">
					<div class="inner">
						<h2 style={{color:"#713e20",fontWeight:"800"}}>About Us</h2>
						<p> <span class="sept">CodeChef SRM</span> is a non-profital technical student's chapter under the alliance of <span class="sept">CodeChef</span>,
                   a product of Unacademy. Our main motive is to spread and promote competitive coding on our campus.
                   The chapter is a group of people brought together in order to gain knowledge and learn new skills.
                   We organize various events like <span class="sept">Coding</span> and <span class="sept">Debugging</span> competition to give students the correct exposure required to become better programmer.
                   The workshops we conduct have reknown speakers to provide the best learning environment to the students.
                  </p>
					</div>

				</section>

	
				<section class="wrapper style1 align-center">
					<div class="inner">
						<div data-aos="fade-left" data-aos-duration="2000">
						<h2 style={{color:"#713e20",fontWeight:"800"}}>Domains</h2>
						<p> In order to discover new aspects we undertake various projects in different fields such as <span class="sept">Android Development</span>,
                   <span class="sept">Web Development</span>, <span class="sept">Data Science</span> etc.</p>
						</div>
						
						<div class="items style1 medium onscroll-fade-in" data-aos="zoom-in" data-aos-duration="2000">
							<section>
								<span class="icon solid style2 major fa-code sept"></span>
								<h3 className="sept">Competitive Coding</h3>
								<p>A group of exceptional programmers who eat, sleep and breathe  programming. They are the heart and soul of all the tech competitions organised by us.</p>
							</section>
							<section>
								<span class="icon solid style2 major fa-desktop sept"></span>
								<h3 className="sept">Web Development</h3>
								<p>Web development is up-and-coming. We have developers who come up with robust and concrete websites and never let us down in the field.</p>
							</section>
							<section>
								<span class="icon solid style2 major fa-mobile sept"></span>
								<h3 className="sept">App Development</h3>
								<p>Like minded app developers who focus on inventive ideas for applications which can help everyone grow. We learn and grow together as a team.</p>
							</section>
							<section>
								<span class="icon solid style2 major fa-database sept"></span>
								<h3 className="sept">Data Science</h3>
								<p>Data is precious. To conserve its significance our data scientists who think deep and work on ample projects in order to shine further in the field.</p>
							</section>
							<section>
								<span class="icon solid style2 major fa-briefcase sept"></span>
								<h3 className="sept">Corporate</h3>
								<p>The backbone domain of our team which promotes and manages every event that we organise. The domain comprises confident people with extraordinary skills.</p>
							</section>
							<section>
								<span class="icon solid style2 major fa-paint-brush sept"></span>
								<h3 className="sept">Creatives</h3>
								<p>: A domain of creativity which is inclined towards striking graphics and appealing content creation for the team. Their work is a reflection of us on all social media platforms.</p>
							</section>
							
						</div>
					</div>
				</section>

				<section class="wrapper style1 align-center" data-aos="fade-left" data-aos-duration="2000">
					<div class="inner medium">
						<h2 style={{color:"#713e20",fontWeight:"800"}}>Get in touch</h2>
						<form onSubmit={this.handleSubmit}>
							<div class="fields">
								<div class="field half">
									<label for="name" className="sept" style={{fontWeight:"bold"}}>Name</label>
									<input type="text" name="name" id="name"   onChange={this.handleChange} required/>
								</div>
								<div class="field half">
									<label for="email" className="sept" style={{fontWeight:"bold"}}>Email</label>
									<input type="email" name="email" id="email"   onChange={this.handleChange} required/>
								</div>
								<div class="field">
									<label for="message" className="sept" style={{fontWeight:"bold"}}>Message</label>
									<textarea name="message" id="message" rows="6" onChange={this.handleChange} required></textarea>
								</div>
							</div>
							<ul class="actions special">
							{	this.state.show  ? <li><input type="submit" name="submit" id="submit" value="Send Message" /></li> : <p className="text-center sept" style={{fontWeight:"bold"}}>Message Sent</p>}
							</ul>
						</form>

					</div>
				</section>

			
						
						<Sponsor/>
						
				

				<section class="wrapper style1 align-center" data-aos="fade-right" data-aos-duration="2000">
					<div class="inner">
					<h2 style={{color:"#713e20",fontWeight:"800"}}>Find Us</h2>
						<p><i class="fa fa-map-marker sept-link" aria-hidden="true"> </i> SRM Institute of Science and Technology,<br></br> SRM Nagar, Kattankulathur, Chengalpattu District,<br></br> Tamil Nadu - 603203.</p>
						
					</div>
					<div  style={{background:"none",marginBottom:"50px"}}>
					<iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3122618504317!2d80.04205281475681!3d12.823087221589363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1601405094039!5m2!1sen!2sin" width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
					</div>
				</section>
               

				<Footer/>

		</div>



		

		</div>
			</div>
			
        );
    }
}

export default withRouter(Home);