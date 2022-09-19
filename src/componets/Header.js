import React from 'react'
import About from './About'
import Service from './Service'
import Contact from './Contact'

import { useNavigate } from 'react-router-dom'
// import SingForm from './signform/SingForm'

const Header = () => {

  const navigate=useNavigate()
  const naviGate=()=>{
navigate('SignForm')
  }
  const naviGateSecond=()=>{
    navigate('Todo')
  }
  return (
<>
<section id='secton-container'>
 <div className='container-fluid' >
    <div className='row justify-content-center' id='banner'>
        <div className='col-sm-6 col-12 justify-content-center' id='bannertext'>
        <div id='fisrt-div'>
        <h4><span>Welcome !</span></h4>
          <h1>I am Web Designer </h1>
          <p>My name is satish Patidar and ,My age is 23 ,city Shajapur village Gopipur and my skill is html ,css , Javascrip, React,Nodejs</p>
          
          <button type='button' className='btn' id='btn1' onClick={naviGate}>Log In</button>
          <button type='button' className='btn' id='btn2' onClick={naviGateSecond}>Project</button>
          </div>
        </div>
        <div className='col-sm-4 d-none d-md-block' id='bannerimg'>
<img src='./images/header.jpg' alt='mypic' className='image-fluid' height='600px' width='100%'/>
        </div>
    </div>
    <About/>
    <Service/>
    <Contact/>
    
 </div>

 </section> 
</>
  )
}

export default Header