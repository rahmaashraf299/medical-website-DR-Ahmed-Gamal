import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DueDateCalculator() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!date) return;

    const lmpDate = new Date(date);
    
    // Expected Due Date = LMP + 280 days
    const dueDate = new Date(lmpDate);
    dueDate.setDate(lmpDate.getDate() + 280);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalDuration = today - lmpDate;
    const totalDaysGestation = Math.floor(totalDuration / (1000 * 60 * 60 * 24));

    if (totalDaysGestation < 0) {
      alert(isArabic ? 'الرجاء اختيار تاريخ في الماضي.' : 'Please pick a past date.');
      return;
    }

    const currentWeeks = Math.floor(totalDaysGestation / 7);

    // Trimester Identification
    let trimester = 1;
    let percentage = 0;
    if (currentWeeks <= 12) {
      trimester = 1;
      percentage = Math.min((currentWeeks / 12) * 100, 100);
    } else if (currentWeeks > 12 && currentWeeks <= 26) {
      trimester = 2;
      percentage = Math.min(((currentWeeks - 12) / 14) * 100, 100);
    } else {
      trimester = 3;
      percentage = Math.min(((currentWeeks - 26) / 14) * 100, 100);
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDue = dueDate.toLocaleDateString(isArabic ? 'ar-EG-u-nu-latn' : 'en-US', options);

    // Remaining Days
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setResult({
      dueDate: formattedDue,
      currentWeeks,
      trimester,
      trimesterPercent: Math.round(percentage),
      remainingDays: diffDays > 0 ? diffDays : 0,
      isPassed: diffDays <= 0
    });
  };

  const whatsappText = result 
    ? encodeURIComponent(
        isArabic
          ? `مرحباً دكتور أحمد، قمت بحساب موعد ولادتي والنتيجة هي: ${result.dueDate}، وأنا حالياً في الأسبوع ${result.currentWeeks}`
          : `Hello Dr. Ahmed, I calculated my due date: ${result.dueDate}, and I am currently in Week ${result.currentWeeks}`
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
          <Heart className="w-10 h-10 text-primary-dark mx-auto mb-3" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 font-cairo">
            {isArabic ? 'حاسبة الحمل والولادة' : 'Pregnancy & Due Date Calculator'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-650 max-w-lg mx-auto mt-2 leading-relaxed">
            {isArabic 
              ? 'احسبي موعد الولادة المتوقع وعمر الحمل الحالي وتعرفي على تفاصيل ونسب تقدم كل تريميستر.'
              : 'Calculate your estimated due date, see your progress, and view information on each pregnancy trimester.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCalculate} className="p-6 sm:p-8 space-y-6">
          <div className="max-w-md mx-auto space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-gray-900 text-center sm:text-start">
              {isArabic ? 'تاريخ أول يوم لآخر دورة شهرية:' : 'First day of last period:'}
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark text-sm bg-[#F8FAFC]"
            />
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md"
            >
              {isArabic ? 'احسبي الآن' : 'Calculate Now'}
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
                  {isArabic ? 'تاريخ الولادة المتوقع' : 'Expected Due Date'}
                </span>

                <div className="text-xl sm:text-3xl font-bold text-primary-dark font-cairo py-1">
                  {result.dueDate}
                </div>

                {!result.isPassed ? (
                  <p className="text-xs sm:text-sm text-gray-650 font-bold">
                    {isArabic 
                      ? `متبقي على ولادتكِ السعيدة حوالي: ${result.remainingDays} يوماً إن شاء الله.`
                      : `Approximately ${result.remainingDays} days remaining until your delivery date.`}
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm text-primary-dark font-bold">
                    {isArabic ? 'تجاوزتِ الموعد المتوقع للولادة!' : 'You have passed the expected due date!'}
                  </p>
                )}

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Trimester visual progress bar */}
                <div className="space-y-3 max-w-md mx-auto text-start">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-800">
                    <span>
                      {isArabic 
                        ? `أنتِ الآن في الأسبوع ${result.currentWeeks} (${result.trimester === 1 ? 'الثلث الأول' : result.trimester === 2 ? 'الثلث الثاني' : 'الثلث الثالث'})`
                        : `Week ${result.currentWeeks} (${result.trimester === 1 ? '1st Trimester' : result.trimester === 2 ? '2nd Trimester' : '3rd Trimester'})`}
                    </span>
                    <span>{result.trimesterPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden border border-gray-200">
                    <div 
                      className="bg-[#25D366] h-full transition-all duration-500"
                      style={{ width: `${result.trimesterPercent}%` }}
                    />
                  </div>
                </div>

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Trimester Description Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-start font-semibold text-xs sm:text-sm">
                  
                  {/* Trimester 1 */}
                  <div className={`p-3 sm:p-4 rounded-xl border ${result.trimester === 1 ? 'border-primary bg-[#FCB7C7]/30' : 'border-gray-100 bg-gray-50'}`}>
                    <h4 className="font-extrabold text-gray-900 mb-1">{isArabic ? 'الثلث الأول (الأسبوع ١-١٢):' : '1st Trimester (Week 1-12):'}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-bold">
                      {isArabic 
                        ? 'مرحلة انقسام الخلايا وتكوين أعضاء الجنين. ننصح بحمض الفوليك والراحة التامة.' 
                        : 'Organogenesis stage. Folic acid intake and ample rest are highly recommended.'}
                    </p>
                  </div>

                  {/* Trimester 2 */}
                  <div className={`p-3 sm:p-4 rounded-xl border ${result.trimester === 2 ? 'border-primary bg-[#FCB7C7]/30' : 'border-gray-100 bg-gray-50'}`}>
                    <h4 className="font-extrabold text-gray-900 mb-1">{isArabic ? 'الثلث الثاني (الأسبوع ١٣-٢٦):' : '2nd Trimester (Week 13-26):'}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-bold">
                      {isArabic 
                        ? 'مرحلة نمو وتطور حركة الجنين وتلاشي الغثيان. ينصح بالحديد والكالسيوم والسونار التفصيلي.' 
                        : 'Growth phase where baby movements start. Take iron/calcium and secure anomaly scans.'}
                    </p>
                  </div>

                  {/* Trimester 3 */}
                  <div className={`p-3 sm:p-4 rounded-xl border ${result.trimester === 3 ? 'border-primary bg-[#FCB7C7]/30' : 'border-gray-100 bg-gray-50'}`}>
                    <h4 className="font-extrabold text-gray-900 mb-1">{isArabic ? 'الثلث الثالث (الأسبوع ٢٧-٤٠):' : '3rd Trimester (Week 27-40):'}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-bold">
                      {isArabic 
                        ? 'مرحلة اكتمال الرئتين والوزن والاستعداد للولادة. يوصى بمراقبة حركة الجنين.' 
                        : 'Final weight gains and lung maturity. Monitor baby kick counts regularly.'}
                    </p>
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
