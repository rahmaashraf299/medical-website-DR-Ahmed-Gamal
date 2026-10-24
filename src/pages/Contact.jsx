import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Share2, 
  CheckCircle
} from 'lucide-react';
import { Facebook, Instagram, TikTok } from '../components/BrandIcons';

export default function Contact() {
  const { locale, t } = useLanguage();
  const whatsappLink = "https://wa.me/201044551331";

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
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

  // Social Links
  const socialLinks = {
    facebook: 'https://www.facebook.com/share/1GMcjJQh4Z/',
    instagram: 'https://www.instagram.com/drahmedgamal0',
    tiktok: 'https://www.tiktok.com/@dr.ahmedgamalelnajar',
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 pb-20 overflow-x-hidden bg-[#F8FAFC]"
    >
      {/* Page Header (Styled with Cream `#D9EAFD` and Rose border) */}
      <section className="bg-brand-bg py-16 text-center border-b border-primary/40 relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-cairo">
            {t('contact.title')}
          </h1>
          <p className="text-sm sm:text-md text-primary-dark font-extrabold max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Main contact panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-primary/30 space-y-8"
        >
          {/* 1. Large Direct WhatsApp Booking Card (Cream background #D9EAFD, Rose border #FCB7C7) */}
          <div className="bg-brand-bg rounded-2xl p-6 sm:p-8 border border-primary text-center space-y-4">
            <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto border border-[#25D366]/20">
              <MessageCircle size={32} className="fill-current text-[#25D366]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-cairo">
              {t('contact.whatsAppCTA')}
            </h3>
            <p className="text-sm text-gray-700 max-w-md mx-auto font-bold">
              {locale === 'ar' 
                ? 'اضغطي على الزر بالأسفل لفتح محادثة مباشرة مع السكرتارية وتحديد الموعد المناسب لزيارتكِ.'
                : 'Click the button below to open a direct chat with our reception team and schedule your visit.'}
            </p>
            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-103 cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 text-white" />
                <span>{locale === 'ar' ? 'احجز الآن عبر واتساب' : 'Book via WhatsApp Now'}</span>
              </a>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 2. Clinic Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Phone Hotlines */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-primary-dark" />
                <h4 className="font-extrabold text-gray-900 font-cairo">
                  {t('contact.generalInquiries')}
                </h4>
              </div>
              <ul className="space-y-2 pl-7 rtl:pl-0 rtl:pr-7 text-gray-700 font-bold text-sm sm:text-base">
                <li>
                  <a href="tel:01044551331" className="hover:underline hover:text-primary-dark">
                    01044551331 ({locale === 'ar' ? 'فرع التجمع الخامس' : 'Fifth Settlement Branch'})
                  </a>
                </li>
                <li>
                  <a href="tel:01229997680" className="hover:underline hover:text-primary-dark">
                    01229997680 ({locale === 'ar' ? 'فرع مدينة نصر' : 'Nasr City Branch'})
                  </a>
                </li>
                <li>
                  <a href="tel:01272222090" className="hover:underline hover:text-primary-dark">
                    01272222090 ({locale === 'ar' ? 'فرع مصر الجديدة' : 'Heliopolis Branch'})
                  </a>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Clock className="w-5 h-5 text-primary-dark" />
                <h4 className="font-extrabold text-gray-900 font-cairo">
                  {t('contact.hours')}
                </h4>
              </div>
              <p className="pl-7 rtl:pl-0 rtl:pr-7 text-xs sm:text-sm text-gray-700 leading-relaxed font-bold">
                {t('contact.hoursDesc')}
              </p>
            </div>

          </div>

          <hr className="border-gray-100" />

          {/* 3. Social Media Links */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2.5 rtl:space-x-reverse">
              <Share2 className="w-5 h-5 text-primary-dark" />
              <h4 className="font-extrabold text-gray-900 font-cairo">
                {t('contact.socials')}
              </h4>
            </div>
            
            {/* Social Icons (Accessible hover:bg-primary-dark and hover:text-white) */}
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-2">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-brand-bg border border-primary/35 flex items-center justify-center text-primary-dark shadow-sm hover:bg-primary-dark hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-brand-bg border border-primary/35 flex items-center justify-center text-primary-dark shadow-sm hover:bg-primary-dark hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-brand-bg border border-primary/35 flex items-center justify-center text-primary-dark shadow-sm hover:bg-primary-dark hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTok size={22} className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
