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
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router basename="/tomotomo-react">
        <div className="App">
          {/** Ensure we start at the top on first load (GH Pages may restore scroll). */}
          {(() => {
            // IIFE to run once on mount without creating a component
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }, []);
          })()}
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