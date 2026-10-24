import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import heroDesktopImg from '../assets/images/hero-desktop.png';
import heroMobileImg from '../assets/images/hero-mobile.png';
import aboutDoctorImg from '../assets/images/about doctor.JPG';
import fertilityImg from '../assets/images/fertility-treatment.png';
import icsiIvfImg from '../assets/images/icsi-ivf.png';
import highRiskImg from '../assets/images/high-risk-pregnancy.png';
import routinePregImg from '../assets/images/routine-pregnancy.png';
import pcosImg from '../assets/images/pcos.png';
import bleedingFibroidsImg from '../assets/images/uterine-bleeding-fibroids.png';
import cervicalCancerImg from '../assets/images/cervical-cancer.png';
import advancedUltrasoundImg from '../assets/images/advanced-ultrasound.png';
import laparoscopyImg from '../assets/images/laparoscopy-hysteroscopy.png';
import contraceptionImg from '../assets/images/contraception-family-planning.png';
import generalCheckupImg from '../assets/images/general-checkup.png';
import menopauseImg from '../assets/images/menopause.png';
import gynOncologyImg from '../assets/images/gynecology-oncology.png';
import ovulationCalcImg from '../assets/images/tool-ovulation.png';
import amIPregnantImg from '../assets/images/tool-am-i-pregnant.png';
import pregWeeksImg from '../assets/images/tool-preg-weeks.png';
import dueDateImg from '../assets/images/tool-due-date.png';
import icsiDueDateImg from '../assets/images/tool-icsi-due-date.png';
import { 
  Calendar, 
  Baby, 
  Heart, 
  Stethoscope, 
  Activity, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Award,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, CATEGORIES } from '../data/servicesData';
import { ARTICLES_DATA } from '../data/articlesData';

import { getServiceImage, fallbackRoutinePreg } from '../data/serviceImages';
import { getArticleImage } from '../data/articleImages';


