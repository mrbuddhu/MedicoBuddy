import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Cardiologist',
      hospital: 'Mount Sinai Hospital, USA',
      avatar: '👩‍⚕️',
      rating: 5,
      quote: 'MedicoBuddy has revolutionized how I interact with patients. The AI symptom analysis helps me provide more accurate diagnoses and the blockchain security gives patients peace of mind.',
      verified: true
    },
    {
      name: 'Priya Sharma',
      role: 'Patient',
      hospital: 'Mumbai, India',
      avatar: '👩‍💼',
      rating: 5,
      quote: 'As a patient in India, I love how MedicoBuddy connects me with doctors globally. The AI symptom checker is incredibly accurate and the interface is so user-friendly!',
      verified: true
    },
    {
      name: 'Dr. James Wilson',
      role: 'Family Medicine',
      hospital: 'Mayo Clinic, USA',
      avatar: '👨‍⚕️',
      rating: 5,
      quote: 'The platform streamlines patient care like nothing I\'ve seen before. The health monitoring features help me track patient progress between visits.',
      verified: true
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Neurologist',
      hospital: 'Apollo Hospitals, India',
      avatar: '👨‍⚕️',
      rating: 5,
      quote: 'MedicoBuddy\'s global reach has helped me connect with patients worldwide. The blockchain security ensures HIPAA compliance and patient data protection.',
      verified: true
    },
    {
      name: 'Maria Rodriguez',
      role: 'Patient',
      hospital: 'Barcelona, Spain',
      avatar: '👩‍💼',
      rating: 5,
      quote: 'The multi-language support is fantastic! I can get health advice in Spanish and connect with doctors from anywhere in the world.',
      verified: true
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Pediatrician',
      hospital: 'King Faisal Hospital, UAE',
      avatar: '👨‍⚕️',
      rating: 5,
      quote: 'This platform has transformed our pediatric care. Parents can track their children\'s health and we can provide better remote consultations.',
      verified: true
    }
  ];

  const hospitals = [
    'Mount Sinai',
    'Mayo Clinic',
    'Apollo Hospitals',
    'King Faisal Hospital',
    'Johns Hopkins',
    'Cleveland Clinic',
    'Stanford Health',
    'Fortis Healthcare'
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
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Trusted by{' '}
            <span className="gradient-text">Healthcare Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what patients, doctors, and hospitals from around the world are saying about their experience with MedicoBuddy.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-700">
                  <Quote size={24} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{testimonial.hospital}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hospital Logos */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Trusted by leading healthcare institutions worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {hospitals.map((hospital, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{hospital}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">1,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">25K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hospitals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 