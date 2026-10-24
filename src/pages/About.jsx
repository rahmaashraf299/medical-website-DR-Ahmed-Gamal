import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';
import aboutDoctorImg from '../assets/images/about doctor.JPG';

export default function About() {
  const { locale, t } = useLanguage();

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const degreesList = locale === 'ar' ? [
    'دكتوراه أمراض النساء والتوليد – كلية الطب، جامعة عين شمس.',
    'عضو هيئة التدريس بكلية الطب – جامعة عين شمس.',
    'استشاري أمراض النساء والتوليد والحمل الحرج.',
    'استشاري وخبير المناظير الجراحية واألورام النسائية – جامعة عين شمس.',
    'استشاري تأخر اإلنجاب والحقن المجهري – جامعة برمنجهام، إنجلترا.',
    'استشاري التقويم والتجميل النسائي'
  ] : [
    'MD in Obstetrics and Gynecology – Faculty of Medicine, Ain Shams University.',
    'Faculty Member – Faculty of Medicine, Ain Shams University.',
    'Consultant of Obstetrics, Gynecology, and High-Risk Pregnancy.',
    'Consultant and Expert in Surgical Endoscopy and Gynecologic Oncology – Ain Shams University.',
    'Consultant of Infertility and IVF – University of Birmingham, England.',
    'Consultant of Aesthetic and Reconstructive Gynecology'
  ];

  const degreesIcons = [
    <GraduationCap className="w-8 h-8 text-primary-dark" />,
    <Award className="w-8 h-8 text-primary-dark" />,
    <ShieldCheck className="w-8 h-8 text-primary-dark" />,
    <Activity className="w-8 h-8 text-primary-dark" />,
    <Award className="w-8 h-8 text-primary-dark" />,
    <Sparkles className="w-8 h-8 text-primary-dark" />
  ];

  const whyChooseItems = locale === 'ar' ? [
    {
      title: 'خبرة أكاديمية متخصصة',
      desc: 'عضو هيئة التدريس بكلية الطب – جامعة عين شمس، وحاصل على دكتوراه أمراض النساء والتوليد.'
    },
    {
      title: 'تخصصات متكاملة لصحة المرأة',
      desc: 'خبرة في أمراض النساء والتوليد، الحمل الحرج، المناظير الجراحية واألورام النسائية، وتأخر اإلنجاب والحقن المجهري.'
    },
    {
      title: 'خبرة في المناظير الجراحية',
      desc: 'إجراء العديد من التدخالت النسائية باستخدام المناظير الجراحية بما يساعد على تقليل التدخل الجراحي كلما كانت الحالة تسمح بذلك.'
    },
    {
      title: 'رعاية متخصصة لتأخر اإلنجاب',
      desc: 'خبرة في تشخيص وعالج أسباب تأخر الحمل واختيار الحل المناسب لكل حالة، بما في ذلك تقنيات الحقن المجهري.'
    },
    {
      title: 'متابعة دقيقة للحمل والوالدة',
      desc: 'متابعة الحمل الطبيعي والحمل الحرج ووضع خطة متابعة ووالدة تناسب الحالة الصحية لألم والجنين.'
    },
    {
      title: 'اهتمام بكل حالة بشكل فردي',
      desc: 'التشخيص والخطة العالجية يتم تحديدهما وفقًا لحالة كل مريضة واحتياجاتها، مع شرح الخيارات المتاحة قبل بدء العالج.'
    }
  ] : [
    {
      title: 'Specialized Academic Expertise',
      desc: 'Faculty member at Ain Shams University Faculty of Medicine, holder of an MD in Obstetrics and Gynecology.'
    },
    {
      title: 'Integrated Women’s Health Specialties',
      desc: 'Extensive expertise in obstetrics, gynecology, high-risk pregnancy, surgical laparoscopy, gynecologic oncology, and IVF.'
    },
    {
      title: 'Expertise in Surgical Endoscopy',
      desc: 'Performing diverse minimally invasive gynecological procedures using advanced surgical laparoscopy whenever suitable.'
    },
    {
      title: 'Specialized Fertility Care',
      desc: 'Expertise in diagnosing and treating causes of delayed conception and choosing optimal solutions including IVF technologies.'
    },
    {
      title: 'Meticulous Pregnancy & Childbirth Care',
      desc: 'Careful follow-up for normal and high-risk pregnancies, tailoring a delivery plan suited to mother and baby’s health.'
    },
    {
      title: 'Individual Attention for Every Case',
      desc: 'Diagnosis and treatment plans tailored to each patient’s unique condition and needs, with full explanation of available options.'
    }
  ];

  const whyChooseIcons = [
    <GraduationCap className="w-7 h-7" />,
    <Heart className="w-7 h-7" />,
    <Activity className="w-7 h-7" />,
    <Sparkles className="w-7 h-7" />,
    <ShieldCheck className="w-7 h-7" />,
    <Users className="w-7 h-7" />
  ];

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
            {locale === 'ar' ? 'عن الدكتور' : t('about.title')}
          </h1>
          <p className="text-sm sm:text-md text-primary-dark font-extrabold max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mt-16">
        
        {/* Bio Detailed Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-5xl lg:max-w-6xl mx-auto"
        >
          {/* Portrait Image (Moderately enlarged and balanced) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[390px]">
              <div className="absolute -inset-3.5 rounded-3xl bg-primary/25 -rotate-2 scale-95" />
              <div className="absolute -inset-3.5 rounded-3xl bg-brand-bg rotate-2 scale-95 border border-primary/25" />
              <div className="relative bg-white p-3 sm:p-3.5 rounded-2xl shadow-md overflow-hidden">
                <img
                  src={aboutDoctorImg}
                  alt={locale === 'ar' ? 'د. أحمد جمال النجار' : t('hero.name')}
                  className="w-full h-auto max-h-[460px] sm:max-h-[510px] rounded-xl object-cover object-top shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-primary text-gray-900 font-extrabold text-xs uppercase px-3.5 py-2 rounded-full shadow-sm">
              {locale === 'ar' ? 'السيرة الذاتية' : 'Biography'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-cairo">
              {locale === 'ar' ? 'عن الدكتور' : 'Academic & Clinical Biography'}
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
            
            <div className="text-gray-700 space-y-4 leading-relaxed font-semibold text-sm sm:text-base">
              <p>
                {locale === 'ar'
                  ? 'د. أحمد جمال النجار، استشاري أمراض النساء والتوليد والحمل الحرج، ومتخصص في تأخر اإلنجاب والحقن المجهري، والمناظير الجراحية واألورام النسائية، باإلضافة إلى التجميل النسائي.'
                  : 'Dr. Ahmed Gamal El-Naggar, Consultant of Obstetrics, Gynecology, and High-Risk Pregnancy, specialized in infertility, IVF, surgical endoscopy, gynecologic oncology, and cosmetic gynecology.'}
              </p>
              <p>
                {locale === 'ar'
                  ? 'يجمع د. أحمد جمال بين الخبرة األكاديمية بجامعة عين شمس والتخصصات الدقيقة في صحة المرأة، لتقديم رعاية متكاملة بدايةً من متابعة الحمل والوالدة، وحتى عالج تأخر اإلنجاب وإجراء جراحات المناظير النسائية.'
                  : 'Dr. Ahmed Gamal combines academic excellence at Ain Shams University with advanced subspecialties in women’s health to provide comprehensive care from prenatal follow-up and safe delivery to infertility treatments and advanced gynecological endoscopic surgeries.'}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Qualifications and Degrees Section (Styled with Cream `#D9EAFD` and Rose `#FCB7C7`) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-brand-bg rounded-3xl p-8 sm:p-12 shadow-sm border border-primary/45 relative overflow-hidden"
        >
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            <div className="text-center space-y-3">
              <GraduationCap className="w-12 h-12 text-primary-dark mx-auto" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-cairo">
                {locale === 'ar' ? 'شهادات دكتور احمد جمال' : t('about.degreesTitle')}
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {degreesList.map((degree, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-primary/30 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-brand-bg border border-primary/20 rounded-full flex items-center justify-center">
                    {degreesIcons[index] || <Award className="w-8 h-8 text-primary-dark" />}
                  </div>
                  <p className="text-gray-900 leading-relaxed font-bold text-sm sm:text-base">
                    {degree}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Dr. Ahmed Gamal Section (Redesigned with Premium Medical Cards) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 relative"
        >
          {/* Subtle Ambient Background Orbs */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-bg/40 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Section Header */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/35 text-primary-dark font-extrabold text-xs shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-primary-dark" />
              {locale === 'ar' ? 'معايير التميز والرعاية' : 'Excellence & Care Standards'}
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 font-cairo tracking-tight">
              {locale === 'ar' ? 'لماذا تختار د. أحمد جمال النجار؟' : 'Why Choose Dr. Ahmed Gamal El-Naggar?'}
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />

            {/* Philosophy Banner */}
            <div className="pt-2">
              <div className="bg-gradient-to-r from-primary/10 via-brand-bg/40 to-primary/10 border border-primary/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs">
                <p className="text-sm sm:text-base text-gray-800 font-bold leading-relaxed">
                  {locale === 'ar'
                    ? 'ألن صحة المرأة تحتاج إلى خبرة متخصصة ورعاية دقيقة في كل مرحلة، يحرص د. أحمد جمال النجار على تقديم رعاية متكاملة تجمع بين الخبرة األكاديمية، التقنيات الحديثة، والتشخيص الدقيق للوصول إلى أفضل خطة عالجية تناسب كل حالة.'
                    : 'Because women’s health requires specialized expertise and meticulous care at every stage, Dr. Ahmed Gamal El-Naggar is dedicated to providing integrated care that combines academic excellence, modern technologies, and precise diagnosis to reach the best treatment plan tailored to each case.'}
                </p>
              </div>
            </div>
          </div>

          {/* 6 Modern Rectangular Stacked Cards */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-4.5">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: locale === 'ar' ? -6 : 6 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-gray-200/75 shadow-xs hover:shadow-lg hover:shadow-primary/15 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Side Accent Color Bar */}
                <div className="absolute top-0 bottom-0 right-0 rtl:right-0 ltr:left-0 w-1.5 bg-gradient-to-b from-primary via-primary to-primary-dark group-hover:w-2.5 transition-all duration-300" />

                {/* Subtle Ambient Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pr-2 rtl:pr-2 ltr:pl-2">
                  
                  {/* Right/Start (Icon + Text) */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1 text-right rtl:text-right ltr:text-left">
                    {/* Modern Icon Squircle */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-bg/80 to-primary/25 border border-primary/30 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <div className="text-primary-dark group-hover:text-gray-950 transition-colors duration-300">
                        {whyChooseIcons[index] || <ShieldCheck className="w-7 h-7" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 font-cairo group-hover:text-primary-dark transition-colors duration-200 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Left/End (Numeric Watermark Badge) */}
                  <div className="hidden sm:flex items-center shrink-0">
                    <span className="text-2xl sm:text-3xl font-black font-outfit text-gray-200/90 group-hover:text-primary/50 transition-colors duration-300 select-none pointer-events-none">
                      {`0${index + 1}`}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}
