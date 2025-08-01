import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  ExternalLink, 
  Github, 
  Eye,
  Code,
  Smartphone,
  Globe,
  Database,
  Palette,
  Search
} from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tous les projets', icon: Eye },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'backend', name: 'Backend/API', icon: Database },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion des stocks, paiements Stripe, analytics et dashboard admin.',
      longDescription: 'Une solution e-commerce complète développée avec React et Node.js, intégrant Stripe pour les paiements, un système de gestion des stocks en temps réel, et un dashboard administrateur avec analytics avancées.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
      links: {
        live: '#',
        github: '#'
      },
      featured: true,
      year: '2024',
      client: 'TechCommerce'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Application mobile de banque en ligne avec authentification biométrique et gestion des comptes.',
      longDescription: 'Application mobile native développée avec React Native, offrant une expérience bancaire complète avec authentification biométrique, virements, historique des transactions et notifications push.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      links: {
        live: '#',
        github: '#'
      },
      featured: true,
      year: '2024',
      client: 'FinanceApp'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Tableau de bord analytique pour SaaS avec visualisations en temps réel et rapports personnalisés.',
      longDescription: 'Dashboard SaaS développé avec Vue.js et Python, proposant des visualisations de données en temps réel, des rapports personnalisables et une API REST complète.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js', 'FastAPI'],
      links: {
        live: '#',
        github: '#'
      },
      featured: false,
      year: '2023',
      client: 'DataViz Pro'
    },
    {
      id: 4,
      title: 'Restaurant API',
      description: 'API REST complète pour chaîne de restaurants avec gestion des commandes et livraisons.',
      longDescription: 'API REST développée avec Node.js et Express, gérant les commandes, les menus, les utilisateurs et l\'intégration avec des services de livraison tiers.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      links: {
        live: '#',
        github: '#'
      },
      featured: false,
      year: '2023',
      client: 'RestauChain'
    },
    {
      id: 5,
      title: 'Fitness Tracker App',
      description: 'Application mobile de suivi fitness avec programmes d\'entraînement personnalisés.',
      longDescription: 'Application mobile cross-platform développée avec Flutter, offrant des programmes d\'entraînement personnalisés, suivi des performances et intégration avec des wearables.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
      links: {
        live: '#',
        github: '#'
      },
      featured: false,
      year: '2023',
      client: 'FitLife'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Système de design complet avec composants réutilisables et documentation.',
      longDescription: 'Système de design moderne créé avec Figma et implémenté en React, incluant une bibliothèque de composants réutilisables et une documentation complète.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'design',
      technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS'],
      links: {
        live: '#',
        github: '#'
      },
      featured: false,
      year: '2023',
      client: 'DesignCorp'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Mes{' '}
              <span className="gradient-text">réalisations</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Découvrez une sélection de projets qui illustrent mon expertise technique 
              et ma passion pour l'innovation digitale. Chaque projet raconte une histoire unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500"
                  whileHover={{ y: -8 }}
                  layout
                >
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                      {project.year}
                    </div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <a
                          href={project.links.live}
                          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                          title="Voir le projet"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.links.github}
                          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200"
                          title="Code source"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category & Client */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {React.createElement(
                          categories.find(cat => cat.id === project.category)?.icon || Code,
                          { className: "w-4 h-4 text-primary-500" }
                        )}
                        <span className="text-sm font-medium text-primary-600">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {project.client}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;