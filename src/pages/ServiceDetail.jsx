import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, CATEGORIES } from '../data/servicesData';
import { SERVICE_IMAGES, getServiceImage, fallbackRoutinePreg } from '../data/serviceImages';


export default function ServiceDetail() {
  const { serviceId } = useParams();
  const { locale } = useLanguage();

  const isArabic = locale === 'ar';
  const whatsappLink = "https://wa.me/201044551331";

  // Find target service
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  // If service is not valid
  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 font-cairo">
          {isArabic ? 'عذراً، هذه الخدمة غير متوفرة.' : 'Sorry, this service could not be found.'}
        </h2>
        <Link
          to="/services"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-primary-dark hover:bg-primary-dark/95 shadow"
        >
          {isArabic ? 'العودة لصفحة الخدمات' : 'Go back to Services'}
        </Link>
      </div>
    );
  }

  const title = isArabic ? service.nameAR : service.nameEN;
  const axesList = isArabic ? service.axes.ar : service.axes.en;
  const coverImageUrl = getServiceImage(service.id);

  // Get other services for sidebar, filtering current service out
  const otherServices = SERVICES_DATA.filter(s => s.id !== serviceId).slice(0, 6);

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden bg-[#F8FAFC] min-h-screen"
    >
      
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-br from-primary-dark to-[#733c3c] text-white pt-32 sm:pt-40 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#C0E1D2]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 space-y-4 z-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-cairo tracking-tight">
            {title}
          </h1>
          <div className="w-16 h-1 bg-[#FCB7C7] mx-auto rounded-full" />
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            {isArabic ? service.briefAR : service.briefEN}
          </p>
        </div>
      </section>

      {/* 2. Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Content Column (First in DOM: renders on the left in LTR, on the right in RTL) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Back to all services */}
            <div className="flex justify-start">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-extrabold text-primary-dark hover:underline bg-white border border-gray-200 px-4 py-2.5 rounded-full shadow-sm"
              >
                {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{isArabic ? 'رجوع لكل الخدمات' : 'Back to All Services'}</span>
              </Link>
            </div>

            {/* Service Cover Image */}
            <div className="w-full h-64 sm:h-[400px] rounded-3xl overflow-hidden shadow-md border border-gray-200/50 relative bg-gradient-to-br from-brand-bg/80 via-white to-brand-bg/40">
              <img 
                src={coverImageUrl} 
                alt={title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackRoutinePreg;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dynamic Content Sections */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/60 shadow-sm space-y-10">
              {axesList.map((axis, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-cairo">
                    {axis.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#FCB7C7]/60 rounded-full" />
                  <p className="text-gray-750 text-sm sm:text-base leading-relaxed font-bold whitespace-pre-line bg-gray-50/30 p-4 rounded-xl border border-gray-100/50">
                    {axis.content}
                  </p>
                </div>
              ))}
            </div>

          </main>

          {/* Sidebar Column (Second in DOM: renders on the right in LTR, on the left in RTL) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Card 1: WhatsApp CTA */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 font-cairo">
                {isArabic ? 'تريد حجز موعد سريعاً؟' : 'Need a Quick Appointment?'}
              </h3>
              <div className="w-full h-[1px] bg-gray-100" />
              <p className="text-xs text-gray-650 leading-relaxed font-bold">
                {isArabic 
                  ? 'تواصل معنا مباشرة للحصول على رد فوري على جميع استفسارات الحجز والعلاج.' 
                  : 'Contact us directly to get an immediate response to all booking and treatment inquiries.'}
              </p>
              
              <a
                href={`${whatsappLink}?text=${encodeURIComponent(
                  isArabic 
                    ? `مرحباً دكتور أحمد، أود الاستفسار وحجز موعد بخصوص خدمة: ${service.nameAR}` 
                    : `Hello Dr. Ahmed, I would like to book an appointment for: ${service.nameEN}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-sm font-extrabold bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors cursor-pointer shadow-sm"
              >
                {/* Official WhatsApp logo SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{isArabic ? 'تواصل عبر واتساب الآن' : 'Connect via WhatsApp Now'}</span>
              </a>
            </div>

            {/* Card 2: Other Services */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 font-cairo">
                {isArabic ? 'خدمات أخرى' : 'Other Services'}
              </h3>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="flex flex-col">
                {otherServices.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="py-3 border-b border-gray-100 last:border-b-0 text-gray-700 hover:text-primary-dark transition-colors font-bold text-xs sm:text-sm text-start"
                  >
                    {isArabic ? s.nameAR : s.nameEN}
                  </Link>
                ))}
              </div>
            </div>
            
          </aside>

        </div>
      </div>
    </motion.div>
  );
}
