import React from "react";
import "./Footer.css";
import {Facebook, InstagramIcon,  TwitterIcon, } from "lucide-react";
function Footer() {
  return (
    <>
      <footer>
        <div className="MainFooter">
          <ul className="Footer">
            {" "}
            <h4 className="font-bold">Lift Media</h4>
            <li className="FooterItem">
              <a href="#">Pricing</a>
            </li>
            <li className="FooterItem">
              <a href="#">Update</a>
            </li>
            <li className="FooterItem">
              <a href="#">Beta</a>
            </li>
            <li className="FooterItem">
              <a href="#">Newsletter</a>
            </li>
            <li className="FooterItem">
              <a href="#">Collaborations</a>
            </li>
          </ul>

          <ul className="Footer ">
            {" "}
            <h4 className="font-bold">Product</h4>
            <li className="FooterItem">
              <a href="#">Buisness</a>
            </li>
            <li className="FooterItem">
              <a href="#">Designers</a>
            </li>
            <li className="FooterItem">
              <a href="#">Classrooms</a>
            </li>
            <li className="FooterItem">
              <a href="#">Newcomers</a>
            </li>
          </ul>

          <ul className="Footer ">
            {" "}
            <h4 className="font-bold">Learning</h4>
            <li className="FooterItem">
              <a href="#">Learn Hub</a>
            </li>
            <li className="FooterItem">
              <a href="#">Manuals</a>
            </li>
            <li className="FooterItem">
              <a href="#">Tutorials</a>
            </li>
            <li className="FooterItem">
              <a href="#">Communities</a>
            </li>
          </ul>

          <ul className="Footer ">
            {" "}
            <h4 className="font-bold">Resources</h4>
            <li className="FooterItem">
              <a href="#">Tutorials</a>
            </li>
            <li className="FooterItem">
              <a href="#">Editorials</a>
            </li>
            <li className="FooterItem">
              <a href="#">Product</a>
            </li>
            <li className="FooterItem">
              <a href="#">Newsroom</a>
            </li>
          </ul>

          <ul className="Footer">
            {" "}
            <h4 className="font-bold">About</h4>
            <li className="FooterItem">
              <a href="#">Company</a>
            </li>
            <li className="FooterItem">
              <a href="#">Careers</a>
            </li>
            <li className="FooterItem">
              <a href="#">Legal</a>
            </li>
            <li className="FooterItem">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="Icons">
         
            <a href=""><Facebook /> </a>
          <a  href=""><InstagramIcon /> </a>
          <a href=""><TwitterIcon /> </a>
          
        </div>
        <div className="Copy">
          {" "}
          <p>Copyright © 2022 Nazmul Shanto. All Rights Reserved</p>
        </div>











        
      </footer>









    </>






  );
}

export default Footer;
