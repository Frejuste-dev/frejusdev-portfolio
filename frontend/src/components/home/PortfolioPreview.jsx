import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Eye,
  Code,
  Smartphone,
  Globe
} from 'lucide-react';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion des stocks, paiements et analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Application mobile de banque en ligne avec authentification biométrique.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: {
        live: '#',
        github: '#'
      },
      featured: true
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Tableau de bord analytique pour SaaS avec visualisations en temps réel.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
      links: {
        live: '#',
        github: '#'
      },
      featured: false
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile Development':
        return Smartphone;
      case 'Web Development':
        return Globe;
      default:
        return Code;
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mes dernières{' '}
            <span className="gradient-text">réalisations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques projets qui illustrent mon expertise technique 
            et ma passion pour l'innovation digitale.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Featured Project */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-medium transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={projects[0].links.live}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={projects[0].links.github}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  {React.createElement(getCategoryIcon(projects[0].category), {
                    className: "w-4 h-4 text-primary-500"
                  })}
                  <span className="text-sm font-medium text-primary-600">
                    {projects[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {projects[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                  <span>Voir le projet</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Projects */}
          <div className="lg:col-span-4 space-y-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-white shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {React.createElement(getCategoryIcon(project.category), {
                      className: "w-3 h-3 text-primary-500"
                    })}
                    <span className="text-xs font-medium text-primary-600">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-300">
                    <span>Voir plus</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-8">
            Découvrez tous mes projets et l'histoire derrière chaque réalisation
          </p>
          <Link
            to="/portfolio"
            className="btn-primary flex items-center space-x-2 mx-auto w-fit"
          >
            <span>Voir tout le portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;