import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from '../data/articlesData';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  UserCheck, 
  Sparkles,
  Stethoscope,
  Filter,
  Share2,
  CheckCircle2
} from 'lucide-react';

import { getArticleImage } from '../data/articleImages';


export default function Articles() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const titleMatch = (article.title + ' ' + article.titleEN).toLowerCase().includes(q);
      const summaryMatch = (article.summary + ' ' + article.summaryEN).toLowerCase().includes(q);
      const tagsMatch = article.tags.some(tag => tag.toLowerCase().includes(q));

      return matchesCategory && (titleMatch || summaryMatch || tagsMatch);
    });
  }, [activeCategory, searchQuery]);

  // Featured top article (Article 1 by default, or the first filtered item)
  const featuredArticle = activeCategory === 'all' && !searchQuery ? ARTICLES_DATA[0] : null;
  const gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F8FAFC] pb-24 pt-28 sm:pt-32"
    >
      {/* 1. Hero Header Banner */}
      <section className="relative overflow-hidden mb-12 sm:mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071952] via-[#0B2447] to-[#19376D] pointer-events-none" />
        
        {/* Decorative background glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FCB7C7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-[#FCB7C7] mb-6 shadow-sm"
          >
            <Sparkles size={16} className="text-[#FCB7C7]" />
            <span>{isAr ? 'المقالات والتوعية الطبية الموثوقة' : 'Verified Medical & Health Articles'}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-cairo tracking-tight max-w-4xl mx-auto leading-tight sm:leading-snug"
          >
            {isAr ? 'دليلكِ الطبي المتكامل لصحة المرأة والولادة' : 'Your Comprehensive Guide to Women’s Health & Fertility'}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {isAr
              ? 'مقالات طبية مبسطة وموثقة تستند إلى أحدث إرشادات الكلية الأمريكية (ACOG) والجمعية الأمريكية لطب الخصوبة (ASRM)، بإشراف د. أحمد جمال النجار.'
              : 'Evidence-based articles complying with international ACOG and ASRM guidelines, reviewed by Dr. Ahmed Gamal.'}
          </motion.p>

          {/* Search bar within Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحثي في المقالات (مثال: الولادة الطبيعية، الحقن المجهري، الإبيدورال...)' : 'Search articles (e.g. natural birth, ICSI, laparoscopy...)'}
                className="w-full py-4 pr-12 pl-12 text-sm sm:text-base rounded-2xl bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#FCB7C7]/40 shadow-xl transition-all"
                dir={isAr ? 'rtl' : 'ltr'}
              />
              <Search className={`absolute ${isAr ? 'right-4' : 'left-4'} w-5 h-5 text-gray-400`} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute ${isAr ? 'left-4' : 'right-4'} text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2.5 py-1 rounded-full font-bold transition-colors cursor-pointer`}
                >
                  {isAr ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {ARTICLE_CATEGORIES.map((category) => {
            const count = category.id === 'all' 
              ? ARTICLES_DATA.length 
              : ARTICLES_DATA.filter(a => a.category === category.id).length;

            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#071952] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-brand-bg hover:text-primary-dark border border-gray-200 shadow-sm'
                }`}
              >
                <span>{isAr ? category.nameAR : category.nameEN}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-[#FCB7C7] text-gray-950' : 'bg-gray-150 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-sm font-bold text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <span>
              {isAr 
                ? `نتائج البحث عن: "${searchQuery}" (${filteredArticles.length} مقال)` 
                : `Search results for: "${searchQuery}" (${filteredArticles.length} articles)`}
            </span>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-primary-dark hover:underline text-xs"
            >
              {isAr ? 'عرض كافة المقالات' : 'Show all articles'}
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 p-8">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 font-cairo mb-2">
              {isAr ? 'لم يتم العثور على مقالات تطابق بحثكِ' : 'No articles matched your search'}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              {isAr ? 'جربي البحث بكلمات أخرى أو تصفح الأقسام الطبية المتاحة بالأعلى.' : 'Try different keywords or browse our categories above.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-6 py-2.5 bg-primary text-gray-950 font-bold rounded-full text-sm hover:bg-[#fb9fae] transition-all"
            >
              {isAr ? 'إعادة ضبط البحث' : 'Reset Search'}
            </button>
          </div>
        )}

        {/* 4. Featured Hero Article (Only displayed on All without active search) */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image Side */}
              <Link
                to={`/articles/${featuredArticle.id}`}
                className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[280px] sm:min-h-[360px] bg-gradient-to-br from-brand-bg to-gray-100 overflow-hidden block cursor-pointer"
              >
                <img
                  src={getArticleImage(featuredArticle.id, featuredArticle.imageKey)}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#071952]/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black shadow-sm flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#FCB7C7]" />
                  <span>{isAr ? 'مقال مميز' : 'Featured Article'}</span>
                </div>
              </Link>

              {/* Text Side */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-bold">
                    <span className="px-3 py-1 rounded-full bg-brand-bg text-primary-dark font-extrabold border border-secondary/30">
                      {isAr ? featuredArticle.categoryNameAR : featuredArticle.categoryNameEN}
                    </span>
                    <span className="flex items-center gap-1">
                      <UserCheck size={14} className="text-primary-dark" />
                      {isAr ? featuredArticle.author : 'Dr. Ahmed Gamal'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-cairo leading-snug group-hover:text-primary-dark transition-colors">
                    <Link to={`/articles/${featuredArticle.id}`}>
                      {isAr ? featuredArticle.title : featuredArticle.titleEN}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {isAr ? featuredArticle.summary : featuredArticle.summaryEN}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={`/articles/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071952] hover:bg-primary hover:text-gray-950 text-white font-extrabold text-sm transition-all duration-300 shadow-md group-hover:gap-3"
                  >
                    <span>{isAr ? 'قراءة المقال بالكامل' : 'Read Full Article'}</span>
                    <ArrowIcon size={16} />
                  </Link>

                  <span className="text-xs text-gray-400 font-bold hidden sm:inline-block">
                    {isAr ? 'د. أحمد جمال النجار' : 'Dr. Ahmed Gamal'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 5. Grid of Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-secondary/60 transition-all duration-300 group"
            >
              {/* Card Image */}
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

                {/* Category Badge on top */}
                <div className="absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-white/95 text-[#071952] shadow-sm border border-gray-150 backdrop-blur-md">
                    {isAr ? article.categoryNameAR : article.categoryNameEN}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{isAr ? 'مقال رقم ' + article.number : 'Article #' + article.number}</span>
                    <span>•</span>
                    <span>{isAr ? article.author : 'Dr. Ahmed Gamal'}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 font-cairo leading-snug group-hover:text-primary-dark transition-colors line-clamp-2">
                    <Link to={`/articles/${article.id}`}>
                      {isAr ? article.title : article.titleEN}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {isAr ? article.summary : article.summaryEN}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-primary-dark hover:text-[#071952] group-hover:gap-2.5 transition-all"
                  >
                    <span>{isAr ? 'قراءة المقال' : 'Read Article'}</span>
                    <ArrowIcon size={15} />
                  </Link>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>{isAr ? 'معتمد طبياً' : 'Verified'}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 6. Medical Consultation Banner */}
        <section className="mt-20 relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#071952] via-[#0B2447] to-[#1A3D54] text-white p-8 sm:p-12 text-center sm:text-start">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#FCB7C7] text-xs font-black tracking-wider uppercase">
                {isAr ? 'استشارة طبية متخصصة' : 'Specialized Medical Consultation'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-cairo">
                {isAr ? 'هل لديكِ استفسار حول حالتكِ الصحية؟' : 'Have questions regarding your personal health?'}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {isAr
                  ? 'يسعد د. أحمد جمال وفريقه الطبي بتقديم الرعاية المخصصة لحالتكِ، والإجابة على كافة التساؤلات باحترافية وأمان تام.'
                  : 'Dr. Ahmed Gamal and our team are here to guide you with dedicated, confidential clinical support.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/201044551331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-extrabold text-gray-950 btn-gradient-hover shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {isAr ? 'احجزي استشارتكِ الآن' : 'Book Your Consultation'}
              </a>
              <Link
                to="/clinics"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-extrabold text-white btn-outline-gradient border border-white/30 transition-all duration-300 cursor-pointer"
              >
                {isAr ? 'فروع العيادات' : 'View Clinics'}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
