import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ARTICLES_DATA } from '../data/articlesData';
import { 
  Clock, 
  UserCheck, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  CheckCircle, 
  Bookmark, 
  HelpCircle, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Check, 
  ListChecks,
  AlertCircle
} from 'lucide-react';

import aboutDoctorImg from '../assets/images/about doctor.JPG';

import { getArticleImage } from '../data/articleImages';


export default function ArticleDetail() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const BackIcon = isAr ? ArrowRight : ArrowLeft;

  const article = ARTICLES_DATA.find((a) => a.id === articleId);

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-gray-200 shadow-md">
          <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-cairo text-gray-900 mb-2">
            {isAr ? 'المقال غير موجود' : 'Article Not Found'}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {isAr ? 'عذراً، المقال الذي تبحثين عنه غير متاح أو تم نقله.' : 'Sorry, the requested article was not found.'}
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#071952] text-white font-bold rounded-full text-sm hover:bg-primary hover:text-gray-950 transition-all"
          >
            <span>{isAr ? 'العودة للمقالات الطبية' : 'Back to Articles'}</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (same category, excluding current)
  const relatedArticles = ARTICLES_DATA
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#F8FAFC] pb-24 pt-28 sm:pt-32"
    >
      {/* 1. Breadcrumbs & Top Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500">
            <Link to="/" className="hover:text-primary-dark transition-colors">
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/articles" className="hover:text-primary-dark transition-colors">
              {isAr ? 'المقالات الطبية' : 'Medical Articles'}
            </Link>
            <span>/</span>
            <span className="text-primary-dark line-clamp-1 max-w-[200px] sm:max-w-xs">
              {isAr ? article.categoryNameAR : article.categoryNameEN}
            </span>
          </nav>

          <Link
            to="/articles"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-gray-600 hover:text-primary-dark transition-colors"
          >
            <BackIcon size={16} />
            <span>{isAr ? 'كل المقالات' : 'All Articles'}</span>
          </Link>
        </div>
      </div>

      {/* 2. Article Header Card */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6">
          
          {/* Top Badges & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-bg text-primary-dark font-extrabold text-xs border border-secondary/30">
                {isAr ? article.categoryNameAR : article.categoryNameEN}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1">
                <CheckCircle size={13} />
                <span>{isAr ? 'مراجعة طبية معتمدة' : 'Clinically Reviewed'}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
              <span>{copied ? (isAr ? 'تم نسخ الرابط!' : 'Link Copied!') : (isAr ? 'مشاركة المقال' : 'Share')}</span>
            </button>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-gray-950 font-cairo leading-snug sm:leading-snug">
            {isAr ? article.title : article.titleEN}
          </h1>

          {/* Doctor & Reading Info Bar */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-gray-600">
            <div className="flex items-center gap-3">
              <img
                src={aboutDoctorImg}
                alt="Dr. Ahmed Gamal"
                className="w-11 h-11 rounded-full object-cover border-2 border-primary shadow-sm"
              />
              <div>
                <span className="font-bold text-gray-900 block text-sm">
                  {isAr ? article.author : 'Dr. Ahmed Gamal'}
                </span>
                <span className="text-[11px] text-primary-dark font-extrabold block">
                  {isAr ? article.authorTitle : 'Consultant Ob/Gyn, Endoscopy & IVF'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 3. Main Article Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Article Body (8 cols on desktop) */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8">
            
            {/* Illustrated Medical Banner */}
            <div className="relative rounded-2xl sm:rounded-3xl h-64 sm:h-80 md:h-[420px] w-full overflow-hidden border border-secondary/30 shadow-md bg-gradient-to-br from-brand-bg to-gray-100">
              <img
                src={getArticleImage(article.id, article.imageKey)}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed font-medium bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border-r-4 rtl:border-r-4 ltr:border-l-4 border-primary">
              {article.intro.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Article Sections */}
            <div className="space-y-10 pt-4">
              {article.sections.map((section, idx) => (
                <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-32">
                  
                  {/* Section Heading */}
                  <div className="flex items-center gap-2.5 border-b border-gray-100 pb-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#071952] font-cairo">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Paragraphs */}
                  {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}

                  {/* Bullet Points if present */}
                  {section.bullets && (
                    <ul className="space-y-2.5 my-3 bg-brand-bg/30 p-4 sm:p-5 rounded-2xl border border-secondary/30">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 font-semibold">
                          <CheckCircle size={17} className="text-primary-dark flex-shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* After Bullets Text */}
                  {section.afterBullets && (
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                      {section.afterBullets}
                    </p>
                  )}

                  {/* Highlight Callout Box (e.g. ACOG / ASRM) */}
                  {section.highlight && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#D9EAFD] to-white border border-[#BCCCDC] flex items-start gap-3 shadow-xs">
                      <Sparkles className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-bold text-primary-dark leading-relaxed">
                        {section.highlight}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Doctor Bio Card at Bottom */}
            <div className="mt-10 p-6 rounded-3xl bg-gradient-to-br from-[#071952] to-[#1A3D54] text-white flex flex-col sm:flex-row items-center gap-6 shadow-md">
              <img
                src={aboutDoctorImg}
                alt="Dr. Ahmed Gamal"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#FCB7C7] flex-shrink-0 shadow-md"
              />
              <div className="space-y-2 text-center sm:text-start flex-grow">
                <span className="text-xs font-extrabold text-[#FCB7C7]">
                  {isAr ? 'إشراف ومراجعة طبية' : 'Medical Reviewer & Consultant'}
                </span>
                <h4 className="text-lg font-bold font-cairo">
                  {isAr ? 'د. أحمد جمال النجار' : 'Dr. Ahmed Gamal'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                  {isAr 
                    ? 'استشاري ومدرس أمراض النساء والتوليد بكلية الطب جامعة عين شمس، استشاري المناظير الجراحية والحقن المجهري بجامعة برمنجهام بانجلترا.'
                    : 'Consultant & Lecturer of Ob/Gyn at Ain Shams University, Surgical Laparoscopy & IVF Consultant.'}
                </p>
              </div>
              <a
                href="https://wa.me/201044551331"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-xs flex-shrink-0 shadow transition-all duration-200"
              >
                {isAr ? 'احجزي استشارة' : 'Book Consultation'}
              </a>
            </div>

          </article>

          {/* Sidebar (4 cols on desktop) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Table of Contents Box */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 text-[#071952]">
                <ListChecks size={18} className="text-primary-dark" />
                <h3 className="text-base font-bold font-cairo">
                  {isAr ? 'محتويات المقال' : 'Table of Contents'}
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
                {article.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="block p-2 rounded-xl text-gray-700 hover:text-primary-dark hover:bg-brand-bg transition-colors line-clamp-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Direct Booking Card */}
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                <div className="bg-brand-bg/60 p-4 rounded-2xl border border-secondary/30 text-center">
                  <h4 className="text-sm font-bold text-primary-dark font-cairo mb-1">
                    {isAr ? 'هل لديكِ استشارة خاصة؟' : 'Need Private Medical Advice?'}
                  </h4>
                  <p className="text-xs text-gray-600 mb-4">
                    {isAr ? 'تواصلي مع عيادة د. أحمد جمال للاستفسار أو حجز موعد كشف.' : 'Contact Dr. Ahmed Gamal’s clinic for consultations.'}
                  </p>
                  <a
                    href="https://wa.me/201044551331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-xs shadow-sm transition-all"
                  >
                    <MessageCircle size={15} />
                    <span>01044551331</span>
                  </a>
                </div>
              </div>

            </div>

          </aside>

        </div>

        {/* 4. Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 font-cairo">
                  {isAr ? 'مقالات طبية ذات صلة' : 'Related Medical Articles'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                  {isAr ? 'مقالات إضافية قد تهمكِ في نفس التخصص' : 'More clinical guides in this medical domain'}
                </p>
              </div>

              <Link
                to="/articles"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-dark hover:underline"
              >
                <span>{isAr ? 'عرض الكل' : 'View All'}</span>
                <ArrowIcon size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/articles/${rel.id}`}
                  className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-secondary transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-brand-bg text-primary-dark font-extrabold inline-block">
                      {isAr ? rel.categoryNameAR : rel.categoryNameEN}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 font-cairo group-hover:text-primary-dark transition-colors line-clamp-2">
                      {isAr ? rel.title : rel.titleEN}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {isAr ? rel.summary : rel.summaryEN}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary-dark">
                    <span>{isAr ? 'قراءة المقال' : 'Read Article'}</span>
                    <ArrowIcon size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </motion.div>
  );
}
