import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, MapPin, Calendar, Upload, User, Phone, Mail, AlertTriangle, FileText, Camera, CheckCircle, X } from 'lucide-react';

const RequestHumanity: React.FC = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      nationalId: '',
      dateOfBirth: ''
    },
    location: {
      country: '',
      state: '',
      city: '',
      address: '',
      coordinates: ''
    },
    disaster: {
      type: '',
      date: '',
      description: '',
      severity: '',
      affectedPeople: ''
    },
    assistance: {
      immediateNeeds: [],
      requestedAmount: '',
      urgencyLevel: '',
      additionalInfo: ''
    },
    documents: {
      idProof: null,
      damagePhotos: [],
      officialReports: []
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState({
    idProof: null as File | null,
    damagePhotos: [] as File[],
    officialReports: [] as File[]
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const totalSteps = 5;

  const disasterTypes = [
    'Hurricane/Typhoon', 'Earthquake', 'Flood', 'Wildfire', 'Tornado',
    'Drought', 'Landslide', 'Tsunami', 'Volcanic Eruption', 'Cyclone',
    'Blizzard/Ice Storm', 'Hailstorm', 'Mudslide', 'Avalanche', 'Other'
  ];

  const immediateNeedsOptions = [
    'Emergency Shelter', 'Food & Water', 'Medical Care', 'Clothing',
    'Transportation', 'Communication', 'Temporary Housing', 'Utilities Restoration',
    'Pet Care', 'Psychological Support', 'Legal Aid', 'Financial Assistance'
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleNeedsChange = (need: string) => {
    const currentNeeds = formData.assistance.immediateNeeds;
    const updatedNeeds = currentNeeds.includes(need)
      ? currentNeeds.filter(n => n !== need)
      : [...currentNeeds, need];
    
    handleInputChange('assistance', 'immediateNeeds', updatedNeeds);
  };

  const handleFileUpload = (type: 'idProof' | 'damagePhotos' | 'officialReports', files: FileList | null) => {
    if (!files) return;

    if (type === 'idProof') {
      const file = files[0];
      if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
        setUploadedFiles(prev => ({ ...prev, idProof: file }));
        alert(`ID Proof uploaded: ${file.name}`);
      } else {
        alert('Please upload an image or PDF file for ID proof.');
      }
    } else if (type === 'damagePhotos') {
      const fileArray = Array.from(files).filter(file => file.type.startsWith('image/'));
      if (fileArray.length > 0) {
        setUploadedFiles(prev => ({ 
          ...prev, 
          damagePhotos: [...prev.damagePhotos, ...fileArray] 
        }));
        alert(`${fileArray.length} photo(s) of affected areas uploaded successfully!`);
      } else {
        alert('Please upload image files only for photos of affected areas.');
      }
    } else if (type === 'officialReports') {
      const fileArray = Array.from(files).filter(file => 
        file.type === 'application/pdf' || 
        file.type.startsWith('image/') ||
        file.type.includes('document')
      );
      if (fileArray.length > 0) {
        setUploadedFiles(prev => ({ 
          ...prev, 
          officialReports: [...prev.officialReports, ...fileArray] 
        }));
        alert(`${fileArray.length} official report(s) uploaded successfully!`);
      } else {
        alert('Please upload PDF, image, or document files for official reports.');
      }
    }
  };

  const removeFile = (type: 'damagePhotos' | 'officialReports', index: number) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!uploadedFiles.idProof) {
      alert('Please upload your ID proof before submitting.');
      return;
    }
    
    if (uploadedFiles.damagePhotos.length === 0) {
      alert('Please upload at least one photo of affected areas before submitting.');
      return;
    }

    // Handle form submission
    console.log('Form Data:', formData);
    console.log('Uploaded Files:', uploadedFiles);
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.fullName}
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  National ID/Passport *
                </label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.nationalId}
                  onChange={(e) => handleInputChange('personalInfo', 'nationalId', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your ID number"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Location Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location.country}
                  onChange={(e) => handleInputChange('location', 'country', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  State/Province *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location.state}
                  onChange={(e) => handleInputChange('location', 'state', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your state/province"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location.city}
                  onChange={(e) => handleInputChange('location', 'city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location.address}
                  onChange={(e) => handleInputChange('location', 'address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Enter your full address"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Disaster Information
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type of Disaster *
                </label>
                <select
                  required
                  value={formData.disaster.type}
                  onChange={(e) => handleInputChange('disaster', 'type', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                >
                  <option value="">Select disaster type</option>
                  {disasterTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date of Disaster *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.disaster.date}
                    onChange={(e) => handleInputChange('disaster', 'date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of People Affected
                  </label>
                  <input
                    type="number"
                    value={formData.disaster.affectedPeople}
                    onChange={(e) => handleInputChange('disaster', 'affectedPeople', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                    placeholder="Number of affected people"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Disaster Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.disaster.description}
                  onChange={(e) => handleInputChange('disaster', 'description', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Describe the disaster and its impact..."
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Assistance Required
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Immediate Needs (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {immediateNeedsOptions.map(need => (
                    <label key={need} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.assistance.immediateNeeds.includes(need)}
                        onChange={() => handleNeedsChange(need)}
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{need}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Requested Amount (USD) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.assistance.requestedAmount}
                    onChange={(e) => handleInputChange('assistance', 'requestedAmount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                    placeholder="Enter amount needed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    required
                    value={formData.assistance.urgencyLevel}
                    onChange={(e) => handleInputChange('assistance', 'urgencyLevel', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  >
                    <option value="">Select urgency level</option>
                    <option value="critical">Critical (Life-threatening)</option>
                    <option value="high">High (Urgent need)</option>
                    <option value="medium">Medium (Important)</option>
                    <option value="low">Low (Can wait)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  rows={4}
                  value={formData.assistance.additionalInfo}
                  onChange={(e) => handleInputChange('assistance', 'additionalInfo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-700 dark:text-white"
                  placeholder="Any additional information that might help us assist you better..."
                />
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Document Upload
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800 dark:text-yellow-200">Important</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Please upload clear, high-quality images. All documents will be verified by our team.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ID Proof Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ID Proof (Required) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-secondary-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-200">
                    {uploadedFiles.idProof ? (
                      <div className="space-y-2">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {uploadedFiles.idProof.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(uploadedFiles.idProof.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <button
                          onClick={() => setUploadedFiles(prev => ({ ...prev, idProof: null }))}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <User className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Upload your ID or Passport
                        </p>
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileUpload('idProof', e.target.files)}
                          className="hidden"
                          id="idProof"
                        />
                        <label
                          htmlFor="idProof"
                          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Choose File
                        </label>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Damage Photos Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Photos of Affected Areas (Required) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-secondary-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-200">
                    {uploadedFiles.damagePhotos.length > 0 ? (
                      <div className="space-y-2">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {uploadedFiles.damagePhotos.length} photo(s) uploaded
                        </p>
                        <div className="space-y-1">
                          {uploadedFiles.damagePhotos.map((file, index) => (
                            <div key={index} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                              <span>{file.name}</span>
                              <button
                                onClick={() => removeFile('damagePhotos', index)}
                                className="text-red-600 hover:text-red-700 ml-2"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => handleFileUpload('damagePhotos', e.target.files)}
                          className="hidden"
                          id="damagePhotos"
                        />
                        <label
                          htmlFor="damagePhotos"
                          className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Add More
                        </label>
                      </div>
                    ) : (
                      <>
                        <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Upload photos of affected areas
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => handleFileUpload('damagePhotos', e.target.files)}
                          className="hidden"
                          id="damagePhotos"
                        />
                        <label
                          htmlFor="damagePhotos"
                          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Choose Files
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Official Reports Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Official Reports (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-secondary-600 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-200">
                  {uploadedFiles.officialReports.length > 0 ? (
                    <div className="space-y-2">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {uploadedFiles.officialReports.length} report(s) uploaded
                      </p>
                      <div className="space-y-1">
                        {uploadedFiles.officialReports.map((file, index) => (
                          <div key={index} className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                            <span>{file.name}</span>
                            <button
                              onClick={() => removeFile('officialReports', index)}
                              className="text-red-600 hover:text-red-700 ml-2"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <input
                        type="file"
                        accept=".pdf,image/*,.doc,.docx"
                        multiple
                        onChange={(e) => handleFileUpload('officialReports', e.target.files)}
                        className="hidden"
                        id="officialReports"
                      />
                      <label
                        htmlFor="officialReports"
                        className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors duration-200 cursor-pointer inline-block"
                      >
                        Add More
                      </label>
                    </div>
                  ) : (
                    <>
                      <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Upload any official disaster reports or certificates
                      </p>
                      <input
                        type="file"
                        accept=".pdf,image/*,.doc,.docx"
                        multiple
                        onChange={(e) => handleFileUpload('officialReports', e.target.files)}
                        className="hidden"
                        id="officialReports"
                      />
                      <label
                        htmlFor="officialReports"
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 cursor-pointer inline-block"
                      >
                        Choose Files
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-secondary-900 dark:to-secondary-800">
      {/* Success Message */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">✅ Your request has been submitted. Our team will review it within 24 hours.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="bg-gradient-hero dark:bg-gradient-hero-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-12 h-12 text-primary-600" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Request for Humanity
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              If you've been affected by a disaster and need assistance, we're here to help. 
              Fill out this form to request emergency aid and support.
            </p>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-primary rounded-full text-white font-medium w-fit mx-auto">
              <Shield className="w-5 h-5" />
              <span>Secure & Confidential</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-primary-600">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-2">
                <div
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-secondary-700">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-6 py-3 border border-gray-300 dark:border-secondary-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                    className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Submit Request</span>
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestHumanity;