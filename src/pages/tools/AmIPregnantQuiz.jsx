import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AmIPregnantQuiz() {
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      titleAR: '١. ما هي حالة الدورة الشهرية الحالية لديكِ؟',
      titleEN: '1. What is your current menstrual period status?',
      options: [
        { textAR: 'متأخرة عن موعدها المعتاد ببضعة أيام أو أكثر', textEN: 'Delayed by a few days or more past its due date', points: 3 },
        { textAR: 'نزلت خفيفة جداً، قصيرة أو بلون مختلف ومغاير للمعتاد', textEN: 'Very light, short, or had an unusual color', points: 1.5 },
        { textAR: 'منتظمة وفي موعدها الطبيعي تماماً', textEN: 'On time and normal as usual', points: 0 }
      ]
    },
    {
      titleAR: '٢. هل تشعرين بغثيان صباحي أو دوار؟',
      titleEN: '2. Are you experiencing morning sickness or dizziness?',
      options: [
        { textAR: 'نعم، أشعر بغثيان قوي وخاصة في الصباح وقد يصاحبه تقيؤ', textEN: 'Yes, severe nausea, especially in the morning, sometimes with vomiting', points: 3 },
        { textAR: 'غثيان خفيف جداً أو نفور مفاجئ من بعض الروائح المعتادة', textEN: 'Mild nausea or sudden aversion to certain familiar smells', points: 1.5 },
        { textAR: 'لا أشعر بأي غثيان أو دوار نهائياً', textEN: 'No nausea or dizziness at all', points: 0 }
      ]
    },
    {
      titleAR: '٣. هل لاحظتِ أي تغيرات في الثدي؟',
      titleEN: '3. Have you noticed any changes in your breasts?',
      options: [
        { textAR: 'نعم، انتفاخ ملحوظ، آلام عند اللمس، أو ثقل وحساسية زائدة', textEN: 'Yes, noticeable swelling, tenderness, or high sensitivity to touch', points: 2 },
        { textAR: 'تغيرات خفيفة جداً أو آلام عابرة تزول وتعود', textEN: 'Very minor changes or fleeting aches that come and go', points: 1 },
        { textAR: 'لا توجد أي آلام أو تغيرات مطلقاً', textEN: 'No changes or pain at all', points: 0 }
      ]
    },
    {
      titleAR: '٤. كيف تشعرين بمستويات الطاقة والتعب العام؟',
      titleEN: '4. How would you describe your overall fatigue and energy?',
      options: [
        { textAR: 'أشعر بخمول شديد وتعب غير مبرر ورغبة مستمرة في النوم', textEN: 'Severe, unexplained exhaustion and a constant urge to sleep', points: 2 },
        { textAR: 'طاقتي ونشاطي اليومي في مستواهما الطبيعي المعتاد', textEN: 'My energy and activity are normal as usual', points: 0 }
      ]
    },
    {
      titleAR: '٥. هل تلاحظين زيادة في معدل دخول المرحاض؟',
      titleEN: '5. Have you noticed a change in urination frequency?',
      options: [
        { textAR: 'نعم، زادت الرغبة في التبول ومعدل دخول المرحاض بشكل ملحوظ', textEN: 'Yes, a noticeable increase in frequency and urge to urinate', points: 1.5 },
        { textAR: 'لا، المعدل طبيعي ومستقر كالمعتاد', textEN: 'No, frequency is normal as usual', points: 0 }
      ]
    },
    {
      titleAR: '٦. هل تعانين من تقلبات مزاجية سريعة أو وحام؟',
      titleEN: '6. Are you having sudden mood swings or specific cravings?',
      options: [
        { textAR: 'نعم، تقلبات مزاجية سريعة ونفور من بعض الأطعمة أو اشتهاء لغيرها', textEN: 'Yes, fast mood shifts and food cravings or strong aversions', points: 1.5 },
        { textAR: 'لا، حالتي المزاجية والغذائية مستقرة وهادئة', textEN: 'No, mood and dietary appetite are stable', points: 0 }
      ]
    },
    {
      titleAR: '٧. هل شعرتِ بمغص أسفل البطن أو نزول قطرات دم خفيفة؟',
      titleEN: '7. Have you had mild pelvic cramping or light spotting?',
      options: [
        { textAR: 'نعم، حدث مغص خفيف جداً مع قطرات دم وردية أو بنية خفيفة', textEN: 'Yes, mild cramping with light pink or brownish spotting', points: 1.5 },
        { textAR: 'لا، لم يحدث أي مغص أو تنقيط', textEN: 'No cramping or spotting at all', points: 0 }
      ]
    }
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newScore = score + selectedOption.points;
    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedOption(null);
  };

  // Get result evaluation
  const getEvaluation = () => {
    if (score >= 9) {
      return {
        level: isArabic ? 'احتمالية حمل مرتفعة جداً!' : 'Highly Likely!',
        color: 'text-[#25D366] border-[#25D366]',
        bg: 'bg-[#25D366]/5',
        desc: isArabic 
          ? 'الأعراض التي تشعرين بها مطابقة جداً لأعراض الحمل المبكرة. ننصحكِ بإجراء اختبار حمل منزلي عن طريق البول، أو فحص حمل رقمي بالدم (BHCG) لضمان الدقة وتأكيد النتيجة، مع مراجعة الطبيب.'
          : 'Your symptoms match early pregnancy indicators closely. We highly recommend taking a home urine test or a quantitative blood test (BHCG) to confirm, and consulting your doctor.',
        whatsAppLabel: isArabic ? 'احتمالية مرتفعة' : 'High Probability'
      };
    } else if (score >= 4.5 && score < 9) {
      return {
        level: isArabic ? 'احتمالية حمل متوسطة' : 'Moderate Chance',
        color: 'text-amber-500 border-amber-500',
        bg: 'bg-amber-500/5',
        desc: isArabic 
          ? 'الأعراض قد تكون علامة مبكرة على الحمل أو نتيجة لتغيرات هرمونية عادية تسبق الدورة الشهرية. ننصحكِ بالانتظار بضعة أيام وإجراء اختبار حمل منزلي للاطمئنان.'
          : 'Your symptoms could indicate early pregnancy or simply premenstrual hormonal fluctuations. We suggest waiting a few days and taking a home pregnancy test.',
        whatsAppLabel: isArabic ? 'احتمالية متوسطة' : 'Medium Probability'
      };
    } else {
      return {
        level: isArabic ? 'احتمالية حمل منخفضة' : 'Low Chance',
        color: 'text-primary-dark border-primary-dark',
        bg: 'bg-[#FCB7C7]/10',
        desc: isArabic 
          ? 'احتمالية الحمل بناءً على هذه الأعراض منخفضة. قد تكون هذه الأعراض عارضة بسبب الإرهاق أو اقتراب موعد الدورة. يمكنكِ إجراء فحص الحمل إذا تأخرت دورتكِ لأكثر من أسبوع.'
          : 'Based on these symptoms, pregnancy is less likely. These signs might be due to stress, fatigue, or your upcoming cycle. You can take a test if your period is delayed by over a week.',
        whatsAppLabel: isArabic ? 'احتمالية منخفضة' : 'Low Probability'
      };
    }
  };

  const evaluation = quizFinished ? getEvaluation() : null;
  
  const whatsappText = evaluation 
    ? encodeURIComponent(
        isArabic
          ? `مرحباً دكتور أحمد، قمت بعمل اختبار احتمالية الحمل والنتيجة كانت: ${evaluation.level}، وأود استشارتكم.`
          : `Hello Dr. Ahmed, I took the pregnancy symptoms quiz and the result was: ${evaluation.level}. I would like to consult you.`
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
          <ClipboardCheck className="w-10 h-10 text-primary-dark mx-auto mb-3" />
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 font-cairo">
            {isArabic ? 'هل أنا حامل؟ اكتشفي الآن' : 'Am I Pregnant? Symptom Quiz'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-650 max-w-lg mx-auto mt-2 leading-relaxed">
            {isArabic 
              ? 'اختبار تفاعلي مبسط يعتمد على تقييم أعراض الحمل المبكرة وتأخر الدورة الشهرية لتقديم تقدير أولي.'
              : 'An interactive quiz evaluating early pregnancy symptoms and period delay to provide a baseline estimation.'}
          </p>
        </div>

        {/* Wizard questions body */}
        <div className="p-4 sm:p-10 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!quizFinished ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isArabic ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-grow"
              >
                {/* Progress bar */}
                <div className="flex justify-between items-center text-xs text-gray-400 font-extrabold">
                  <span>{isArabic ? `السؤال ${currentQuestion + 1} من ${questions.length}` : `Question ${currentQuestion + 1} of ${questions.length}`}</span>
                  <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question title */}
                <h2 className="text-md sm:text-lg font-extrabold text-gray-900 font-cairo">
                  {isArabic ? questions[currentQuestion].titleAR : questions[currentQuestion].titleEN}
                </h2>

                {/* Options List */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((opt, optIdx) => {
                    const isSelected = selectedOption === opt;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(opt)}
                        className={`w-full text-right rtl:text-right ltr:text-left p-4 rounded-xl border font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-primary bg-[#FCB7C7] text-gray-950 scale-[1.01] shadow-sm'
                            : 'border-gray-250/20 bg-[#F8FAFC] text-gray-700 hover:bg-brand-bg/40'
                        }`}
                      >
                        <span>{isArabic ? opt.textAR : opt.textEN}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-dark ml-2 rtl:mr-2 rtl:ml-0 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Next button */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`inline-flex items-center px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm shadow cursor-pointer transition-all ${
                      selectedOption !== null
                        ? 'bg-primary hover:bg-[#fb9fae] text-gray-950 hover:scale-103'
                        : 'bg-gray-150 text-gray-400 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <span>{isArabic ? 'السؤال التالي' : 'Next Question'}</span>
                    {isArabic ? <ArrowLeft className="w-4 h-4 mr-1.5" /> : <ArrowRight className="w-4 h-4 ml-1.5" />}
                  </button>
                </div>
              </motion.div>
            ) : (
              // Quiz Finished screen
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center py-6"
              >
                <div className="w-16 h-16 bg-brand-bg text-secondary border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <ClipboardCheck className="w-8 h-8" />
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-gray-900 font-cairo">
                  {isArabic ? 'نتيجة الفحص التقديري للأعراض:' : 'Your Symptoms Evaluation Result:'}
                </h2>

                <div className={`inline-block border-2 px-6 py-3 rounded-full text-lg sm:text-xl font-black font-cairo uppercase ${evaluation.color} ${evaluation.bg}`}>
                  {evaluation.level}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-bold max-w-xl mx-auto p-3.5 sm:p-4 bg-gray-50 border border-gray-150 rounded-2xl shadow-inner">
                  {evaluation.desc}
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* WhatsApp consultation */}
                  <a
                    href={`https://wa.me/201044551331?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-[#fb9fae] text-gray-950 font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow cursor-pointer transition-transform hover:scale-102"
                  >
                    <MessageCircle className="w-5 h-5 mr-2.5 rtl:ml-2.5 rtl:mr-0 text-gray-950 fill-current" />
                    <span>{isArabic ? 'استشيري الدكتور بخصوص نتيجتك' : 'Consult the Doctor about your result'}</span>
                  </a>

                  {/* Restart Quiz */}
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center border border-primary-dark text-primary-dark bg-white hover:bg-primary/5 font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-sm cursor-pointer transition-colors"
                  >
                    {isArabic ? 'أعيدي الفحص' : 'Retake Quiz'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
