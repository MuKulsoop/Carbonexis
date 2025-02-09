import React from 'react'
import './Navbar.css'
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