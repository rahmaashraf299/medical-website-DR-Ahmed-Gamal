import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IcsiCalculator() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  const [date, setDate] = useState('');
  const [procedureType, setProcedureType] = useState('day5'); // day3, day5, retrieval
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!date) return;

    const inputDate = new Date(date);
    let dueDaysOffset = 261; // Default for Day 5 blastocyst transfer (280 - 19)

    if (procedureType === 'day3') {
      dueDaysOffset = 263; // Day 3 transfer (280 - 17)
    } else if (procedureType === 'retrieval') {
      dueDaysOffset = 266; // Egg retrieval (280 - 14)
    }

    // Expected Due Date
    const dueDate = new Date(inputDate);
    dueDate.setDate(inputDate.getDate() + dueDaysOffset);

    // Remaining Days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Formatted Dates
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDue = dueDate.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);

    setResult({
      dueDate: formattedDue,
      rawDueDate: dueDate.toISOString().split('T')[0],
      remainingDays: diffDays > 0 ? diffDays : 0,
      isPassed: diffDays <= 0
    });
  };

  const whatsappText = result 
    ? encodeURIComponent(
        isArabic
          ? `مرحباً دكتور أحمد، قمت بحساب موعد ولادتي للحقن المجهري والنتيجة هي: ${result.dueDate}`
          : `Hello Dr. Ahmed, I calculated my IVF/ICSI due date and the result is: ${result.dueDate}`
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
            {isArabic ? 'حاسبة موعد الولادة للحقن المجهري' : 'IVF / ICSI Due Date Calculator'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mt-2 leading-relaxed">
            {isArabic 
              ? 'حاسبة مخصصة لحالات الحقن المجهري وأطفال الأنابيب لحساب موعد الولادة المتوقع بناءً على تاريخ نقل الأجنة بدقة.'
              : 'A dedicated calculator designed to precisely determine the expected due date for pregnancies conceived via IVF or ICSI.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCalculate} className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Input 1: Selection */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-gray-900">
                {isArabic ? 'نوع الإجراء:' : 'Procedure Type:'}
              </label>
              <select
                value={procedureType}
                onChange={(e) => setProcedureType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark text-sm bg-[#F8FAFC]"
              >
                <option value="day5">{isArabic ? 'نقل جنين يوم 5 (بلادستوسيت)' : 'Day 5 Blastocyst Transfer'}</option>
                <option value="day3">{isArabic ? 'نقل جنين يوم 3' : 'Day 3 Embryo Transfer'}</option>
                <option value="retrieval">{isArabic ? 'تاريخ سحب البويضات' : 'Egg Retrieval Date'}</option>
              </select>
            </div>

            {/* Input 2: Date Picker */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-bold text-gray-900">
                {isArabic ? 'تاريخ الإجراء:' : 'Procedure Date:'}
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
              {isArabic ? 'احسبي موعد الولادة' : 'Calculate Due Date'}
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
              <div className="bg-white rounded-2xl p-3.5 sm:p-6 border border-primary/30 text-center shadow-inner space-y-4">
                <span className="inline-block text-xs text-primary-dark font-extrabold tracking-wider uppercase bg-[#FCB7C7] px-3 py-1 rounded-full border border-primary">
                  {isArabic ? 'النتيجة المتوقعة' : 'Calculated Result'}
                </span>
                
                <h3 className="text-sm sm:text-xl font-extrabold text-gray-900 font-cairo">
                  {isArabic ? 'موعد الولادة المتوقع هو:' : 'Your Expected Due Date is:'}
                </h3>
                
                <div className="text-xl sm:text-3xl font-bold text-primary-dark font-cairo py-1">
                  {result.dueDate}
                </div>

                {!result.isPassed ? (
                  <p className="text-xs sm:text-sm text-gray-600 font-bold">
                    {isArabic 
                      ? `متبقي على ولادتكِ السعيدة حوالي: ${result.remainingDays} يوماً إن شاء الله.`
                      : `Approximately ${result.remainingDays} days remaining until your delivery date.`}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-primary-dark font-bold">
                    {isArabic ? 'تجاوزتِ الموعد المتوقع للولادة!' : 'You have passed the expected due date!'}
                  </p>
                )}
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
