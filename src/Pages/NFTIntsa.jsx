import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Share2, MoreHorizontal, Heart, Globe, Shield, Leaf } from 'lucide-react';
import NavBar from '@/Components/Navbar';

const NFTInsta = () => {
  const mockPosts = [
    {
      id: 1,
      org: "SolarPower Initiative",
      title: "Community Solar Farm NFT",
      description: "Support renewable energy! Each NFT represents a share in our new solar farm project.",
      auraPoints: 1500,
      mints: 234,
      price: "0.5 ETH",
      impact: "Reduces 2.5 tons CO2/year",
      image: "https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg",
      verified: true
    },
    {
      id: 2,
      org: "GreenEarth Foundation",
      title: "Reforestation Project Token",
      description: "Join our mission to plant 10,000 trees. Each NFT funds 10 new trees.",
      auraPoints: 2000,
      mints: 156,
      price: "0.3 ETH",
      impact: "Plants 10 trees",
      image: "https://www.prudenceindia.com/assets/images/environment.jpg",
      verified: true
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    hover: { scale: 1.02 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 p-8">
    <NavBar />
      <div className="max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence>
            {mockPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Card className="bg-gradient-to-r from-gray-800 to-gray-900/80 border-0 rounded-2xl shadow-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <motion.div 
                      className="md:w-1/2 relative group overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-96 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-6">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-6 w-6 text-green-400" />
                          <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 ring-2 ring-purple-500">
                            <AvatarImage src={post.image} />
                            <AvatarFallback className="bg-purple-700">{post.org[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-xl font-semibold text-white">{post.org}</p>
                            <motion.div 
                              className="px-2 py-1 bg-purple-600/30 rounded-full"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-sm text-purple-400">🌟 {post.auraPoints} Aura Points</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      <motion.p 
                        className="text-gray-300 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {post.description}
                      </motion.p>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          className="bg-gray-800/50 p-4 rounded-xl"
                          whileHover={{ y: -5 }}
                        >
                          <p className="text-sm text-gray-400">Total Mints</p>
                          <p className="text-2xl font-bold text-purple-400">{post.mints}</p>
                        </motion.div>
                        <motion.div 
                          className="bg-gray-800/50 p-4 rounded-xl"
                          whileHover={{ y: -5 }}
                        >
                          <p className="text-sm text-gray-400">Price</p>
                          <p className="text-2xl font-bold text-green-400">{post.price}</p>
                        </motion.div>
                      </div>

                      <motion.div 
                        className="bg-gradient-to-r from-purple-600/20 to-green-600/20 p-4 rounded-xl border border-purple-500/30"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="h-6 w-6 text-green-400" />
                          <div>
                            <p className="text-sm text-gray-300">Environmental Impact</p>
                            <p className="text-lg font-semibold text-white">{post.impact}</p>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Button variant="ghost" className="text-purple-400 hover:bg-gray-700/50 rounded-full">
                              <Heart className="h-5 w-5 mr-2" /> {post.mints}
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Button variant="ghost" className="text-purple-400 hover:bg-gray-700/50 rounded-full">
                              <Share2 className="h-5 w-5 mr-2" /> Share
                            </Button>
                          </motion.div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white px-6 py-4 rounded-full text-lg font-semibold">
                            Mint Now
                          </Button>
                        </motion.div>
                      </div>

                      {post.verified && (
                        <motion.div 
                          className="flex items-center gap-2 justify-end"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <Shield className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-gray-400">CXIS Verified Impact</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NFTInsta;