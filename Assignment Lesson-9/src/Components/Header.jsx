import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>
   
  <div className='container  '>
       <div className='d-flex justify-content-end'>
       <h4>Company Name</h4>
       <div className='ms-auto p-2'> <NavLink to='/'>Features</NavLink></div>
       <div className='p-2'> <NavLink to='/enterprise'>Enterprise</NavLink></div> 
       <div className='p-2'><NavLink  to='/support'>Support</NavLink> </div>
       <div className='p-2'> <NavLink  to='/home'>Home</NavLink></div>

        </div>
      
        </div>
        <hr className='my-5 w-75 text-primary mx-auto'></hr>
        </>
         
  )
}

export default Header