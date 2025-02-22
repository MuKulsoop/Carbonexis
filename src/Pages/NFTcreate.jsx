import React, { useState, useRef } from "react";
import { Upload, ChevronDown, Check } from "lucide-react";


const FloatingCircle = ({ size, delay, duration, initialPosition }) => {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-b from-[#b20aa7a5] to-[#6e1fab7e] backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        right: initialPosition.right,
        top: initialPosition.top,
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
      }}
    />
  );
};

const NFTCreate = () => {
  const [formData, setFormData] = useState({
    minimumMintedPrice: "",
    buyingPrice: "",
    sellingPrice: "",
    location: "",
    description: "",
    selectedProject: "",
    nftFile: null,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const dropdownRef = useRef(null);

  const projects = ["Project 1", "Project 2", "Project 3"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectSelect = (project) => {
    setFormData((prev) => ({
      ...prev,
      selectedProject: project,
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
      setFormData((prev) => ({
        ...prev,
        nftFile: file,
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
    if (!formData.selectedProject || !formData.nftFile) {
      alert("Please select a project and upload an NFT file.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#143A85] to-[#590040] p-8 relative overflow-hidden">
      {/* Background Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -40px);
          }
        }
      `}</style>
      <FloatingCircle
        size="300px"
        delay={0}
        duration={8}
        initialPosition={{ right: "-50px", top: "50px" }}
      />
      <FloatingCircle
        size="100px"
        delay={2}
        duration={6}
        initialPosition={{ right: "100px", top: "400px" }}
      />

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-white rounded-full mr-3" />
          <h1 className="text-4xl text-transparent bg-gradient-to-r from-[#ffffff] to-[#0037ffc0] bg-clip-text font-light tracking-widest">
            NEW NFT
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Upload Box */}
          <div
            className={`bg-gradient-to-b from-[#143a85c0] to-[#590040c5] border-2 border-[#9e9696] rounded-lg aspect-square flex justify-center items-center ${
              isDragging ? "border-white" : ""
            }`}
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
                <img
                  src={previewUrl}
                  alt="NFT Preview"
                  className="max-h-full w-auto rounded-lg"
                />
              ) : (
                <>
                  <Upload className="w-12 h-12 mb-4" />
                  <span className="text-2xl font-light">Upload NFT</span>
                </>
              )}
            </label>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {["Description","Minimum Minted Price", "Buying Price", "Selling Price", "Location"].map(
              (label) => (
                <div key={label}>
                  <label className="bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text block mb-2 text-xl font-semibold">
                    {label}
                  </label>
                  <input
                    type={label === ("Location" || "Description") ? "text" : "number"}
                    name={label.toLowerCase().replace(/\s+/g, "")}
                    value={formData[label.toLowerCase().replace(/\s+/g, "")]}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40 pb-2"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="relative mt-8" ref={dropdownRef}>
      <h2 className="text-2xl bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text font-bold mb-4">
        Select Your Project
      </h2>
      {/* Dropdown Toggle Button */}
      <div
        className="bg-transparent border border-white/20 rounded-lg p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {formData.selectedProject || "Choose a project"}
        <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div className="absolute z-10 bg-[#1c1c1c] border border-white/20 rounded-lg mt-2 w-full shadow-lg transition-all">
          {projects.map((project) => (
            <div
              key={project}
              className="p-4 text-white/80 hover:bg-purple-600/20 transition-colors flex justify-between items-center cursor-pointer"
              onClick={() => handleProjectSelect(project)}
            >
              {project}
              {formData.selectedProject === project && <Check className="w-5 h-5 text-purple-400" />}
            </div>
          ))}
        </div>
      )}
    </div>
        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button type="submit" className="bg-purple-600 text-white px-8 py-2 rounded-lg shadow-lg hover:shadow-purple-500/50">
            POST NFT
          </button>
        </div>
      </form>
    </div>
  );
};

export default NFTCreate;
