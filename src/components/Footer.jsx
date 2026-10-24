import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, MessageCircle, Calendar, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { Facebook, Instagram, TikTok } from './BrandIcons';
import logoImg from '../assets/images/logo.png';

export default function Footer() {
  const { locale, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isArabic = locale === 'ar';

  // Social URLs
  const socialLinks = {
    facebook: 'https://www.facebook.com/share/1GMcjJQh4Z/',
    instagram: 'https://www.instagram.com/drahmedgamal0',
    tiktok: 'https://www.tiktok.com/@dr.ahmedgamalelnajar',
  };

  const whatsappLink = "https://wa.me/201044551331";

  // Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Arrow = isArabic ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-brand-bg border-t border-secondary/40 text-gray-800 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />

      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Dr. Info & Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={logoImg}
                alt="Dr. Ahmed Gamal Logo"
                className="h-14 sm:h-16 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary-dark font-cairo group-hover:text-primary-dark/80 transition-colors">
                  {t('hero.name')}
                </h3>
                <span className="text-xs font-bold text-gray-600 block">
                  {isArabic ? 'عيادات النساء والتوليد والحقن المجهري' : 'OB-GYN & Fertility Clinics'}
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-700 leading-relaxed font-semibold">
              {isArabic 
                ? 'استشاري أمراض النساء والتوليد والحمل الحرج، متخصص في تأخر الإنجاب والحقن المجهري وجراحات المناظير النسائية المتقدمة بجامعة عين شمس.'
                : t('hero.title')}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-primary-dark shadow-xs hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-primary-dark shadow-xs hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-primary-dark shadow-xs hover:bg-black hover:text-white hover:border-black hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="TikTok"
              >
                <TikTok size={18} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-[#25D366] shadow-xs hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-extrabold text-gray-900 border-b border-primary/40 pb-2 flex items-center gap-1.5">
              <span>{isArabic ? 'روابط سريعة' : 'Quick Links'}</span>
            </h4>
            <ul className="space-y-2.5 font-bold text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.services')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/clinics"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.clinics')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.articles')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/videos"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.videos')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={14} className="text-primary-dark/60" />
                  <span>{t('nav.contact')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pregnancy Tools & Calculators (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-extrabold text-gray-900 border-b border-primary/40 pb-2 flex items-center gap-1.5">
              <span>{isArabic ? 'أدوات الحمل' : 'Pregnancy Tools'}</span>
            </h4>
            <ul className="space-y-2.5 font-bold text-xs sm:text-sm">
              <li>
                <Link
                  to="/tools/due-date-calculator"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={13} className="text-primary-dark/60" />
                  <span>{isArabic ? 'حاسبة موعد الولادة' : 'Due Date Calculator'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/ovulation-calculator"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={13} className="text-primary-dark/60" />
                  <span>{isArabic ? 'حاسبة التبويض' : 'Ovulation Calculator'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/pregnancy-weeks-calculator"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={13} className="text-primary-dark/60" />
                  <span>{isArabic ? 'أسابيع الحمل والنمو' : 'Pregnancy Weeks'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/am-i-pregnant"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={13} className="text-primary-dark/60" />
                  <span>{isArabic ? 'اختبار هل أنا حامل؟' : 'Am I Pregnant?'}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/icsi-due-date-calculator"
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-primary-dark hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <Arrow size={13} className="text-primary-dark/60" />
                  <span>{isArabic ? 'حاسبة الحقن المجهري' : 'ICSI Due Date'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Clinics (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-extrabold text-gray-900 border-b border-primary/40 pb-2">
              {isArabic ? 'الحجز والاستفسار' : 'Booking & Contact'}
            </h4>
            <div className="space-y-3 font-semibold text-xs sm:text-sm">
              <a
                href="https://wa.me/201044551331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary-dark transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200/60 flex items-center justify-center mr-2.5 rtl:ml-2.5 rtl:mr-0 flex-shrink-0 group-hover:border-[#25D366]">
                  <MessageCircle size={16} className="text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block">{isArabic ? 'فرع التجمع الخامس (واتساب)' : 'New Cairo Branch'}</span>
                  <span className="font-extrabold text-gray-900 text-sm dir-ltr">01044551331</span>
                </div>
              </a>

              <a
                href="tel:01229997680"
                className="flex items-center text-gray-700 hover:text-primary-dark transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200/60 flex items-center justify-center mr-2.5 rtl:ml-2.5 rtl:mr-0 flex-shrink-0 group-hover:border-primary">
                  <Phone size={16} className="text-primary-dark" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block">{isArabic ? 'فرع مدينة نصر (اتصال)' : 'Nasr City Branch'}</span>
                  <span className="font-extrabold text-gray-900 text-sm dir-ltr">01229997680</span>
                </div>
              </a>

              <a
                href="tel:01272222090"
                className="flex items-center text-gray-700 hover:text-primary-dark transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200/60 flex items-center justify-center mr-2.5 rtl:ml-2.5 rtl:mr-0 flex-shrink-0 group-hover:border-primary">
                  <Phone size={16} className="text-primary-dark" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block">{isArabic ? 'فرع مصر الجديدة (اتصال)' : 'Heliopolis Branch'}</span>
                  <span className="font-extrabold text-gray-900 text-sm dir-ltr">01272222090</span>
                </div>
              </a>

              {/* Book Appointment CTA Button with Pink/Mauve Gradient */}
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-extrabold text-white btn-gradient-hover shadow-xs cursor-pointer"
                >
                  <Calendar size={14} className="text-white" />
                  <span>{isArabic ? 'احجز موعد كشف الآن' : 'Book Appointment'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-white/60 backdrop-blur-xs py-4 text-center text-xs text-gray-700 font-bold border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            {t('common.allRightsReserved')} {currentYear}
          </div>
          <div className="text-gray-500 font-semibold">
            {t('common.developedBy')}
          </div>
        </div>
      </div>
    </footer>
  );
}
