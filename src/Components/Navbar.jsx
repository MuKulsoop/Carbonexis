import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className=" mb-10 z-10">
        <Link to="/"><img src="STrax.svg" alt="" /></Link>

        <div className="allNavItems">
          <ul className="NavItems">
            <li className="NavItem">
              <Link to="#">Home</Link>
            </li>
            <li className="NavItem">
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li className="NavItem">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="NavItem">
              <Link to="#">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="Buttons">
        <button>
          <div className="Button-Login">
           
              <Link to="/login"><h2 className="DescriptionOfButtonOfLogin">Login</h2>{" "}</Link>
            
          </div>
          </button>
          <button>
          <div className="Button-SignUp">
            
              <Link to="/signup"><h2 className="DescriptionOfButtonOfSignUp">SignUp</h2>{" "}</Link>
         
          </div>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
