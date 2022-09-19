import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './componets/About'
import Todo from './componets/addtodo/Todo'
import Contact from './componets/Contact'
import Service from './componets/Service'
import SingForm from './componets/signform/SingForm'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
  <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/About' element={ <About/>}/>
   <Route path='/Service' element={ <Service/>}/>
   <Route path='/Contact' element={ <Contact/>}/>
   <Route path='/Signform' element={<SingForm/>}/>
   <Route path='/Todo' element={<Todo/>}/>
   <Route/>
  
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
