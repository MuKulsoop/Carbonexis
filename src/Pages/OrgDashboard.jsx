import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Building2, Leaf, Globe2, Wallet, Dock, Activity, Sun, Plus, Edit2, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '@/Components/Navbar';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const OrganizationDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const mockProjects = [
    { 
      id: 1, 
      name: 'Solar Farm Alpha', 
      status: 'Active',
      totalPower: '2.5MW',
      credits: 1250,
      nfts: 85,
      revenue: '125.5 ETH',
      location: 'Arizona, USA',
      lastUpdated: '2 hours ago',
      verification: 'Verified'
    },
    { 
      id: 2, 
      name: 'Community Solar X', 
      status: 'Pending',
      totalPower: '1.8MW',
      credits: 850,
      nfts: 45,
      revenue: '78.3 ETH',
      location: 'California, USA',
      lastUpdated: '5 hours ago',
      verification: 'In Progress'
    },
    { 
      id: 3, 
      name: 'Green Energy Hub', 
      status: 'Active',
      totalPower: '3.2MW',
      credits: 1600,
      nfts: 120,
      revenue: '185.2 ETH',
      location: 'Texas, USA',
      lastUpdated: '1 day ago',
      verification: 'Verified'
    }
  ];

  const performanceData = [
    { month: 'Jan', revenue: 85, credits: 950, nfts: 45 },
    { month: 'Feb', revenue: 95, credits: 1100, nfts: 58 },
    { month: 'Mar', revenue: 120, credits: 1350, nfts: 72 },
    { month: 'Apr', revenue: 140, credits: 1500, nfts: 85 },
    { month: 'May', revenue: 160, credits: 1750, nfts: 98 }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-[#0A0B1E] bg-gradient-to-b from-[#0A0B1E] to-[#1A1B3E] p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NavBar />
      <motion.div 
        className="flex justify-between items-center mb-8"
        variants={itemVariants}
      >
      
        <div>
          <h1 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Organization Dashboard
          </h1>
          <p className="text-purple-200 opacity-80">Managing your sustainable energy projects</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Link to="/projects/create">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              <Plus className="w-4 h-4 mr-2" /> New Project
            </Button>
            </Link>
          </DialogTrigger>
          <DialogContent className="bg-[#141432] text-white border-purple-500/20">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            {/* Add project form here */}
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300">Total Projects</p>
                  <p className="text-3xl font-bold text-white mt-2">12</p>
                  <p className="text-purple-400 text-sm mt-2">8 Active • 4 Pending</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300">Total Power Output</p>
                  <p className="text-3xl font-bold text-white mt-2">7.5 MW</p>
                  <p className="text-blue-400 text-sm mt-2">+1.2 MW this month</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300">Carbon Credits</p>
                  <p className="text-3xl font-bold text-white mt-2">3,700</p>
                  <p className="text-green-400 text-sm mt-2">250 pending verification</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-300">Total Revenue</p>
                  <p className="text-3xl font-bold text-white mt-2">389 ETH</p>
                  <p className="text-teal-400 text-sm mt-2">+45.3 ETH this month</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-teal-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Projects List */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Active Projects</CardTitle>
              <Button variant="outline" className="border-purple-500/20 text-purple-300 ">
                <BarChart3 className="w-4 h-4 mr-2" /> Analytics
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="p-4 bg-[#1A1B3E] rounded-lg hover:bg-[#1E1F4A] transition-all duration-300 border border-purple-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium text-white text-lg">{project.name}</h3>
                          <span className={`ml-3 px-2 py-1 rounded-full text-xs ${
                            project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-purple-300 text-sm">Power Output</p>
                            <p className="text-white font-medium">{project.totalPower}</p>
                          </div>
                          <div>
                            <p className="text-purple-300 text-sm">Carbon Credits</p>
                            <p className="text-white font-medium">{project.credits}</p>
                          </div>
                          <div>
                            <p className="text-purple-300 text-sm">NFTs</p>
                            <p className="text-white font-medium">{project.nfts}</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" className="text-purple-300 hover:text-purple-400 hover:bg-purple-500/20">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Chart */}
        <motion.div variants={itemVariants}>
          <Card className="bg-[#141432] border-0 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96"> {/* Increased height for larger chart */}
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1A1B3E" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#141432', 
                        borderColor: '#1A1B3E',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8B5CF6" 
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#141432] border-0 backdrop-blur-lg mt-8">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
              <Link to="/nft/create">
                <Button className="w-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 justify-start">
                  <Plus className="w-4 h-4 mr-2" /> List New NFT
                </Button>
                </Link>
                <Button className="w-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 justify-start">
                  <Dock className="w-4 h-4 mr-2" /> Update Project Status
                </Button>
                <Button className="w-full bg-green-500/20 text-green-300 hover:bg-green-500/30 justify-start">
                  <Users className="w-4 h-4 mr-2" /> Manage Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OrganizationDashboard;
