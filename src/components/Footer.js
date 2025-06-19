import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Mail, Heart, Globe } from 'lucide-react';

const Footer = ({ onSubmit, email, setEmail }) => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="text-xl font-bold">MedicoBuddy</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing Healthcare with AI — Your personal health companion powered by artificial intelligence and blockchain technology. 
              Available for patients, doctors, and hospitals worldwide.
            </p>
            
            {/* Email Signup */}
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Stay updated"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary-500 to-teal-500 hover:from-primary-600 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Launching in 2025</p>
              <p>Global healthcare platform</p>
              <div className="flex items-center space-x-2 mt-4">
                <Mail className="w-4 h-4" />
                <span>hello@medicobuddy.xyz</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Globe className="w-4 h-4" />
                <span>Available in 50+ countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MedicoBuddy. All rights reserved.
            </div>
            
            {/* Built by Sanganak */}
            <motion.div 
              className="flex items-center space-x-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <a 
                href="https://sanganak.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300"
              >
                Sanganak
              </a>
              <span>— #1 Premium II Boutique</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 