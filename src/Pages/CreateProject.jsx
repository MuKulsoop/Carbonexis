import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { mintCertificationNFT } from "@/utils/BlockchainUtils";
import { registerProjectOnChain } from "@/utils/BlockchainUtils";
import { WalletContext } from "@/context/walletcontext";
import { ethers } from "ethers";


const FloatingCircle = ({ size, delay, duration, initialPosition }) => {
  return (
    
    <div
      className={`absolute rounded-full bg-gradient-to-b from-[#b20aabc0] to-[#6e1fabc0] backdrop-blur-sm`}
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

const NewProjectForm = () => {
  const [formData, setFormData] = useState({
    owner: "",
    projectName: "",
    name: "",
    carbonCredits: "",
    creditsPrice: "",
    location: "",
    description: "",
    images: [],
  });

  const [isDragging, setIsDragging] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);
  const { connectWallet } = useContext(WalletContext);
  const [signer, setSigner] = useState(null);
  const [owner, setOwner] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getSigner = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);
        const owner = localStorage.getItem("owner")
        if(owner){
          setOwner(owner)
        }
      } catch (error) {
        console.error("Failed to get signer:", error);
      }
    };

    getSigner();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageFiles],
    }));

    // Create preview URLs
    const newPreviewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.projectName ||
      !formData.carbonCredits ||
      !formData.creditsPrice ||
      !formData.location
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!signer) {
      await connectWallet();
    }

    try {
      // Step 1: Mint NFT (Certification)
      const projectId = await mintCertificationNFT("www.pinata.com", signer);
      console.log("NFT Minted, Project ID:", projectId);

      // Step 2: Register Project on Blockchain
      const projectRegistered = await registerProjectOnChain(
        signer,
        projectId,
        formData.projectName,
        formData.description,
        formData.location,
        formData.creditsPrice,
        formData.carbonCredits
      );

      if (!projectRegistered) {
        throw new Error("Blockchain project registration failed");
      }

      console.log("Project Registered on Blockchain");

      // Step 3: Register Project in Backend
      
      const formPayload = new FormData();
      formPayload.append("projectName", formData.projectName);
      formPayload.append("name", formData.name);
      formPayload.append("carbonCredits", formData.carbonCredits);
      formPayload.append("creditsPrice", formData.creditsPrice);
      formPayload.append("location", formData.location);
      formPayload.append("description", formData.description);
      formPayload.append("owner", owner);
      const imageBase64Array = await Promise.all(
        formData.images.map(async (image) => {
          const reader = new FileReader();
          return new Promise((resolve) => {
            reader.readAsDataURL(image);
            reader.onloadend = () => resolve(reader.result);
          });
        })
      );
      formPayload.append("images", JSON.stringify(imageBase64Array));

      const response = await fetch(
        "http://localhost:8000/api/projects/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            images: imageBase64Array, 
          }),
        }
      );

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Failed to create project.");

      alert("Project created successfully!");
      navigate('/orgdashboard')
      setFormData({ 
        projectName: "",
        name: "",
        carbonCredits: "",
        creditsPrice: "",
        location: "",
        description: "",
        images: [],
      });
      setPreviewUrls([]);
    } catch (error) {
      alert(error.message || "An error occurred.");
    }
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
            transform: translate(-30px, -30px);
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

      {/* Home Icon */}
      {/* <Sidebar /> */}
      {/* <Link to="/">
        <div className="absolute left-8 top-8 text-white/80 hover:text-white cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      </Link> */}

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        {/* Project Header */}
        <div className="flex items-center mb-8">
          <div className="w-2 h-2  bg-white rounded-full mr-3" />
          <h1 className="text-lg bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text font-light tracking-wider">
            New Project
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upload Box */}
          <div
            className={`bg-transparent border bg-gradient-to-b from-[#143a85ef] to-[#590040b9] border-[#ffffff8b] rounded-lg p-8 ${
              isDragging ? "border-white" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              multiple
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            <label
              htmlFor="fileInput"
              className="h-full flex flex-col items-center justify-center text-white/80 cursor-pointer hover:text-white transition-colors"
            >
              <Upload className="w-12 h-12 mb-4 " />
              <span className="text-lg bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text font-light">
                Upload Images
              </span>
              {previewUrls.length > 0 && (
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {previewUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </label>
          </div>

          {/* Description Box */}
          <div className="space-y-4">
            <h2 className="text-lg bg-gradient-to-r from-[#FFFFFF] to-[#0037ff] text-transparent bg-clip-text ">
              Description
            </h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-transparent text-white resize-none focus:outline-none"
              rows={3}
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                borderLeft: "none",
                borderRight: "none",
                borderTop: "none",
              }}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-8 bg-transparent border bg-gradient-to-b from-[#143a85ef] to-[#590040b9] border-[#ffffff8b]bg-transparent  border-white/20 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="text-lg bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className=" w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className=" text-lg bg-gradient-to-r from-[#FFFFFF] to-[#0037ff] text-transparent bg-clip-text mb-2">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent *: text-white border-b border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="text-lg text-white/80 block mb-2">
                  Carbon{" "}
                  <span className="text-lg bg-gradient-to-r  from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text">
                    Credits Issued
                  </span>
                </label>
                <input
                  type="number"
                  name="carbonCredits"
                  value={formData.carbonCredits}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="text-lg text-white/80 block mb-2">
                  Credits{" "}
                  <span className="text-lg bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text">
                    Price per ton
                  </span>
                </label>
                <input
                  type="number"
                  name="creditsPrice"
                  value={formData.creditsPrice}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <label className="bg-gradient-to-r from-[#FFFFFFE6] to-[#0037ffe3] text-transparent bg-clip-text mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-transparent text-white border-b border-white/20 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          {/* Post Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="relative px-10 py-2 bg-gradient-to-r from-[#e11cff75] flex gap-3 j to-[#ea007141] text-white rounded-lg 
                shadow-lg transition duration-300 hover:shadow-purple-500/50"
            >
              POST
              <svg
                className="w-4 h-4 transform rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProjectForm;
