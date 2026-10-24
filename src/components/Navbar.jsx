import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, PhoneCall, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, TikTok } from './BrandIcons';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
  const { locale, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Monitor scroll to switch styling (applicable only on home page)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to top on close mobile drawer
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    // "أدوات الحمل" will be injected dynamically in desktop/mobile templates
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.clinics'), path: '/clinics' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toolLinks = [
    { nameAR: 'حاسبة الدورة الشهرية والتبويض', nameEN: 'Period & Ovulation Calculator', path: '/tools/ovulation-calculator' },
    { nameAR: 'هل أنا حامل؟ اكتشفي الآن', nameEN: 'Am I Pregnant? Symptom Quiz', path: '/tools/am-i-pregnant' },
    { nameAR: 'حاسبة الحمل بالأسابيع والأشهر', nameEN: 'Pregnancy Weeks & Months Calculator', path: '/tools/pregnancy-weeks-calculator' },
    { nameAR: 'حاسبة الحمل والولادة', nameEN: 'Pregnancy & Due Date Calculator', path: '/tools/due-date-calculator' },
    { nameAR: 'حاسبة موعد الولادة للحقن المجهري', nameEN: 'IVF / ICSI Due Date Calculator', path: '/tools/icsi-due-date-calculator' }
  ];

  // The Navbar will have a solid background if we are NOT on the Homepage, or if we have scrolled on the Homepage.
  const showSolidBg = !isHomePage || scrolled;
  const whatsappLink = "https://wa.me/201044551331";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        showSolidBg
          ? 'bg-white/95 backdrop-blur-md shadow-md text-gray-800'
          : 'bg-transparent text-white'
      }`}
    >
      {/* Top Bar (Booking Contact & Social Media Links) */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-[#071952] text-white py-3 border-b border-white/10 text-sm hidden md:block select-none overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              
              {/* Booking & Inquiry Info Link */}
              <div className="flex items-center gap-2 font-extrabold">
                <PhoneCall size={16} className="text-[#FCB7C7]" />
                <a href="tel:01044551331" className="hover:underline">
                  {locale === 'ar' ? 'للحجز والاستعلام: 01044551331' : 'Booking & Inquiry: 01044551331'}
                </a>
              </div>

              {/* Socials & Relocated Language Switcher */}
              <div className="flex items-center gap-5">
                
                {/* Social Pages Links */}
                <div className="flex items-center gap-5">
                  <a
                    href="https://www.facebook.com/share/1GMcjJQh4Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FCB7C7] hover:scale-110 transition-transform duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/drahmedgamal0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FCB7C7] hover:scale-110 transition-transform duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@dr.ahmedgamalelnajar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FCB7C7] hover:scale-110 transition-transform duration-200"
                    aria-label="TikTok"
                  >
                    <TikTok size={16} />
                  </a>
                </div>

                <div className="w-[1px] h-3.5 bg-white/20" />

                {/* Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 hover:text-[#FCB7C7] transition-colors cursor-pointer font-extrabold"
                >
                  <Globe size={15} />
                  <span>{t('nav.langSwitch')}</span>
                </button>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar Link Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        showSolidBg ? 'py-2' : 'py-3.5'
      }`}>
        <div className="flex items-center justify-between min-h-[4.5rem] sm:min-h-[5rem] flex-row-reverse rtl:flex-row">
          {/* Brand/Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3.5 focus:outline-none group"
            dir="rtl"
          >
            <img
              src={logoImg}
              alt="Dr. Ahmed Gamal Logo"
              className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto object-contain select-none transition-transform duration-200 group-hover:scale-105"
              style={{
                filter: showSolidBg 
                  ? 'brightness(0) saturate(100%) invert(18%) sepia(21%) saturate(2206%) hue-rotate(234deg) brightness(91%) contrast(92%)' 
                  : 'none'
              }}
            />
            <span
              className="text-2xl sm:text-3xl font-extrabold tracking-wide transition-colors duration-300 whitespace-nowrap"
              style={{ fontFamily: 'Outfit' }}
            >
              <span className="text-primary">Dr. </span>
              <span className={showSolidBg ? 'text-primary-dark' : 'text-white'}>Ahmed Gamal</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-3.5 lg:space-x-5 xl:space-x-6 rtl:space-x-reverse">
            
            {/* Home link */}
            <Link
              to="/"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname === '/' ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname === '/' ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.home')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Services link */}
            <Link
              to="/services"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname.startsWith('/services') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname.startsWith('/services') ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.services')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Pregnancy Tools HOVER Dropdown */}
            <div
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
              className="relative py-2 whitespace-nowrap"
            >
              <button
                className={`text-sm font-bold transition-colors duration-300 flex items-center space-x-1 rtl:space-x-reverse focus:outline-none cursor-pointer whitespace-nowrap ${
                  showSolidBg
                    ? location.pathname.startsWith('/tools') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                    : location.pathname.startsWith('/tools') ? 'text-secondary' : 'text-white/90 hover:text-primary'
                }`}
              >
                <span>{locale === 'ar' ? 'أدوات الحمل' : 'Pregnancy Tools'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 text-gray-800 z-50 text-start"
                  >
                    {toolLinks.map((tool, idx) => (
                      <Link
                        key={idx}
                        to={tool.path}
                        onClick={() => setDesktopDropdownOpen(false)}
                        className={`block px-5 py-2.5 hover:bg-brand-bg/50 text-xs sm:text-sm font-bold transition-colors ${
                          location.pathname === tool.path ? 'text-primary-dark bg-brand-bg/30' : 'text-gray-700 hover:text-primary-dark'
                        }`}
                      >
                        {locale === 'ar' ? tool.nameAR : tool.nameEN}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Videos link */}
            <Link
              to="/videos"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname === '/videos' ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname === '/videos' ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.videos')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/videos' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Articles link */}
            <Link
              to="/articles"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname.startsWith('/articles') ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname.startsWith('/articles') ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.articles')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname.startsWith('/articles') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* About link */}
            <Link
              to="/about"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname === '/about' ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname === '/about' ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.about')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Clinics link */}
            <Link
              to="/clinics"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname === '/clinics' ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname === '/clinics' ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.clinics')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/clinics' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Contact link */}
            <Link
              to="/contact"
              className={`text-sm font-bold transition-colors duration-300 relative py-2 whitespace-nowrap group ${
                showSolidBg
                  ? location.pathname === '/contact' ? 'text-primary-dark' : 'text-gray-700 hover:text-primary-dark'
                  : location.pathname === '/contact' ? 'text-secondary' : 'text-white/90 hover:text-primary'
              }`}
            >
              {t('nav.contact')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Book Now Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3 lg:ms-6 inline-flex items-center justify-center px-4 lg:px-5 py-2.5 rounded-full text-sm font-extrabold text-white btn-gradient-hover shadow-sm hover:shadow-md hover:scale-105 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Menu & Language Toggles */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
            {/* Lang switcher on mobile */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-full border text-xs font-semibold cursor-pointer ${
                showSolidBg
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={13} />
              <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X size={24} className={showSolidBg ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={showSolidBg ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Drop Down) */}
      <div
        className={`md:hidden fixed inset-x-0 top-[76px] bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white max-h-[80vh] overflow-y-auto">
          
          {/* Home Link */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
              location.pathname === '/' ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
            }`}
          >
            {t('nav.home')}
          </Link>
 
           {/* Services Link */}
           <Link
             to="/services"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname.startsWith('/services') ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
             {t('nav.services')}
           </Link>
 
           {/* Pregnancy Tools Accordion Trigger (Mobile) */}
           <div>
             <button
               onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
               className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-gray-700 hover:text-primary-dark hover:bg-[#D9EAFD]/50 text-right rtl:text-right ltr:text-left cursor-pointer"
             >
               <span>{locale === 'ar' ? 'أدوات الحمل' : 'Pregnancy Tools'}</span>
               <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-primary-dark' : 'rotate-0'}`} />
             </button>
 
             <AnimatePresence initial={false}>
               {mobileDropdownOpen && (
                 <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 'auto', opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   transition={{ duration: 0.25, ease: "easeInOut" }}
                   className="pl-4 pr-4 rtl:pl-4 rtl:pr-4 space-y-1.5 overflow-hidden mt-1"
                 >
                   {toolLinks.map((tool, idx) => (
                     <Link
                       key={idx}
                       to={tool.path}
                       onClick={closeMobileMenu}
                       className={`block px-4 py-2 text-sm font-bold rounded-md bg-gray-50/50 ${
                         location.pathname === tool.path ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-650 hover:text-primary-dark'
                       }`}
                     >
                       {locale === 'ar' ? tool.nameAR : tool.nameEN}
                     </Link>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
 
           {/* Videos Link */}
           <Link
             to="/videos"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname === '/videos' ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
             {t('nav.videos')}
           </Link>

           {/* Articles Link */}
           <Link
             to="/articles"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname.startsWith('/articles') ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
             {t('nav.articles')}
           </Link>

           {/* About Link */}
           <Link
             to="/about"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname === '/about' ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
             {t('nav.about')}
           </Link>
 
           {/* Clinics Link */}
           <Link
             to="/clinics"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname === '/clinics' ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
             {t('nav.clinics')}
           </Link>
 
           {/* Contact Link */}
           <Link
             to="/contact"
             onClick={closeMobileMenu}
             className={`block px-3 py-2.5 rounded-lg text-base font-bold transition-all duration-200 ${
               location.pathname === '/contact' ? 'text-primary-dark bg-[#D9EAFD]' : 'text-gray-700 hover:text-primary-dark'
             }`}
           >
            {t('nav.contact')}
          </Link>

          <hr className="border-gray-100 my-2" />

          {/* Mobile Book CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-extrabold text-white btn-gradient-hover shadow-md cursor-pointer"
          >
            <PhoneCall size={18} className="mr-2 rtl:ml-2 rtl:mr-0" />
            {t('nav.bookNow')}
          </a>
        </div>
      </div>
    </nav>
  );
}
