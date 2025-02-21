import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    localStorage.removeItem("signer");
    localStorage.removeItem("owner");
    localStorage.removeItem("provider");
    localStorage.removeItem("userId");
    localStorage.removeItem("walletAddress");
    setIsAuthenticated(false);
    navigate('/')
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full shadow-md flex items-center justify-between px-8 py-4"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
        <Link to="/" className="flex items-center space-x-3">
          <img src="Logo.png" alt="Logo" className="w-12 h-12" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1CFF] to-[#EA0070] text-3xl font-bold ml-2 kalnia-glaze">
            CXIS
          </p>
        </Link>
      </motion.div>

      {/* Navigation Links */}
      
      <ul className="hidden md:flex space-x-10 text-lg text-white font-medium">
      <motion.li whileHover={{ y: -4, scale: 1.05, color: "#bb13e9" }}>
            <Link to="/" className="hover:text-purple-400 transition duration-300">
              Home
            </Link>
          </motion.li>
        {["Marketplace", "NFTInsta", "Projects"].map((item, index) => (
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
        {isAuthenticated && (
          <motion.li whileHover={{ y: -4, scale: 1.05, color: "#bb13e9" }}>
            <Link to="/userdashboard" className="hover:text-purple-400 transition duration-300">
              User Dashboard
            </Link>
          </motion.li>
        )}
        {isAuthenticated && (
          <motion.li whileHover={{ y: -4, scale: 1.05, color: "#bb13e9" }}>
            <Link to="/orgdashboard" className="hover:text-purple-400 transition duration-300">
              Org Dashboard
            </Link>
          </motion.li>
        )}
      </ul>

      {/* Buttons / Profile Dropdown */}
      <div className="hidden md:flex space-x-6 relative">
        {!isAuthenticated ? (
          <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group">
              <Link
                to="/login"
                className="relative px-10 py-2 bg-gradient-to-r from-[#e11cffb9] to-[#ea007188] text-white rounded-lg 
                shadow-lg transition duration-300 hover:shadow-purple-500/50"
              >
                Login
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group">
              <Link
                to="/signup"
                className="relative px-8 py-2 bg-gradient-to-r from-[#e11cffb9] to-[#ea007188] text-white rounded-lg 
                shadow-lg transition duration-300 hover:shadow-purple-500/50 mr-6"
              >
                Sign Up
              </Link>
            </motion.div>
          </>
        ) : (
          <div className="relative">
            {/* User Icon */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-white flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <UserCircle className="w-10 h-10 text-purple-400 hover:text-purple-500 transition duration-300" />
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-3 w-44 bg-[#222] shadow-lg rounded-lg py-2 text-white text-sm"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 hover:bg-[#333] transition duration-200"
                  >
                    <Settings className="w-5 h-5 mr-2 text-purple-400" />
                    Settings
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 w-full hover:bg-[#333] transition duration-200"
                  >
                    <LogOut className="w-5 h-5 mr-2 text-red-400" />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default NavBar;
