import React from 'react';
import {Switch , Route ,BrowserRouter as Router} from 'react-router-dom';
import {Loader} from './loader';

const Home = React.lazy(()=>import('./home'));
const Events = React.lazy(()=>import('./events'));
const Team = React.lazy(()=>import('./team'));



class App extends React.Component{
  

  render() {
    
    return (
  <>
  <Router>
      <div className="App">
   
        <Switch location = {this.props.location}>
          <Route path="/" exact render ={()=>(
            <React.Suspense fallback={<Loader/>}>
              <Home/>
            </React.Suspense>
          )}/>
          <Route path="/load" component={Loader}/>
              <Route path="/team" exact render ={()=>(
            <React.Suspense fallback={<Loader/>}>
              <Team/>
            </React.Suspense>
          )}/>
              <Route path="/events" exact render ={()=>(
            <React.Suspense fallback={<Loader/>}>
              <Events/>
            </React.Suspense>
          )}/>
        </Switch> 
      </div>
   </Router>
  </>
    );
  }
}
export default App;
