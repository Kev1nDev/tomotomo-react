import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil para optimizar animaciones
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Solo agregar mousemove en desktop
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Removed GSAP animation - using Framer Motion instead

  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const categoriesSection = document.querySelector('#categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(isMobile ? 8 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={isMobile ? {} : {
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={isMobile ? {} : {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubre el Mundo del <span className="highlight">Manga</span>
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Los mejores tomos, cómics y mangas en un solo lugar. Desde clásicos atemporales hasta los últimos lanzamientos.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="btn btn-primary"
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Productos
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              onClick={scrollToCategories}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Novedades
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="manga-stack">
            <motion.div 
              className="manga-book manga-1"
              whileHover={{ 
                rotateY: -25,
                scale: 1.05,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen size={40} />
            </motion.div>
            <motion.div 
              className="manga-book manga-2"
              whileHover={{ 
                rotateY: -15,
                scale: 1.05,
                z: 30
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen size={40} />
            </motion.div>
            <motion.div 
              className="manga-book manga-3"
              whileHover={{ 
                rotateY: -5,
                scale: 1.05,
                z: 10
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen size={40} />
            </motion.div>
          </div>

          <div className="floating-elements">
            <motion.div 
              className="floating-star star-1"
              animate={isMobile ? {} : {
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={isMobile ? {} : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={isMobile ? {} : {
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
            >
              <Star size={24} />
            </motion.div>
            <motion.div 
              className="floating-star star-2"
              animate={isMobile ? {} : {
                y: [0, -15, 0],
                rotate: [0, -180, -360],
              }}
              transition={isMobile ? {} : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={isMobile ? {} : {
                x: mousePosition.x * -0.01,
                y: mousePosition.y * -0.01,
              }}
            >
              <Sparkles size={20} />
            </motion.div>
            <motion.div 
              className="floating-star star-3"
              animate={isMobile ? {} : {
                y: [0, -25, 0],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={isMobile ? {} : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              style={isMobile ? {} : {
                x: mousePosition.x * 0.015,
                y: mousePosition.y * 0.015,
              }}
            >
              <Star size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
