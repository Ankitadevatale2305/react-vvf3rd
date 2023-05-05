import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm' ;
import About from './components/About' ;


import './style.css';

let name = 'Ankita';
let name1 = 'Pranit';
export default function App() {
  return (
    <>
       <Navbar title="TextUtils" aboutText="About Us" contactText="Contact Us" /> 
       <div className="container my-3" ></div>
       <TextForm  heading="Enter Your Text"/>
       <About />
  
    </>
  );
}
export default App;