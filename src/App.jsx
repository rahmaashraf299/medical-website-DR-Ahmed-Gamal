import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Clinics from './pages/Clinics';
import Contact from './pages/Contact';
import Videos from './pages/Videos';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

// Pregnancy Calculators & Tools pages
import IcsiCalculator from './pages/tools/IcsiCalculator';
import OvulationCalculator from './pages/tools/OvulationCalculator';
import PregnancyWeeksCalculator from './pages/tools/PregnancyWeeksCalculator';
import AmIPregnantQuiz from './pages/tools/AmIPregnantQuiz';
import DueDateCalculator from './pages/tools/DueDateCalculator';

// Scroll to top helper component on page transition
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Sub-component to handle useLocation inside Router context for AnimatePresence
function AnimatedApp() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] transition-all duration-300 overflow-x-hidden w-full max-w-full relative">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<ArticleDetail />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Calculators Routes */}
            <Route path="/tools/icsi-due-date-calculator" element={<IcsiCalculator />} />
            <Route path="/tools/ovulation-calculator" element={<OvulationCalculator />} />
            <Route path="/tools/pregnancy-weeks-calculator" element={<PregnancyWeeksCalculator />} />
            <Route path="/tools/am-i-pregnant" element={<AmIPregnantQuiz />} />
            <Route path="/tools/due-date-calculator" element={<DueDateCalculator />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AnimatedApp />
      </Router>
    </LanguageProvider>
  );
}
