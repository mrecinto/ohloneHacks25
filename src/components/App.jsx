import { useState } from 'react'
import './App.css'


// import all the components here
// import Example from './example/example'
import Navbar from './navbar/navbar'
import FAQ from './FAQ/FAQ'
import Sponsors from './Sponsors/Sponsors'


// app logic
function App() {

  return (
    <>
      <Navbar/>
      <FAQ/>
      <Sponsors/>
      {/* <Example/> */}
    </>
  )
}

export default App
