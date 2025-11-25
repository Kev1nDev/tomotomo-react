import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import SEO from './components/SEO';
import './App.css';

function App() {
  // Ensure we start at the top on first load (GH Pages may restore scroll).
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <CartProvider>
      <Router basename="/tomotomo-react">
        <SEO />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Categories />
                  <Products />
                  <Features />
                </>
              } />
            </Routes>
          </main>
          <Footer />
          <CartModal />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;