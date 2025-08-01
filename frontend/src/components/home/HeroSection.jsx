import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Sparkles, 
  Zap, 
  Globe,
  Star,
  Play
} from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingElements = [
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Globe, delay: 0.5, position: 'top-32 right-16' },
    { icon: Zap, delay: 1, position: 'bottom-40 left-20' },
    { icon: Sparkles, delay: 1.5, position: 'bottom-20 right-12' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} hidden lg:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: element.delay, duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <element.icon className="w-12 h-12 text-primary-300" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-8 shadow-soft"
          >
            <Star className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-primary-600">
              Développeur Fullstack Freelance
            </span>
            <Sparkles className="w-4 h-4 text-accent-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Transformons vos{' '}
            <span className="relative">
              <span className="gradient-text">idées</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-accent-200/50 -skew-x-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
            {' '}en{' '}
            <span className="gradient-text">solutions digitales</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Développement web moderne, applications mobiles et consulting technique. 
            Votre partenaire pour des projets digitaux qui marquent la différence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link
              to="/devis-simulator"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>Simulateur de devis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/portfolio"
              className="btn-outline text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <Play className="w-5 h-5" />
              <span>Voir mes réalisations</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projets réalisés' },
              { number: '3+', label: 'Années d\'expérience' },
              { number: '100%', label: 'Clients satisfaits' },
              { number: '24/7', label: 'Support disponible' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;