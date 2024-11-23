import { useState } from 'react'
import './App.css'


// import all the components here
// import Example from './example/example'
import Navbar from './navbar/navbar'
import AboutMe from './about/about'
import WhatWeAreAbout from './about/whatweareabout'


// app logic
function App() {

  return (
    <>
      <Navbar/>
      <AboutMe/>
      <WhatWeAreAbout/>
    </>
  )
}

export default App
