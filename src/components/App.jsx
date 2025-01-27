import React from 'react';
import './App.css'


// import all the components here
// import Example from './example/example'





import Navbar from './navbar/navbar'
import Hero from './hero/hero'
// import FAQ from './FAQ/FAQ'
import Sponsors from './Sponsors/Sponsors'

import Bee from './hero/bee/bee'

// import AboutMe from './about/about'
// import WhatWeAreAbout from './about/whatweareabout'
import Footer from './footer/footer'
// app logic
function App() {

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  if (subdomain === '2024') {
    return <div>Hello 2024!</div>;
  }

  return (
    <>
    
      <Navbar />
      <main>
        <Hero />
        
        <Sponsors/>
        
        {/* <WhatWeAreAbout/> */}
      </main>
      
      {/* <Footer /> */}
      

      
    </>
  )
}

export default App