export default function Home() {
  const { locale, t } = useLanguage();
  const whatsappLink = "https://wa.me/201044551331";
  const isArabic = locale === 'ar';
  
  // Custom direction-aware image slide-in variant
  const slideImageVariants = {
    hidden: { opacity: 0, x: isArabic ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };
  
  // Carousel State & Refs
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const touchTimeoutRef = useRef(null);
  const isTouchingRef = useRef(false);

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  // Scroll Entry variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const toolCardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // 1. Services Preview Data with Category Filter
  const [activeServiceCategory, setActiveServiceCategory] = useState('all');
  const displayedServices = activeServiceCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeServiceCategory);
  // Duplicate for smooth continuous auto-scroll
  const duplicatedServices = displayedServices.length < 8 
    ? [...displayedServices, ...displayedServices, ...displayedServices] 
    : [...displayedServices, ...displayedServices];

  // 2. Pregnancy Tools Data (Exactly the 5 interactive calculators)
  const pregnancyTools = [
    {
      id: 'ovulation-calculator',
      nameAR: 'حاسبة الدورة والتبويض',
      nameEN: 'Ovulation & Cycle Calculator',
      descAR: 'تتبع دورتكِ الشهرية وحساب الأيام الذهبية للتبويض لزيادة فرص حدوث الحمل طبيعياً.',
      descEN: 'Track your menstrual cycle and determine golden ovulation days to maximize natural conception.',
      path: '/tools/ovulation-calculator',
      image: ovulationCalcImg,
      btnAR: 'احسبي موعد الدورة',
      btnEN: 'Calculate Cycle'
    },
    {
      id: 'am-i-pregnant',
      nameAR: 'هل أنا حامل؟ (اختبار تفاعلي)',
      nameEN: 'Am I Pregnant? (Interactive Quiz)',
      descAR: 'اختبار ذكي وعلمي مبسط يساعدكِ في تقييم الأعراض المبكرة ومعرفة احتمالية حدوث الحمل.',
      descEN: 'A smart interactive questionnaire evaluating early symptoms to estimate pregnancy likelihood.',
      path: '/tools/am-i-pregnant',
      image: amIPregnantImg,
      btnAR: 'اكتشفي الآن',
      btnEN: 'Find Out Now'
    },
    {
      id: 'pregnancy-weeks-calculator',
      nameAR: 'حاسبة الحمل بالأسابيع والأشهر',
      nameEN: 'Pregnancy Weeks & Months',
      descAR: 'معرفة أسبوع حملكِ الحالي والتطورات البيولوجية للجنين ومقارنة حجمه بالفواكه.',
      descEN: 'Find your current gestational week, track baby development milestones, and compare size to fruits.',
      path: '/tools/pregnancy-weeks-calculator',
      image: pregWeeksImg,
      btnAR: 'احسبي الآن',
      btnEN: 'Calculate Now'
    },
    {
      id: 'due-date-calculator',
      nameAR: 'حاسبة الحمل والولادة العامة',
      nameEN: 'Due Date & Gestational Age',
      descAR: 'حساب تاريخ الولادة المتوقع ومتابعة أسابيع الحمل بالتفصيل بناءً على آخر دورة شهرية.',
      descEN: 'Calculate your expected due date and pregnancy details based on your last menstrual period (LMP).',
      path: '/tools/due-date-calculator',
      image: dueDateImg,
      btnAR: 'احسبي موعد ولادتك',
      btnEN: 'Calculate Due Date'
    },
    {
      id: 'icsi-due-date-calculator',
      nameAR: 'حاسبة الولادة للحقن المجهري',
      nameEN: 'ICSI Due Date Calculator',
      descAR: 'حساب موعد الولادة المتوقع بدقة بالغة بناءً على تاريخ سحب البويضات أو إرجاع الأجنة.',
      descEN: 'Calculate your expected due date precisely based on egg retrieval or embryo transfer date.',
      path: '/tools/icsi-due-date-calculator',
      image: icsiDueDateImg,
      btnAR: 'احسبي موعد ولادتك',
      btnEN: 'Calculate Due Date'
    }
  ];



  // Auto-scrolling Carousel Effect
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTime = performance.now();
    const speed = 0.045; // Smooth continuous auto-scroll speed

    const animate = (time) => {
      const delta = Math.min(time - lastTime, 50); // Cap delta to prevent jumps
      lastTime = time;

      if (!isPaused) {
        const isRTL = locale === 'ar';
        const direction = isRTL ? -1 : 1;
        
        container.scrollLeft += direction * delta * speed;

        const halfWidth = container.scrollWidth / 2;
        if (isRTL) {
          if (Math.abs(container.scrollLeft) >= halfWidth) {
            container.scrollLeft = 0;
          }
        } else {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, locale]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden bg-[#F8FAFC]"
    >
      
      {/* 1. Hero Section */}
      <section id="home" className="relative h-screen flex items-end justify-center bg-[#D9EAFD] text-white overflow-hidden select-none pb-3 sm:pb-4 lg:pb-6">
        {/* Desktop Hero Cover Image */}
        <img 
          src={heroDesktopImg} 
          alt="Dr. Ahmed Jamal Clinic Hero Background"
          className="hidden md:block w-full h-full object-cover object-top scale-115 translate-y-12 md:translate-y-16 lg:translate-y-20 select-none pointer-events-none absolute inset-0"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
        {/* Mobile Hero Cover Image */}
        <img 
          src={heroMobileImg} 
          alt="Dr. Ahmed Jamal Clinic Hero Background"
          className="block md:hidden w-full h-full object-cover object-top scale-115 translate-y-12 md:translate-y-16 lg:translate-y-20 select-none pointer-events-none absolute inset-0"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
        {/* Dark gradient overlay for text readability and high contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-2 sm:space-y-3">


          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-cairo text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-sm sm:text-2xl font-bold text-secondary font-cairo max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
          >
            {t('hero.title')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="text-sm sm:text-base text-white max-w-3xl mx-auto leading-relaxed font-bold hidden sm:block"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="pt-2 sm:pt-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center btn-gradient-hover text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 animate-pulse text-white" />
              <span>{t('hero.bookCTA')}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Doctor Bio Section (Primary Mint background `#C0E1D2`) */}
      <section id="about-preview" className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FCB7C7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FCB7C7]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Image Column */}
            <motion.div variants={slideImageVariants} className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#FCB7C7]/30 -rotate-3 scale-95" />
              <div className="absolute -inset-4 rounded-3xl bg-brand-bg/30 rotate-3 scale-95 border border-[#FCB7C7]/20" />
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={aboutDoctorImg}
                  alt={t('hero.name')}
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-2">
                <span className="inline-block bg-primary text-gray-900 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-xs">
                  {locale === 'ar' ? 'السيرة الذاتية' : 'Biography'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo">
                  {locale === 'ar' ? 'عن دكتور أحمد جمال النجار' : t('about.title')}
                </h2>
                <p className="text-base sm:text-lg text-primary-dark font-extrabold">
                  {locale === 'ar' 
                    ? 'استشاري أمراض النساء والتوليد والحمل الحرج – جامعة عين شمس' 
                    : t('about.subtitle')}
                </p>
                <div className="w-14 h-1 bg-primary rounded-full" />
              </div>

              {/* Bio paragraphs from About Section */}
              <div className="text-gray-800 space-y-3 leading-relaxed font-semibold text-sm sm:text-base">
                <p>
                  {locale === 'ar'
                    ? 'د. أحمد جمال النجار، استشاري أمراض النساء والتوليد والحمل الحرج، ومتخصص في تأخر الإنجاب والحقن المجهري، والمناظير الجراحية والأورام النسائية، بالإضافة إلى التجميل النسائي.'
                    : 'Dr. Ahmed Gamal El-Naggar, Consultant of Obstetrics, Gynecology, and High-Risk Pregnancy, specialized in infertility, IVF, surgical endoscopy, gynecologic oncology, and cosmetic gynecology.'}
                </p>
                <p>
                  {locale === 'ar'
                    ? 'يجمع د. أحمد جمال بين الخبرة الأكاديمية بجامعة عين شمس والتخصصات الدقيقة في صحة المرأة، لتقديم رعاية متكاملة بدايةً من متابعة الحمل والولادة، وحتى علاج تأخر الإنجاب وإجراء جراحات المناظير النسائية.'
                    : 'Dr. Ahmed Gamal combines academic excellence at Ain Shams University with advanced subspecialties in women’s health to provide comprehensive care from prenatal follow-up and safe delivery to infertility treatments and advanced gynecological endoscopic surgeries.'}
                </p>
              </div>

              {/* Key Credentials & Degrees Grid (Direct from About section) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    icon: <GraduationCap className="w-5 h-5 text-primary-dark shrink-0" />,
                    text: locale === 'ar' 
                      ? 'دكتوراه أمراض النساء والتوليد – كلية الطب، جامعة عين شمس' 
                      : 'MD in Obstetrics & Gynecology – Ain Shams University'
                  },
                  {
                    icon: <Award className="w-5 h-5 text-primary-dark shrink-0" />,
                    text: locale === 'ar' 
                      ? 'عضو هيئة التدريس بكلية الطب – جامعة عين شمس' 
                      : 'Faculty Member – Faculty of Medicine, Ain Shams University'
                  },
                  {
                    icon: <Activity className="w-5 h-5 text-primary-dark shrink-0" />,
                    text: locale === 'ar' 
                      ? 'استشاري وخبير المناظير الجراحية والأورام النسائية' 
                      : 'Consultant & Expert in Surgical Endoscopy & Oncology'
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-primary-dark shrink-0" />,
                    text: locale === 'ar' 
                      ? 'استشاري تأخر الإنجاب والحقن المجهري – جامعة برمنجهام، إنجلترا' 
                      : 'Consultant of Infertility & IVF – University of Birmingham'
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 bg-white/90 backdrop-blur-xs rounded-xl border border-primary/30 shadow-xs hover:border-primary transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-bg flex items-center justify-center shrink-0 border border-primary/20">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-extrabold text-gray-950 btn-outline-gradient border border-[#FCB7C7]/40 px-6 py-3 rounded-full shadow-xs hover:shadow hover:scale-102 transition-all duration-300 group cursor-pointer"
                >
                  <span>{locale === 'ar' ? 'اعرف أكثر عن الدكتور والشهادات' : 'Learn More About Credentials'}</span>
                  {locale === 'ar' ? (
                    <ChevronLeft className="w-4 h-4 mr-2 rtl:mr-2 rtl:ml-0 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section id="services-preview" className="py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo">
              {locale === 'ar' ? 'الخدمات الطبية المتخصصة' : t('services.title')}
            </h2>
            <div className="w-16 h-1 bg-[#FCB7C7] mx-auto rounded-full" />
            <p className="text-gray-700 font-bold text-sm sm:text-base">
              {locale === 'ar' 
                ? 'استكشفي خدماتنا الطبية المتكاملة عبر 4 تخصصات دقيقة لصحة المرأة' 
                : t('services.subtitle')}
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeServiceCategory === cat.id;
              const catTitle = locale === 'ar' ? cat.nameAR : cat.nameEN;
              const count = cat.id === 'all' 
                ? SERVICES_DATA.length 
                : SERVICES_DATA.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveServiceCategory(cat.id);
                    if (carouselRef.current) {
                      carouselRef.current.scrollLeft = 0;
                    }
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-gray-950 shadow-md scale-105 border border-[#fb9fae]'
                      : 'bg-white text-gray-700 hover:bg-brand-bg hover:text-gray-950 border border-gray-200 shadow-xs'
                  }`}
                >
                  <span>{catTitle}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white text-gray-950' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* === Horizontal Auto-scrolling Carousel (All Screen Sizes) === */}
        <div 
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fading side overlays */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 select-none cursor-grab active:cursor-grabbing touch-pan-x"
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedServices.map((service, index) => {
              const isArabic = locale === 'ar';
              const title = isArabic ? service.nameAR : service.nameEN;
              const brief = isArabic ? service.briefAR : service.briefEN;
              const imageUrl = getServiceImage(service.id);
              const catObj = CATEGORIES.find(c => c.id === service.category);
              const catLabel = catObj ? (isArabic ? catObj.nameAR : catObj.nameEN) : '';

              return (
                <div
                  key={`${service.id}-${index}`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onTouchStart={() => setIsPaused(true)}
                  onTouchEnd={() => setIsPaused(false)}
                  className="flex-shrink-0 w-[270px] sm:w-[320px] bg-white rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Card Image */}
                  <Link 
                    to={`/services/${service.id}`}
                    className="w-full h-38 sm:h-44 overflow-hidden relative border-b border-[#C0E1D2]/40 bg-gradient-to-br from-brand-bg/80 via-white to-brand-bg/40 block cursor-pointer group/img"
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
                    {catLabel && (
                      <span className="absolute top-2.5 rtl:right-2.5 ltr:left-2.5 bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-extrabold text-primary-dark px-2.5 py-1 rounded-full shadow-xs border border-primary/20">
                        {catLabel}
                      </span>
                    )}
                  </Link>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 font-cairo line-clamp-1">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-600 font-bold leading-relaxed line-clamp-2">
                        {brief}
                      </p>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t border-gray-100/60">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 inline-flex justify-center items-center py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-extrabold btn-secondary-gradient transition-all text-center cursor-pointer shadow-xs"
                      >
                        {isArabic ? 'تفاصيل الخدمة' : 'Service Details'}
                      </Link>
                      <a
                        href={`${whatsappLink}?text=${encodeURIComponent(
                          isArabic 
                            ? `مرحباً د. أحمد جمال، أود حجز موعد لاستشارة: ${service.nameAR}`
                            : `Hello Dr. Ahmed Gamal, I would like to book an appointment for: ${service.nameEN}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-extrabold btn-gradient-hover transition-all text-center cursor-pointer shadow-xs"
                      >
                        {isArabic ? 'احجز موعد الآن' : 'Book Now'}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Manual Navigation Arrows (Forced LTR to keep arrows pointing outward in both languages) */}
          <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6" dir="ltr">
            <button
              onClick={() => {
                const container = carouselRef.current;
                if (container) {
                  setIsPaused(true);
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                  if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                  touchTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
                }
              }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-[#FCB7C7]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => {
                const container = carouselRef.current;
                if (container) {
                  setIsPaused(true);
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                  if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                  touchTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
                }
              }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-[#FCB7C7]/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Bottom navigation to full page */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-extrabold text-white btn-gradient-hover shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {locale === 'ar' ? 'عرض جميع الخدمات (54 خدمة طبية)' : 'View All 54 Medical Services'}
          </Link>
        </div>
      </section>

      {/* 4. Pregnancy Tools Section (Static Grid, Base Background #D9EAFD) */}
      <section id="pregnancy-tools-preview" className="py-20 bg-[#D9EAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo relative inline-block">
              {locale === 'ar' ? 'أدوات الحمل' : 'Pregnancy Tools'}
            </h2>
            <div className="w-20 h-1 bg-[#FCB7C7] mx-auto rounded-full mt-2" />
            <p className="text-gray-700 font-bold">
              {locale === 'ar' 
                ? 'حواسب طبية تفاعلية لمرافقتكِ وحساب مواعيدكِ الهامة بدقة فائقة وبشكل علمي مبسط.'
                : 'Scientific interactive calculators designed to accurately track pregnancy progress and key dates.'}
            </p>
          </motion.div>

          {/* Staggered entry tools grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {pregnancyTools.map((tool) => {
              const isArabic = locale === 'ar';
              const name = isArabic ? tool.nameAR : tool.nameEN;
              const desc = isArabic ? tool.descAR : tool.descEN;

              return (
                <motion.div
                  key={tool.id}
                  variants={toolCardVariants}
                  whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08)" }}
                  className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col justify-between items-center text-center transition-shadow duration-300 group"
                >
                  <div className="space-y-4 w-full">
                    {/* Rounded premium image container */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#FCB7C7] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <img 
                        src={tool.image} 
                        alt={name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-gray-900 font-cairo leading-tight min-h-[40px] flex items-center justify-center">
                      {name}
                    </h3>
                    
                    <p className="text-xs text-gray-650 leading-relaxed font-bold line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  {/* Accent colored CTA button */}
                  <div className="pt-6 w-full mt-4">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl text-xs font-extrabold text-gray-950 btn-gradient-hover shadow-xs cursor-pointer"
                    >
                      {isArabic ? tool.btnAR : tool.btnEN}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 5. Medical Articles Section (المقالات الطبية والتوعية الصحية) */}
      <section id="articles-preview" className="py-20 bg-white relative border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="inline-block bg-brand-bg border border-secondary text-primary-dark font-extrabold text-xs uppercase px-4 py-1.5 rounded-full shadow-xs">
              {locale === 'ar' ? 'المقالات والتوعية الطبية' : 'Medical Articles & Health Education'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo">
              {locale === 'ar' ? 'دليلكِ الطبي ومعلوماتكِ الموثقة' : 'Your Trusted Medical & Pregnancy Guide'}
            </h2>
            <div className="w-20 h-1 bg-[#FCB7C7] mx-auto rounded-full mt-2" />
            <p className="text-gray-700 font-bold text-sm sm:text-base">
              {locale === 'ar' 
                ? 'مقالات طبية متخصصة ومبسطة تستند لأحدث المعايير الطبية الدولية (ACOG & ASRM)، بإشراف د. أحمد جمال النجار.'
                : 'Specialized clinical articles based on modern international guidelines (ACOG & ASRM), reviewed by Dr. Ahmed Gamal.'}
            </p>
          </motion.div>

          {/* Grid of 3 Representative Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ARTICLES_DATA[0], ARTICLES_DATA[4], ARTICLES_DATA[7]].map((article) => {
              const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

              return (
                <motion.article
                  key={article.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={sectionVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.07)" }}
                  className="bg-[#F8FAFC] rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group"
                >
                  {/* Article Image Container */}
                  <Link
                    to={`/articles/${article.id}`}
                    className="relative h-60 sm:h-64 w-full bg-gradient-to-br from-brand-bg to-gray-100 overflow-hidden block cursor-pointer group/img"
                  >
                    <img 
                      src={getArticleImage(article.id, article.imageKey)}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />

                    {/* Category Pill */}
                    <div className="absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-white/95 text-[#071952] shadow-sm border border-gray-150 backdrop-blur-md">
                        {isArabic ? article.categoryNameAR : article.categoryNameEN}
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-lg font-extrabold text-gray-900 font-cairo leading-snug group-hover:text-primary-dark transition-colors line-clamp-2">
                        <Link to={`/articles/${article.id}`}>
                          {isArabic ? article.title : article.titleEN}
                        </Link>
                      </h3>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {isArabic ? article.summary : article.summaryEN}
                      </p>
                    </div>

                    {/* Footer link */}
                    <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                      <Link
                        to={`/articles/${article.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-primary-dark hover:text-[#071952] group-hover:gap-2.5 transition-all"
                      >
                        <span>{isArabic ? 'قراءة المقال بالكامل' : 'Read Full Article'}</span>
                        <ArrowIcon size={15} />
                      </Link>

                      <span className="text-[11px] font-bold text-gray-400">
                        {isArabic ? 'إشراف طبي' : 'Dr. Ahmed'}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* CTA to all articles */}
          <div className="text-center mt-12">
            <Link
              to="/articles"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white btn-gradient-hover shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <BookOpen size={17} />
              <span>
                {locale === 'ar' ? 'عرض جميع المقالات الطبية (10 مقالات)' : 'Browse All Medical Articles (10 Articles)'}
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Clinics Branches Preview (Secondary Light Mint background `#D9EAFD`) */}
      <section id="clinics-preview" className="py-20 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="inline-block bg-white border border-secondary text-gray-900 font-bold text-xs uppercase px-3.5 py-2 rounded-full shadow-sm">
              {t('nav.clinics')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo">
              {t('clinics.title')}
            </h2>
            <div className="w-16 h-1 bg-[#FCB7C7] mx-auto rounded-full" />
            <p className="text-gray-800 font-bold">
              {t('clinics.subtitle')}
            </p>
          </motion.div>

          {/* Clinics Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t('clinics.list', { returnObjects: true }).map((clinic, index) => {
              const coordinatesQuery = index === 0 
                ? "Medical Park Premier, New Cairo" 
                : index === 1 
                ? "30 Mohamed Youssef Moussa, Nasr City" 
                : "12 Botros Ghaly, Roxy, Heliopolis";

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                  className="bg-white rounded-xl border border-gray-250/20 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  {/* Header: Solid Light Mint Green Background, Dark Green Title */}
                  <div className="bg-brand-bg border-b border-gray-200/50 py-4 text-center">
                    <h3 className="text-xl font-bold text-[#1A3D54] font-cairo">
                      {clinic.name}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col space-y-4 flex-grow">
                    
                    {/* Address Detail */}
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-gray-700 text-sm font-semibold justify-start text-right rtl:text-right ltr:text-left">
                      <MapPin className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-900">{locale === 'ar' ? 'العنوان: ' : 'Address: '}</strong>
                        {clinic.address}
                      </span>
                    </div>

                    {/* Phone Call Detail */}
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-gray-700 text-sm font-semibold justify-start text-right rtl:text-right ltr:text-left">
                      <Phone className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span>
                          <strong className="text-gray-900">{locale === 'ar' ? 'اتصل للحجز: ' : 'Call for Booking: '}</strong>
                        </span>
                        <a href={`tel:${clinic.phone}`} className="hover:underline text-primary-dark font-extrabold block text-base mt-0.5">
                          {clinic.phone}
                        </a>
                        {/* Only display the branch specific phone number */}
                      </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-250/30 mt-2 shadow-sm">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(coordinatesQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        title={clinic.name}
                      ></iframe>
                      
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 left-2 rtl:left-auto rtl:right-2 bg-white/95 backdrop-blur-sm border border-gray-200 text-[10px] font-bold text-gray-800 px-2 py-1 rounded shadow hover:bg-white flex items-center space-x-1"
                      >
                        <span>{locale === 'ar' ? 'افتح في الخرائط' : 'Open in Maps'}</span>
                        <span className="text-[8px]">↗</span>
                      </a>
                    </div>

                    {/* Bottom Button */}
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-[#1A3D54] text-[#1A3D54] bg-white hover:bg-[#1A3D54]/5 font-extrabold text-xs transition-all duration-200 cursor-pointer"
                      >
                        <span>{locale === 'ar' ? 'عرض على خريطة جوجل' : 'Show on Google Maps'}</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/clinics"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-gray-950 bg-[#FCB7C7] hover:bg-[#fb9fae] shadow-md hover:scale-105 transition-all duration-300"
            >
              {locale === 'ar' ? 'تفاصيل فروع العيادات' : 'View Clinic Hours & Branches'}
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Patient Testimonials Section (Base background #F8FAFC) */}
      <section id="testimonials-preview" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-cairo">
              {t('testimonials.title')}
            </h2>
            <div className="w-16 h-1 bg-[#FCB7C7] mx-auto rounded-full" />
            <p className="text-gray-700 font-bold">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('testimonials.list', { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-150 flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-6 right-6 text-primary/10 text-6xl font-serif pointer-events-none select-none">
                  “
                </div>

                <div className="space-y-4">
                  <div className="flex space-x-1 rtl:space-x-reverse text-amber-450">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 italic text-sm leading-relaxed relative z-10 font-bold">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-6 flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-primary-dark font-extrabold text-sm border border-secondary/40">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                    <span className="text-xs text-primary-dark font-extrabold block">{item.service}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </motion.div>
  );
}
