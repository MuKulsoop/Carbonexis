import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Image,
  Zap,
  MessageSquare,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  CircleChevronRight,
  CircleChevronLeft,
} from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from './ui/button';


const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarLinks = [
    { to: "/", icon: Home, text: "Home" },
    { to: "/gallery", icon: TrendingUp, text: "Dashboard" },
    { to: "/messages", icon: Users, text: "Users" },
    { to: "/projects", icon: Zap, text: "Projects" },
    { to: "/ideas", icon: Lightbulb, text: "Ideas" },
  ];

  const Tooltip = ({ text, bgColor, textColor }) => (
    <div className="absolute left-16 bg-gradient-to-r from-[#DF1CFF] to-[#130582] text-white px-3 py-1.5 rounded-md text-sm font-medium z-50 whitespace-nowrap shadow-lg">
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 transform rotate-45 w-2 h-2 bg-[#DF1CFF]"></div>
      {text}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={{ x: -20, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed hidden sm:flex flex-col inset-y-0 left-0 z-[999] 
         bg-[#ffffff6c]
          border-r border-[#DF1CFF]/30 shadow-[0_0_15px_rgba(223,28,255,0.3)]
          ${isExpanded ? 'w-[220px]' : 'w-16'} transition-all duration-500 ease-in-out`}
      >
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between px-3 py-6 relative">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <motion.div 
              className="flex items-center justify-center h-10 w-10 rounded-full "
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
                   <img className="h-9 w-9 rounded-full" src="Logo.png" alt="Logo" />

            </motion.div>
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-transparent bg-clip-text text-2xl font-bold ml-2"
              >
                CEXIS
              </motion.span>
            )}
          </Link>
        
          
          <Button
         
          variant="outline"
          onClick={toggleExpand}
          className={` bg-transparent hover:bg-transparent transition-transform duration-700 ease-out mt-16 ${isExpanded ? 'absolute translate-x-[173px]' : 'absolute translate-x-[28px]'}`}
        >
          {isExpanded ? (
            <CircleChevronLeft className="h-6 w-6 bg-[#7a26b3] text-white rounded-full transition-transform duration-700 ease-out" />
          ) : (
            <CircleChevronRight className="h-6 w-6 bg-[#7a26b3] text-white rounded-full transition-transform duration-700 ease-out" />
          )}
        </Button>
         
        </div>

        {/* NEW Label */}
        <div className="px-4 mt-2 mb-6">
          {isExpanded ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-semibold tracking-wider"
            >
              NEW
              <div className="h-0.5 w-full bg-gradient-to-r from-[#DF1CFF] to-transparent mt-1"></div>
            </motion.div>
          ) : (
            <div className="flex justify-center">
              <div className="h-1 w-6 bg-gradient-to-r from-[#DF1CFF] to-transparent rounded-full"></div>
            </div>
          )}
        </div>

        {/* Main Navigation Links */}
        <nav className="flex flex-col space-y-2 px-2 py-4">
          {sidebarLinks.map(({ to, icon: Icon, text }) => (
            <motion.div
              key={to}
              whileHover={{ x: isExpanded ? 3 : 0, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                to={to} 
                className={`relative flex items-center gap-2 px-3 py-3 rounded-xl transition-all duration-300 
                  ${isExpanded ? 'w-full justify-start pl-4' : 'justify-center'}
                  ${location.pathname === to 
                    ? 'bg-[#130582]/80 border-l-4 border-[#DF1CFF] shadow-[0_0_10px_rgba(223,28,255,0.4)]'
                    : 'text-white hover:bg-[#130582]/30 hover:border-l-4 hover:border-[#DF1CFF]/50'}
                  group`}
                onMouseEnter={() => setHovered(text)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative">
                  <Icon className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 
                    ${location.pathname === to ? 'text-[#DF1CFF]' : 'text-white'}`} />
                  {location.pathname === to && (
                    <motion.div 
                      className="absolute inset-0 bg-[#DF1CFF] rounded-full blur-[10px] opacity-30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5, opacity: [0.4, 0.2, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                {isExpanded && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`font-medium text-sm tracking-wide relative ${location.pathname === to ? 'text-[#DF1CFF]' : 'text-white'}`}
                  >
                    {text}
                    {location.pathname === to && (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#DF1CFF] to-transparent"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                )}
                {!isExpanded && hovered === text && <Tooltip text={text} />}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Settings at Bottom */}
        <div className="mt-auto px-2 py-4">
          <motion.div
            whileHover={{ x: isExpanded ? 3 : 0, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link 
              to="/settings" 
              className={`relative flex items-center gap-2 px-3 py-3 rounded-xl transition-all duration-300 
                ${isExpanded ? 'w-full justify-start pl-4' : 'justify-center'}
                ${location.pathname === "/settings" 
                  ? 'bg-[#130582]/80 border-l-4 border-[#DF1CFF] shadow-[0_0_10px_rgba(223,28,255,0.4)]'
                  : 'text-white hover:bg-[#130582]/30 hover:border-l-4 hover:border-[#DF1CFF]/50'}
                group`}
              onMouseEnter={() => setHovered('Settings')}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <Settings className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45
                  ${location.pathname === "/settings" ? 'text-[#DF1CFF]' : 'text-white'}`} />
                {location.pathname === "/settings" && (
                  <motion.div 
                    className="absolute inset-0 bg-[#DF1CFF] rounded-full blur-[10px] opacity-30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: [0.4, 0.2, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              {isExpanded && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`font-medium text-sm tracking-wide relative ${location.pathname === "/settings" ? 'text-[#DF1CFF]' : 'text-white'}`}
                >
                  Settings
                  {location.pathname === "/settings" && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#DF1CFF] to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.span>
              )}
              {!isExpanded && hovered === "Settings" && <Tooltip text="Settings" />}
            </Link>
          </motion.div>
        </div>
      </motion.aside>
      
      {/* Mobile Sidebar - Simplified version */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1a237e] to-[#4a0072] px-2 py-3 flex justify-around z-50 border-t border-[#DF1CFF]/30">
        {sidebarLinks.map(({ to, icon: Icon, text }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${location.pathname === to ? 'bg-[#130582]/80 shadow-[0_0_10px_rgba(223,28,255,0.4)]' : ''}`}
            >
              <Icon className={`h-5 w-5 ${location.pathname === to ? 'text-[#DF1CFF]' : 'text-white'}`} />
            </motion.div>
            <span className="text-xs text-white mt-1">{text}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;