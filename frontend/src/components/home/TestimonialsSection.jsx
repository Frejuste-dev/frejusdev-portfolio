import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      position: 'CEO',
      company: 'TechStart',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Kei a transformé notre vision en une application web exceptionnelle. Son expertise technique et sa capacité d\'écoute ont fait toute la différence. Je recommande vivement !',
      project: 'Plateforme SaaS'
    },
    {
      id: 2,
      name: 'Thomas Martin',
      position: 'Fondateur',
      company: 'EcoShop',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Un développeur passionné qui va au-delà des attentes. Notre site e-commerce a dépassé tous nos objectifs de performance grâce à son travail minutieux.',
      project: 'Site E-commerce'
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      position: 'Directrice Marketing',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      content: 'Collaboration fluide, respect des délais et résultat final au-delà de nos espérances. Kei comprend parfaitement les enjeux business et les traduit en solutions techniques.',
      project: 'Application Mobile'
    }
  ];

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

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white text-primary-600 rounded-full px-4 py-2 mb-6 shadow-soft">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Témoignages</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent mes{' '}
            <span className="gradient-text">clients</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction client est au cœur de chaque projet. 
            Découvrez les retours de ceux qui m'ont fait confiance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 relative group"
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-primary-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position} chez {testimonial.company}
                  </div>
                  <div className="text-xs text-primary-600 font-medium mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">48h</div>
              <div className="text-gray-600">Temps de réponse</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600">Projets livrés à temps</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;