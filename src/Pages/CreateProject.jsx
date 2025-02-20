import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Globe, Image, Landmark, DollarSign, Edit3, Trash2 } from 'lucide-react';

const ProjectCreatePage = () => {
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      creditsPricePerTon: '',
      images: []
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'Minimum 5 characters').required('Required'),
      description: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      creditsPricePerTon: Yup.number().min(0, 'Must be positive').required('Required'),
      images: Yup.array().min(1, 'At least one image required')
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const formData = new FormData();
        values.images.forEach((image) => {
          formData.append('images', image);
        });
        formData.append('project', JSON.stringify(values));
        
        const response = await axios.post('/api/projects', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        navigate(`/projects/${response.data.project._id}`);
      } catch (error) {
        console.error('Submission error:', error);
      }
      setIsSubmitting(false);
    }
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      formik.setFieldValue('images', [...formik.values.images, ...acceptedFiles]);
      setPreviewImages([...previewImages, ...acceptedFiles.map(file => URL.createObjectURL(file))]);
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-[#04011C] relative overflow-hidden flex items-center justify-center">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#DF1CFF] rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -150, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div 
        className="w-full max-w-5xl bg-gradient-to-br from-[#04011C] to-[#130582] backdrop-blur-xl rounded-3xl border border-[#DF1CFF]/30 shadow-2xl p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.div className="flex items-center gap-4 mb-10" variants={itemVariants}>
          <div className="p-3 bg-[#130582] rounded-xl">
            <Edit3 className="w-8 h-8 text-[#DF1CFF]" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#DF1CFF] to-[#130582] bg-clip-text text-transparent">
            Launch Your Project
          </h2>
        </motion.div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Name Input */}
          <motion.div variants={itemVariants}>
            <label className="text-lg font-medium text-[#DF1CFF] flex items-center gap-3">
              <Edit3 className="w-5 h-5" /> Project Name
            </label>
            <input 
              {...formik.getFieldProps('name')}
              className="w-full bg-[#130582]/30 border border-[#DF1CFF] rounded-lg px-4 py-3 text-white placeholder-[#DF1CFF]/50 focus:ring-[#DF1CFF]/30 transition-all"
              placeholder="Enter project name"
            />
          </motion.div>

          {/* Price Input */}
          <motion.div variants={itemVariants}>
            <label className="text-lg font-medium text-[#DF1CFF] flex items-center gap-3">
              <DollarSign className="w-5 h-5" /> Price Per Ton ($)
            </label>
            <input 
              type="number" {...formik.getFieldProps('creditsPricePerTon')}
              className="w-full bg-[#130582]/30 border border-[#DF1CFF] rounded-lg px-4 py-3 text-white placeholder-[#DF1CFF]/50"
              placeholder="Enter price per credit"
            />
          </motion.div>

          {/* Location Input */}
          <motion.div variants={itemVariants} className="col-span-2">
            <label className="text-lg font-medium text-[#DF1CFF] flex items-center gap-3">
              <Globe className="w-5 h-5" /> Project Location
            </label>
            <input 
              {...formik.getFieldProps('location')}
              className="w-full bg-[#130582]/30 border border-[#DF1CFF] rounded-lg px-4 py-3 text-white placeholder-[#DF1CFF]/50"
              placeholder="Enter project location"
            />
          </motion.div>

          {/* Image Upload */}
          <motion.div variants={itemVariants} className="col-span-2">
            <label className="text-lg font-medium text-[#DF1CFF] flex items-center gap-3">
              <Image className="w-5 h-5" /> Upload Images
            </label>
            <div {...getRootProps()} className="border-dashed border-2 border-[#DF1CFF] p-6 text-center cursor-pointer hover:border-white transition-all">
              <input {...getInputProps()} />
              <p className="text-[#DF1CFF]">Drag & drop files here</p>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="col-span-2">
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#130582] to-[#DF1CFF] text-white py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform"
            >
              {isSubmitting ? "Launching..." : "Launch Project"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProjectCreatePage;
