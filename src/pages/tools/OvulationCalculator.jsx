import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OvulationCalculator() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  const [date, setDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!date || !cycleLength) return;

    const lmpDate = new Date(date);
    const cycle = parseInt(cycleLength);

    // Next Period Date
    const nextPeriod = new Date(lmpDate);
    nextPeriod.setDate(lmpDate.getDate() + cycle);

    // Ovulation Day
    const ovulationDay = new Date(nextPeriod);
    ovulationDay.setDate(nextPeriod.getDate() - 14);

    // Fertile Window start and end
    const fertileStart = new Date(ovulationDay);
    fertileStart.setDate(ovulationDay.getDate() - 5);

    const fertileEnd = new Date(ovulationDay);
    fertileEnd.setDate(ovulationDay.getDate() + 1);

    // Formatted Dates
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedNextPeriod = nextPeriod.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);
    const formattedOvulation = ovulationDay.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);
    const formattedFertileStart = fertileStart.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);
    const formattedFertileEnd = fertileEnd.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);

    setResult({
      nextPeriod: formattedNextPeriod,
      ovulation: formattedOvulation,
      fertileRange: isArabic 
        ? `من ${formattedFertileStart} إلى ${formattedFertileEnd}` 
        : `From ${formattedFertileStart} to ${formattedFertileEnd}`
    });
  };

  const whatsappText = result 
    ? encodeURIComponent(
        isArabic
          ? `مرحباً دكتور أحمد، قمت بحساب أيام تبويضي والنتيجة هي: الدورة القادمة في ${result.nextPeriod}، وفترة الخصوبة ${result.fertileRange}`
          : `Hello Dr. Ahmed, I calculated my fertile window: next period on ${result.nextPeriod}, fertile window ${result.fertileRange}`
      )
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="pt-28 pb-20 max-w-3xl mx-auto px-4 font-semibold"
    >
      {/* Back button */}
      <Link
        to="/services"
        className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs sm:text-sm font-extrabold text-primary-dark hover:underline bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm mb-6"
      >
        {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
        <span>{isArabic ? 'رجوع للخدمات' : 'Back to Services'}</span>
      </Link>

      <div className="bg-white rounded-3xl border border-gray-250/20 shadow-sm overflow-hidden">
        
        {/* Banner Header */}
        <div className="bg-brand-bg p-6 sm:p-8 border-b border-gray-200/50 text-center">
          <Calendar className="w-10 h-10 text-primary-dark mx-auto mb-3" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 font-cairo">
            {isArabic ? 'حاسبة الدورة الشهرية والتبويض' : 'Period & Ovulation Calculator'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-650 max-w-lg mx-auto mt-2 leading-relaxed">
            {isArabic 
              ? 'حددي موعد دورتكِ الشهرية القادمة وأيام التبويض والخصوبة المتوقعة لتخطيط أفضل لحدوث الحمل.'
              : 'Estimate your next period date and fertile window days to optimize your pregnancy planning.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCalculate} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Input 1: Last Period Date */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-gray-900">
                {isArabic ? 'تاريخ أول يوم لآخر دورة:' : 'First day of last period:'}
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark text-sm bg-[#F8FAFC]"
              />
            </div>

            {/* Input 2: Cycle length */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-gray-900">
                {isArabic ? 'متوسط طول دورتكِ (بالأيام):' : 'Average cycle length (days):'}
              </label>
              <input
                type="number"
                required
                min="21"
                max="45"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark text-sm bg-[#F8FAFC]"
              />
            </div>

          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md"
            >
              {isArabic ? 'احسبي أيام التبويض' : 'Calculate Ovulation'}
            </button>
          </div>
        </form>

        {/* Results view (Fade + Slide transition) */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 sm:p-8 bg-gray-50 border-t border-gray-100 space-y-6"
            >
              <div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-primary/30 text-center shadow-inner space-y-5">
                <span className="inline-block text-xs text-primary-dark font-extrabold tracking-wider uppercase bg-[#FCB7C7] px-3 py-1 rounded-full border border-primary">
                  {isArabic ? 'النتائج المتوقعة' : 'Calculated Results'}
                </span>

                {/* Next Period Box */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-md text-gray-500 font-bold">
                    {isArabic ? 'موعد الدورة القادمة المتوقع:' : 'Expected Next Period Date:'}
                  </h3>
                  <div className="text-base sm:text-2xl font-bold text-gray-900 font-cairo">
                    {result.nextPeriod}
                  </div>
                </div>

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Fertile window Box */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-md text-gray-500 font-bold">
                    {isArabic ? 'فترة الخصوبة المتوقعة (فرصة عالية للحمل):' : 'Expected Fertile Window (High Chance of Pregnancy):'}
                  </h3>
                  <div className="text-base sm:text-2xl font-bold text-[#25D366] font-cairo">
                    {result.fertileRange}
                  </div>
                </div>

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Peak Ovulation Day */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-md text-gray-500 font-bold">
                    {isArabic ? 'يوم التبويض المتوقع (ذروة الخصوبة):' : 'Peak Ovulation Day (Highest Fertility):'}
                  </h3>
                  <div className="text-base sm:text-2xl font-bold text-primary-dark font-cairo">
                    {result.ovulation}
                  </div>
                </div>

              </div>

              {/* Consultation trigger */}
              <div className="text-center">
                <a
                  href={`https://wa.me/201044551331?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow transition-transform duration-200 hover:scale-101 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-2.5 rtl:ml-2.5 rtl:mr-0 text-gray-950 fill-current" />
                  <span>{isArabic ? 'استشيري الدكتور بخصوص نتيجتك' : 'Consult the Doctor about your result'}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
