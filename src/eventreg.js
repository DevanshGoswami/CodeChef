import React from 'react';

import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';


import {Helmet} from 'react-helmet';

import firebase from 'firebase';



import {withRouter} from 'react-router-dom';


var firebaseConfig = {
    apiKey: "AIzaSyB8HpA_YA3NiEK_0-3qCKFLZ11n727RvmM",
    authDomain: "event-registration-9288b.firebaseapp.com",
    databaseURL: "https://event-registration-9288b.firebaseio.com",
    projectId: "event-registration-9288b",
    storageBucket: "event-registration-9288b.appspot.com",
    messagingSenderId: "776579872182",
    appId: "1:776579872182:web:80ae5642d1ea99f10d7d17",
    measurementId: "G-PPVQ23E47Q"
  };
  
  firebase.initializeApp(firebaseConfig);

  var Ref = firebase.database().ref('Submitions');


  function SaveSubmit(name,email,phone,reg){
    var newSubmit = Ref.push();
    newSubmit.set({
        name : name,
        email : email,
       phone : phone,
        reg : reg,
       
      
    });
}

class Reg extends React.Component{
    constructor(props){
		super(props);
		this.state={
			name : '',
			email : '',
            phone : '',
            reg : '',
			show : true
		}
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
   
	}
	
	handleSubmit(e) {
       
      var N = this.state.name;
      var E = this.state.email;
      var P = this.state.phone;
      var R = this.state.reg;

       
	   SaveSubmit(N,E,P,R);
	
		
     this.setState({
		 show : false
	 });

     alert("Your Registration was successful!!");

     this.props.history.push('/events');

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
             <title>Registration</title>
                </Helmet>
				 
<div className="is-preload" style={{fontFamily:"Raleway,sans-serif",background:"none"}}>
        
		<div id="wrapper" class="divided">

				<section class="wrapper style1 align-center" data-aos="fade-left" data-aos-duration="2000">
					<div class="inner medium">
						<h2 style={{color:"#713e20",fontWeight:"800"}}>Event Registration</h2>
                        <hr></hr>
						<form onSubmit={this.handleSubmit}>
							<div class="fields">
								<div class="field">
									<label for="name" className="sept" style={{fontWeight:"bold"}}>Name</label>
									<input type="text" name="name" id="name"   onChange={this.handleChange} required placeholder="Harry Potter"/>
								</div>
								<div class="field">
									<label for="email" className="sept" style={{fontWeight:"bold"}}>Email</label>
									<input type="email" name="email" id="email"   onChange={this.handleChange} required placeholder="harry@potter.com"/>
								</div>
                                <div class="field">
									<label for="reg" className="sept" style={{fontWeight:"bold"}}>Registration Number</label>
									<input type="text" name="reg" id="reg"   onChange={this.handleChange} required placeholder="Ra190000000000"/>
								</div>
                                <div class="field">
									<label for="phone" className="sept" style={{fontWeight:"bold"}}>Phone</label>
									<input type="text" name="phone" id="phone"   onChange={this.handleChange} required placeholder="9898989898"/>
								</div>
								
							</div>
							<ul class="actions special">
							{	this.state.show  ? <li><input type="submit" name="submit" id="submit" value="Register" /></li> : <p className="text-center sept" style={{fontWeight:"bold"}}>You have been successfully registered for the event.</p>}
							</ul>
						</form>

					</div>
				</section>
		</div>
		</div>
			</div>
			
		
			
        );
    }
}

export default withRouter(Reg);