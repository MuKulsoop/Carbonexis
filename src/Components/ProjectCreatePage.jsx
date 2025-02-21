
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./ProjectCreatePage.css";

   
  export default function ProjectCreatePage()
 {

  const NewProject = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }

  
    return (
      <>
      <div className="new-project-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-item active">
            <span className="notify-badge">3</span>
          </div>
          <div className="sidebar-item">
            <i className="icon icon-plus"></i>
          </div>
          <div className="sidebar-item">
            <i className="icon icon-users"></i>
          </div>
          <div className="sidebar-item">
            <i className="icon icon-document"></i>
          </div>
          <div className="sidebar-item">
            <i className="icon icon-settings"></i>
          </div>
          <div className="sidebar-item">
            <i className="icon icon-star"></i>
          </div>
          <div className="sidebar-item home">
            <i className="icon icon-home"></i>
          </div>
        </div>
  
        {/* Main Content */}
        <main className="main-content">
          <h1 className="page-title">New Project</h1>
  
          <div className="form-container">
            <div className="form-left">
              <div 
                className="image-upload-container"
                style={{backgroundImage: imagePreview ? `url(${imagePreview})` : 'none'}}
              >
                <motion.div 
                  className="upload-area"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input 
                    type="file" 
                    id="project-image" 
                    onChange={handleImageUpload}
                    accept="image/*" 
                    hidden
                  />
                  <label htmlFor="project-image" className="upload-label">
                    <div className="upload-icon"></div>
                    <p>upload images</p>
                  </label>
                </motion.div>
              </div>
              <p className="section-title">Description</p>
            </div>
  
            <div className="form-right">
              <div className="field-group">
                <label>Project Name</label>
                <motion.input 
                  type="text" 
                  className="text-input"
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)' }}
                />
              </div>
  
              <div className="field-group">
                <label>Owner Name</label>
                <motion.input 
                  type="text" 
                  className="text-input"
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)' }}
                />
              </div>
  
              <div className="field-group">
                <label>Carbon Credits Issued</label>
                <motion.input 
                  type="text" 
                  className="text-input"
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)' }}
                />
              </div>
  
              <div className="field-group">
                <label>Credits Price per ton</label>
                <motion.input 
                  type="text" 
                  className="text-input"
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)' }}
                />
              </div>
  
              <div className="field-group location">
                <label>Location</label>
                <motion.input 
                  type="text" 
                  className="text-input"
                  whileFocus={{ boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)' }}
                />
              </div>
  
              <motion.button 
                className="post-button"
                whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                POST <i className="icon icon-send"></i>
              </motion.button>
            </div>
          </div>
        </main>
  
        {/* Decorative Bubbles */}
        <div className="bubble bubble-large"></div>
        <div className="bubble bubble-small"></div>
      </div>
    
</>
)
}
 }