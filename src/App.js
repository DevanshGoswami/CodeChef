import React, {useEffect} from 'react';
import {Switch , Route ,BrowserRouter as Router,useLocation} from 'react-router-dom';
import {Loader} from './loader';
import {NotFound} from './404';
// import Reg from './eventreg';


const Home = React.lazy(()=>import('./home'));
const Events = React.lazy(()=>import('./events'));
const Team = React.lazy(()=>import('./team'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


class App extends React.Component{
  

  render() {
    
    return (
  <>
  <Router>
    <ScrollToTop/>
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
         
          
            {/* <Route path="/registration" exact render ={()=>(
            <React.Suspense fallback={<Loader/>}>
            <Reg/>
            </React.Suspense>
          )}/> */}
          <Route path="*" exact render ={()=>(
            <React.Suspense fallback={<Loader/>}>
            <NotFound/>
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
