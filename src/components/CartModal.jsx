import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartModal.css';

const CartModal = () => {
  const { 
    isOpen, 
    items, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart();

  const handleCheckout = () => {
    // Simulate checkout process
    alert('¡Gracias por tu compra! (Simulación)');
    clearCart();
    closeCart();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="cart-modal"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeCart}
        >
          <motion.div 
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ShoppingBag size={24} />
                Carrito de Compras
              </motion.h3>
              <motion.button 
                className="close-modal"
                onClick={closeCart}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="modal-body">
              {items.length === 0 ? (
                <motion.div 
                  className="empty-cart"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <ShoppingBag size={48} />
                  <p>Tu carrito está vacío</p>
                  <p>¡Explora nuestros productos!</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="cart-items"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {items.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      layout
                    >
                      <div className="item-info">
                        <h4>{item.title}</h4>
                        <p>{item.author}</p>
                        <span className="item-price">{item.price}</span>
                      </div>
                      
                      <div className="item-controls">
                        <div className="quantity-controls">
                          <motion.button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </motion.button>
                          <span className="quantity">{item.quantity}</span>
                          <motion.button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Plus size={16} />
                          </motion.button>
                        </div>
                        
                        <motion.button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.1, color: 'var(--vibrant-red)' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {items.length > 0 && (
                <motion.div 
                  className="cart-total"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="total-info">
                    <span>Total ({getTotalItems()} items):</span>
                    <strong>${getTotalPrice().toFixed(2)}</strong>
                  </div>
                </motion.div>
              )}
            </div>

            {items.length > 0 && (
              <motion.div 
                className="modal-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className="btn btn-secondary"
                  onClick={closeCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Seguir Comprando
                </motion.button>
                <motion.button 
                  className="btn btn-primary checkout-btn"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceder al Pago
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
