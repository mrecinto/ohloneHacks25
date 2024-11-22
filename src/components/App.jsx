import { useState } from 'react'
import './App.css'


// import all the components here
// import Example from './example/example'
import Navbar from './navbar/navbar'
import FAQ from './FAQ/FAQ'


// app logic
function App() {

  return (
    <>
      <Navbar/>
      <FAQ/>
      {/* <Example/> */}
    </>
  )
}

export default App
