import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar1.css'
const Navbar1 = () => {
      var[classes,setclasses]=useState("navlinks ")
      let[val,setval]=useState(false)
      const handles=()=>{
           
            setval(!val)
        if(val){
            

           setclasses("navlinks active")
           
            return classes

        }
        if(!val){
        
            setclasses("navlinks ")
            
             return classes
 
         }
        
       

      }
  return (
    <nav >
      <div className='logo'>
            <li className='fas fa-mountain lo'></li>
            <h1 >himalayan</h1>
            

      </div>
      <ul className={`${classes}`}>
            <li className='link' ><button>home</button></li>
            <li className='link'>gadjets</li>
            <li className='link'>services</li>
            <li className='link'>contact</li>
            <li className='link'>about</li>
            
      </ul>
   <div className='dropdown-link' onClick={handles}>
      <i className='fas fa-bars fa-lg'></i>
   </div>
    </nav>
  )
}

export default Navbar1