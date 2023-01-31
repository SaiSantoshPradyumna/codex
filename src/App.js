import React from 'react';
import { BrowserRouter as Router,Routes, Route,NavLink } from 'react-router-dom';
import AppHeader from "./header";
import Home from "./home";
import EventDate from "./eventdate";
import Resources from "./resources";
import Faqs from "./FAQs";
import Pictures from "./memories";
import Info from "./contact&info";
import Footr from "./footer";
import About from './about';
import Members from './members';
import Register from './register';
import Navbar from './header';
function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Home/>
      <EventDate/>
      <Resources/>
      <Faqs/>
      <div>      <Pictures/></div>
      <Info/>
      <Footr/>
    </div>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path='/' exact component={Home}/>
    //     <Route path='/about' component={About}/>
    //     <Route path='/members' component={Members}/>
    //     <Route path ='/resources' component={Resources}/>
    //     <Route path='/register' component={Register}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
