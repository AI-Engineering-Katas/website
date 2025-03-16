import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/Header.css';
import './styles/Hero.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      {/* Other components */}
    </div>
  );
}

export default App; 