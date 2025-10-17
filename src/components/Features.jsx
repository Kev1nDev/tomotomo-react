import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Package, MessageCircle } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Truck size={48} />,
      title: 'Envío Gratis',
      description: 'En compras superiores a $50',
      color: 'var(--vibrant-red)'
    },
    {
      icon: <Shield size={48} />,
      title: 'Pago Seguro',
      description: 'Protección total en tus compras',
      color: 'var(--light-gray)'
    },
    {
      icon: <Package size={48} />,
      title: 'Stock Garantizado',
      description: 'Disponibilidad inmediata',
      color: 'var(--darker-charcoal)'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Soporte 24/7',
      description: 'Atención personalizada',
      color: 'var(--vibrant-red)'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegir Tomotomo?
        </motion.h2>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="feature-icon"
                style={{ color: feature.color }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                {feature.icon}
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {feature.description}
              </motion.p>
              
              <motion.div 
                className="feature-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="feature-glow"
                animate={{
                  boxShadow: [
                    '0 0 0px var(--vibrant-red)',
                    '0 0 20px var(--vibrant-red)',
                    '0 0 0px var(--vibrant-red)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
