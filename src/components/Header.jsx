import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Productos', href: '#products' },
    { name: 'Categorías', href: '#categories' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav">
        <div className="nav-brand">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Logo size={120} className="logo-medium" />
          </motion.div>
          <p className="tagline">Manga & Cómics</p>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.button 
            className="search-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={20} />
          </motion.button>
          
          <motion.button 
            className="cart-btn"
            onClick={toggleCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <motion.span 
                className="cart-count"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {getTotalItems()}
              </motion.span>
            )}
          </motion.button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
