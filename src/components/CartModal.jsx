import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Heart, Share2, Star, Shield, Truck, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartModal.css';

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

const CartModal = () => {
  const {
    isOpen,
    items,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    cartTotal,
    shippingCost,
    taxAmount,
    finalTotal
  } = useCart();

  const [savedItems, setSavedItems] = useState([]);

  const handleCheckout = () => {
    // Simulate checkout process
    alert('¡Gracias por tu compra! (Simulación)');
    clearCart();
    closeCart();
  };

  const handleSaveForLater = (item) => {
    setSavedItems([...savedItems, item]);
    removeFromCart(item.id);
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
              <div className="header-left">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <ShoppingBag size={24} />
                  Carrito de Compras ({getTotalItems()})
                </motion.h3>
                {items.length > 0 && (
                  <motion.button
                    className="clear-cart-btn"
                    onClick={clearCart}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Vaciar Carrito
                  </motion.button>
                )}
              </div>
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
                      <div className="item-image">
                        {item.image && (
                          <img src={item.image} alt={item.title} className="product-thumbnail" />
                        )}
                      </div>

                      <div className="item-details">
                        <div className="item-info">
                          <h4>{item.title}</h4>
                          <p className="item-author">{item.author}</p>
                          <div className="item-rating">
                            <Star size={14} fill="#ffd700" color="#ffd700" />
                            <Star size={14} fill="#ffd700" color="#ffd700" />
                            <Star size={14} fill="#ffd700" color="#ffd700" />
                            <Star size={14} fill="#ffd700" color="#ffd700" />
                            <Star size={14} fill="#ffd700" color="#ffd700" />
                            <span className="rating-text">(4.8)</span>
                          </div>
                          <div className="item-price-section">
                            <span className="item-price">${item.price}</span>
                            {item.originalPrice && (
                              <span className="original-price">${item.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        <div className="item-actions">
                          <div className="quantity-section">
                            <label className="quantity-label">Cantidad:</label>
                            <div className="quantity-controls">
                              <motion.button
                                className="qty-btn"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={14} />
                              </motion.button>
                              <span className="quantity">{item.quantity}</span>
                              <motion.button
                                className="qty-btn"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus size={14} />
                              </motion.button>
                            </div>
                          </div>

                          <div className="action-buttons">
                            <motion.button
                              className="action-btn save-btn"
                              onClick={() => handleSaveForLater(item)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Heart size={16} />
                              Guardar
                            </motion.button>

                            <motion.button
                              className="action-btn share-btn"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Share2 size={16} />
                              Compartir
                            </motion.button>

                            <motion.button
                              className="action-btn remove-btn"
                              onClick={() => removeFromCart(item.id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Trash2 size={16} />
                              Eliminar
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {items.length > 0 && (
                <motion.div
                  className="cart-summary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="summary-header">
                    <h4>Resumen del Pedido</h4>
                  </div>

                  <div className="summary-details">
                    <div className="summary-row">
                      <span>Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'artículo' : 'artículos'}):</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="summary-row">
                      <span>Envío:</span>
                      <span className={shippingCost === 0 ? 'free-shipping' : ''}>
                        {shippingCost === 0 ? 'GRATIS' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>

                    {shippingCost > 0 && (
                      <div className="shipping-note">
                        <Truck size={16} />
                        <span>¡Agrega ${(50 - cartTotal).toFixed(2)} más para envío GRATIS!</span>
                      </div>
                    )}

                    <div className="summary-row">
                      <span>Impuestos:</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>

                    <div className="summary-total">
                      <span>Total:</span>
                      <strong>${finalTotal.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="security-badges">
                    <div className="badge">
                      <Shield size={16} />
                      <span>Compra Segura</span>
                    </div>
                    <div className="badge">
                      <Truck size={16} />
                      <span>Envío Rápido</span>
                    </div>
                    <div className="badge">
                      <CreditCard size={16} />
                      <span>Pago Seguro</span>
                    </div>
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
                <div className="footer-actions">
                  <motion.button
                    className="btn btn-secondary continue-shopping"
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
                    <CreditCard size={20} />
                    Proceder al Pago
                    <span className="checkout-total">${finalTotal.toFixed(2)}</span>
                  </motion.button>
                </div>

                <div className="footer-note">
                  <Shield size={16} />
                  <span>Tu información está protegida con encriptación SSL</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
