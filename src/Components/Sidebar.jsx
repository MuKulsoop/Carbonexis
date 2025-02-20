import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Package2,
  Users,
  Settings,
  PanelLeft,
  CircleChevronRight,
  CircleChevronLeft,
  Zap
} from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from './ui/button';
import { motion } from "framer-motion";
import Tooltip from './Tooltip';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet className="sm:hidden border-0">
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden border-0 hover:bg-transparent bg-[#04011C]">
            <PanelLeft className="h-5 w-5 text-[#DF1CFF]" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs w-[250px] bg-[#04011C] text-white border-r-2 border-[#130582]">
          <nav className="grid gap-6 text-lg font-medium">
            <Link to="/" className="flex items-center gap-2 rounded-full text-lg font-semibold py-2 px-4 
              bg-gradient-to-r from-[#130582] to-[#DF1CFF]">
              <img className="h-8 w-8 rounded-full" src="Logo.png" alt="Logo" />
              <span className="text-white">CXIS</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className={`fixed hidden sm:flex bg-inherit inset-y-0 left-0 z-[999] flex-col 
        border-r-2 border-[#130582] shadow-neon-purple
        ${isExpanded ? 'w-[220px]' : 'w-16'} transition-all duration-500 ease-in-out`}>
        
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between px-3 py-4 relative">
          <Link to="/" className="flex items-center gap-2 overflow-hidden">
            <motion.div 
              className=" rounded-full bg-gradient-to-tr from-[#130582] to-[#DF1CFF]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <img className="h-9 w-9 rounded-full" src="Logo.png" alt="Logo" />
            </motion.div>
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1CFF] to-[#130582] text-3xl font-bold ml-2 kalnia-glaze"
              >
                CXIS
              </motion.span>
            )}
          </Link>
          <Button
            size="icon"
            variant="outline"
            onClick={toggleExpand}
            className={`border-0 bg-transparent hover:bg-transparent transition-transform duration-700 ease-out mt-16 ${isExpanded ? 'absolute translate-x-[173px]' : 'absolute translate-x-[28px]'}`}
          >
            {isExpanded ? (
              <CircleChevronLeft className="h-5 w-5 bg-[#05140D] text-white rounded-full transition-transform duration-700 ease-out" />
            ) : (
              <CircleChevronRight className="h-5 w-5 bg-[#05140D] text-white rounded-full transition-transform duration-700 ease-out" />
            )}
          </Button>
        </div>

        {/* Enhanced Sidebar Links */}
        <nav className="flex flex-col space-y-2 px-2 py-4 mt-4">
          {[
            { to: "/", icon: Home, text: "Home" },
            { to: "/marketplace", icon: Package2, text: "Marketplace" },
            { to: "/blogs", icon: Users, text: "Blogs" },
            { to: "/projects", icon: Zap, text: "Projects" }
          ].map(({ to, icon: Icon, text }) => (
            <Link 
              key={to} 
              to={to} 
              className={`relative flex items-center gap-2 px-3 py-3 rounded-xl transition-all duration-300 
                ${isExpanded ? 'w-full justify-start pl-4' : 'justify-center'}
                ${location.pathname === to 
                  ? 'bg-[#130582] border-l-4 border-[#DF1CFF] shadow-neon-purple'
                  : 'text-[#DF1CFF] hover:bg-[#130582]/30 hover:border-l-4 hover:border-[#DF1CFF]/50'}
                group menu-item-glow`}
              onMouseEnter={() => setHovered(text)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <Icon className="h-6 w-6 transition-transform group-hover:scale-125" />
                {location.pathname === to && (
                  <motion.div 
                    className="absolute inset-0 bg-[#DF1CFF] rounded-full blur-[10px] opacity-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </div>
              {isExpanded && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-medium text-sm tracking-wide relative"
                >
                  {text}
                  {location.pathname === to && (
                    <motion.div 
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </motion.span>
              )}
              {!isExpanded && hovered === text && (
                <Tooltip text={text} bgColor="#DF1CFF" textColor="#04011C" />
              )}
            </Link>
          ))}
        </nav>

        {/* Enhanced Settings Section */}
        <nav className="mt-auto px-2 py-4">
          <Link 
            to="/settings" 
            className={`relative flex items-center gap-2 px-3 py-3 rounded-xl transition-all duration-300 
              ${isExpanded ? 'w-full justify-start pl-4' : 'justify-center'}
              ${location.pathname === "/settings" 
                ? 'bg-[#130582] border-l-4 border-[#DF1CFF] shadow-neon-purple'
                : 'text-[#DF1CFF] hover:bg-[#130582]/30 hover:border-l-4 hover:border-[#DF1CFF]/50'}
              group menu-item-glow`}
            onMouseEnter={() => setHovered('Settings')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative">
              <Settings className="h-6 w-6 transition-transform group-hover:scale-125" />
              {location.pathname === "/settings" && (
                <motion.div 
                  className="absolute inset-0 bg-[#DF1CFF] rounded-full blur-[10px] opacity-50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
            </div>
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-medium text-sm tracking-wide relative"
              >
                Settings
                {location.pathname === "/settings" && (
                  <motion.div 
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#DF1CFF] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </motion.span>
            )}
            {!isExpanded && hovered === "Settings" && (
              <Tooltip text="Settings" bgColor="#DF1CFF" textColor="#04011C" />
            )}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;