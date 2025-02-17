import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <nav className=" mb-10 z-10">
        <a href="/"><img src="STrax.svg" alt="" /></a>

        <div className="allNavItems">
          <ul className="NavItems">
            <li className="NavItem">
              <a href="#">Home</a>
            </li>
            <li className="NavItem">
              <a href="#">Projects</a>
            </li>
            <li className="NavItem">
              <a href="/marketplace">Marketplace</a>
            </li>
            <li className="NavItem">
              <a href="/Projects">Projects</a>
            </li>
            <li className="NavItem">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="Buttons">
        <button>
          <div className="Button-Login">
           
              <a href="/login"><h2 className="DescriptionOfButtonOfLogin">Login</h2>{" "}</a>
            
          </div>
          </button>
          <button>
          <div className="Button-SignUp">
            
              <a href="/signup"><h2 className="DescriptionOfButtonOfSignUp">SignUp</h2>{" "}</a>
         
          </div>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
