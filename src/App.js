import React from 'react';
import Navbar from './components/Navbar';
import './style.css';

let name = 'Ankita';
let name1 = 'Pranit';
export default function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" contactText="Contact Us" />
    </>
  );
}
export default App;