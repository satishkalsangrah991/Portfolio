import React, { useState } from 'react'
import{ NavLink} from 'react-router-dom'

const Navbar = () => {
    const [show,setShow]=useState(false)
  return (
    <>
    <section className='section-class'>
       <nav className="navbar navbar-expand-lg  " id='top_nav'>
  <div className="container">
    <NavLink className="navbar-brand m-2" to="/"><img src='./images/satish.jpg'alt='mypic' className='image-fluid rounded-5' height='80px' ></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""}`}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='ulnav' >
        <li className="nav-item">
          <NavLink className="nav-link  m-1" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-1 nav-a" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-1" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-1 " to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item d-none">
          <NavLink className="nav-link m-1 " to="/Todo">Add Item</NavLink>
        </li> 
         <li className="nav-item d-none">
          <NavLink className="nav-link m-1 " to="/SignForm">Ragister</NavLink>
        </li> 

         {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu bg-warning">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
          </ul>
        </li>  */}

      </ul>
      <form className="d-flex " role="search" id='searchid'>
        <input className="form-control ms-2 fs-5" type="search" placeholder="Search" aria-label="Search" id='formid'/>
        <button className="btn btn-outline-warning"  id='btn-form' type="submit"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav> 
</section>
    </>
  )
}

export default Navbar

