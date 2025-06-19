import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Shield, Globe } from 'lucide-react';

const WaitlistCTA = ({ onSubmit, email, setEmail }) => {
  const benefits = [
    {
      icon: Rocket,
      text: 'Early access to all features',
      color: 'primary'
    },
    {
      icon: Users,
      text: 'Join 5,000+ early adopters',
      color: 'teal'
    },
    {
      icon: Globe,
      text: 'Global healthcare network',
      color: 'blue'
    },
    {
      icon: Shield,
      text: 'Priority support',
      color: 'purple'
    }
  ];

  return (
    <section id="waitlist" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-teal-700">
      <div className="container-custom">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Be Among the First to Experience{' '}
              <span className="text-yellow-300">The Future of Global Healthcare</span>
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join our exclusive waitlist and get early access to MedicoBuddy when we launch in 2025. 
              Available for patients, doctors, and hospitals worldwide.
            </p>

            {/* Benefits */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm`}>
                    <benefit.icon className={`w-6 h-6 text-white`} />
                  </div>
                  <span className="text-sm text-primary-100 font-medium text-center">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Reserve Your Spot
                </button>
              </form>
              
              <p className="text-sm text-primary-200 mt-4">
                🔒 Your email is secure. We'll never spam you.
              </p>
            </motion.div>
          </motion.div>

          {/* Global Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">50+</div>
              <div className="text-sm text-primary-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">25+</div>
              <div className="text-sm text-primary-200">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">100+</div>
              <div className="text-sm text-primary-200">Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">1,000+</div>
              <div className="text-sm text-primary-200">Doctors</div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 max-w-md mx-auto"
          >
            <div className="flex justify-between text-sm text-primary-200 mb-2">
              <span>Waitlist Progress</span>
              <span>5,000 / 10,000 spots</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <motion.div 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
            <p className="text-xs text-primary-200 mt-2 text-center">
              50% filled • Join before we're full!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA; 