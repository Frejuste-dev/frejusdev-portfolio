import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  MessageCircle, 
  Calendar,
  Sparkles,
  Code,
  Rocket
} from 'lucide-react';

const CTASection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Devis en 24h',
      description: 'Réponse rapide et détaillée'
    },
    {
      icon: Code,
      title: 'Code de qualité',
      description: 'Standards professionnels'
    },
    {
      icon: Rocket,
      title: 'Livraison rapide',
      description: 'Respect des délais'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 hidden lg:block"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-8 h-8 text-accent-300/30" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 hidden lg:block"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Code className="w-6 h-6 text-white/20" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 mb-8">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Prêt à démarrer ?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Transformons votre idée en{' '}
              <span className="relative">
                <span className="text-accent-300">réalité digitale</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-accent-300/30 -skew-x-12"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez entrepreneur, startup ou entreprise établie, 
              je vous accompagne dans la concrétisation de vos projets digitaux.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/devis-simulator"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>Obtenir un devis gratuit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/contact"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 flex items-center space-x-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discutons de votre projet</span>
            </Link>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-white/70 text-sm flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Consultation gratuite • Devis sous 24h • Sans engagement</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;