import React from 'react';
import './App.css'


// import all the components here
// import Example from './example/example'





import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import FAQ from './FAQ/FAQ'
import Gallery from './Gallery/Gallery'
import Sponsors from './Sponsors/Sponsors'

// import Bee from './hero/bee/bee'

import AboutMe from './about/about'
// import WhatWeAreAbout from './about/whatweareabout'
import Footer from './footer/footer'
<<<<<<< HEAD
import Gallery from './Gallery/Gallery';
=======
import AboutUs from './about/about';
>>>>>>> About-Us
// app logic
function App() {

  return (
    <>
    
        <Navbar/>
      <section id="home">
        <Hero/>
      </section>
     
      
      {/* <Gallery/> */}

      <section id="about">
        <AboutUs/>
      </section>
      {/* <section id="gallery">
        <Gallery/>
      </section> */}

      <section id="faq">
        <FAQ/>
      </section>

      <section id="sponsors">
        <Sponsors/>
      </section>








      {/* <FAQ/> */}
      {/* <Footer/> */}
      
      
      

      
    </>
  )
}

export default App
