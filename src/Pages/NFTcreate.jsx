import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const FloatingCircle = ({ size, delay, duration, initialPosition }) => {
  return (
    <div 
      className={`absolute rounded-full bg-purple-600/20 backdrop-blur-sm`}
      style={{
        width: size,
        height: size,
        right: initialPosition.right,
        top: initialPosition.top,
        animation: `float ${duration}s ease-in-out infinite ${delay}s`
      }}
    />
  );
};

const NFTcreate = () => {
  const [formData, setFormData] = useState({
    minimumMintedPrice: '',
    buyingPrice: '',
    sellingPrice: '',
    location: '',
    description: '',
    selectedProject: '',
    nftFile: null
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const projects = ['Project 1', 'Project 2', 'Project 3'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectSelect = (project) => {
    setFormData(prev => ({
      ...prev,
      selectedProject: project
    }));
    setIsDropdownOpen(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      setFormData(prev => ({
        ...prev,
        nftFile: file
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the NFT upload and form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 p-8 relative overflow-hidden">
      {/* Background Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
        }
      `}</style>
      <FloatingCircle size="300px" delay={0} duration={8} initialPosition={{ right: '-50px', top: '50px' }} />
      <FloatingCircle size="100px" delay={2} duration={6} initialPosition={{ right: '100px', top: '400px' }} />

      {/* Home Icon */}
      <div className="absolute left-8 top-8 text-white/80 hover:text-white cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        {/* NEW Header */}
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-white rounded-full mr-3" />
          <h1 className="text-4xl text-white font-light tracking-widest">NEW</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Box */}
          <div 
            className={`bg-transparent border border-white/20 rounded-lg aspect-square ${isDragging ? 'border-white' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            <label 
              htmlFor="fileInput" 
              className="h-full flex flex-col items-center justify-center text-white/80 cursor-pointer hover:text-white transition-colors p-8"
            >
              {previewUrl ? (
                <img src={previewUrl} alt="NFT Preview" className="max-h-full w-auto rounded-lg" />
              ) : (
                <>
                  <Upload className="w-12 h-12 mb-4" />
                  <span className="text-xl font-light">upload NFT</span>
                </>
              )}
            </label>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {['Minimum Minted Price', 'Buying Price', 'Selling Price', 'Location'].map((label) => (
              <div key={label}>
                <label className="text-white/80 block mb-2 text-lg font-light">{label}</label>
                <input
                  type={label === 'Location' ? 'text' : 'number'}
                  name={label.toLowerCase().replace(/\s+/g, '')}
                  value={formData[label.toLowerCase().replace(/\s+/g, '')]}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40 pb-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description and Project Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h2 className="text-2xl text-white font-light">Description</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-transparent text-white resize-none focus:outline-none border-b border-white/20"
              rows={4}
            />
          </div>

          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-2xl text-white font-light mb-4">Select Your Project ▼</h2>
              <div 
                className="bg-transparent border border-white/20 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {projects.map((project, index) => (
                  <div
                    key={project}
                    className={`p-4 text-white/80 hover:bg-purple-600/20 transition-colors ${
                      formData.selectedProject === project ? 'bg-purple-600/20' : ''
                    }`}
                    onClick={() => handleProjectSelect(project)}
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="flex justify-end mt-8">
          <button 
            type="submit"
            className="px-6 py-2 bg-transparent border border-white/20 text-white rounded-lg hover:bg-purple-600/20 transition-colors flex items-center gap-2"
          >
            POST
            <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NFTcreate;