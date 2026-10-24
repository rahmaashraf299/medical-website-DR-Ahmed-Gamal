import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { VIDEOS_DATA, VIDEO_CATEGORIES } from '../data/videosData';

// Local service images to use as fallback thumbnails
import fertilityImg from '../assets/images/fertility-treatment.png';
import icsiIvfImg from '../assets/images/icsi-ivf.png';
import highRiskImg from '../assets/images/high-risk-pregnancy.png';
import routinePregImg from '../assets/images/routine-pregnancy.png';
import pcosImg from '../assets/images/pcos.png';
import bleedingFibroidsImg from '../assets/images/uterine-bleeding-fibroids.png';
import cervicalCancerImg from '../assets/images/cervical-cancer.png';
import advancedUltrasoundImg from '../assets/images/advanced-ultrasound.png';
import papSmearImg from '../assets/images/pap-smear.png';
import laparoscopyImg from '../assets/images/laparoscopy-hysteroscopy.png';
import contraceptionImg from '../assets/images/contraception-family-planning.png';
import generalCheckupImg from '../assets/images/general-checkup.png';
import menopauseImg from '../assets/images/menopause.png';
import gynOncologyImg from '../assets/images/gynecology-oncology.png';

// Vite Glob Import to load all downloaded cover thumbnails statically
const THUMBNAIL_IMAGES = import.meta.glob('../assets/video_thumbnails/*.jpg', {
  eager: true,
  import: 'default'
});

// Build a clean shortcode -> image module map with cross-platform slash normalization
const THUMBNAIL_MAP = {};
Object.entries(THUMBNAIL_IMAGES).forEach(([path, module]) => {
  const normalizedPath = path.replace(/\\/g, '/');
  const filename = normalizedPath.split('/').pop();
  const shortcode = filename.substring(0, filename.lastIndexOf('.'));
  if (module) {
    THUMBNAIL_MAP[shortcode] = module;
  }
});

// Reusable VideoCard Component
function VideoCard({ video, locale, t, onPlay, cardVariants }) {
  const title = locale === 'ar' ? video.titleAR : video.titleEN;
  const localImage = THUMBNAIL_MAP[video.shortcode];
  const [imgFailed, setImgFailed] = useState(false);

  // Fallback images matching category theme
  const getFallbackImage = (category) => {
    switch (category) {
      case 'medical_info':
        return advancedUltrasoundImg;
      case 'natural_births':
        return THUMBNAIL_MAP['DPB6QSjCEs3'] || routinePregImg;
      case 'c_sections':
        return THUMBNAIL_MAP['DRFdBSNCCi8'] || highRiskImg;
      case 'fetal_gender':
        return advancedUltrasoundImg;
      case 'podcast':
        return generalCheckupImg;
      default:
        return generalCheckupImg;
    }
  };

  const imgSrc = imgFailed 
    ? getFallbackImage(video.category) 
    : (localImage || getFallbackImage(video.category));

  return (
    <motion.div
      layout
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.025 }}
      onClick={() => onPlay(video)}
      className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl border border-gray-150 overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer group"
    >
      {/* Square Thumbnail Container with Curved Edges */}
      <div className="w-full aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgFailed(true)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
        
        {/* Central Play Button */}
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-primary text-gray-950 rounded-full flex items-center justify-center shadow-xl border-2 border-white group-hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5 rtl:mr-0.5 rtl:ml-0" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Videos() {
  const { locale, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  // Filter & Search Logic
  const filteredVideos = VIDEOS_DATA.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    
    const searchLower = searchTerm.toLowerCase().trim();
    if (!searchLower) return matchesCategory;

    const matchesSearch = 
      video.titleAR.toLowerCase().includes(searchLower) ||
      video.titleEN.toLowerCase().includes(searchLower) ||
      video.descriptionAR.toLowerCase().includes(searchLower) ||
      video.descriptionEN.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  // Grid Stagger variants
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
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
            {t('videos.title')}
          </h1>
          <p className="text-sm sm:text-md text-primary-dark font-extrabold max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Search & Category Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {VIDEO_CATEGORIES.map(cat => {
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
              placeholder={t('videos.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-2.5 rtl:pr-11 rtl:pl-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark font-semibold text-sm bg-[#F8FAFC] shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3.5 rtl:left-3 rtl:right-auto text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Video Cards Grid (Mobile 2 Columns, Desktop 3 Larger Square Columns) */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                locale={locale}
                t={t}
                onPlay={setSelectedVideo}
                cardVariants={cardVariants}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback "No Results" Screen */}
        <AnimatePresence>
          {filteredVideos.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <p className="text-gray-400 font-bold text-lg">
                {t('videos.noResults')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lightbox Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Wrapper relative container (holds the button and the card safely without clipping) */}
            <div className="relative w-full max-w-[95%] sm:max-w-md flex flex-col items-center">
              
              {/* Close Button: positioned floating above the video card */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-2 rtl:left-2 rtl:right-auto z-50 w-10 h-10 bg-primary hover:bg-primary/90 text-gray-950 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full aspect-[9/16] max-h-[80vh] bg-[#1A2A4F] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-[#FFDBB6]/20"
              >
                {/* Instagram Embed (Iframe native player) */}
                <div className="w-full h-full">
                  <iframe
                    src={`https://www.instagram.com/reel/${selectedVideo.shortcode}/embed/`}
                    className="w-full h-full border-none"
                    scrolling="no"
                    allowFullScreen
                    title={locale === 'ar' ? selectedVideo.titleAR : selectedVideo.titleEN}
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
