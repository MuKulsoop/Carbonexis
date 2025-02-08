import React from 'react'
import './Navbar.css'
// @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Kalam:wght@300;400;700&family=Yatra+One&display=swap')
function NavBar()
{
 return (
    <>       
    
    <nav>
   <img src="STrax.svg" alt="" />
    
    
    < ul className = "NavItems">    
  <li className = "NavItem"><a href="#">Home</a></li>
  <li className = "NavItem"><a href="#">Projects</a></li>
  <li className = "NavItem"><a href="#">Donate</a></li>
  <li className = "NavItem"><a href="#">Dashboard</a></li>
  <li className = "NavItem"><a href="#">Blogs</a></li>
    </ul> 

    <div className = "Buttons">
    <button className = "btn" >Login</button>
    <button className = "btn" >Signup</button>

  </div>
    </nav>
    </>
 )
}
export default NavBar