import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search,
  X
} from 'lucide-react';
import { SERVICES_DATA, CATEGORIES } from '../data/servicesData';

import { SERVICE_IMAGES, getServiceImage, fallbackRoutinePreg } from '../data/serviceImages';


export default function Services() {
  const { locale, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter & Search Logic
  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    
    const searchLower = searchTerm.toLowerCase().trim();
    if (!searchLower) return matchesCategory;

    const matchesSearch = 
      service.nameAR.toLowerCase().includes(searchLower) ||
      service.nameEN.toLowerCase().includes(searchLower) ||
      service.briefAR.toLowerCase().includes(searchLower) ||
      service.briefEN.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  // Grid Stagger variants
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 pb-20 overflow-x-hidden bg-[#F8FAFC] min-h-screen"
    >
      {/* Subpage Header Banner */}
      <section className="bg-brand-bg py-16 text-center border-b border-primary/30 relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-cairo">
            {t('services.title')}
          </h1>
          <p className="text-sm sm:text-md text-primary-dark font-extrabold max-w-2xl mx-auto">
            {locale === 'ar' 
              ? 'تصفحي جميع خدماتنا الطبية المتكاملة، المصنفة لتسهيل وصولك للمعلومات الصحية الموثوقة.'
              : 'Browse our complete catalog of medical services, organized to guide you to reliable health resources.'}
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Search & Category Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map(cat => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-gray-950 shadow-md scale-103 border border-primary'
                      : 'bg-brand-bg text-gray-700 hover:bg-secondary/25 border border-transparent'
                  }`}
                >
                  {locale === 'ar' ? cat.nameAR : cat.nameEN}
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-5 h-5 text-gray-400 rtl:right-3.5 rtl:left-auto" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={locale === 'ar' ? 'ابحثي عن خدمة أو إجراء...' : 'Search for a service...'}
              className="w-full pl-11 pr-4 py-2.5 rtl:pr-11 rtl:pl-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark font-semibold text-sm bg-[#F8FAFC] shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3.5 rtl:left-3 rtl:right-auto text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Services Grid (Framer Motion Stagger loading) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isArabic = locale === 'ar';
              const title = isArabic ? service.nameAR : service.nameEN;
              const brief = isArabic ? service.briefAR : service.briefEN;
              const imageUrl = getServiceImage(service.id);

              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-250/20 overflow-hidden flex flex-col justify-between transition-all duration-300 group"
                >
                  {/* Service Image */}
                  <Link 
                    to={`/services/${service.id}`}
                    className="w-full h-36 sm:h-48 overflow-hidden relative bg-gradient-to-br from-brand-bg/80 via-white to-brand-bg/40 block cursor-pointer group/img"
                  >
                    <img 
                      src={imageUrl} 
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackRoutinePreg;
                      }}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-3 sm:p-6 space-y-2 sm:space-y-3 flex-grow flex flex-col justify-between">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-xs sm:text-xl font-extrabold text-gray-900 font-cairo leading-snug group-hover:text-primary-dark transition-colors line-clamp-2">
                        {title}
                      </h3>
                      <div className="w-8 sm:w-10 h-1 bg-[#FCB7C7]/50 rounded-full group-hover:w-16 transition-all duration-300" />
                    </div>

                    <p className="text-[10px] sm:text-sm text-gray-650 leading-relaxed font-bold line-clamp-2 sm:line-clamp-3 mt-1 sm:mt-0">
                      {brief}
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-100 flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 inline-flex justify-center items-center py-2 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-extrabold btn-secondary-gradient text-center cursor-pointer shadow-xs"
                    >
                      {isArabic ? 'تفاصيل الخدمة' : 'Service Details'}
                    </Link>
                    <a
                      href={`https://wa.me/201044551331?text=${encodeURIComponent(
                        isArabic
                          ? `مرحباً د. أحمد جمال، أود حجز موعد لاستشارة: ${service.nameAR}`
                          : `Hello Dr. Ahmed Gamal, I would like to book an appointment for: ${service.nameEN}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center py-2 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-extrabold btn-gradient-hover text-center cursor-pointer shadow-xs"
                    >
                      {isArabic ? 'احجز موعد الآن' : 'Book Now'}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-2xl border border-gray-100 space-y-4"
          >
            <div className="text-gray-400 font-extrabold text-lg sm:text-xl">
              {locale === 'ar' ? 'عذراً، لم نجد أي خدمة مطابقة لبحثكِ.' : 'Sorry, we couldn\'t find any services matching your search.'}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">
              {locale === 'ar' ? 'تأكدي من كتابة الكلمات بشكل صحيح أو ابحثي في تصنيف آخر.' : 'Check your spelling or choose a different category filter.'}
            </p>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}
