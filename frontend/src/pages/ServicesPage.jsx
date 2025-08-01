import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  Lightbulb,
  Settings,
  Headphones
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-dev',
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites web modernes et applications web performantes avec les dernières technologies.',
      longDescription: 'Création de sites web et d\'applications web sur mesure, optimisés pour la performance et l\'expérience utilisateur. De la landing page au site e-commerce complexe.',
      features: [
        'Sites vitrine et portfolios',
        'Applications web complexes',
        'E-commerce et marketplaces',
        'Progressive Web Apps (PWA)',
        'Optimisation SEO',
        'Responsive design'
      ],
      technologies: ['React', 'Vue.js', 'Next.js', 'Node.js', 'TypeScript'],
      pricing: 'À partir de 1 500€',
      timeline: '2-8 semaines',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      id: 'mobile-dev',
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
      longDescription: 'Développement d\'applications mobiles performantes et intuitives, adaptées à vos besoins métier et optimisées pour les stores.',
      features: [
        'Applications natives iOS/Android',
        'Applications cross-platform',
        'Progressive Web Apps',
        'Intégration API et services',
        'Publication sur les stores',
        'Maintenance et mises à jour'
      ],
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase'],
      pricing: 'À partir de 3 000€',
      timeline: '4-12 semaines',
      color: 'secondary',
      gradient: 'from-secondary-400 to-secondary-500'
    },
    {
      id: 'backend-api',
      icon: Database,
      title: 'Backend & API',
      description: 'Architectures backend robustes et APIs RESTful/GraphQL sécurisées.',
      longDescription: 'Conception et développement d\'architectures backend scalables, APIs performantes et bases de données optimisées pour vos applications.',
      features: [
        'APIs REST et GraphQL',
        'Bases de données optimisées',
        'Authentification et sécurité',
        'Intégrations tierces',
        'Monitoring et logs',
        'Documentation complète'
      ],
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'],
      pricing: 'À partir de 2 000€',
      timeline: '3-10 semaines',
      color: 'accent',
      gradient: 'from-accent-400 to-accent-500'
    },
    {
      id: 'performance',
      icon: Zap,
      title: 'Optimisation Performance',
      description: 'Amélioration des performances et de la vitesse de vos applications.',
      longDescription: 'Audit et optimisation complète de vos applications existantes pour améliorer les performances, la vitesse de chargement et l\'expérience utilisateur.',
      features: [
        'Audit de performance',
        'Optimisation Core Web Vitals',
        'Mise en cache avancée',
        'Optimisation images et assets',
        'Configuration CDN',
        'Monitoring continu'
      ],
      technologies: ['Lighthouse', 'WebPageTest', 'CDN', 'Caching'],
      pricing: 'À partir de 800€',
      timeline: '1-3 semaines',
      color: 'success',
      gradient: 'from-success-500 to-success-600'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Sécurité & Maintenance',
      description: 'Sécurisation et maintenance continue de vos applications.',
      longDescription: 'Services de sécurisation, maintenance préventive et corrective pour assurer la pérennité et la sécurité de vos applications.',
      features: [
        'Audit de sécurité',
        'Mise à jour sécuritaire',
        'Sauvegarde automatisée',
        'Monitoring 24/7',
        'Support technique',
        'Plan de reprise d\'activité'
      ],
      technologies: ['SSL/TLS', 'Monitoring', 'Backup', 'Security Tools'],
      pricing: 'À partir de 200€/mois',
      timeline: 'Service continu',
      color: 'warning',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 'consulting',
      icon: Lightbulb,
      title: 'Consulting Tech',
      description: 'Conseil en architecture technique et choix technologiques.',
      longDescription: 'Accompagnement stratégique pour vos projets digitaux : choix technologiques, architecture, roadmap et formation de vos équipes.',
      features: [
        'Audit technique existant',
        'Choix de stack technologique',
        'Architecture et scalabilité',
        'Code review et bonnes pratiques',
        'Formation équipes',
        'Roadmap technique'
      ],
      technologies: ['Architecture', 'Best Practices', 'Code Review', 'Training'],
      pricing: 'À partir de 150€/heure',
      timeline: 'Sur mesure',
      color: 'info',
      gradient: 'from-info-500 to-info-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins et définition du cahier des charges',
      icon: Users
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Design et architecture technique de votre solution',
      icon: Settings
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Réalisation avec suivi régulier et tests continus',
      icon: Code
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Mise en production et formation à l\'utilisation',
      icon: Award
    }
  ];

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
    <div className="pt-20 min-h-screen">
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
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Des solutions complètes pour{' '}
              <span className="gradient-text">tous vos besoins</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              De la conception à la mise en production, je vous accompagne à chaque étape 
              de votre projet digital avec expertise et passion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/devis-simulator"
                className="btn-primary flex items-center space-x-2"
              >
                <span>Obtenir un devis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline flex items-center space-x-2"
              >
                <span>Discuter de votre projet</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group card-hover relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-primary-600">{service.pricing}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white text-primary-600 rounded-full px-4 py-2 mb-6 shadow-soft">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Processus</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment je travaille avec vous
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10">
                  <step.icon className="w-6 h-6 text-primary-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Prêt à démarrer votre projet ?
            </h2>
            
            <p className="text-xl text-white/90 mb-12">
              Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/devis-simulator"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                <span>Simulateur de devis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Headphones className="w-5 h-5" />
                <span>Consultation gratuite</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;