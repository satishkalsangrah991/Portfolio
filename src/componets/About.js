import React from 'react'


const About = () => {
  return (
    <>
    <div className='container'>
    <div className="row justify-content-center" id='about-row'>
  
      <div className='col-md-5 d-none d-md-block' id='img-about'>
      <img src='./images/satish.jpg' alt='mypic' className='image-fluid' height='700px'/>
      </div>
      <div className='col-md-5' id='contant-about'>
      <h1>Hello,</h1>
      <h2> I am satish i am designer click button ....</h2>
      <p>Find Low Cost Hosting Services. Search Faster, Better & Smarter at ZapMeta Now! Information 24/7. Wiki, News & More. Trusted by Millions. Web, Images & Video. 100+ Million Visitors.</p>
      <button type='button' className='btn' id='about-btn'>About me</button>
 </div>
    </div>
    </div>
    </>
  )
}

export default About