import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Globe, Heart, Sparkles, Zap, Star, ArrowRight, Play } from 'lucide-react';

const Hero = ({ onSubmit, email, setEmail }) => {
  const floatingElements = [
    { icon: Sparkles, delay: 0, position: "top-10 left-10" },
    { icon: Star, delay: 1, position: "top-20 right-20" },
    { icon: Zap, delay: 2, position: "bottom-20 left-20" },
    { icon: Sparkles, delay: 3, position: "bottom-10 right-10" },
  ];

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-teal-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} text-primary-400/30 dark:text-primary-300/30`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={24} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-teal-500/10 dark:from-primary-400/20 dark:to-teal-400/20 border border-primary-200 dark:border-primary-700 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                🚀 The Future of Healthcare is Here
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Your Personal{' '}
                <span className="gradient-text relative">
                  AI Health Companion
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Experience healthcare like never before. AI-powered symptom analysis, 
                blockchain-secured records, and instant global doctor connections — 
                all in one revolutionary platform.
              </motion.p>
            </div>

            {/* Feature highlights */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">AI-Powered</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Advanced Intelligence</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Blockchain Secure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Military Grade</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Global Access</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">50+ Countries</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Patient-First</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">24/7 Care</div>
                </div>
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4"
            >
              <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
                    required
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Sparkles className="w-5 h-5 text-primary-500" />
                  </motion.div>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn-primary flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join the 2025 Waitlist</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
              
              <motion.div 
                className="flex items-center justify-between text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>5,000+ early adopters</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>Launching 2025</span>
                  </div>
                </div>
                <div className="text-primary-600 dark:text-primary-400 font-medium">
                  🔒 Secure & Private
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl">
                <div className="space-y-8">
                  {/* AI Chat Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">MedicoBuddy AI</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <p className="text-sm text-gray-500 dark:text-gray-400">Online • Ready to help</p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </motion.button>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <motion.div 
                      className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 max-w-xs"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">I have a headache and fever. What should I do?</p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl p-4 max-w-xs ml-auto text-white"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <p className="text-sm">
                        Based on your symptoms, I recommend monitoring your temperature and staying hydrated. 
                        Would you like me to schedule a consultation with a doctor?
                      </p>
                    </motion.div>
                  </div>

                  {/* Health Stats Dashboard */}
                  <motion.div 
                    className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Health Overview</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">98.6°F</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Temperature</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">72</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Heart Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">120/80</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Blood Pressure</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 