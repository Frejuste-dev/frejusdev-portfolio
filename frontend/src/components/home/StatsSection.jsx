import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  TrendingUp,
  Code,
  Globe,
  Smartphone,
  Zap
} from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Code,
      number: '50+',
      label: 'Projets réalisés',
      description: 'Sites web et applications développés avec passion',
      color: 'primary'
    },
    {
      icon: Users,
      number: '30+',
      label: 'Clients satisfaits',
      description: 'Entrepreneurs et entreprises qui nous font confiance',
      color: 'secondary'
    },
    {
      icon: Clock,
      number: '3+',
      label: 'Années d\'expérience',
      description: 'Dans le développement web et mobile moderne',
      color: 'accent'
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Taux de satisfaction',
      description: 'Projets livrés dans les temps et budgets respectés',
      color: 'success'
    }
  ];

  const technologies = [
    { name: 'React', percentage: 95 },
    { name: 'Node.js', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'React Native', percentage: 75 },
    { name: 'Python', percentage: 70 }
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

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-400 to-secondary-500',
      accent: 'from-accent-400 to-accent-500',
      success: 'from-success-500 to-success-600'
    };
    return colors[color] || colors.primary;
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
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Expertise & Résultats</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Des chiffres qui parlent d'eux-mêmes
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            L'expérience et la satisfaction client au cœur de chaque projet
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(stat.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {stat.label}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Technologies</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Maîtrise des technologies modernes
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Une expertise technique solide dans les frameworks et outils les plus demandés 
                du marché pour créer des solutions performantes et évolutives.
              </p>

              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Skills */}
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-sm text-gray-600">{tech.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;