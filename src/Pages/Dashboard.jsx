import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Leaf, Globe2, Wallet, Dock, Activity, Sun } from 'lucide-react';

const UserDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  const mockPriceHistory = [
    { date: 'Jan', credits: 45, nfts: 32 },
    { date: 'Feb', credits: 52, nfts: 38 },
    { date: 'Mar', credits: 48, nfts: 42 },
    { date: 'Apr', credits: 70, nfts: 55 },
    { date: 'May', credits: 65, nfts: 58 }
  ];

  const mockNFTs = [
    { id: 1, name: 'Solar Farm Alpha', type: 'Solar Energy', value: '2.4 ETH', power: '1.2MW' },
    { id: 2, name: 'Community Solar X', type: 'Community', value: '1.8 ETH', power: '0.8MW' },
    { id: 3, name: 'Green Energy Hub', type: 'Mixed Renewable', value: '3.1 ETH', power: '2.1MW' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0B1E] bg-gradient-to-b from-[#0A0B1E] to-[#1A1B3E] p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Energy Portfolio
        </h1>
        <p className="text-purple-200 opacity-80">Monitoring your sustainable investments</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Carbon Credits Card */}
        <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-300">Total Carbon Credits</p>
                <p className="text-3xl font-bold text-white mt-2">245.8 tons</p>
                <div className="flex items-center text-green-400 text-sm mt-2">
                  <span>+12.3% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NFT Value Card */}
        <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300">Solar NFT Value</p>
                <p className="text-3xl font-bold text-white mt-2">7.3 ETH</p>
                <div className="flex items-center text-blue-400 text-sm mt-2">
                  <span>4 Active Projects</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Sun className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Generation Card */}
        <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-300">Energy Generated</p>
                <p className="text-3xl font-bold text-white mt-2">4.1 MW</p>
                <div className="flex items-center text-green-400 text-sm mt-2">
                  <span>+0.8 MW this week</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Card */}
        <Card className="bg-[#141432] border-0 backdrop-blur-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-300">Environmental Impact</p>
                <p className="text-3xl font-bold text-white mt-2">326 Trees</p>
                <div className="flex items-center text-teal-400 text-sm mt-2">
                  <span>CO₂ Offset Equivalent</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-teal-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Portfolio Chart */}
        <Card className="lg:col-span-2 bg-[#141432] border-0 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Portfolio Performance</CardTitle>
            <div className="flex space-x-2">
              {['week', 'month', 'year'].map((period) => (
                <button 
                  key={period}
                  className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedPeriod === period 
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' 
                      : 'bg-[#1A1B3E] text-purple-300 hover:bg-purple-500/20'
                  }`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockPriceHistory}>
                <defs>
                  <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNFTs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1B3E" />
                <XAxis dataKey="date" stroke="#6B7280" />
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
                  dataKey="credits" 
                  stroke="#8B5CF6" 
                  fillOpacity={1}
                  fill="url(#colorCredits)"
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="nfts" 
                  stroke="#3B82F6" 
                  fillOpacity={1}
                  fill="url(#colorNFTs)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* NFT Collection */}
        <Card className="bg-[#141432] border-0 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Solar NFT Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNFTs.map((nft) => (
                <div 
                  key={nft.id}
                  className="p-4 bg-[#1A1B3E] rounded-lg hover:bg-[#1E1F4A] transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">{nft.name}</h3>
                      <p className="text-sm text-purple-300">{nft.type}</p>
                      <p className="text-sm text-blue-300 mt-1">Power Output: {nft.power}</p>
                    </div>
                    <p className="font-bold text-green-400">{nft.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8 bg-[#141432] border-0 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-[#1A1B3E] rounded-lg border border-purple-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="font-medium text-white">Solar Farm Energy Generation</p>
                <p className="text-sm text-purple-300">1.2 MW generated today</p>
              </div>
              <p className="text-sm text-blue-300">2 hours ago</p>
            </div>
            <div className="flex items-center p-4 bg-[#1A1B3E] rounded-lg border border-purple-500/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="font-medium text-white">New NFT Minted</p>
                <p className="text-sm text-purple-300">Community Solar Project X</p>
              </div>
              <p className="text-sm text-blue-300">5 hours ago</p>
            </div>
            <div className="flex items-center p-4 bg-[#1A1B3E] rounded-lg border border-purple-500/20">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="font-medium text-white">Carbon Credits Earned</p>
                <p className="text-sm text-purple-300">+25 tons from Solar Farm Alpha</p>
              </div>
              <p className="text-sm text-blue-300">1 day ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;