import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='container-fluid text-center bg-warning justify-content-center'>
        
        <div className='row justify-content-center' id='footer'>
            <div className='col-md-3'>
                <h4>About</h4>
                <a href='/'>web</a><br></br>
                <a href='/'>Javascrip</a><br></br>
                <a href='/'>java</a><br></br>
                <a href='/'>python</a><br></br>
                <a href='/'>css</a><br></br>
                <a href='/'>Html</a><br></br>
            </div>
            <div className='col-md-2'>
            <h4>sevices</h4>
            
            <a href='/'>web</a><br></br>
                <a href='/'>Javascrip</a><br></br>
                <a href='/'>java</a><br></br>
                <a href='/'>python</a><br></br>
                <a href='/'>css</a><br></br>
                <a href='/'>Html</a><br></br>
            </div>
            <div className='col-md-4' id='icon'>
            <h4 className='text-center'>Title here</h4>
            <p className='text-center'>my name is satish and my city is shajapur</p>
            <i class="bi bi-chat-left-text-fill"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-cursor-fill"></i>
            <i class="bi bi-github"></i>
            </div>
            
        </div>
        <h5>code by satish 2022</h5>
       
        <hr></hr>
    </div>
    </>
  )
}

export default Footer