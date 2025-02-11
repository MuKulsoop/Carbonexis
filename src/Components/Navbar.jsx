import React from "react";
import "./Navbar.css";
function NavBar() {
  return (
    <>
      <nav>
        <img src="STrax.svg" alt="" />

       <div className="allNavItems">
       <ul className="NavItems">
          <li className="NavItem">
            <a href="#">Home</a>
          </li>
          <li className="NavItem">
            <a href="#">Projects</a>
          </li>
          <li className="NavItem">
            <a href="#">Donate</a>
          </li>
          <li className="NavItem">
            <a href="#">Dashboard</a>
          </li>
          <li className="NavItem">
            <a href="#">Blogs</a>
          </li>
        </ul>
       </div>

        <div className="Buttons">
          <div className="btn-Login">
            <button >Login</button>
          </div>
          <div className="btn-SignUp">
            {" "}
            <button >Signup</button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
