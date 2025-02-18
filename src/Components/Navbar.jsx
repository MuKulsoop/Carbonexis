import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#04011C] shadow-md flex items-center justify-between px-8 py-4"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
        <Link to="/" className="flex items-center space-x-3">
          <img src="Logo.png" alt="Logo" className="w-12 h-12" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1CFF] to-[#EA0070] text-3xl font-bold ml-2 kalnia-glaze">CXIS</p>
        </Link>
      </motion.div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-10 text-lg text-white font-medium">
        {["Home", "Marketplace", "NFTInsta", "Projects", "Dashboard"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ y: -4, scale: 1.05, color: "#bb13e9" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={`/${item.toLowerCase()}`} className="hover:text-purple-400 transition duration-300">
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-6 ">
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <Link
            to="/signup"
            className="relative px-10 py-2  bg-gradient-to-r from-[#e11cffb9] to-[#ea007188] text-white rounded-lg 
            shadow-lg transition duration-300 hover:shadow-purple-500/50"
          >
            <span className="absolute inset-0 w-full h-full  opacity-0 group-hover:opacity-40 transition duration-300"></span>
            Login
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <Link
            to="/signup"
            className="relative px-8 py-2 bg-gradient-to-r from-[#e11cffb9] to-[#ea007188] text-white rounded-lg 
            shadow-lg transition duration-300 hover:shadow-purple-500/50 mr-6"
          >
            <span className="absolute inset-0 w-full h-full  opacity-0 group-hover:opacity-40 transition duration-300"></span>
            Sign Up
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
