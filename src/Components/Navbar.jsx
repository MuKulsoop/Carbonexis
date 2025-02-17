import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <nav className=" mb-10">
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
              <a href="/marketplace">Marketplace</a>
            </li>
            <li className="NavItem">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="Buttons">
          <div className="Button-Login">
            <button>
              <h2 className="DescriptionOfButtonOfLogin">Login</h2>{" "}
            </button>
          </div>
          <div className="Button-SignUp">
            <button>
              <h2 className="DescriptionOfButtonOfSignUp">SignUp</h2>{" "}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
