import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, ShoppingCart, Search, BookOpen, Sword, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';
import { useCart } from '../context/CartContext';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: 'Attack on Titan Vol. 1',
      author: 'Hajime Isayama',
      price: '$15.99',
      originalPrice: '$19.99',
      rating: 4.9,
      category: 'Manga',
      badge: 'Nuevo',
      icon: <BookOpen size={48} />
    },
    {
      id: 2,
      title: 'One Piece Vol. 100',
      author: 'Eiichiro Oda',
      price: '$12.99',
      rating: 4.8,
      category: 'Manga',
      badge: 'Popular',
      icon: <BookOpen size={48} />
    },
    {
      id: 3,
      title: 'Spider-Man: No Way Home',
      author: 'Marvel Comics',
      price: '$8.99',
      rating: 4.5,
      category: 'Cómics',
      icon: <Shield size={48} />
    },
    {
      id: 4,
      title: 'Demon Slayer Vol. 1',
      author: 'Koyoharu Gotouge',
      price: '$11.99',
      originalPrice: '$15.99',
      rating: 4.9,
      category: 'Manga',
      badge: 'Oferta',
      icon: <Sword size={48} />
    },
    {
      id: 5,
      title: 'My Hero Academia Vol. 30',
      author: 'Kohei Horikoshi',
      price: '$13.99',
      rating: 4.7,
      category: 'Manga',
      icon: <Zap size={48} />
    },
    {
      id: 6,
      title: 'Batman: The Dark Knight',
      author: 'DC Comics',
      price: '$9.99',
      rating: 4.6,
      category: 'Cómics',
      icon: <Shield size={48} />
    }
  ];

  const filters = ['Todos', 'Manga', 'Cómics', 'Novelas'];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'Todos' || product.category === activeFilter;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // GSAP: animate product cards on mount and when filter/search changes
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.product-card');
    gsap.from(cards, {
      opacity: 0,
      y: 24,
      duration: 0.35,
      stagger: 0.06,
      ease: 'power2.out'
    });
  }, [activeFilter, searchTerm]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < Math.floor(rating) ? '#ffd700' : 'none'}
        color={i < Math.floor(rating) ? '#ffd700' : '#666'}
      />
    ));
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Productos Destacados
        </motion.h2>

        <div className="products-controls">
          <div className="products-filter">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <motion.div 
          className="products-grid"
          layout
          ref={gridRef}
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="product-image">
                  {product.badge && (
                    <motion.div 
                      className="product-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {product.badge}
                    </motion.div>
                  )}
                  
                  <div className="product-overlay">
                    <motion.button 
                      className="quick-view"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={20} />
                      Vista Rápida
                    </motion.button>
                  </div>
                  
                  <div className="product-icon">{product.icon}</div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-author">{product.author}</p>
                  
                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  
                  <div className="product-price">
                    <span className="current-price">{product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <motion.button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart size={16} />
                    Agregar al Carrito
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            className="no-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p>No se encontraron productos con los filtros seleccionados.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
