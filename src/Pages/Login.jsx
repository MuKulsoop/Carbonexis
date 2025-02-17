"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Home } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
    <img
        src="BG.svg"
        className=" absolute h-[20vh] w-[100vw] z-0"/>
    
    <div className="min-h-screen bg-gradient-to-br from-[#143A85] to-[#590040E5] relative overflow-hidden">
    <img
        src="BG.svg"
        alt="Welcome character"
        className=" absolute w-[100%] h-auto z-0"/>
      {/* Background Circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#6726B7]/30"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#6726B7]/20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        
      />
      <img
        src="LoginBottom.svg"
        className=" absolute bottom-0 z-1"/>
      

      {/* Navigation
      <nav className="absolute top-0 right-0 p-6 flex gap-8 items-center">
        <a href="/" className="text-white/80 hover:text-white transition-colors">
          <Home className="w-5 h-5" />
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Help
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Contact us
        </a>
      </nav> */}

      {/* Main Content */}
      <main className="container mx-auto min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-[40px] p-12 pb-0 overflow-hidden h-[75vh] w-[30vw] absolute ">
              <motion.h1
                className="text-white text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                WELCOME
                <br />
                BACK!
              </motion.h1>
              
            </div>
            <motion.div
                className="mt-8"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="Bache.svg"
                  alt="Welcome character"
                  width={350}
                  height={350}
                  className=" transform translate-y-8 mt-44"
                />
              </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-white text-lg mb-2">
                Don&apos;t have a account,{" "}
                <a href="#" className="text-[#8BA4FF] hover:text-[#9FB5FF] transition-colors">
                  Sign up
                </a>
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white text-lg mb-3">
                  Username
                </label>
                <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-[#8BA4FF]/50"
                    placeholder="deniel123@gmail.com"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="password" className="block text-white text-lg mb-3">
                  Password
                </label>
                <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#8BA4FF]/50"
                    placeholder="••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <motion.div whileTap={{ scale: 0.9 }} className="relative">
                  <input type="checkbox" className="w-5 h-5 rounded-full accent-[#8BA4FF] cursor-pointer" />
                </motion.div>
                <span className="text-white text-lg group-hover:text-white/90 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-[#8BA4FF] hover:text-[#9FB5FF] transition-colors text-lg">
                Forget password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#1F3278] to-[#162053] text-white text-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Sign In
            </motion.button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-lg">
                <span className="px-4 text-white/60 bg-gradient-to-br from-[#6726B7] to-[#1B2C6D]">
                  or continue with
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              {[
                { name: "Google", bg: "bg-white" },
                { name: "facebook", bg: "bg-[#1877F2]" },
                { name: "apple", bg: "bg-white" },
              ].map((provider) => (
                <motion.button
                  key={provider.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl ${provider.bg} shadow-lg hover:opacity-90 transition-opacity`}
                >
                  <div className="w-6 h-6 relative">
                    <img
                      src={`${provider.name}.svg`}
                      alt={`Sign in with ${provider.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
    </>
  )
}

