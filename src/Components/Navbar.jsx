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
  < ul className = "Footer "> <h4>Lift Media</h4>
  <li className = "FooterItem"><a href="#">Pricing</a></li>
  <li className = "FooterItem"><a href="#">Update</a></li>
  <li className = "FooterItem"><a href="#">Beta</a></li>
  <li className = "FooterItem"><a href="#">Newsletter</a></li>
  <li className = "FooterItem"><a href="#">Collaborations</a></li>
  </ul>


  < ul className = "Footer"> <h4>Product</h4>
  <li className = "FooterItem"><a href="#">Buisness</a></li>
  <li className = "FooterItem"><a href="#">Designers</a></li>
  <li className = "FooterItem"><a href="#">Classrooms</a></li>
  <li className = "FooterItem"><a href="#">Newcomers</a></li>

  </ul>


  < ul className = "Footer"> <h4>Learning</h4>
  <li className = "FooterItem"><a href="#">Learn Hub</a></li>
  <li className = "FooterItem"><a href="#">Manuals</a></li>
  <li className = "FooterItem"><a href="#">Tutorials</a></li>
  <li className = "FooterItem"><a href="#">Communities</a></li>
  </ul>



  < ul className = "Footer"> <h4>Resources</h4>
  <li className = "FooterItem"><a href="#">Tutorials</a></li>
  <li className = "FooterItem"><a href="#">Editorials</a></li>
  <li className = "FooterItem"><a href="#">Product</a></li>
  <li className = "FooterItem"><a href="#">Newsroom</a></li>
</ul>

  < ul className = "Footer"> <h4>About</h4>
  <li className = "FooterItem"><a href="#">Company</a></li>
  <li className = "FooterItem"><a href="#">Careers</a></li>
  <li className = "FooterItem"><a href="#">Legal</a></li>
  <li className = "FooterItem"><a href="#">Help</a></li>
  
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