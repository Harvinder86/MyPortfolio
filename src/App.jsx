import { useState } from 'react'
import './App.css'
import './Line.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'

import './style.css'
import ContactMe from './Components/ContactMe'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'



function App() {
const router=createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contactme",
    element: (
      <>
        <Navbar />
        <ContactMe />
      </>
    ),
  },
]);





  
 

 



  return (
    <>
      
     {/* <Navbar/> */}
     <RouterProvider router={router} />
     {/* <Home/>
     <About/>
   <ContactMe/> */}
 
    </>
  )
}

export default App
