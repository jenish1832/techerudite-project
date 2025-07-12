import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Blogs from './sections/Blogs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className="curve-section">
          <About />
        </section>
        <Blogs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;