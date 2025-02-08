import React from 'react'
import './Navbar.css'
// @import url('https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Kalam:wght@300;400;700&family=Yatra+One&display=swap')
function NavBar()
{
 return (
    <>       
    
    <nav>
    <div className="logo"> Strax</div>
    
    
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
    <div className='MainFooter'>
  < ul className = "Footer"> <h4>Lift Media</h4>
  <li className = "FooterItem"><a href="#">Pricing</a></li>
  <li className = "FooterItem"><a href="#">Update</a></li>
  <li className = "FooterItem"><a href="#">Beta</a></li>
  <li className = "FooterItem"><a href="#">Newsletter</a></li>
  <li className = "FooterItem"><a href="#">Collaborations</a></li>
  </ul>


  < ul className = "Footer"> <h4>Lift Media</h4>
  <li className = "FooterItem"><a href="#">Pricing</a></li>
  <li className = "FooterItem"><a href="#">Update</a></li>
  <li className = "FooterItem"><a href="#">Beta</a></li>
  <li className = "FooterItem"><a href="#">Newsletter</a></li>
  <li className = "FooterItem"><a href="#">Collaborations</a></li>
  </ul>


  < ul className = "Footer"> <h4>Lift Media</h4>
  <li className = "FooterItem"><a href="#">Pricing</a></li>
  <li className = "FooterItem"><a href="#">Update</a></li>
  <li className = "FooterItem"><a href="#">Beta</a></li>
  <li className = "FooterItem"><a href="#">Newsletter</a></li>
  <li className = "FooterItem"><a href="#">Collaborations</a></li>
  </ul>



  < ul className = "Footer"> <h4>Lift Media</h4>
  <li className = "FooterItem"><a href="#">Pricing</a></li>
  <li className = "FooterItem"><a href="#">Update</a></li>
  <li className = "FooterItem"><a href="#">Beta</a></li>
  <li className = "FooterItem"><a href="#">Newsletter</a></li>
  <li className = "FooterItem"><a href="#">Collaborations</a></li>
  
    </ul> 
    
    </div>

  <div className='Icons'>
    <img src="#" className='Icon'/>
    <img src="#" className='Icon'/>
    <img src="#" className='Icon'/>
    <img src="#" className='Icon'/>
    <img src="#" className='Icon'/>
  
  </div>
   <div className='Copy'> <p>Copyright © 2022 Nazmul Shanto. All Rights Reserved</p></div>
   
    </>
 )
}
export default NavBar