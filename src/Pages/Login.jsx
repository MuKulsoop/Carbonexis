"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const urls = [
    // 'https://carbonexis.onrender.com/api/users/login',
    // 'http://localhost:8000/api/users/login',
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("https://carbonexis.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token (if needed)
      localStorage.setItem("authToken", data.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <img src="BG.svg" className="absolute h-[20vh] w-[100vw] z-0" />

      <div className="min-h-screen bg-gradient-to-br from-[#143A85] to-[#590040E5] relative overflow-hidden">
        <img src="BG.svg" alt="Welcome character" className="absolute w-[100%] h-auto z-0" />

        {/* Background Circles */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#6726B7]/30"
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#6726B7]/20"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <img src="LoginBottom.svg" className="absolute bottom-0 z-1" />

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
              <div className="bg-white/20 backdrop-blur-md rounded-[40px] p-12 pb-0 overflow-hidden h-[75vh] w-[30vw] absolute">
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
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img src="Bache.svg" alt="Welcome character" width={350} height={350} className="transform translate-y-8 mt-44" />
              </motion.div>
            </motion.div>

            {/* Right Section - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 z-50 w-full max-w-md"
            >
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white text-lg mb-3">
                    Email
                  </label>
                  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-[#8BA4FF]/50"
                      placeholder="example@gmail.com"
                      required
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 text-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#8BA4FF]/50"
                      placeholder="••••••"
                      required
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

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#1F3278] to-[#162053] text-white text-xl font-semibold hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </motion.button>
              </form>

              <div className="text-center">
                <p className="text-white text-lg mb-2">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="text-[#8BA4FF] hover:text-[#9FB5FF] transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
