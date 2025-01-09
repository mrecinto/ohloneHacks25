import React from 'react';
import './App.css'


// import all the components here
// import Example from './example/example'
import Navbar from './navbar/navbar'


// app logic
function App() {

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Render different content based on subdomain
  if (subdomain === '2024') {
    return <div>Hello 2024!</div>;
  }

  return (
    <>
      <Navbar/>
      {/* <Example/> */}
    </>
  )
}

export default App
