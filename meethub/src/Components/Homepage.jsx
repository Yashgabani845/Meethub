import Navbar from './Navbar';
import Mainview from './Mainview';
import Midview from './Midview';
import Footer from './Footer';
import Bottomview from './Bottomview';
import React from 'react';

const Homepage=()=>{
    return(
        <div>
    <Navbar/>  
  <Mainview/>
  <Midview/>
  <Bottomview/>
  <Footer/>
        </div>
    );
}
export default Homepage;