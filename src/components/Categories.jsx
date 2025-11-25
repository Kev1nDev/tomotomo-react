import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Heart, Sword } from 'lucide-react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      icon: <BookOpen size={48} />,
      title: 'Manga',
      description: 'Los mejores mangas japoneses',
      color: 'var(--vibrant-red)'
    },
    {
      icon: <Zap size={48} />,
      title: 'Superhéroes',
      description: 'Cómics de Marvel y DC',
      color: 'var(--light-gray)'
    },
    {
      icon: <Heart size={48} />,
      title: 'Drama',
      description: 'Historias conmovedoras',
      color: 'var(--darker-charcoal)'
    },
    {
      icon: <Sword size={48} />,
      title: 'Acción',
      description: 'Aventuras épicas',
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
    <section id="categories" className="categories">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Categorías Populares
        </motion.h2>

        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="category-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="category-icon"
                style={{ color: category.color }}
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                {category.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {category.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {category.description}
              </motion.p>

              <motion.div
                className="category-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
