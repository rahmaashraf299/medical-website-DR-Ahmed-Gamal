import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PregnancyWeeksCalculator() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!date) return;

    const lmpDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = today - lmpDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      alert(isArabic ? 'الرجاء اختيار تاريخ في الماضي.' : 'Please pick a past date.');
      return;
    }

    const weeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;

    // Gestational month mapping
    let month = 1;
    if (weeks >= 4 && weeks < 8) month = 2;
    else if (weeks >= 8 && weeks < 12) month = 3;
    else if (weeks >= 12 && weeks < 16) month = 4;
    else if (weeks >= 16 && weeks < 20) month = 5;
    else if (weeks >= 20 && weeks < 24) month = 6;
    else if (weeks >= 24 && weeks < 28) month = 7;
    else if (weeks >= 28 && weeks < 32) month = 8;
    else if (weeks >= 32) month = 9;

    // Trimester advice
    let adviceAR = '';
    let adviceEN = '';

    if (weeks <= 12) {
      adviceAR = 'أنتِ الآن في الثلث الأول من الحمل. ننصحكِ بالاستمرار في تناول حمض الفوليك بانتظام، وأخذ قسط كافٍ من الراحة، والابتعاد تماماً عن الأدوية دون استشارة طبية. الغثيان والتعب أمران طبيعيان في هذه المرحلة.';
      adviceEN = 'You are in the first trimester of pregnancy. Ensure you take your folic acid regularly, secure plenty of rest, and avoid self-medicating. Morning sickness and mild fatigue are completely normal at this stage.';
    } else if (weeks > 12 && weeks <= 26) {
      adviceAR = 'أنتِ الآن في الثلث الثاني من الحمل (أشهر الحمل المريحة). سيبدأ الغثيان في الاختفاء وستشعرين باستعادة نشاطكِ. التزمي بتناول مكملات الحديد والكالسيوم بعد استشارة الطبيب، واهتمي بالتغذية الصحية والبروتين.';
      adviceEN = 'You are in the second trimester (the golden months). Nausea usually fades, and your energy returns. Incorporate iron and calcium supplements, and focus on a protein-rich, balanced diet.';
    } else {
      adviceAR = 'أنتِ الآن في الثلث الأخير من الحمل. موعد اللقاء السعيد يقترب! ننصحكِ بمتابعة حركة الجنين يومياً (على الأقل 10 حركات واضحة)، وتجهيز حقيبة الولادة الخاصة بكِ، والاتصال فوراً بالطبيب في حال حدوث طلق أو نزول مياه.';
      adviceEN = 'You are in the third trimester. Your baby is almost here! Monitor fetal movement daily (at least 10 active kicks), pack your hospital bag, and contact your doctor immediately if contractions or fluid leaks start.';
    }

    setResult({
      weeks,
      days: remainingDays,
      month,
      advice: isArabic ? adviceAR : adviceEN
    });
  };

  const monthWordsAR = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع'];
  const monthWordsEN = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

  const getMonthText = (m) => {
    return isArabic 
      ? `الشهر ${monthWordsAR[m - 1]}` 
      : `${monthWordsEN[m - 1]} Month`;
  };

  const whatsappText = result 
    ? encodeURIComponent(
        isArabic
          ? `مرحباً دكتور أحمد، قمت بحساب عمر حملي والنتيجة هي: الأسبوع ${result.weeks} واليوم ${result.days} (${getMonthText(result.month)})`
          : `Hello Dr. Ahmed, I calculated my pregnancy weeks: Week ${result.weeks}, Day ${result.days} (${getMonthText(result.month)})`
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
            {isArabic ? 'حاسبة الحمل بالأسابيع والأشهر' : 'Pregnancy Weeks & Months Calculator'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-650 max-w-lg mx-auto mt-2 leading-relaxed">
            {isArabic 
              ? 'ادخلي تاريخ آخر دورة شهرية لحساب عمر الحمل الحالي بالتفصيل بالأسابيع والأيام والأشهر.'
              : 'Enter the start date of your last period to calculate your current gestational age in weeks, days, and months.'}
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
              {isArabic ? 'احسبي عمر الحمل' : 'Calculate Gestational Age'}
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
                  {isArabic ? 'عمر الحمل الحالي' : 'Current Gestational Age'}
                </span>

                {/* Progress statement */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-md text-gray-500 font-bold">
                    {isArabic ? 'أنتِ الآن في الأسبوع:' : 'You are currently in:'}
                  </h3>
                  <div className="text-xl sm:text-3xl font-bold text-primary-dark font-cairo">
                    {isArabic 
                      ? `الأسبوع ${result.weeks} واليوم ${result.days}` 
                      : `Week ${result.weeks}, Day ${result.days}`}
                  </div>
                </div>

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Month statement */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-md text-gray-500 font-bold">
                    {isArabic ? 'الحمل في الشهر:' : 'Pregnancy Month:'}
                  </h3>
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 font-cairo">
                    {getMonthText(result.month)}
                  </div>
                </div>

                <hr className="border-gray-100 max-w-xs mx-auto" />

                {/* Clinical advice */}
                <div className="space-y-2 text-start max-w-xl mx-auto bg-brand-bg/40 p-3.5 rounded-xl border border-secondary/30">
                  <h4 className="font-extrabold text-xs sm:text-base text-gray-900">
                    {isArabic ? '💡 نصيحة الطبيب لكِ في هذه المرحلة:' : '💡 Doctor\'s Advice for this stage:'}
                  </h4>
                  <p className="text-[11px] sm:text-sm text-gray-700 leading-relaxed font-semibold">
                    {result.advice}
                  </p>
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
