import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Users, Activity, CheckCircle, Globe, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Symptom Checker',
      description: 'Get instant health insights with our advanced AI that analyzes symptoms and provides personalized recommendations for patients worldwide.',
      benefits: ['Instant analysis', 'Multi-language support', '24/7 availability'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Blockchain-Secured Health Vault',
      description: 'Your health records are encrypted and stored on blockchain technology, ensuring complete privacy and security for patients and healthcare providers.',
      benefits: ['Military-grade encryption', 'Global compliance', 'Full control'],
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Doctor Discovery & Booking',
      description: 'Find and book appointments with verified healthcare professionals globally. Perfect for patients, doctors, and hospital networks.',
      benefits: ['Verified doctors worldwide', 'Instant booking', 'Video consultations'],
      color: 'blue'
    },
    {
      icon: Activity,
      title: 'Smart Health Monitoring',
      description: 'Track vital signs, medications, and health goals with intelligent reminders. Ideal for individual patients and hospital care teams.',
      benefits: ['Real-time tracking', 'Smart reminders', 'Progress analytics'],
      color: 'purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need for{' '}
            <span className="gradient-text">Better Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MedicoBuddy combines cutting-edge AI technology with blockchain security to revolutionize healthcare for patients, doctors, and hospitals worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 card-hover h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 text-${feature.color}-500 dark:text-${feature.color}-400 flex-shrink-0`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Perfect for Everyone in Healthcare
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Patients</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get instant health insights, track your wellness, and connect with doctors globally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Doctors</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Streamline patient care, access secure records, and expand your practice globally.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hospitals</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Enhance patient care, improve efficiency, and connect with healthcare networks worldwide.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-teal-50 dark:from-primary-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Healthcare Worldwide?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of patients, doctors, and hospitals who are already experiencing the future of healthcare with MedicoBuddy.
            </p>
            <button className="btn-primary">
              Join the 2025 Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 