import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Compass } from 'lucide-react';

export default function Clinics() {
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
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const branchDetails = [
    {
      schedules: locale === 'ar' ? [
        { days: 'السبت:', hours: '2 - 5 م' },
        { days: 'الثلاثاء والخميس:', hours: '6 - 9 م' }
      ] : [
        { days: 'Saturday:', hours: '2:00 PM - 5:00 PM' },
        { days: 'Tuesday & Thursday:', hours: '6:00 PM - 9:00 PM' }
      ]
    },
    {
      schedules: locale === 'ar' ? [
        { days: 'السبت والاثنين:', hours: '6 - 9 م' },
        { days: 'الأربعاء:', hours: '3 - 6 م' }
      ] : [
        { days: 'Saturday & Monday:', hours: '6:00 PM - 9:00 PM' },
        { days: 'Wednesday:', hours: '3:00 PM - 6:00 PM' }
      ]
    },
    {
      schedules: locale === 'ar' ? [
        { days: 'الأحد والأربعاء:', hours: '6 - 9 م' }
      ] : [
        { days: 'Sunday & Wednesday:', hours: '6:00 PM - 9:00 PM' }
      ]
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 pb-20 overflow-x-hidden bg-[#F8FAFC]"
    >
      {/* Page Header */}
      <section className="bg-brand-bg py-16 text-center border-b border-primary/40 relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 space-y-3 z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-cairo">
            {t('clinics.title')}
          </h1>
          <p className="text-sm sm:text-md text-primary-dark font-extrabold max-w-2xl mx-auto">
            {t('clinics.subtitle')}
          </p>
        </div>
      </section>

      {/* Clinics Grid Layout (Matching Reference Design) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="p-6 flex flex-col space-y-5 flex-grow">
                  
                  {/* Top Details Section (Fixed Min-Height to align Maps across all cards) */}
                  <div className="space-y-4 min-h-[220px] lg:min-h-[245px] flex flex-col justify-start">
                    {/* Address Detail */}
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-gray-700 text-sm font-semibold text-right rtl:text-right ltr:text-left">
                      <MapPin className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-gray-900">{locale === 'ar' ? 'العنوان: ' : 'Address: '}</strong>
                        {clinic.address}
                      </span>
                    </div>

                    {/* Phone Call Detail */}
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-gray-700 text-sm font-semibold text-right rtl:text-right ltr:text-left">
                      <Phone className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span>
                          <strong className="text-gray-900">{locale === 'ar' ? 'اتصل للحجز: ' : 'Call for Booking: '}</strong>
                        </span>
                        <a href={`tel:${clinic.phone}`} className="hover:underline text-primary-dark font-extrabold block text-base mt-0.5">
                          {clinic.phone}
                        </a>
                      </div>
                    </div>

                    {/* Schedule Details */}
                    <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-gray-700 text-sm font-semibold text-right rtl:text-right ltr:text-left">
                      <Clock className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm font-semibold text-gray-600 space-y-1">
                        <strong className="text-gray-900 block font-bold">{locale === 'ar' ? 'المواعيد:' : 'Schedule:'}</strong>
                        {branchDetails[index]?.schedules?.map((sched, sIdx) => (
                          <div key={sIdx} className="flex flex-wrap gap-1 text-gray-800">
                            <span className="font-bold text-gray-900">{sched.days}</span>
                            <span className="font-extrabold text-primary-dark">{sched.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Embedded Google Map with Open in Maps floating link */}
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
                      className="absolute top-2 left-2 rtl:left-auto rtl:right-2 bg-white/95 backdrop-blur-sm border border-gray-200 text-[10px] sm:text-xs font-bold text-gray-800 px-2.5 py-1 rounded shadow hover:bg-white flex items-center space-x-1 rtl:space-x-reverse"
                    >
                      <span>{locale === 'ar' ? 'افتح في الخرائط' : 'Open in Maps'}</span>
                      <span className="text-[8px] sm:text-[10px]">↗</span>
                    </a>
                  </div>

                  {/* Bottom Buttons: WhatsApp & Google Maps */}
                  <div className="pt-4 border-t border-gray-100 mt-auto space-y-2">
                    <a
                      href={`https://wa.me/20${clinic.phone.replace(/^0/, '')}?text=${encodeURIComponent(
                        locale === 'ar' 
                          ? `مرحباً، أود حجز موعد في ${clinic.name}`
                          : `Hello, I would like to book an appointment at ${clinic.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      <span>{locale === 'ar' ? 'حجز واتساب للفرع' : 'Book Branch WhatsApp'}</span>
                    </a>
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-[#1A3D54] text-[#1A3D54] bg-white hover:bg-[#1A3D54]/5 font-extrabold text-sm transition-all duration-200 cursor-pointer"
                    >
                      <span>{locale === 'ar' ? 'عرض على خريطة جوجل' : 'Show on Google Maps'}</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
