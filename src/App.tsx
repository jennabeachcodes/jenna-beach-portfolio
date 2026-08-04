import React, { useState } from 'react';
import './styles/global.scss';
import { SettingsProvider } from './context/SettingsContext';
import AppShell from './components/AppShell/AppShell';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import SettingsBar from './components/SettingsBar/SettingsBar';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import BackToTop from './components/BackToTop/BackToTop';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SettingsProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <AppShell>
        <SettingsBar />
        <Hero />
        <Nav />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <BackToTop />
      </AppShell>
    </SettingsProvider>
  );
}