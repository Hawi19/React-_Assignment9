import React from 'react'

function Footer() {
  return (
    <>
     <hr className='my-5 w-75 text-primary mx-auto'></hr>
     <div className='container d-flex justify-content-around w-100 m-5 p-5'>
    <div>
   
    <h3>Features</h3>
    <ul>
    <li><a href="" className="a1">Cool stuff</a></li>
    <li><a href="">Random feature</a></li>
    <li><a href="">Team feature</a></li>
    </ul>
    </div>
    <div>
    <h3>Resources</h3>
    <ul>
    <li><a href="">Resource</a></li>
    <li><a href="">Resource name </a></li>
    </ul>
    </div>
    <div>
    <h3>About</h3>
    <ul>
    <li><a href="">Team</a></li>
    <li><a href="">Locations </a></li>
    </ul>
    </div>
    </div>
    </>
    
  )
}

export default Footer