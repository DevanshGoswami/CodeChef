import React from 'react';
import axios from 'axios';
import './App.css';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import {Helmet} from 'react-helmet';
import {Navbar} from './nav';
import {Footer} from './footer';

import {withRouter} from 'react-router-dom';




class Events extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result : []
        }
    }
    componentDidMount(){
        axios.get('https://events-63eee.firebaseio.com/.json')
        .then(res => {
            
            var result = res.data.Events;
            var keys = Object.keys(result);
            for(var i=0;i<keys.length;i++){
                var k = keys[i];
                this.setState({
                    result : this.state.result.concat(result[k])
                })
            }
        })
    }

    render(){
        var renderTable = (event) =>{
            return(
                <tr>
                <td className="event">{event.title}</td>
                <td>{event.date}</td>
                </tr>
            );
        } 

         var renderEvent = (event) => {
             return(

                <div>
                
                <section data-aos="flip-down">
										
										<div class="content box" data-aos="fade-down-left">

										<h2 className="text-center px-5 py-3" style={{background:"#713e20",color:"white"}}>Upcoming Event</h2>
                                        <hr></hr>
											<h4 className="sept" style={{fontWeight:"bold"}}>{event.title}</h4>
                                            <p className="muted"><span class="fa fa-calendar sept" aria-hidden="true"></span> {event.date}</p>
                                            
											<p><span class="image left"><img src={event.img} alt=""></img></span>{event.des}</p>
                                            <ul class="actions special">
								              {/* <li><button id="submit"><Link to="/registration" style={{textDecoration:"none"}}>Register</Link></button></li> */}
                                              {/* <p className="sept"><strong>Registrations Closed!</strong></p> */}
                                              <li><a className="button primary" href="https://meet.google.com/bpj-sdmu-bac">Join Meet</a></li>
							                </ul>
										</div>
				</section>
                </div>
                
             );
         }

        var Res = this.state.result.reverse();
        
        return(
           
            <div className="App" >
              <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href="https://avatars1.githubusercontent.com/u/11960354?s=400&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Events"
            content="Latest events conducted by CodeChef SRM"
             /> 
             <title>Events</title>
                </Helmet>
                <Navbar  events={"active-link"} style3={{color:"#713e20"}}/>
          
    <div class="container">
        <h5 class="section-title h1 sept text-center" style={{fontWeight:"800",marginTop:"50px",marginBottom:"60px"}}>Events</h5>
        
        {Res.slice(0,1).map(renderEvent)}
        </div>
        
<hr></hr>
<div className="container">
<section>
										<header>
											<h3 className="sept" style={{fontWeight:"bold"}}>All Events</h3>
										</header>
										<div class="content">

										
											<div class="table-wrapper">
												<table>
                                                <thead>
                                                <tr>
                                                <th scope="col">Event</th>
                                                <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                                                            <tbody>
                                            {Res.map(renderTable)}
                                                <tr>
                                                <td className="event">Resume Building Webinar</td>
                                                <td>2020-07-25</td>
                                                </tr>
                                                <tr>
                                                <td className="event">Bug Crush</td>
                                                <td>2020-05-11</td>
                                                </tr>
                                                <tr>
                                                <td className="event">Let's code</td>
                                                <td>2020-02-07</td>
                                                </tr>
                                                <tr>
                                                <td className="event">A Pinch Of Code</td>
                                                <td>2019-10-11</td>
                                                </tr>
                                            </tbody>
                                                                        </table>
											</div>

										</div>
									</section>
</div>
<hr></hr>
<Footer/>

           
            </div>
        );
    }
}

export default withRouter(Events);