// Centralized medical encyclopedia containing the researched copy for all services.
export const SERVICES_DATA = [
  {
    "id": "routine-pregnancy",
    "category": "pregnancy",
    "nameAR": "متابعة الحمل",
    "nameEN": "Routine Pregnancy Care",
    "briefAR": "متابعة الحمل بشكل منتظم للاطمئنان على صحة الأم ونمو الجنين، مع إجراء الفحوصات والتحاليل اللازمة خلال مراحل الحمل المختلفة والاستعداد للولادة بأمان.",
    "briefEN": "Regular pregnancy follow-up ensuring maternal well-being and fetal development, conducting essential tests throughout all trimesters for a safe delivery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 التفاصيل والتعريف",
          "content": "متابعة الحمل الروتينية هي برنامج طبي وقائي متكامل يبدأ فور تأكيد الحمل ويستمر حتى موعد الولادة. تهدف هذه المتابعة إلى الاطمئنان المستمر على صحة الأم، ومراقبة نمو الجنين وتطوره أسبوعاً بأسبوع، واكتشاف أي مؤشرات صحية طارئة والتعامل معها مبكراً لتأمين رحلة حمل آمنة ومريحة."
        },
        {
          "title": "⚠️ جدول الزيارات والفحوصات الدورية",
          "content": "تُوزع زيارات متابعة الحمل بصورة دورية ومنهجية:\n- حتى الأسبوع 28: زيارة شهرية دورية.\n- من الأسبوع 28 حتى 36: زيارة كل أسبوعين لمتابعة تسارع نمو الجنين.\n- من الأسبوع 36 حتى الولادة: زيارة أسبوعية لمراقبة وضعية الجنين وعنق الرحم والاستعداد للولادة.\n- الفحوصات تشمل: قياس ضغط الدم، متابعة زيادة الوزن، تحاليل صورة الدم الشاملة والبول والسكر، وموجات السونار الدورية."
        },
        {
          "title": "🛡️ نصائح وإرشادات وقائية لسلامة الأم والجنين",
          "content": "الالتزام بتناول حمض الفوليك في الشهور الأولى ثم مكملات الحديد والكالسيوم، التغذية المتوازنة الغنية بالبروتين والخضراوات، شرب كميات وفيرة من المياه (2-3 لتر يومياً)، تجنب الأطعمة غير المبسترة واللحوم المصنعة، وممارسة المشي الخفيف لتحسين الدورة الدموية."
        },
        {
          "title": "💊 خطة الاستعداد لولادة آمنة",
          "content": "مناقشة خطة الولادة الأنسب (طبيعية أو قيصرية) بناءً على تقييم وضع الجنين وحوض الأم، تجهيز مستلزمات استقبال المولود، وتدريب الأم على علامات بدء المخاض الحقيقي ومتى تتوجه فوراً للمستشفى."
        }
      ],
      "en": [
        {
          "title": "🔍 Description & Details",
          "content": "Routine antenatal care is a comprehensive preventive medical program starting from pregnancy confirmation through delivery, dedicated to ensuring maternal wellness and monitoring normal fetal growth."
        },
        {
          "title": "⚠️ Visit Schedule & Clinical Screenings",
          "content": "Visits are scheduled monthly until week 28, bi-weekly until week 36, and weekly until delivery. Regular assessments include blood pressure, weight tracking, blood/urine labs, and ultrasound scans."
        },
        {
          "title": "🛡️ Health Guidance & Nutrition",
          "content": "Compliance with folic acid, iron, and calcium supplements, maintaining optimal hydration, consuming balanced whole foods, and engaging in safe low-impact physical activities."
        },
        {
          "title": "💊 Safe Delivery Planning",
          "content": "Developing an individualized birth plan, assessing pelvic readiness, preparing hospital essentials, and recognizing true labor warning signs."
        }
      ]
    }
  },
  {
    "id": "high-risk-pregnancy",
    "category": "pregnancy",
    "nameAR": "متابعة الحمل عالي الخطورة والحمل الحرج",
    "nameEN": "High-Risk & Critical Pregnancy Care",
    "briefAR": "متابعة دقيقة لحالات الحمل التي تحتاج إلى رعاية خاصة نتيجة وجود عوامل خطورة لدى الأم أو الجنين، مع تقييم الحالة باستمرار ووضع خطة متابعة وولادة مناسبة لكل حالة.",
    "briefEN": "Meticulous care for pregnancies requiring specialized management due to maternal or fetal risk factors, with tailored delivery planning.",
    "axes": {
      "ar": [
        {
          "title": "🔍 التفاصيل والتعريف",
          "content": "الحمل عالي الخطورة هو تصنيف طبي يضم الحالات التي تصاحبها ظروف صحية قد تزيد من احتمالية حدوث مضاعفات للأم أو الجنين، مثل وجود أمراض مزمنة سابقة (سكر، ضغط، كلى، قلب)، أو تقدم عمر الأم، أو مضاعفات في حمل سابق، مما يتطلب بروتوكولاً طبياً مشدداً ومتابعة فائقة الدقة."
        },
        {
          "title": "⚠️ عوامل ودواعي الرعاية الحرجة",
          "content": "تستدعي الحالة المتابعة المتخصصة في الحالات التالية:\n- الأمراض المزمنة: مثل السكري المزمن، ارتفاع ضغط الدم، اضطرابات الغدة الدرقية، أو أمراض التجلط والسيولة.\n- مضاعفات سابقة: ولادات مبكرة سابقة، تاريخ لتسمم الحمل، أو إجهاض متكرر.\n- مشكلات مشيمية أو جنينية: المشيمة المنزاحة، ضعف نمو الجنين، أو قلة السائل الأمنيوسي."
        },
        {
          "title": "🛡️ بروتوكولات المتابعة والحماية",
          "content": "تقارب فترات الزيارات الدورية، إجراء سونار دوبلر ملون لمراقبة سريان الدم بالمشيمة والحبل السري، تخطيط نبض الجنين (NST) بانتظام، المراقبة الدقيقة لضغط الدم والزلال، والالتزام الصارم بالجرعات العلاجية الآمنة للحمل."
        },
        {
          "title": "💊 إدارة وتوقيت الولادة الآمنة",
          "content": "تنسيق متكامل مع فريق التخدير وحضانات الأطفال حديثي الولادة، وتحديد التوقيت الأمثل للولادة لضمان اكتمال رئة الجنين وتجنب أي خطر يهدد سلامة الأم أو طفلها."
        }
      ],
      "en": [
        {
          "title": "🔍 Description & Details",
          "content": "High-risk pregnancy encompasses situations where maternal pre-existing chronic conditions or emergent fetal issues necessitate heightened surveillance and specialized clinical protocols."
        },
        {
          "title": "⚠️ Risk Indicators & Indications",
          "content": "Indications include chronic hypertension, diabetes, maternal age factors, thrombophilia, placental abnormalities, or prior history of preterm delivery."
        },
        {
          "title": "🛡️ Intensive Surveillance Protocols",
          "content": "Frequent clinical visits, advanced Doppler hemodynamic scans, non-stress tests (NST), and strictly monitored medications safe for gestation."
        },
        {
          "title": "💊 Delivery Optimization",
          "content": "Collaborating with neonatal intensive care units and determining the safest timing and modality for delivery."
        }
      ]
    }
  },
  {
    "id": "natural-delivery",
    "category": "pregnancy",
    "nameAR": "الولادة الطبيعية",
    "nameEN": "Natural Vaginal Delivery",
    "briefAR": "متابعة الأم خلال مراحل الحمل والاستعداد للولادة الطبيعية، مع تقييم وضع الجنين والحالة الصحية للأم لتحديد الطريقة الأنسب والأكثر أمانًا للولادة.",
    "briefEN": "Careful preparation and management for natural birth, continuously assessing fetal position and maternal health for optimal safety.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مراحل ومفهوم الولادة الطبيعية",
          "content": "الولادة الطبيعية هي الخيار الفسيولوجي الأول والأساسي لولادة الجنين عبر قناة المهبل، وتمر بثلاث مراحل: مرحلة المخاض واتساع عنق الرحم التدريجي حتى 10 سم، مرحلة الدفع وخروج الجنين، ومرحلة انفصال المشيمة وخروجها بسلام."
        },
        {
          "title": "⚠️ شروط ومعايير الأمان للولادة الطبيعية",
          "content": "أن يكون رأس الجنين متجهاً لأسفل الحوض، اتساع عظام الحوض مناسب لحجم الجنين، استقرار نبض الجنين طوال فترة المخاض، عدم وجود عوائق في مجرى الولادة كالمشيمة المنزاحة، والجاهزية التامة للتدخل الفوري إذا اقتضت الضرورة."
        },
        {
          "title": "🛡️ التحضير والدعم أثناء المخاض",
          "content": "تدريب الأم على تقنيات التنفس والاسترخاء، الحركة والجلوس بوضعيات تساعد على نزول الجنين في الحوض، المراقبة المستمرة لنبضات الجنين وانقباضات الرحم بجهاز الـ CTG، والدعم النفسي المستمر لتخفيف التوتر."
        },
        {
          "title": "💊 الرعاية الفورية بعد الولادة",
          "content": "تطبيق التلامس الجلدي المباشر بين الأم والطفل (Skin-to-Skin) فور الولادة، تشجيع الرضاعة الطبيعية الأولى، فحص قناة الولادة، والاطمئنان على انقباض الرحم وتوقف أي نزيف."
        }
      ],
      "en": [
        {
          "title": "🔍 Description & Stages",
          "content": "Natural vaginal delivery is the primary physiological birth pathway progressing through cervical dilation, fetal descent and delivery, and placental expulsion."
        },
        {
          "title": "⚠️ Safety Criteria",
          "content": "Cephalic fetal presentation, adequate pelvic dimensions, stable fetal cardiotocography during labor, and absence of obstructive placental conditions."
        },
        {
          "title": "🛡️ Labor Support & Preparation",
          "content": "Breathing and relaxation exercises, encouraging supportive labor positions, continuous CTG monitoring, and emotional reassurance."
        },
        {
          "title": "💊 Immediate Post-Birth Care",
          "content": "Immediate skin-to-skin bonding, early initiation of breastfeeding, and ensuring strong uterine contraction with minimal blood loss."
        }
      ]
    }
  },
  {
    "id": "painless-natural-delivery",
    "category": "pregnancy",
    "nameAR": "الولادة الطبيعية بدون ألم",
    "nameEN": "Painless Natural Delivery (Epidural)",
    "briefAR": "تخفيف آلام الولادة الطبيعية باستخدام حقنة الإبيدورال (Epidural)، والتي تساعد على التحكم في ألم انقباضات الولادة مع بقاء الأم واعية وقادرة على المشاركة في مراحل الولادة.",
    "briefEN": "Relieving labor pain using epidural analgesia, effectively controlling contraction discomfort while keeping the mother fully alert.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هي تقنية الإبيدورال (Epidural)؟",
          "content": "تُعد حقنة الإبيدورال المعيار الذهبي عالمياً لتسكين آلام المخاض. يتم حقن المخدر الموضعي عبر قسطرة شعرية دقيقة في الفراغ فوق الجافية أسفل الظهر، مما يمنع انتقال إشارات الألم العصبية من الرحم والحوض إلى الدماغ دون التأثير على وعي الأم أو قدرتها على الدفع."
        },
        {
          "title": "⚠️ مميزات الولادة الطبيعية بدون ألم",
          "content": "التحكم التام في آلام الانقباضات الشديدة، تمكين الأم من الاسترخاء واستعادة طاقتها البدنية، الحفاظ على استقرار ضغط الدم أثناء التوتر، وبقاء الأم مستيقظة تماماً لتستمتع بلحظة ولادة طفلها واحتضانه دون ألم أو إجهاد."
        },
        {
          "title": "🛡️ التوقيت والاشتراطات الطبية",
          "content": "يقوم استشاري التخدير بتركيب القسطرة بمجرد بدء مرحلة المخاض النشط واتساع عنق الرحم بشكل منتظم، مع مراقبة العلامات الحيوية للأم ونبضات الجنين باستمرار للتأكد من أقصى درجات الأمان."
        },
        {
          "title": "💊 الأمان والتعافي بعد الولادة",
          "content": "الإجراء آمن تماماً على الأم والجنين، وتُزال القسطرة بسهولة تامة بعد انتهاء الولادة، حيث يزول تأثير التخدير تدريجياً وتستطيع الأم النهوض والحركة وتناول الطعام والرضاعة خلال وقت قصير."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Epidural Analgesia?",
          "content": "Epidural analgesia is the gold standard for painless labor. A micro-catheter delivers localized anesthetic to block pain transmission from the pelvis while preserving full maternal consciousness and pushing ability."
        },
        {
          "title": "⚠️ Key Benefits",
          "content": "Eliminates intense labor contractions, preserves maternal energy for the pushing phase, stabilizes vital signs, and enables a joyful, comfortable childbirth experience."
        },
        {
          "title": "🛡️ Administration Timing",
          "content": "Administered by an experienced anesthesiologist once active labor is established, accompanied by continuous fetal and maternal vital sign monitoring."
        },
        {
          "title": "💊 Recovery & Safety",
          "content": "Safe for both mother and infant with rapid recovery, allowing mothers to ambulate and breastfeed shortly after birth."
        }
      ]
    }
  },
  {
    "id": "cesarean-delivery",
    "category": "pregnancy",
    "nameAR": "الولادة القيصرية",
    "nameEN": "Cesarean Section Delivery",
    "briefAR": "إجراء الولادة القيصرية عندما تكون هي الخيار الطبي الأنسب للأم أو الجنين، مع الاستعداد والمتابعة قبل الولادة والرعاية اللازمة للأم بعد العملية.",
    "briefEN": "Performing C-sections when medically indicated for mother or infant safety, ensuring attentive preoperative and postoperative care.",
    "axes": {
      "ar": [
        {
          "title": "🔍 دواعي إجراء الولادة القيصرية",
          "content": "تُجرى الولادة القيصرية عندما تقتضي الضرورة الطبية ذلك لحماية الأم أو الجنين، مثل: الوضعيات غير الطبيعية للجنين (المقعدي أو المستعرض)، ضيق الحوض الشديد، وجود عمليات قيصرية سابقة متعددة، المشيمة المنزاحة، أو تباطؤ نبض الجنين أثناء المخاض."
        },
        {
          "title": "⚠️ التحضير والفحوصات قبل العملية",
          "content": "فحص سريري كامل، تحاليل سيولة الدم ومطابقة الفصيلة، تخطيط نبض الجنين، الصيام لعدة ساعات، واختيار نوع التخدير المناسب (غالباً التخدير النصفي الآمن الذي يتيح للأم رؤية وليدها فور خروجه)."
        },
        {
          "title": "🛡️ خطوات الجراحة والتقنيات التجميلية",
          "content": "إجراء شق جراحي دقيق في أسفل البطن بخط البكيني، استخراج الجنين والمشيمة برفق وعناية فائقة، خياطة طبقات جدار الرحم والبطن، واستخدام خياطة تجميلية دقيقة مدفونة لا تترك أثراً مشوهاً."
        },
        {
          "title": "💊 الرعاية والتعافي بعد الجراحة",
          "content": "المتابعة الدقيقة في غرفة الإفاقة، تشجيع الحركة المبكرة لتنشيط الدورة الدموية، توفير بروتوكولات تسكين مناسبة، وإعطاء تعليمات العناية بنظافة الجرح واستئناف الأنشطة تدريجياً."
        }
      ],
      "en": [
        {
          "title": "🔍 Clinical Indications",
          "content": "Cesarean delivery is performed when medically necessary for maternal or fetal health, such as breech presentation, cephalopelvic disproportion, multiple repeat C-sections, or placenta previa."
        },
        {
          "title": "⚠️ Preoperative Preparation",
          "content": "Pre-op coagulation labs, fetal monitoring, fasting protocols, and selecting safe regional spinal anesthesia allowing mother to witness birth."
        },
        {
          "title": "🛡️ Surgical & Cosmetic Technique",
          "content": "Low transverse bikini-line incision, gentle delivery of infant and placenta, meticulous multi-layer closure, and cosmetic subcuticular sutures."
        },
        {
          "title": "💊 Postoperative Care & Recovery",
          "content": "Post-anesthesia recovery monitoring, early mobilization to prevent thromboembolism, effective analgesia, and wound care education."
        }
      ]
    }
  },
  {
    "id": "painless-cesarean",
    "category": "pregnancy",
    "nameAR": "الولادة القيصرية بدون ألم",
    "nameEN": "Painless Cesarean Delivery",
    "briefAR": "تقنية التحكم في الألم بعد الولادة القيصرية باستخدام تقنيات حديثة لتسكين الألم، مثل تقنية الـ TAP Block والـ PCA، للمساعدة على تقليل الألم بعد العملية وتسهيل الحركة والتعافي خلال الساعات الأولى بعد الولادة.",
    "briefEN": "Advanced post-cesarean pain management using TAP Block and PCA devices, facilitating early mobilization and comfortable recovery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم القيصرية بدون ألم",
          "content": "منظومة طبية حديثة ومتكاملة تجمع بين أكثر من تقنية متقدمة لإلغاء الشعور بآلام ما بعد الجراحة القيصرية، لتمكين الأم من قضاء أولى لحظاتها مع طفلها براحة وسعادة دون معاناة من آلام جرح البطن."
        },
        {
          "title": "⚠️ تقنية الـ TAP Block الحديثة",
          "content": "تقنية حصرية يقوم بها استشاري التخدير في نهاية العملية تحت إرشاد السونار، بحقن مخدر موضعي ممتد المفعول في الطبقة العصبية لجدار البطن (Transversus Abdominis Plane)، مما يسكن آلام منطقة الجرح بالكامل لمدة تتراوح بين 24 إلى 48 ساعة."
        },
        {
          "title": "🛡️ جهاز التحكم الذاتي بالألم (PCA)",
          "content": "جهاز إلكتروني متطور يتصل بالمحلول الوريدي للأم، يتيح لها عند الشعور بأي انزعاج الضغط على زر صغير لضخ جرعة مسكنة مبرمجة ومحسوبة بدقة بالغة ومؤمنة ضد الجرعات الزائدة، لتحقيق أعلى درجات الراحة والاطمئنان."
        },
        {
          "title": "💊 مزايا التعافي الحركي السريع",
          "content": "الغياب التام للألم يمنح الأم القدرة على النهوض والمشي بعد ساعات قليلة من العملية مما يمنع تجلطات الساقين، ويسهل احتضان المولود والبدء الفوري في الرضاعة الطبيعية بنشاط وحيوية."
        }
      ],
      "en": [
        {
          "title": "🔍 Concept of Painless Cesarean",
          "content": "A multimodal analgesia system utilizing advanced regional blocks and smart infusion pumps to eliminate post-cesarean surgical pain for smooth recovery."
        },
        {
          "title": "⚠️ Ultrasound-Guided TAP Block",
          "content": "Targeted ultrasound-guided local anesthetic injection into the transversus abdominis fascial plane, numbing the surgical wound site for 24-48 hours."
        },
        {
          "title": "🛡️ Patient-Controlled Analgesia (PCA)",
          "content": "A programmed digital pump enabling mothers to self-administer safe, pre-metered pain relief at the touch of a button with built-in safety lockout limits."
        },
        {
          "title": "💊 Benefits of Rapid Recovery",
          "content": "Painless recovery enables early mobilization, prevents thrombosis, facilitates maternal-infant bonding, and supports immediate comfortable breastfeeding."
        }
      ]
    }
  },
  {
    "id": "twin-pregnancy",
    "category": "pregnancy",
    "nameAR": "متابعة الحمل بتوأم",
    "nameEN": "Twin & Multiple Pregnancy Care",
    "briefAR": "متابعة متخصصة للحمل بتوأم للاطمئنان على نمو وتطور كل جنين ومتابعة صحة الأم، مع الاهتمام بالمضاعفات التي تكون احتمالاتها أعلى في حالات الحمل المتعدد.",
    "briefEN": "Specialized management for twin pregnancies monitoring each fetus's growth, with proactive surveillance for potential multiple-gestation complications.",
    "axes": {
      "ar": [
        {
          "title": "🔍 تصنيف الحمل بتوأم وأهميته",
          "content": "تحديد نوع الحمل بتوأم في الثلث الأول بالموجات فوق الصوتية (توأم ثنائي المشيمة والكيس، أو أحادي المشيمة ثنائي الكيس، أو أحادي المشيمة والكيس)، وهو تشخيص أساسي يُبنى عليه كامل جدول المتابعة ومستوى المراقبة الطبية."
        },
        {
          "title": "⚠️ مضاعفات الحمل المتعدد التي نراقبها",
          "content": "احتمالات أعلى للولادة المبكرة، تسمم الحمل، سكر الحمل، فقر الدم الحاد، أو متلازمة نقل الدم بين الأجنة (TTTS) في التوائم أحادية المشيمة، مما يتطلب تقييماً دورياً دقيقاً."
        },
        {
          "title": "🛡️ جدول الفحوصات والتدخلات الوقائية",
          "content": "موجات فوق صوتية متقدمة كل أسبوعين لقياس وزن ونمو كل جنين ومقارنته بالآخر، فحص دوبلر لتدفق الدم، قياس طول عنق الرحم بانتظام، وأخذ الاحتياطات اللازمة لتفادي الولادة المبكرة (مثل مثبتات الحمل أو ربط عنق الرحم إذا استدعت الحالة)."
        },
        {
          "title": "💊 خطة وتوقيت الولادة للتوأم",
          "content": "تحديد موعد الولادة في التوقيت الأكثر أماناً (عادة ما بين الأسبوع 36 و38)، واختيار أسلوب الولادة الأنسب مع جاهزية طاقم رعاية الأطفال المبتسرين لاستقبال التوأم بأمان تام."
        }
      ],
      "en": [
        {
          "title": "🔍 Classification of Twin Gestations",
          "content": "Early ultrasound determination of chorionicity and amnionicity (dichorionic vs monochorionic), dictating the clinical surveillance roadmap."
        },
        {
          "title": "⚠️ Multiple Gestation Risks",
          "content": "Increased likelihood of preterm delivery, preeclampsia, gestational diabetes, and twin-to-twin transfusion syndrome (TTTS) in monochorionic twins."
        },
        {
          "title": "🛡️ Surveillance Schedule",
          "content": "Bi-weekly high-resolution biometric scans, umbilical Doppler studies, cervical length monitoring, and prophylactic interventions to prevent preterm labor."
        },
        {
          "title": "💊 Delivery Planning & Timing",
          "content": "Timing delivery between weeks 36-38 depending on chorionicity, supported by ready neonatal intensive care services."
        }
      ]
    }
  },
  {
    "id": "pregnancy-after-ivf",
    "category": "pregnancy",
    "nameAR": "متابعة الحمل بعد الحقن المجهري",
    "nameEN": "Pregnancy Care After IVF / ICSI",
    "briefAR": "متابعة الحمل الناتج عن الحقن المجهري خلال مراحله المختلفة، بدايةً من التأكد من ثبات الحمل ومتابعة تطور الجنين وحتى مراحل الحمل المتقدمة والاستعداد للولادة.",
    "briefEN": "Dedicated care for pregnancies achieved via ICSI/IVF, from early implantation confirmation and luteal support to safe delivery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 خصوصية الحمل بالحقن المجهري",
          "content": "حمل ثمين يتوج جهداً وصبراً طويلاً، لذا يحظى برعاية طبية مكثفة منذ اللحظة الأولى لاختبار الحمل الرقمي (Beta-hCG)، لضمان استقرار انغراس الأجنة ونموها السليم داخل الرحم."
        },
        {
          "title": "⚠️ بروتوكول التثبيت والدعم الهرموني",
          "content": "الاستمرار الدقيق على أدوية دعم بطانة الرحم (البروجستيرون، هرمون الإستروجين، مميعات الدم ومضادات التجلط) وفق جدول زمني محسوب بعناية، ثم التدرج في سحبها تدريجياً بعد اكتمال وظيفة المشيمة."
        },
        {
          "title": "🛡️ السونار المبكر واستبعاد الحمل خارج الرحم",
          "content": "إجراء فحص السونار بين الأسبوعين الخامس والسابع لرصد كيس الحمل داخل الرحم، والتأكد من عدد الأكياس، وسماع نبض الجنين، والاطمئنان على سلامة بطانة الرحم وعنق الرحم."
        },
        {
          "title": "💊 استكمال المتابعة وحتى الولادة",
          "content": "الانتقال السلس إلى بروتوكول متابعة الحمل المنتظم والمكثف، مع إجراء كافة الفحوصات الجينية والتشريحية الدقيقة للوصول إلى ولادة آمنة تحقق حلم العائلة."
        }
      ],
      "en": [
        {
          "title": "🔍 Significance of Post-ART Gestations",
          "content": "Precious pregnancies achieved through assisted reproduction requiring tailored clinical attention from the initial positive serum hCG test."
        },
        {
          "title": "⚠️ Luteal Support & Tapering Protocol",
          "content": "Strict adherence to progesterone and estrogen luteal support alongside anticoagulants, gradually tapering as placental steroidogenesis takes over."
        },
        {
          "title": "🛡️ Early Ultrasound Verification",
          "content": "Early 5-7 week scans confirming intrauterine gestational sac location, embryonic viability, cardiac activity, and chorionicity."
        },
        {
          "title": "💊 Ongoing Care to Delivery",
          "content": "Transitioning to structured antenatal monitoring, comprehensive anomaly screening, and individualized birth planning."
        }
      ]
    }
  },
  {
    "id": "gestational-diabetes",
    "category": "pregnancy",
    "nameAR": "متابعة سكر الحمل",
    "nameEN": "Gestational Diabetes Management",
    "briefAR": "تشخيص ومتابعة سكر الحمل ومراقبة مستوى السكر وصحة الأم ونمو الجنين، مع تحديد خطة المتابعة المناسبة بالتعاون مع التخصصات الطبية الأخرى عند الحاجة.",
    "briefEN": "Screening and managing gestational diabetes, closely monitoring glycemic control and fetal growth in multidisciplinary coordination.",
    "axes": {
      "ar": [
        {
          "title": "🔍 التعريف والتشخيص المبكر",
          "content": "سكر الحمل هو ارتفاع في مستويات الجلوكوز بالدم يُكتشف للمرة الأولى خلال فترة الحمل نتيجة تأثير هرمونات المشيمة المقاومة للأنسولين. يتم تشخيصه بإجراء اختبار منحنى تحمل الجلوكوز (OGTT) الروتيني بين الأسبوعين 24 و28."
        },
        {
          "title": "⚠️ المخاطر والمضاعفات عند عدم الضبط",
          "content": "زيادة مفرطة في وزن الجنين (Macrosomia) مما يصعب الولادة الطبيعية، زيادة السائل الأمنيوسي حول الجنين، ارتفاع ضغط الدم، واحتمال حدوث هبوط سكر أو صعوبة تنفس للرضيع بعد الولادة."
        },
        {
          "title": "🛡️ الخطة الغذائية والعلاجية",
          "content": "تطبيق حمية غذائية صحية محسوبة السعرات بالتعاون مع أخصائي التغذية، ممارسة الرياضة المناسبة كالمشي، قياس مستويات السكر يومياً بالجهاز المنزلي (صائم وبعد الوجبات)، وإضافة جرعات الأنسولين الآمنة عند الضرورة."
        },
        {
          "title": "💊 مراقبة الجنين وتحديد موعد الولادة",
          "content": "سونار دوري لقياس محيط بطن الجنين وتقدير وزنه وكمية السائل الأمنيوسي، تخطيط قلب الجنين بانتظام، وتحديد التوقيت الأمثل للولادة لتجنب أي تعقيدات."
        }
      ],
      "en": [
        {
          "title": "🔍 Definition & Diagnostic Screening",
          "content": "Gestational diabetes mellitus (GDM) is carbohydrate intolerance first identified during pregnancy due to placental anti-insulin hormones, screened via oral glucose tolerance test (OGTT) at 24-28 weeks."
        },
        {
          "title": "⚠️ Associated Complications",
          "content": "Fetal macrosomia, polyhydramnios, preeclampsia risk, shoulder dystocia during delivery, and neonatal hypoglycemia."
        },
        {
          "title": "🛡️ Nutritional & Medical Management",
          "content": "Medical nutrition therapy, daily self-monitoring of blood glucose, safe physical activity, and insulin initiation when glycemic targets are unmet."
        },
        {
          "title": "💊 Fetal Surveillance & Delivery Planning",
          "content": "Serial biometric growth ultrasounds, amniotic fluid volume tracking, and scheduled delivery to prevent perinatal morbidity."
        }
      ]
    }
  },
  {
    "id": "preeclampsia-hypertension",
    "category": "pregnancy",
    "nameAR": "متابعة ضغط الحمل وتسمم الحمل",
    "nameEN": "Preeclampsia & Gestational Hypertension Care",
    "briefAR": "متابعة ضغط الدم والأعراض والعلامات المرتبطة بتسمم الحمل، مع مراقبة صحة الأم والجنين بصورة دقيقة لتحديد التدخل المناسب وفقًا لشدة الحالة ومرحلة الحمل.",
    "briefEN": "Rigorous monitoring of blood pressure and preeclampsia markers to ensure timely intervention tailored to gestational stage.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ضغط الحمل وتسمم الحمل (Preeclampsia)",
          "content": "ارتفاع في ضغط الدم يظهر بعد الأسبوع العشرين من الحمل مصحوباً بوجود بروتين (زلال) في البول أو تأثر وظائف الكلى أو الكبد، وتعتبر حالة حرجة تتطلب متابعة حثيثة للوقاية من المضاعفات."
        },
        {
          "title": "⚠️ العلامات التحذيرية والأعراض الطارئة",
          "content": "صداع شديد لا يستجيب للمسكنات، تشوش أو زغللة في الرؤية، ألم حاد في فم المعدة أو أعلى يمين البطن، تورم مفاجئ وملحوظ في الوجه واليدين، وضيق في التنفس."
        },
        {
          "title": "🛡️ بروتوكول العلاج والمراقبة المكثفة",
          "content": "استخدام أدوية خفض الضغط المعتمدة والآمنة للجنين (مثل الميثيل دوبا أو اللابيتالول)، تحاليل دورية لوظائف الكبد والكلى ونسبة الصفائح الدموية، وفحص دوبلر لشرايين المشيمة والحبل السري."
        },
        {
          "title": "💊 قرار وتوقيت الولادة",
          "content": "الولادة هي العلاج الجذري الوحيد لتسمم الحمل. يتم تحديد التوقيت الدقيق بالموازنة بين استقرار حالة الأم الحيوية واكتمال نضج رئة الجنين، مع إعطاء حقن الكورتيزون التحضيرية عند اللزوم."
        }
      ],
      "en": [
        {
          "title": "🔍 Overview & Clinical Definition",
          "content": "Preeclampsia is new-onset gestational hypertension after 20 weeks accompanied by proteinuria or maternal organ dysfunction requiring strict clinical management."
        },
        {
          "title": "⚠️ Red-Flag Symptoms",
          "content": "Persistent severe headaches, scotoma/visual disturbances, severe right upper quadrant epigastric pain, rapid facial edema, and shortness of breath."
        },
        {
          "title": "🛡️ Intensive Monitoring & Therapeutics",
          "content": "Pregnancy-safe antihypertensive therapy (e.g. labetalol, methyldopa), continuous hepatic/renal/platelet lab tracking, and umbilical Doppler studies."
        },
        {
          "title": "💊 Delivery Timing Decision",
          "content": "Delivery represents definitive cure, timed judiciously based on maternal stability and fetal gestational maturity."
        }
      ]
    }
  },
  {
    "id": "recurrent-miscarriage",
    "category": "pregnancy",
    "nameAR": "علاج ومتابعة الإجهاض المتكرر",
    "nameEN": "Recurrent Miscarriage Management",
    "briefAR": "تقييم حالات فقدان الحمل المتكرر والبحث عن الأسباب المحتملة من خلال التاريخ المرضي والفحوصات المناسبة، ثم تحديد خطة العلاج والمتابعة وفقًا لسبب المشكلة وحالة كل مريضة.",
    "briefEN": "Investigating recurrent pregnancy loss through thorough diagnostic screening and personalized therapeutic protocols for future successful pregnancies.",
    "axes": {
      "ar": [
        {
          "title": "🔍 تعريف الإجهاض المتكرر",
          "content": "يُعرف الإجهاض المتكرر بفقدان الحمل تلقائياً مرتين أو أكثر قبل بلوغ الأسبوع العشرين. تتطلب هذه الحالات استقصاءً طبياً شاملاً لمعرفة السبب وتطبيق خطة علاجية مخصصة للوصول إلى حمل كامل وسليم."
        },
        {
          "title": "⚠️ الأسباب المحتملة والفحوصات التشخيصية",
          "content": "تشمل الأسباب: متلازمة الأجسام المضادة للفوسفوليبيد والتجلطات، العوامل الوراثية والكروموسومية للزوجين، العيوب التشريحية للرحم (الحاجز الرحمي أو الالتصاقات)، والخلل الهرموني كقصور الغدة الدرقية أو تكيس المبايض."
        },
        {
          "title": "🛡️ البروتوكولات العلاجية الوقائية",
          "content": "إصلاح العيوب الرحمية بالمنظار الرحمي الدقيق، وصف مميعات الدم ومضادات التجلط (كالأسبرين وحقن الهيبارين منخفض الوزن الجزيئي)، ضبط الهرمونات، ودعم الجسم بمضادات الأكسدة ومثبتات الحمل."
        },
        {
          "title": "💊 رعاية الحمل التالي خطوة بخطوة",
          "content": "المتابعة المبكرة والدقيقة بمجرد ثبوت الحمل القادم، ومراقبة هرمون الحمل ونبض الجنين وتدفق الدم أسبوعياً، لضمان استقرار الحمل واكتماله بنجاح."
        }
      ],
      "en": [
        {
          "title": "🔍 Clinical Definition",
          "content": "Recurrent pregnancy loss (RPL) is defined as two or more consecutive miscarriages before 20 weeks, requiring systematic diagnostic workup."
        },
        {
          "title": "⚠️ Etiological Factors & Diagnostic Workup",
          "content": "Investigating antiphospholipid syndrome (APS), parental karyotyping, anatomical uterine anomalies (septum/adhesions), and endocrine dysfunction."
        },
        {
          "title": "🛡️ Targeted Therapeutic Protocols",
          "content": "Hysteroscopic repair of uterine septa, anticoagulation therapy (aspirin and LMWH), endocrine stabilization, and intensive progesterone support."
        },
        {
          "title": "💊 Close Surveillance in Future Gestations",
          "content": "Immediate early prenatal monitoring in subsequent pregnancies with weekly serial ultrasound tracking to safeguard ongoing fetal development."
        }
      ]
    }
  },
  {
    "id": "fetal-ultrasound-growth",
    "category": "pregnancy",
    "nameAR": "السونار ومتابعة نمو الجنين",
    "nameEN": "Ultrasound & Fetal Growth Monitoring",
    "briefAR": "استخدام الموجات فوق الصوتية لمتابعة نمو الجنين وتطوره وتقييم المؤشرات المهمة أثناء الحمل، وفقًا لعمر الحمل والحالة الصحية للأم والجنين.",
    "briefEN": "Ultrasound assessments tracking fetal biometric milestones, anatomical development, and essential pregnancy parameters.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أهمية فحص السونار أثناء الحمل",
          "content": "الفحص بالموجات فوق الصوتية هو الأداة التصويرية الآمنة والأساسية للاطمئنان على الجنين؛ حيث يتيح الرؤية المباشرة لنموه العضوي والحركي، تقييم كمية السائل الأمنيوسي، وفحص وظيفة المشيمة بأحدث التقنيات."
        },
        {
          "title": "⚠️ المحطات التخصصية للسونار خلال الحمل",
          "content": "1. سونار الثلث الأول (الأسبوع 6-12): تأكيد النبض، قياس عمر الحمل بدقة، وقياس سمك الرقبة القفوية (NT).\n2. السونار التفصيلي والتشريحي (Anomaly Scan الأسبوع 18-22): فحص كامل لكافة أعضاء الجنين (القلب، المخ، الكلى، الأطراف).\n3. سونار الثلث الأخير (الأسبوع 28-36): متابعة منحنى وزن الجنين وتدفق الدم بالدوبلر."
        },
        {
          "title": "🛡️ تقنيات السونار ثلاثي ورباعي الأبعاد (3D/4D)",
          "content": "استخدام التكنولوجيا المتطورة لرؤية ملامح وجه الجنين وحركاته الحية بالوقت الفعلي، مما يمنح الوالدين تجربة عاطفية رائعة ويساعد الطبيب على فحص العيوب الخلقية السطحية كشفة الأرنب وغيرها بدقة فائقة."
        },
        {
          "title": "💊 دوبلر المشيمة ومراقبة حيوية الجنين",
          "content": "فحص دوبلر ملون يقيس سرعة وكفاءة تدفق الدم المحمل بالأكسجين والغذاء في الشريان السري والشريان المخي للجنين، لضمان الاكتشاف المبكر لأي قصور مشيمي واتخاذ التدخلات في وقتها."
        }
      ],
      "en": [
        {
          "title": "🔍 Importance of Antenatal Ultrasonography",
          "content": "Diagnostic ultrasound is an essential, safe imaging modality offering direct visualization of fetal structural development, amniotic fluid volume, and placental function."
        },
        {
          "title": "⚠️ Trimester Ultrasound Milestones",
          "content": "First-trimester viability and nuchal translucency scanning, second-trimester detailed anomaly scan (18-22 weeks), and third-trimester biometric growth tracking."
        },
        {
          "title": "🛡️ 3D/4D Live Imaging",
          "content": "Advanced volumetric sonography providing clear real-time visualization of fetal facial features and movements while diagnosing subtle structural anomalies."
        },
        {
          "title": "💊 Color Doppler Hemodynamic Profiling",
          "content": "Doppler assessment evaluating blood flow velocity in umbilical and middle cerebral arteries to detect placental insufficiency."
        }
      ]
    }
  },
  {
    "id": "postpartum-care",
    "category": "pregnancy",
    "nameAR": "متابعة ما بعد الولادة",
    "nameEN": "Postpartum Care & Recovery",
    "briefAR": "متابعة صحة الأم خلال فترة ما بعد الولادة والاطمئنان على التعافي، مع تقييم أي أعراض أو مشكلات قد تظهر وتقديم الإرشادات المناسبة خلال فترة النفاس.",
    "briefEN": "Comprehensive postpartum follow-up evaluating maternal physical and emotional recovery, with tailored guidance throughout the puerperium.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مرحلة النفاس والتعافي الجسدي",
          "content": "تمتد فترة ما بعد الولادة (النفاس) لستة أسابيع، يعود خلالها الرحم وأعضاء الحوض تدريجياً إلى وضعهم الطبيعي قبل الحمل. تهدف المتابعة الطبية إلى التأكد من التئام الجروح، استقرار الهرمونات، واجتياز هذه المرحلة بسلام."
        },
        {
          "title": "⚠️ محاور الفحص الطبي بعد الولادة",
          "content": "فحص التئام جرح الولادة الطبيعية أو القيصرية والتأكد من خلوه من أي التهابات، فحص انقباض الرحم وتوقف النزيف، قياس ضغط الدم، وإجراء تحاليل الهيموجلوبين لعلاج أي فقر دم ناتج عن الولادة."
        },
        {
          "title": "🛡️ دعم الرضاعة الطبيعية وتنظيم الأسرة",
          "content": "تقديم إرشادات علاج احتقان الثدي وتشققات الحلمة لدعم الرضاعة الطبيعية الناجحة، واختيار وسيلة منع الحمل وتنظيم الأسرة الأكثر ملاءمة للأم والآمنة مع الرضاعة (اللوالب أو الحبوب أحادية الهرمون)."
        },
        {
          "title": "💊 الصحة النفسية واستعادة الحيوية",
          "content": "الاهتمام بالحالة المزاجية للأم والكشف المبكر عن أي علامات لاكتئاب ما بعد الولادة، وتقديم النصائح الغذائية والرياضية لتقوية عضلات الحوض والبطن واستعادة النشاط اليومي."
        }
      ],
      "en": [
        {
          "title": "🔍 Postpartum Physiology & Recovery",
          "content": "The 6-week puerperium is a critical window during which pelvic and reproductive organs involute, requiring structured clinical support for physical and emotional well-being."
        },
        {
          "title": "⚠️ Clinical Postpartum Checkup",
          "content": "Evaluating perineal or cesarean incision healing, monitoring uterine involution and lochia, tracking blood pressure, and screening for postpartum anemia."
        },
        {
          "title": "🛡️ Lactation Support & Contraception",
          "content": "Guiding mothers on breast engorgement and nipple care, and counseling on progestin-only pills or intrauterine devices compatible with breastfeeding."
        },
        {
          "title": "💊 Mental Wellness & Physical Rehabilitation",
          "content": "Screening for postpartum mood disorders, guidance on pelvic floor rehabilitation, and dietary recommendations for regaining vitality."
        }
      ]
    }
  },
  {
    "id": "fertility-treatment",
    "category": "fertility",
    "nameAR": "علاج تأخر الإنجاب",
    "nameEN": "Infertility Treatment",
    "briefAR": "تقييم أسباب تأخر الحمل لدى الزوجين من خلال التاريخ الطبي والفحوصات والتحاليل المناسبة، ثم تحديد خطة العلاج وفقًا لسبب تأخر الإنجاب وحالة كل زوجين.",
    "briefEN": "Comprehensive evaluation of infertility causes in couples through medical history and diagnostic tests, tailoring an optimal therapeutic roadmap.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم تأخر الإنجاب والتقييم الأولي",
          "content": "يُعرّف تأخر الإنجاب بعدم حدوث حمل بعد عام كامل من الزواج المنتظم دون استخدام موانع لمن هم دون 35 عاماً، أو بعد 6 أشهر لمن هن فوق 35 عاماً. يتضمن التقييم الأولي فحصاً دقيقاً للزوجين معاً للوصول إلى التشخيص السليم مبكراً."
        },
        {
          "title": "⚠️ دواعي الاستشارة والفحص المبكر",
          "content": "تأخر حدوث الحمل، عدم انتظام الدورة الشهرية، آلام الحوض الشديدة، وجود جراحات سابقة بالحوض أو البطن، اضطرابات السائل المنوي لدى الزوج، أو تقدم عمر الزوجة."
        },
        {
          "title": "🛡️ الإرشادات العامة لتحسين الخصوبة",
          "content": "الحفاظ على وزن صحي، التغذية المتوازنة الغنية بمضادات الأكسدة، الامتناع التام عن التدخين، الابتعاد عن مصادر الحرارة العالية، وإدارة التوتر والضغوط النفسية."
        },
        {
          "title": "💊 الخطة العلاجية المتدرجة",
          "content": "تبدأ الخطة من تصحيح نمط الحياة والعلاج الهرموني أو تنشيط التبويض، وتتدرج إلى التلقيح الصناعي أو الحقن المجهري وجراحات المناظير بحسب الحالة الخاصة بكل زوجين."
        }
      ],
      "en": [
        {
          "title": "🔍 Clinical Definition & Initial Assessment",
          "content": "Infertility is defined as the inability to conceive after 12 months of regular unprotected intercourse (or 6 months for women aged 35 and older), necessitating comprehensive couple evaluation."
        },
        {
          "title": "⚠️ Indications for Early Screening",
          "content": "Irregular menstrual cycles, pelvic pain, prior abdominal surgeries, male factor semen abnormalities, or advanced maternal age."
        },
        {
          "title": "🛡️ Lifestyle & Fertility Optimization",
          "content": "Weight management, antioxidant-rich nutrition, strict smoking cessation, avoiding testicular heat exposure, and stress reduction."
        },
        {
          "title": "💊 Stepwise Treatment Strategies",
          "content": "Stepping from lifestyle optimization and medical ovulation induction up to IUI, ICSI, or minimally invasive endoscopic surgery."
        }
      ]
    }
  },
  {
    "id": "diagnosing-delayed-conception",
    "category": "fertility",
    "nameAR": "تشخيص أسباب تأخر الحمل",
    "nameEN": "Infertility Diagnostic Evaluation",
    "briefAR": "تشخيص العوامل التي قد تؤثر على حدوث الحمل، مثل اضطرابات التبويض، وتكيس المبايض، ومشكلات مخزون المبيض، وبطانة الرحم المهاجرة، أو مشكلات الرحم وقنوات فالوب، مع تقييم عوامل الخصوبة لدى الزوجين.",
    "briefEN": "Investigating factors influencing conception, including ovulatory disorders, PCOS, ovarian reserve, endometriosis, tubal and uterine factors, and male fertility parameters.",
    "axes": {
      "ar": [
        {
          "title": "🔍 محاور التشخيص الشامل للخصوبة",
          "content": "منظومة تشخيصية دقيقة تفحص المحاور الأربعة للخصوبة: كفاءة التبويض والمخزون، سلامة قنوات فالوب، سلامة تجويف الرحم، وجودة السائل المنوي للزوج."
        },
        {
          "title": "⚠️ الفحوصات والتحاليل الأساسية",
          "content": "تحاليل الهرمونات (FSH, LH, AMH, Prolactin, TSH)، تحليل السائل المنوي المتقدم للزوج، السونار المهبلي لتقييم الحويصلات، والأشعة بالصبغة (HSG) لفحص القنوات."
        },
        {
          "title": "🛡️ الاستقصاءات المتقدمة عند الحاجة",
          "content": "السونار ثلاثي الأبعاد لتشخيص العيوب الخلقية بالرحم، منظار البطن الاستكشافي لتشخيص بطانة الرحم المهاجرة والالتصاقات، ومنظار الرحم التشخيصي لفحص بطانة الرحم."
        },
        {
          "title": "💊 تحديد بروتوكول العلاج المستهدف",
          "content": "بناء خطة علاجية مخصصة ومبنية على الدليل الطبي استناداً لنتائج الفحوصات، لاختصار الوقت والجهد وتجنب العلاجات العشوائية غير المجدية."
        }
      ],
      "en": [
        {
          "title": "🔍 Comprehensive Diagnostic Pillars",
          "content": "Systematic screening of the 4 reproductive pillars: ovulatory function/reserve, tubal patency, uterine cavity regularity, and semen quality."
        },
        {
          "title": "⚠️ Essential Diagnostic Screenings",
          "content": "Hormonal profiles (AMH, FSH, LH, Thyroid), advanced computer-assisted semen analysis, pelvic transvaginal ultrasound, and hysterosalpingography (HSG)."
        },
        {
          "title": "🛡️ Advanced Interventional Workup",
          "content": "3D pelvic ultrasound for uterine anomalies, diagnostic laparoscopy for endometriosis/adhesions, and hysteroscopic cavity assessment."
        },
        {
          "title": "💊 Targeted Protocol Formulation",
          "content": "Designing an evidence-based roadmap tailored to precise diagnostic findings to maximize pregnancy likelihood without unnecessary delays."
        }
      ]
    }
  },
  {
    "id": "icsi-ivf",
    "category": "fertility",
    "nameAR": "الحقن المجهري (ICSI)",
    "nameEN": "Intracytoplasmic Sperm Injection (ICSI)",
    "briefAR": "إحدى تقنيات الإخصاب المساعد، ويتم فيها حقن حيوان منوي مباشرة داخل البويضة في المختبر، ثم متابعة الأجنة ونقل الجنين أو الأجنة المناسبة إلى الرحم وفقًا لخطة العلاج.",
    "briefEN": "Advanced assisted reproduction procedure where a single selected sperm is directly microinjected into a mature oocyte, followed by embryo culture and uterine transfer.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو الحقن المجهري (ICSI)؟",
          "content": "تطور فائق لتقنية أطفال الأنابيب، حيث يختار استشاري الأجنة حيواناً منوياً واحداً فائق الجودة ويحقنه بإبرة مجهرية دقيقة مباشرة داخل سيتوبلازم البويضة الناضجة في معمل الأجنة."
        },
        {
          "title": "⚠️ دواعي اللجوء للحقن المجهري",
          "content": "ضعف السائل المنوي الشديد، قلة عدد الحيوانات المنوية أو تشوهها، انغلاق قنوات فالوب، انخفاض مخزون المبيض، أو فشل محاولات التلقيح السابقة."
        },
        {
          "title": "🛡️ مراحل خطوات العملية",
          "content": "تنشيط المبيض بالهرمونات المناسبة، سحب البويضات تحت التخدير الموضعي أو الخفيف، التلقيح المجهري في المعمل، ومراقبة انقسام الأجنة حتى اليوم الثالث أو الخامس."
        },
        {
          "title": "💊 نقل الأجنة والتثبيت",
          "content": "نقل أفضل جنين أو جنينين إلى تجويف الرحم بقسطرة دقيقة وغير مؤلمة، يليه بروتوكول دعم هرموني مكثف لتعزيز فرص الانغراس وحدوث الحمل."
        }
      ],
      "en": [
        {
          "title": "🔍 What is ICSI?",
          "content": "A state-of-the-art micromanipulation technique injecting a single morphologically optimal spermatozoon directly into the cytoplasm of a mature egg."
        },
        {
          "title": "⚠️ Indications for ICSI",
          "content": "Severe male factor infertility, severe oligospermia, tubal blockage, diminished ovarian reserve, or prior conventional fertilization failure."
        },
        {
          "title": "🛡️ Procedural Stages",
          "content": "Controlled ovarian hyperstimulation, ultrasound-guided oocyte retrieval, laboratory microfertilization, and embryo culture to blastocyst stage."
        },
        {
          "title": "💊 Embryo Transfer & Support",
          "content": "Atraumatic transfer of top-quality embryos into the endometrial cavity followed by targeted luteal phase hormonal support."
        }
      ]
    }
  },
  {
    "id": "ivf-treatment",
    "category": "fertility",
    "nameAR": "أطفال الأنابيب (IVF)",
    "nameEN": "In Vitro Fertilization (IVF)",
    "briefAR": "تقنية من تقنيات الإخصاب المساعد، يتم فيها تخصيب البويضات بالحيوانات المنوية داخل المختبر، ثم متابعة الأجنة قبل نقل الجنين أو الأجنة المناسبة إلى الرحم.",
    "briefEN": "Assisted reproduction technique where retrieved eggs are co-incubated with washed sperm in a controlled laboratory environment for spontaneous fertilization and embryo transfer.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم أطفال الأنابيب التقليدي (IVF)",
          "content": "تقنية الإخصاب في المختبر (IVF) التي تعتمد على وضع البويضات الناضجة المسحوبة في أطباق خاصة بالمعمل مع آلاف الحيوانات المنوية النشطة ليحدث التلقيح الطبيعي ذاتياً دون تدخل ميكانيكي مباشر."
        },
        {
          "title": "⚠️ متى يُفضل أطفال الأنابيب التقليدي؟",
          "content": "انسداد قناتي فالوب عند الزوجة مع وجود جودة وعدد ممتاز للحيوانات المنوية لدى الزوج، حالات تأخر الإنجاب غير المفسر، أو بطانة الرحم المهاجرة الخفيفة."
        },
        {
          "title": "🛡️ بيئة المعمل وحضانة الأجنة",
          "content": "استخدام حضانات ذكية توفر بيئة محاكية لرحم الأم من حيث درجات الحرارة ونسب الغازات الدقيقة، لمراقبة تطور البويضات المخصبة وانقسامها الطبيعي."
        },
        {
          "title": "💊 استكمال العلاج والنقل",
          "content": "اختيار التوقيت الأنسب لإرجاع الأجنة المخصبة إلى الرحم بناءً على جاهزية بطانة الرحم، وتجميد الأجنة الإضافية الفائضة للاستفادة منها مستقبلاً."
        }
      ],
      "en": [
        {
          "title": "🔍 Concept of Conventional IVF",
          "content": "Assisted conception wherein mature retrieved oocytes are combined with washed sperm in petri dishes for self-directed physiological fertilization."
        },
        {
          "title": "⚠️ Primary Indications",
          "content": "Bilateral tubal obstruction with normal male semen parameters, unexplained infertility, and mild endometriosis."
        },
        {
          "title": "🛡️ Laboratory Environment & Culture",
          "content": "Time-lapse and tri-gas incubators replicating physiologic maternal conditions for optimal embryonic cleaving."
        },
        {
          "title": "💊 Embryo Transfer & Cryopreservation",
          "content": "Timing intrauterine embryo transfer to optimal endometrial receptivity windows while cryopreserving surplus blastocysts."
        }
      ]
    }
  },
  {
    "id": "iui-insemination",
    "category": "fertility",
    "nameAR": "التلقيح الصناعي (IUI)",
    "nameEN": "Intrauterine Insemination (IUI)",
    "briefAR": "إجراء يتم فيه تحضير عينة من الحيوانات المنوية وإدخالها إلى الرحم في التوقيت المناسب للتبويض، ويُستخدم في حالات محددة من تأخر الإنجاب بعد تقييم الزوجين.",
    "briefEN": "Minimally invasive fertility procedure where processed, concentrated motile sperm are placed directly into the uterine cavity at the exact time of ovulation.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو التلقيح الصناعي داخل الرحم (IUI)؟",
          "content": "إجراء طبي بسيط وغير جراحي يهدف إلى زيادة عدد الحيوانات المنوية التي تصل إلى قنوات فالوب؛ حيث تُغسل عينة السائل المنوي وتُركز ثم تُحقن مباشرة داخل الرحم في يوم الإباضة."
        },
        {
          "title": "⚠️ الحالات المناسبة للتلقيح الصناعي",
          "content": "ضعف الحركة البسيط للحيوانات المنوية، مشكلات عنق الرحم أو المخاط المعادي للحيوانات المنوية، حالات تأخر الإنجاب غير معلوم السبب، بشرط سلامة قنوات فالوب تماماً."
        },
        {
          "title": "🛡️ خطوات التحضير والتوقيت",
          "content": "تنشيط خفيف للتبويض ومتابعة نمو الحويصلة بالسونار حتى وصولها لحجم 18-20 ملم، إعطاء الحقنة التفجيرية، وإجراء الحقن بعد 36 ساعة بدقة بالغة."
        },
        {
          "title": "💊 مميزات الإجراء وسهولته",
          "content": "يتم في العيادة خلال دقائق معدودة دون أي تخدير أو ألم، وتستطيع السيدة ممارسة حياتها الطبيعية مباشرة بعد الاستراحة القصيرة."
        }
      ],
      "en": [
        {
          "title": "🔍 What is IUI?",
          "content": "A non-invasive outpatient fertility procedure placing concentrated, washed motile sperm directly into the uterine fundus during ovulation."
        },
        {
          "title": "⚠️ Optimal Indications",
          "content": "Mild male factor subfertility, hostile cervical mucus, or unexplained infertility with documented bilateral tubal patency."
        },
        {
          "title": "🛡️ Ovulation Trigger & Insemination Timing",
          "content": "Mild follicle stimulation, ultrasound tracking to 18-20 mm follicle size, hCG trigger, and insemination performed precisely 36 hours later."
        },
        {
          "title": "💊 Advantages & Quick Recovery",
          "content": "Pain-free, anesthesia-free clinical procedure completed in minutes with immediate resumption of daily routines."
        }
      ]
    }
  },
  {
    "id": "ovulation-induction-monitoring",
    "category": "fertility",
    "nameAR": "تنشيط ومتابعة التبويض",
    "nameEN": "Ovulation Induction & Follicle Tracking",
    "briefAR": "متابعة نمو البويضات وتوقيت التبويض باستخدام السونار والفحوصات المناسبة، مع استخدام أدوية تنشيط التبويض عند الحاجة وفقًا لحالة المريضة وخطة العلاج.",
    "briefEN": "Monitoring follicular development and pinpointing ovulation timing using ultrasound and endocrine assays, administering personalized ovulation induction.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم تنشيط ومتابعة التبويض",
          "content": "بروتوكول علاجي يهدف إلى تحفيز المبيضين لإنتاج بويضة أو بويضات ناضجة بجودة عالية، مع المتابعة التسلسلية الدقيقة لحجم الحويصلات حتى موعد التبويض المحدد."
        },
        {
          "title": "⚠️ الفئات المستفيدة من المتابعة",
          "content": "السيدات اللاتي يعانين من تباعد الدورة، غياب التبويض الطبيعي، تكيس المبايض، أو الراغبات في تحديد الأيام الذهبية للعلاقة الزوجية لزيادة فرص الحمل الطبيعي."
        },
        {
          "title": "🛡️ الأدوية والفحوصات المتبعة",
          "content": "استخدام الأقراص المنشطة (مثل الكلوميفين أو الليتروزول) أو الحقن الهرمونية المنشطة بجرعات محسوبة بدقة لمنع التنشيط الزائد، مع متابعة قياس بطانة الرحم بالسونار."
        },
        {
          "title": "💊 تحديد توقيت الإباضة والعلاقة",
          "content": "إعطاء الحقنة التفجيرية (hCG) عند وصول البويضة للحجم المثالي، وتحديد أفضل 48 ساعة لحدوث الحمل طبيعياً أو إجراء التلقيح الصناعي."
        }
      ],
      "en": [
        {
          "title": "🔍 Follicular Induction & Monitoring",
          "content": "Medical stimulation to stimulate development of mature oocytes combined with serial ultrasound biometry tracking follicular growth."
        },
        {
          "title": "⚠️ Candidates for Protocol",
          "content": "Patients with oligomenorrhea, anovulation, PCOS, or couples seeking timed intercourse optimization."
        },
        {
          "title": "🛡️ Therapeutic Protocols & Safety",
          "content": "Administering oral agents (letrozole, clomiphene) or gonadotropins with close dosage titration to avoid hyperstimulation."
        },
        {
          "title": "💊 Trigger Administration & Timed Intercourse",
          "content": "Administering hCG trigger when lead follicles reach 18-20 mm, pinpointing the optimal 48-hour conception window."
        }
      ]
    }
  },
  {
    "id": "poor-ovulation-treatment",
    "category": "fertility",
    "nameAR": "علاج ضعف التبويض",
    "nameEN": "Ovulatory Dysfunction Management",
    "briefAR": "تحديد أسباب اضطراب أو ضعف التبويض ووضع خطة علاج مناسبة، والتي قد تشمل تنظيم نمط الحياة أو العلاج الدوائي وتنشيط التبويض وفقًا للتشخيص.",
    "briefEN": "Diagnosing causes of ovulatory dysfunction and designing comprehensive therapeutic plans combining lifestyle adjustments, endocrine regulation, and induction.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أسباب ضعف واضطراب التبويض",
          "content": "يحدث ضعف التبويض نتيجة خلل في الإشارات الهرمونية بين الغدة النخامية والمبيض، أو بسبب اضطراب الغدة الدرقية، ارتفاع هرمون الحليب (البرولاكتين)، الإجهاد المزمن، أو تذبذب الوزن."
        },
        {
          "title": "⚠️ العلامات والأعراض الشائعة",
          "content": "دورات شهرية غير منتظمة أو متباعدة (أكثر من 35 يوماً)، قلة كمية دم الدورة، عدم الشعور بآلام أو إفرازات التبويض المعتادة، وصعوبة حدوث الحمل."
        },
        {
          "title": "🛡️ التشخيص وضبط الهرمونات الأساسية",
          "content": "إجراء تحاليل هرمونات شاملة في اليوم الثاني أو الثالث للدورة، ضبط وظائف الغدة الدرقية، خفض هرمون الحليب بالأدوية المناسبة، وتحسين مقاومة الأنسولين."
        },
        {
          "title": "💊 الخطة العلاجية وإعادة التبويض",
          "content": "الجمع بين تعديل نمط الحياة، التغذية الصحية، واستخدام البروتوكولات المنشطة المناسبة لاستعادة انتظام التبويض الشهري وتحقيق الحمل بأمان."
        }
      ],
      "en": [
        {
          "title": "🔍 Etiology of Ovulatory Dysfunction",
          "content": "Arising from disrupted hypothalamic-pituitary-ovarian axis signaling, thyroid disease, hyperprolactinemia, chronic stress, or weight fluctuations."
        },
        {
          "title": "⚠️ Clinical Signs & Symptoms",
          "content": "Oligomenorrhea, amenorrhea, scanty menses, absence of mid-cycle cervical mucus, and delayed conception."
        },
        {
          "title": "🛡️ Endocrine Screening & Normalization",
          "content": "Day 2-3 hormonal assays, thyroid stabilization, dopamine agonists for prolactin reduction, and insulin sensitization."
        },
        {
          "title": "💊 Restoring Ovulatory Function",
          "content": "Coupling dietary/lifestyle interventions with targeted ovulation stimulation to re-establish regular ovulatory cycles."
        }
      ]
    }
  },
  {
    "id": "pcos-fertility",
    "category": "fertility",
    "nameAR": "تكيس المبايض وتأخر الحمل",
    "nameEN": "PCOS & Fertility Care",
    "briefAR": "تقييم حالات متلازمة تكيس المبايض وتأثيرها على انتظام التبويض وفرص الحمل، مع اختيار العلاج المناسب حسب الأعراض وعمر المريضة ووجود رغبة في الحمل.",
    "briefEN": "Evaluating polycystic ovary syndrome impact on ovulatory regularity and fertility, selecting tailored therapy based on symptoms, age, and pregnancy goals.",
    "axes": {
      "ar": [
        {
          "title": "🔍 علاقة تكيس المبايض بتأخر الحمل",
          "content": "متلازمة تكيس المبايض (PCOS) هي السبب الأول لضعف التبويض؛ حيث تؤدي زيادة سمك غلاف المبيض واضطراب الهرمونات إلى بقاء البويضات صغيرة وغير قادرة على النضج والخروج."
        },
        {
          "title": "⚠️ أعراض متلازمة تكيس المبايض",
          "content": "تباعد أو غياب الدورة الشهرية، زيادة الوزن أو صعوبة نزوله، ظهور شعر زائد غير مرغوب فيه، حب الشباب، ومظهر الحويصلات الصغيرة المتعددة بالسونار."
        },
        {
          "title": "🛡️ بروتوكول العلاج وتحسين الاستجابة",
          "content": "تقليل الوزن بنسبة 5-10% ينشط التبويض تلقائياً في كثير من الحالات، علاج مقاومة الأنسولين (مثل الميتفورمين)، واستخدام مضادات الأكسدة ومكملات الميواينوزيتول."
        },
        {
          "title": "💊 برامج التنشيط والحمل لمرضى التكيس",
          "content": "استخدام بروتوكولات التنشيط الحديثة بمثبطات الأروماتاز (الليتروزول) التي تتميز بنسب نجاح عالية وبأمان تام ضد فرط التنشيط، وصولاً للحقن المجهري للحالات المقاومة."
        }
      ],
      "en": [
        {
          "title": "🔍 PCOS Impact on Conception",
          "content": "PCOS is the leading cause of anovulatory infertility, where hormonal imbalances prevent dominant follicle maturation and ovulation."
        },
        {
          "title": "⚠️ Cardinal Signs of PCOS",
          "content": "Oligomenorrhea/amenorrhea, hyperandrogenism (hirsutism/acne), insulin resistance, and polycystic ovarian morphology on ultrasound."
        },
        {
          "title": "🛡️ Holistic Treatment & Sensitization",
          "content": "5-10% weight loss restoring spontaneous ovulation, insulin-sensitizing agents (metformin), and myo-inositol supplementation."
        },
        {
          "title": "💊 Ovulation Protocols in PCOS",
          "content": "First-line aromatase inhibitor therapy (letrozole) offering superior mono-ovulation rates and minimizing hyperstimulation risk."
        }
      ]
    }
  },
  {
    "id": "ovarian-reserve-ultrasound",
    "category": "fertility",
    "nameAR": "تقييم مخزون المبيض والسونار",
    "nameEN": "Ovarian Reserve Assessment & Ultrasound",
    "briefAR": "تقييم مخزون المبيض من خلال الفحوصات المناسبة مثل تحليل AMH والسونار لتقييم عدد الحويصلات بالمبيض، مع تفسير النتائج ضمن عمر المريضة وتاريخها الطبي.",
    "briefEN": "Assessing ovarian reserve through AMH testing and transvaginal ultrasound antral follicle counts (AFC), interpreted in light of patient age and history.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو مخزون المبيض؟",
          "content": "مخزون المبيض هو رصيد البويضات المتبقية في مبيضي المرأة وجودتها؛ وهو مؤشر بيولوجي مهم لتحديد القدرة الإنجابية وسرعة التخطيط للحمل واختيار جرعات التنشيط."
        },
        {
          "title": "⚠️ الفحوصات الذهبية لتقييم المخزون",
          "content": "1. تحليل هرمون AMH (Anti-Müllerian Hormone): يمكن إجراؤه في أي يوم بالدورة ويعكس كمية البويضات بدقة.\n2. فحص السونار المهبلي (AFC): عد الحويصلات البدائية بالمبيضين في بداية الدورة.\n3. تحليل FSH والإستراديول (E2) في اليوم الثاني أو الثالث للدورة."
        },
        {
          "title": "🛡️ قراءة وتفسير النتائج الطبية",
          "content": "يُفسر المخزون دائماً في سياق عمر السيدة؛ فالأرقام المنخفضة لا تعني استحالة الحمل بل تتطلب سرعة اتخاذ خطوات علاجية فعالة وتجنب إهدار الوقت."
        },
        {
          "title": "💊 الإجراءات الطبية وفقاً للمخزون",
          "content": "اختيار بروتوكولات تنشيط مخصصة ومكثفة لحالات المخزون المنخفض، وتوفير خيارات تجميد البويضات أو الحقن المجهري السريع للحفاظ على فرص الأمومة."
        }
      ],
      "en": [
        {
          "title": "🔍 Understanding Ovarian Reserve",
          "content": "Ovarian reserve represents the quantity of remaining primordial follicles, serving as a key prognostic marker for fertility timelines."
        },
        {
          "title": "⚠️ Gold-Standard Biomarkers",
          "content": "Serum AMH (Anti-Müllerian Hormone) testable on any cycle day, transvaginal antral follicle count (AFC), and early follicular FSH/E2."
        },
        {
          "title": "🛡️ Clinical Interpretation",
          "content": "Interpreted in the context of biological age; diminished reserve demands prompt, efficient clinical strategies rather than delayed intervention."
        },
        {
          "title": "💊 Tailored Management Strategies",
          "content": "Employing customized micro-dose stimulation protocols, embryo accumulation, or immediate IVF/egg freezing."
        }
      ]
    }
  },
  {
    "id": "endometriosis-infertility",
    "category": "fertility",
    "nameAR": "بطانة الرحم المهاجرة وتأخر الإنجاب",
    "nameEN": "Endometriosis & Fertility Management",
    "briefAR": "تشخيص وتقييم بطانة الرحم المهاجرة وتأثيرها المحتمل على الخصوبة، وتحديد العلاج المناسب حسب درجة المرض والأعراض وعمر المريضة وخطة الإنجاب.",
    "briefEN": "Diagnosing and evaluating endometriosis impact on fertility, tailoring treatment plans according to disease stage, pain, age, and reproductive goals.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هي بطانة الرحم المهاجرة؟",
          "content": "حالة تنمو فيها أنسجة شبيهة ببطانة الرحم خارج تجويف الرحم (على المبيضين كأكياس الشوكولاتة، أو قنوات فالوب، أو الحوض)، مسببة التهابات مزمنة والتصاقات تؤثر على الخصوبة."
        },
        {
          "title": "⚠️ كيف تؤثر على حدوث الحمل؟",
          "content": "إحداث التصاقات تشوه مجرى قنوات فالوب، تكوين أكياس شيكولاتة تقلل من جودة ومخزون البويضات، وإفراز مواد كيميائية التهابية تعيق تلقيح البويضة وانغراس الجنين."
        },
        {
          "title": "🛡️ وسائل التشخيص المتطورة",
          "content": "السونار المهبلي المتخصص ثلاثي الأبعاد لتشخيص أكياس الشوكولاتة وبؤر الحوض العميقة، الرنين المغناطيسي (MRI)، ومنظار البطن الجراحي التشخيصي."
        },
        {
          "title": "💊 الخيارات العلاجية والإنجابية",
          "content": "الموازنة الدقيقة بين الجراحة التحفظية بالمنظار لإزالة الالتصاقات دون الإضرار بنسيج المبيض، والتوجه المباشر للحقن المجهري لتحقيق أعلى فرص نجاح للحمل."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Endometriosis?",
          "content": "A condition where endometrial-like tissue implants outside the uterus (ovarian endometriomas, peritoneal/tubal lesions), causing pelvic inflammation."
        },
        {
          "title": "⚠️ Impact on Conception",
          "content": "Pelvic adhesions distorting tubal architecture, ovarian endometrioma reducing egg reserve/quality, and pelvic inflammatory cytokines impeding implantation."
        },
        {
          "title": "🛡️ Advanced Diagnostics",
          "content": "High-resolution transvaginal ultrasound mapping endometriomas, pelvic MRI for deep infiltrating lesions, and diagnostic laparoscopy."
        },
        {
          "title": "💊 Fertility-Preserving Treatment",
          "content": "Conservative laparoscopic excision preserving ovarian cortex versus direct transition to IVF/ICSI for optimal pregnancy success."
        }
      ]
    }
  },
  {
    "id": "fallopian-tubes-patency",
    "category": "fertility",
    "nameAR": "فحص قنوات فالوب وتأخر الحمل",
    "nameEN": "Fallopian Tubal Patency & Fertility",
    "briefAR": "تقييم سلامة وانفتاح قنوات فالوب ضمن فحوصات تأخر الإنجاب، وتحديد وسيلة الفحص أو التدخل المناسبة وفقًا للتاريخ الطبي والحالة.",
    "briefEN": "Assessing tubal health and patency as a cornerstone of fertility evaluation, selecting optimal screening or interventional modalities based on patient history.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أهمية قنوات فالوب في الإخصاب",
          "content": "قنوات فالوب هي الممر الحيوي الذي تلتقي فيه البويضة بالحيوان المنوي ليحدث الإخصاب؛ لذا فإن انسداد القناتين أو تلف أهدابهما يمنع حدوث الحمل الطبيعي تماماً."
        },
        {
          "title": "⚠️ أسباب انسداد وتلف القنوات",
          "content": "التهابات الحوض السابقة (PID)، العمليات الجراحية السابقة بالبطن أو الحوض، بطانة الرحم المهاجرة، الحمل المنتبذ خارج الرحم سابقاً، أو تراكم السوائل بالقناة (Hydrosalpinx)."
        },
        {
          "title": "🛡️ وسائل فحص قنوات فالوب",
          "content": "1. الأشعة بالصبغة على الرحم والأنابيب (HSG): الفحص الكلاسيكي لتأكيد الانسياب.\n2. السونار بالرغوة أو المحلول الملحي (HyCoSy): فحص دقيق ومريح بالعيادة.\n3. منظار البطن الجراحي مع اختبار الصبغة: المعيار الأدق عالمياً."
        },
        {
          "title": "💊 الخيارات العلاجية والحلول الإنجابية",
          "content": "تسليك الالتصاقات البسيطة بالمنظار، فصل أو تدبيس القناة المصابة بارتشاح صديدي لمنع تأثيره السام على بطانة الرحم، أو اللجوء للحقن المجهري كحل نهائي يتجاوز قنوات فالوب تماماً."
        }
      ],
      "en": [
        {
          "title": "🔍 Importance of Tubal Patency",
          "content": "Fallopian tubes provide the physiological site of fertilization; tubal obstruction or cilia damage precludes natural conception."
        },
        {
          "title": "⚠️ Causes of Tubal Pathology",
          "content": "Pelvic inflammatory disease (PID), prior pelvic surgeries, endometriosis, prior ectopic pregnancy, or hydrosalpinx accumulation."
        },
        {
          "title": "🛡️ Diagnostic Screening Modalities",
          "content": "Hysterosalpingography (HSG), foam sonosalpingography (HyCoSy), and laparoscopic chromopertubation (the gold standard)."
        },
        {
          "title": "💊 Corrective & Assisted Solutions",
          "content": "Laparoscopic adhesiolysis, clipping/removal of toxic hydrosalpinx prior to IVF, or proceeding directly with ICSI/IVF bypassing the tubes."
        }
      ]
    }
  },
  {
    "id": "egg-freezing-fertility-preservation",
    "category": "fertility",
    "nameAR": "تجميد البويضات وحفظ الخصوبة",
    "nameEN": "Oocyte Cryopreservation (Egg Freezing)",
    "briefAR": "حفظ البويضات بالتجميد لاستخدامها مستقبلًا في حالات مختارة، بعد تقييم مخزون المبيض وعمر المريضة ووضع خطة تنشيط وسحب البويضات المناسبة.",
    "briefEN": "Cryopreserving mature oocytes for future reproductive use, following ovarian reserve testing, biological age evaluation, and personalized stimulation protocols.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو تجميد البويضات؟",
          "content": "إجراء طبي متطور يتيح للمرأة سحب بويضاتها الناضجة وتجميدها بتقنية التزجيج السريع (Vitrification) وحفظها في النيتروجين السائل لسنوات طويلة مع الحفاظ التام على جودتها وعمرها البيولوجي."
        },
        {
          "title": "⚠️ دواعي تجميد البويضات",
          "content": "الحفاظ على الخصوبة قبل تلقي علاجات الأورام أو الجراحات الحوضية، حالات انخفاض مخزون المبيض المبكر، أو لأسباب اجتماعية لتأجيل الإنجاب مع الحفاظ على شباب البويضات."
        },
        {
          "title": "🛡️ خطوات التنشيط والسحب",
          "content": "تنشيط المبيض لمدة 10-12 يوماً بالهرمونات، متابعة نمو الحويصلات بالسونار، ثم سحب البويضات بعملية يوم واحد بسيطة لا تستغرق أكثر من 15 دقيقة تحت تخدير خفيف."
        },
        {
          "title": "💊 الأمان ونسب النجاح المستقبلية",
          "content": "تقنية التزجيج الحديثة تضمن بقاء أكثر من 95% من البويضات سليمة تماماً بعد إذابتها مستقبلاً، واستخدامها في الحقن المجهري بنسب نجاح مماثلة لعمر المرأة وقت التجميد."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Egg Freezing?",
          "content": "An advanced reproductive preservation technique using ultra-rapid vitrification to freeze mature eggs in liquid nitrogen, pausing their biological clock."
        },
        {
          "title": "⚠️ Primary Indications",
          "content": "Fertility preservation prior to oncological therapy, planned ovarian surgery, premature diminished reserve, or elective social fertility preservation."
        },
        {
          "title": "🛡️ Stimulation & Retrieval Process",
          "content": "10-12 days of gonadotropin stimulation, serial ultrasound tracking, and a brief 15-minute outpatient retrieval under light sedation."
        },
        {
          "title": "💊 Safety & Post-Thaw Viability",
          "content": "Modern vitrification achieves >95% post-thaw survival rates, enabling future ICSI success rates aligned with the maternal age at the time of cryopreservation."
        }
      ]
    }
  },
  {
    "id": "embryo-cryopreservation",
    "category": "fertility",
    "nameAR": "تجميد الأجنة",
    "nameEN": "Embryo Cryopreservation & Storage",
    "briefAR": "حفظ الأجنة المناسبة بالتجميد لاستخدامها في محاولات لاحقة من العلاج، وفقًا لخطة الحقن المجهري أو أطفال الأنابيب وحالة الزوجين.",
    "briefEN": "Cryopreserving surplus high-grade blastocysts using vitrification for subsequent frozen embryo transfers (FET), maximizing cumulative pregnancy success.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو تجميد الأجنة؟",
          "content": "حفظ الأجنة الفائضة عالية الجودة الناتجة عن محاولة الحقن المجهري أو أطفال الأنابيب باستخدام تقنية التزجيج فائق السرعة، لاستخدامها في محاولات إرجاع قادمة دون الحاجة لتكرار التنشيط وسحب البويضات."
        },
        {
          "title": "⚠️ دواعي ومزايا تجميد الأجنة",
          "content": "وجود أجنة فائضة جيدة، تجنب متلازمة فرط تنشيط المبيض (OHSS)، إتاحة الفرصة لتحضير بطانة الرحم في دورة طبيعية لاحقة، أو تجميد الأجنة لحين وصول نتائج الفحص الوراثي (PGT)."
        },
        {
          "title": "🛡️ معايير حفظ الأجنة بالمعمل",
          "content": "تجميد الأجنة في مرحلة البلاستوسيست (اليوم الخامس أو السادس) حيث تكون الأقوى والأعلى في فرص الانغراس، وحفظها في خزانات نيتروجين سائل مشفرة بنظام تتبع إلكتروني صارم."
        },
        {
          "title": "💊 دورة نقل الأجنة المجمدة (FET)",
          "content": "دورة سهلة للغاية تتضمن تحضير بطانة الرحم بهرمونات بسيطة، إذابة الجنين بأمان، ونقله للرحم بدون ألم بنسب نجاح تتساوى وأحياناً تتفوق على نقل الأجنة الطازجة."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Embryo Cryopreservation?",
          "content": "Ultra-rapid vitrification of surplus high-grade embryos resulting from an IVF/ICSI cycle, preserving them for future transfers without repeated stimulation."
        },
        {
          "title": "⚠️ Indications & Clinical Rationale",
          "content": "Excess blastocysts, OHSS prevention (\"freeze-all\" protocol), preparing endometrium in a non-stimulated cycle, or awaiting PGT results."
        },
        {
          "title": "🛡️ Laboratory Cryostorage Standards",
          "content": "Vitrification at the day 5/6 blastocyst stage and long-term bio-banking in electronically monitored liquid nitrogen tanks."
        },
        {
          "title": "💊 Frozen Embryo Transfer (FET) Protocol",
          "content": "Endometrial priming with oral/transdermal estrogen, thawing the blastocyst with high post-thaw recovery, and painless outpatient transfer."
        }
      ]
    }
  },
  {
    "id": "gender-selection",
    "category": "fertility",
    "nameAR": "تحديد نوع الجنين",
    "nameEN": "Gender Selection & Family Balancing",
    "briefAR": "يمكن تحديد نوع الجنين ضمن برامج الإخصاب المساعد من خلال فحص الأجنة وراثيًا قبل نقلها إلى الرحم، وفقًا للتقييم الطبي والإجراءات المتبعة لكل حالة.",
    "briefEN": "Determining embryo gender within assisted reproduction programs via pre-implantation genetic screening prior to uterine transfer, adhering to ethical standards.",
    "axes": {
      "ar": [
        {
          "title": "🔍 آلية تحديد جنس الجنين",
          "content": "تحديد جنس المولود (ذكر أو أنثى) يتم بدقة بالغة تقارب 100% عبر فحص الكروموسومات للأجنة الناتجة عن الحقن المجهري، قبل إعادة نقل الجنين المختار إلى رحم الأم."
        },
        {
          "title": "⚠️ الدواعي الطبية والاجتماعية",
          "content": "1. دواعي طبية جينية: تجنب انتقال أمراض وراثية خطيرة مرتبطة بالجنس (مرتبطة بالكروموسوم X مثل نزف الدم الهيموفيليا أو ضمور العضلات دوشين).\n2. دواعي التوازن الأسري: تحقيق رغبة الزوجين في موازنة جنس أطفال العائلة."
        },
        {
          "title": "🛡️ خطوات الفحص في معمل الأجنة",
          "content": "سحب خزعة خلوية دقيقة (1 إلى 3 خلايا) من الطبقة المغذية للجنين (Trophectoderm) في اليوم الخامس دون التأثير على نمو الجنين، وإرسالها لمعمل الجينات لفحص الكروموسومات الجنسية (XX أو XY)."
        },
        {
          "title": "💊 نقل الأجنة السليمة",
          "content": "نقل الجنين السليم ذي الجنس المطلوب إلى الرحم بعد تجهيز البطانة جيداً، مع تجميد باقي الأجنة السليمة للاستفادة منها مستقبلاً."
        }
      ],
      "en": [
        {
          "title": "🔍 Mechanism of Gender Selection",
          "content": "Determining fetal sex with near 100% laboratory accuracy through chromosomal screening of ICSI embryos prior to uterine transfer."
        },
        {
          "title": "⚠️ Clinical Indications",
          "content": "Preventing X-linked hereditary diseases (e.g. Hemophilia, Duchenne Muscular Dystrophy), or fulfilling family balancing choices."
        },
        {
          "title": "🛡️ Laboratory Biopsy Procedure",
          "content": "Laser-assisted trophectoderm biopsy on day 5 blastocysts without damaging embryonic inner cell mass, followed by genetic sex chromosome analysis."
        },
        {
          "title": "💊 Transfer of Selected Embryos",
          "content": "Transferring chromosomally normal embryos of the desired sex into the prepared receptive endometrium."
        }
      ]
    }
  },
  {
    "id": "pgt-genetic-testing",
    "category": "fertility",
    "nameAR": "الفحص الوراثي للأجنة قبل النقل (PGT)",
    "nameEN": "Pre-implantation Genetic Testing (PGT)",
    "briefAR": "فحص الأجنة الناتجة عن الإخصاب المساعد قبل نقلها إلى الرحم للكشف عن حالات وراثية أو تغيرات كروموسومية محددة، عندما توجد دواعي طبية مناسبة لإجراء الفحص.",
    "briefEN": "Genetic screening of IVF-generated embryos prior to transfer to identify aneuploidies or specific monogenic inherited disorders, enhancing pregnancy success.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو الفحص الوراثي للأجنة (PGT)؟",
          "content": "تقنية متقدمة جداً تتيح فحص المادة الوراثية للأجنة في معمل الحقن المجهري قبل نقلها للرحم، للتأكد من سلامتها الكروموسومية وخلوها من الأمراض الجينية والتشوهات."
        },
        {
          "title": "⚠️ أنواع الفحص الوراثي (PGT)",
          "content": "1. PGT-A: فحص عدد الكروموسومات (استبعاد متلازمة داون والتثلثات الصبغية).\n2. PGT-M: فحص الأمراض الوراثية وحيدة الجين (مثل الثلاسيميا والضمور العضلي).\n3. PGT-SR: فحص العيوب الهيكلية للكروموسومات كالانتقالات الصبغية."
        },
        {
          "title": "🛡️ الفئات المستفيدة من الفحص",
          "content": "تقدم عمر الزوجة (فوق 35 عاماً)، تاريخ الإجهاض المتكرر، فشل الحقن المجهري المتكرر، أو وجود تاريخ عائلي لأمراض جينية وراثية."
        },
        {
          "title": "💊 الفوائد الإكلينيكية ونسب النجاح",
          "content": "رفع معدلات انغراس الأجنة إلى أكثر من 70%، خفض احتمالات الإجهاض إلى أدنى مستوياتها، وضمان ولادة طفل سليم معافى وراثياً بإذن الله."
        }
      ],
      "en": [
        {
          "title": "🔍 What is PGT?",
          "content": "Advanced molecular analysis screening embryo genetics before transfer to ensure chromosomal euploidy and rule out specific gene mutations."
        },
        {
          "title": "⚠️ PGT Classifications",
          "content": "PGT-A (aneuploidy screening such as Down syndrome), PGT-M (monogenic gene disorders like Thalassemia), and PGT-SR (structural rearrangements)."
        },
        {
          "title": "🛡️ Target Candidates",
          "content": "Advanced maternal age, recurrent pregnancy loss, recurrent implantation failure, or carriers of known familial hereditary mutations."
        },
        {
          "title": "💊 Clinical Outcomes",
          "content": "Elevates clinical pregnancy rates above 70%, dramatically lowers miscarriage risks, and secures births of genetically healthy children."
        }
      ]
    }
  },
  {
    "id": "recurrent-ivf-failure",
    "category": "fertility",
    "nameAR": "فشل الحقن المجهري المتكرر",
    "nameEN": "Recurrent Implantation Failure (RIF)",
    "briefAR": "إعادة تقييم الحالات التي لم يحدث فيها حمل بعد محاولات سابقة للحقن المجهري، ومراجعة العوامل المتعلقة بالبويضات والحيوانات المنوية والأجنة والرحم لتحديد الخطوات المناسبة للمحاولة التالية.",
    "briefEN": "Comprehensive re-evaluation for cases with unestablished pregnancy following multiple IVF cycles, investigating gametes, blastocyst genetics, and endometrial receptivity.",
    "axes": {
      "ar": [
        {
          "title": "🔍 تعريف فشل الحقن المجهري المتكرر (RIF)",
          "content": "عدم حدوث حمل بعد نقل أجنة عالية الجودة في 3 محاولات حقن مجهري متتالية أو بعد نقل عدد كافٍ من الأجنة، مما يستدعي خطة استقصاء علمية متعمقة لمعرفة السبب الكامن."
        },
        {
          "title": "⚠️ العوامل والأسباب المحتملة",
          "content": "1. عوامل جنينية: خلل كروموسومي خفي بالأجنة، أو تكسر الحمض النووي للحيوانات المنوية (DNA Fragmentation).\n2. عوامل رحمية: التصاقات، زوائد لحمية، حاجز رحمي، أو التهابات بطانة الرحم المزمنة.\n3. عوامل مناعية وتخثرية: اضطرابات المناعة الذاتية وتخثر الدم."
        },
        {
          "title": "🛡️ الفحوصات المتطورة لحالات الفشل المتكرر",
          "content": "منظار الرحم التشخيصي، فحص نافذة الانغراس وبطانة الرحم (ERA Test)، تحليل الأجسام المضادة والمناعة، واختبار تكسير المادة الوراثية للحيوانات المنوية."
        },
        {
          "title": "💊 الحلول والبروتوكولات الجديدة",
          "content": "تطبيق الفحص الوراثي للأجنة (PGT-A)، علاج التهابات البطانة، استخدام بروتوكولات التعديل المناعي ومميعات الدم، وتغيير بروتوكول التنشيط والتحضير للوصول إلى حمل ناجح."
        }
      ],
      "en": [
        {
          "title": "🔍 Defining Recurrent Implantation Failure",
          "content": "Failure to achieve clinical pregnancy after the transfer of high-grade embryos across 3 consecutive cycles, demanding root-cause investigation."
        },
        {
          "title": "⚠️ Underlying Etiologies",
          "content": "Embryonic chromosomal aneuploidy, high sperm DNA fragmentation, chronic endometritis, intrauterine adhesions, or maternal thrombophilic disorders."
        },
        {
          "title": "🛡️ Advanced Diagnostic Panel",
          "content": "Hysteroscopy, Endometrial Receptivity Analysis (ERA), immunologic assays, and advanced sperm DNA integrity testing."
        },
        {
          "title": "💊 Customized Therapeutic Solutions",
          "content": "Routine PGT-A screening, treating chronic endometritis with targeted antibiotics, tailored progesterone priming, and immune-modulating regimens."
        }
      ]
    }
  },
  {
    "id": "recurrent-loss-fertility",
    "category": "fertility",
    "nameAR": "الإجهاض المتكرر وتأخر الإنجاب",
    "nameEN": "Recurrent Pregnancy Loss & Fertility",
    "briefAR": "تقييم الأسباب المحتملة لتكرار فقدان الحمل من خلال التاريخ الطبي والفحوصات المناسبة، ثم وضع خطة للعلاج والاستعداد للحمل التالي وفقًا لنتائج التقييم.",
    "briefEN": "Investigating potential causes of recurrent pregnancy loss through targeted diagnostics, creating a tailored roadmap for successful future gestation.",
    "axes": {
      "ar": [
        {
          "title": "🔍 الترابط بين الإجهاض المتكرر وتأخر الإنجاب",
          "content": "تكرار فقدان الحمل يمثل عبئاً نفسياً وجسدياً كبيراً وغالباً ما يترافق مع تأخر في حدوث الحمل التالي؛ لذا يتطلب خطة علاجية وقائية استباقية قبل حدوث الحمل القادم."
        },
        {
          "title": "⚠️ الأسباب الطبية الأكثر شيوعاً",
          "content": "خلل الكروموسومات في البويضات أو الأجنة، متلازمة الأجسام المضادة للفوسفوليبيد وتخثر الدم، العيوب التشريحية للرحم (الحاجز الرحمي)، واضطراب الهرمونات والغدد."
        },
        {
          "title": "🛡️ الفحوصات التشخيصية الضرورية",
          "content": "تحاليل التجلط الوراثي والمكتسب، فحص الكروموسومات للزوجين (Karyotype)، السونار ثلاثي الأبعاد لتقييم تجويف الرحم، وتحاليل الأجسام المضادة للغدة الدرقية."
        },
        {
          "title": "💊 الخطة الوقائية للحمل القادم",
          "content": "إصلاح الحاجز الرحمي بالمنظار إن وُجد، استخدام مميعات الدم ومضادات التخثر (الأسبرين وحقن السيولة) منذ اليوم الأول للتبويض أو الحمل، والدعم الهرموني المكثف."
        }
      ],
      "en": [
        {
          "title": "🔍 Nexus of Recurrent Loss & Subfertility",
          "content": "Recurrent pregnancy loss imposes significant reproductive delay, necessitating comprehensive workup before entering the next conception cycle."
        },
        {
          "title": "⚠️ Established Etiologies",
          "content": "Embryonic chromosomal anomalies, Antiphospholipid Syndrome (APS), uterine structural defects (septate uterus), and endocrinopathies."
        },
        {
          "title": "🛡️ Essential Diagnostic Panel",
          "content": "Parental karyotyping, hereditary thrombophilia screening, 3D transvaginal sonography, and autoimmune thyroid antibodies."
        },
        {
          "title": "💊 Proactive Therapeutic Regimen",
          "content": "Hysteroscopic metroplasty, prophylactic anticoagulation (aspirin and LMWH heparin), and early high-dose luteal support."
        }
      ]
    }
  },
  {
    "id": "fertility-pregnancy-after-ivf",
    "category": "fertility",
    "nameAR": "متابعة الحمل بعد الحقن المجهري",
    "nameEN": "Post-IVF Pregnancy Care",
    "briefAR": "متابعة الحمل بعد نقل الأجنة والتأكد من تطوره في مراحله الأولى، ثم استكمال متابعة الحمل وفقًا لحالة الأم والجنين.",
    "briefEN": "Careful monitoring of post-embryo transfer gestation through early developmental milestones, transitioning into personalized antenatal care.",
    "axes": {
      "ar": [
        {
          "title": "🔍 خصوصية الحمل الناتج عن الإخصاب المساعد",
          "content": "حمل عزيز وثمين يتطلب دعماً هرمونياً ومتابعة إكلينيكية دقيقة لحماية الجنين والتأكد من انغراسه وثباته في مراحله الحساسة الأولى."
        },
        {
          "title": "⚠️ محطات الأسابيع الأولى بعد النقل",
          "content": "تحليل هرمون الحمل الرقمي (Beta-hCG) في اليوم 14 من النقل وتكراره بعد 48 ساعة لمتابعة تضاعفه، ثم السونار الأول في الأسبوع الخامس إلى السادس لرصد كيس الحمل وسماع نبض الجنين."
        },
        {
          "title": "🛡️ بروتوكول استمرار وسحب الأدوية",
          "content": "الالتزام الصارم بمثبتات الحمل وأدوية دعم بطانة الرحم ومميعات الدم، مع سحبها تدريجياً وبأمان بين الأسبوعين 10 و12 بعد اكتمال نمو المشيمة."
        },
        {
          "title": "💊 الانتقال إلى رعاية الحمل الكاملة",
          "content": "متابعة نمو الجنين، الاطمئنان على طول عنق الرحم، وإجراء الفحوصات الروتينية والتشريحية لضمان ولادة هادئة ومولود سليم معافى."
        }
      ],
      "en": [
        {
          "title": "🔍 Nature of Post-ART Gestations",
          "content": "Precious pregnancies demanding dedicated early luteal support and frequent clinical monitoring to confirm stable embryonic implantation."
        },
        {
          "title": "⚠️ Early Milestones Post-Transfer",
          "content": "Quantitative serum beta-hCG at day 14 with 48-hour doubling assessment, followed by 6-week ultrasound confirming intrauterine sac and viability."
        },
        {
          "title": "🛡️ Luteal Medication Tapering",
          "content": "Strict continuation of progesterone and supportive therapies, gradually tapering off safely at weeks 10-12 as the placenta assumes hormone synthesis."
        },
        {
          "title": "💊 Transition to Full Antenatal Care",
          "content": "Cervical surveillance, detailed anomaly scans, and specialized delivery planning to achieve a safe birth."
        }
      ]
    }
  },
  {
    "id": "diagnostic-hysteroscopy",
    "category": "surgery",
    "nameAR": "منظار الرحم التشخيصي",
    "nameEN": "Diagnostic Hysteroscopy",
    "briefAR": "فحص تجويف الرحم من الداخل باستخدام منظار رفيع يتم إدخاله عبر عنق الرحم، للمساعدة في تشخيص أسباب النزيف غير الطبيعي، وتأخر الحمل، والإجهاض المتكرر، وبعض مشكلات تجويف الرحم.",
    "briefEN": "Direct visualization of the uterine cavity using a micro-hysteroscope via the cervix to diagnose abnormal uterine bleeding, subfertility, recurrent miscarriages, and intracavitary lesions.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو منظار الرحم التشخيصي؟",
          "content": "إجراء تشخيصي دقيق وغير جراحي يتم فيه إدخال منظار بصري فائق الدقة مزود بكاميرا وألياف ضوئية عبر مجرى المهبل وعنق الرحم لرؤية بطانة وتجويف الرحم مباشرة على شاشة عالية الدقة دون أي جروح بالبطن."
        },
        {
          "title": "⚠️ دواعي إجراء المنظار التشخيصي",
          "content": "النزيف المهبلي غير الطبيعي أو النزيف بعد انقطاع الطمث، تأخر الإنجاب وفشل الحقن المجهري، حالات الإجهاض المتكرر، الاشتباه في وجود زوائد لحمية أو أورام ليفية أو عيوب تشريحية بالحاجز الرحمي."
        },
        {
          "title": "🛡️ خطوات التحضير ومميزات الإجراء",
          "content": "يُفضل إجراؤه في الأيام الأولى بعد انتهاء الدورة الشهرية حيث تكون بطانة الرحم رقيقة، ويتميز بأنه سريع وآمن تماماً، ويتم غالباً تحت تخدير موضعي أو خفيف كإجراء يوم واحد يتيح الخروج الفوري."
        },
        {
          "title": "💊 الانتقال إلى العلاج الفوري",
          "content": "في حال اكتشاف أي مشكلة موضعية (كزائدة لحمية أو التصاقات بسيطة)، يمكن تحويل الإجراء فوراً إلى منظار جراحي لعلاجها في الجلسة نفسها وتوفير وقت وتكلفة على المريضة."
        }
      ],
      "en": [
        {
          "title": "🔍 Description & Technique",
          "content": "A high-precision endoscopic visualization of the endometrial cavity through a slender telescope inserted via the cervix without abdominal incisions."
        },
        {
          "title": "⚠️ Clinical Indications",
          "content": "Abnormal uterine bleeding, postmenopausal bleeding, recurrent pregnancy loss, recurrent IVF implantation failure, and suspected uterine polyps or intracavitary fibroids."
        },
        {
          "title": "🛡️ Timing & Preparation",
          "content": "Optimally performed in the early postmenstrual proliferative phase when the endometrium is thinnest, conducted as an outpatient procedure."
        },
        {
          "title": "💊 \"See-and-Treat\" Capability",
          "content": "Enables immediate therapeutic intervention in the same session if focal pathology (polyps, synechiae) is detected."
        }
      ]
    }
  },
  {
    "id": "operative-hysteroscopy",
    "category": "surgery",
    "nameAR": "منظار الرحم الجراحي",
    "nameEN": "Operative Hysteroscopy",
    "briefAR": "استخدام منظار الرحم لإجراء تدخلات علاجية داخل تجويف الرحم دون الحاجة إلى شق جراحي بالبطن، مثل إزالة الزوائد اللحمية وبعض الأورام الليفية والالتصاقات داخل الرحم.",
    "briefEN": "Minimally invasive hysteroscopic surgery performing therapeutic intra-cavitary interventions without abdominal incisions, including myomectomy, polypectomy, and adhesiolysis.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ماهية منظار الرحم الجراحي",
          "content": "استخدام منظار رحمي متطور مزود بقنوات تشغيلية تتيح إدخال أدوات جراحية دقيقة أو أقطاب كهروحرارية (Resectoscope) لإصلاح وعلاج أمراض تجويف الرحم بدقة مجهرية متناهية دون مساس بجدار البطن."
        },
        {
          "title": "⚠️ التدخلات العلاجية الممكنة",
          "content": "استئصال الزوائد اللحمية المسببة للنزيف، إزالة الأورام الليفية الناتئة داخل التجويف (Submucous Fibroids)، فك الالتصاقات الشديدة (متلازمة أشرمان)، واستئصال الحاجز الرحمي."
        },
        {
          "title": "🛡️ مميزات المنظار مقارنة بالجراحة المفتوحة",
          "content": "عدم وجود أي جروح في البطن، انعدام الألم تقريباً بعد العملية، الحفاظ التام على سلامة عضلات الرحم، وفترة تعافٍ سريعة جداً تمكن السيدة من العودة لعملها خلال 24 إلى 48 ساعة."
        },
        {
          "title": "💊 التعافي والنتائج الإنجابية",
          "content": "يحسن الإجراء بشكل ملحوظ من انتظام نزول الدورة الشهرية، يقضي تماماً على النزيف غير المبرر، ويرفع فرص انغراس الأجنة وحدوث الحمل في دورات الحقن المجهري التالية."
        }
      ],
      "en": [
        {
          "title": "🔍 Overview & Principles",
          "content": "Utilizing specialized operating resectoscopes equipped with micro-instruments or bipolar electrosurgery to surgically correct intrauterine pathologies."
        },
        {
          "title": "⚠️ Therapeutic Indications",
          "content": "Resection of submucosal fibroids, hysteroscopic polypectomy, lysis of severe intrauterine adhesions (Asherman syndrome), and uterine septum correction."
        },
        {
          "title": "🛡️ Advantages Over Open Surgery",
          "content": "Zero abdominal scars, minimal postoperative pain, preservation of myometrial integrity, and rapid return to routine activities within 24-48 hours."
        },
        {
          "title": "💊 Reproductive Outcomes",
          "content": "Resolves abnormal bleeding patterns and dramatically optimizes endometrial receptivity for natural or assisted conception."
        }
      ]
    }
  },
  {
    "id": "diagnostic-laparoscopy",
    "category": "surgery",
    "nameAR": "منظار البطن التشخيصي",
    "nameEN": "Diagnostic Laparoscopy",
    "briefAR": "إجراء جراحي يتم من خلال فتحات صغيرة بالبطن لفحص الرحم والمبيضين وقنوات فالوب والحوض، ويُستخدم لتشخيص بعض أسباب آلام الحوض وتأخر الإنجاب وبطانة الرحم المهاجرة.",
    "briefEN": "Minimally invasive keyhole surgical exploration inspecting the uterus, ovaries, fallopian tubes, and pelvic peritoneum to diagnose causes of pelvic pain, infertility, and endometriosis.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو منظار البطن التشخيصي؟",
          "content": "المعيار الذهبي عالمياً للرؤية المباشرة لأعضاء الحوض والبطن؛ يتم عبر فتحة جراحية ميكروسكوبية عند السرة (حوالي 5 إلى 10 ملم) لإدخال كاميرا المنظار التلسكوبية وفحص الأعضاء بتكبير بصري فائق."
        },
        {
          "title": "⚠️ الحالات التي تستدعي المنظار التشخيصي",
          "content": "تأخر الإنجاب مجهول السبب بعد استنفاد الفحوصات الروتينية، الاشتباه في بطانة الرحم المهاجرة الخفيفة غير المرئية بالسونار، آلام الحوض المزمنة غير المبررة، وفحص نفاذية قنوات فالوب باختبار الصبغة."
        },
        {
          "title": "🛡️ الأمان والتقنية الجراحية",
          "content": "يتم تحت التخدير الكلي باستخدام غاز ثاني أكسيد الكربون الطبي لنفخ تجويف البطن برفق وتوفير مجال رؤية واسع وآمن لحماية الأوعية الدموية والأمعاء."
        },
        {
          "title": "💊 إمكانية العلاج المتزامن",
          "content": "يمتاز المنظار بإمكانية التعامل الفوري مع أي اكتشافات غير طبيعية (مثل كي بؤر بطانة الرحم أو فك الالتصاقات) أثناء نفس الإجراء الجراحي."
        }
      ],
      "en": [
        {
          "title": "🔍 Surgical Concept",
          "content": "The gold standard for direct pelvic cavity inspection via a sub-centimeter umbilical incision utilizing high-definition optical laparoscopes."
        },
        {
          "title": "⚠️ Diagnostic Indications",
          "content": "Unexplained subfertility, suspected peritoneal endometriosis undetectable on ultrasound, chronic pelvic pain, and chromopertubation tubal testing."
        },
        {
          "title": "🛡️ Safety & Anesthesia",
          "content": "Performed under general anesthesia with low-pressure pneumoperitoneum ensuring clear visualization and tissue safety."
        },
        {
          "title": "💊 Simultaneous Therapy",
          "content": "Immediate progression from diagnostic assessment to therapeutic intervention (coagulation of endometriotic implants, adhesiolysis)."
        }
      ]
    }
  },
  {
    "id": "operative-laparoscopy",
    "category": "surgery",
    "nameAR": "منظار البطن الجراحي",
    "nameEN": "Operative Laparoscopy",
    "briefAR": "إجراء العمليات النسائية من خلال فتحات صغيرة في البطن باستخدام المنظار والأدوات الجراحية، ويُستخدم في علاج عدد من أمراض الرحم والمبيضين وقنوات فالوب.",
    "briefEN": "Advanced minimally invasive gynecologic surgery performing complex therapeutic interventions via small puncture incisions, treating uterine, ovarian, and tubal disorders.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم جراحة المناظير المتقدمة",
          "content": "إجراء أعقد العمليات الجراحية النسائية من خلال 2 إلى 3 فتحات صغيرة جداً في جدار البطن لا تتعدى 5-10 ملم، باستخدام أدوات متطورة وشاشات 4K ثلاثية الأبعاد توفر دقة تفوق الجراحة المفتوحة."
        },
        {
          "title": "⚠️ نطاق العمليات التي تُجرى بالمنظار",
          "content": "استئصال أكياس المبايض، استئصال الأورام الليفية، تسليك الالتصاقات الحوضية، علاج الحمل خارج الرحم، تدبيس قنوات فالوب، وصولاً إلى استئصال الرحم الكلي بالمنظار."
        },
        {
          "title": "🛡️ مزايا المنظار الجراحي للمريضة",
          "content": "ألم أقل بدرجة هائلة بعد العملية، فقدان دم شبه منعدم، غياب الندبات الجراحية الكبيرة المشوهة للبطن، انخفاض شديد في احتمالات العدوى، والخروج من المستشفى في نفس اليوم أو اليوم التالي."
        },
        {
          "title": "💊 فترة النقاهة والتعافي",
          "content": "تعافٍ سريع ومريح يمكّن المريضة من استعادة نشاطها الحركي واليومي خلال أيام معدودة مقارنة بأسابيع طويلة في الجراحات التقليدية المفتوحة."
        }
      ],
      "en": [
        {
          "title": "🔍 Advanced Laparoscopic Surgery",
          "content": "Performing complex pelvic surgeries through 2-3 keyhole incisions (5-10 mm) using sophisticated endoscopic tools and 4K optical visualization."
        },
        {
          "title": "⚠️ Scope of Interventions",
          "content": "Ovarian cystectomy, myomectomy, pelvic adhesiolysis, ectopic pregnancy management, salpingectomy, and total laparoscopic hysterectomy."
        },
        {
          "title": "🛡️ Clinical Advantages",
          "content": "Significantly reduced pain, minimal blood loss, cosmetically superior incisions, minimal infection risk, and same-day or 24-hour discharge."
        },
        {
          "title": "💊 Recovery & Rehabilitation",
          "content": "Rapid functional recovery enabling resumption of personal and professional life within days compared to weeks for laparotomy."
        }
      ]
    }
  },
  {
    "id": "laparoscopic-myomectomy",
    "category": "surgery",
    "nameAR": "استئصال الأورام الليفية بالمنظار",
    "nameEN": "Laparoscopic Myomectomy",
    "briefAR": "إزالة الأورام الليفية المناسبة للجراحة بالمنظار مع الحفاظ على الرحم، ويختلف استخدام المنظار الرحمي أو منظار البطن حسب مكان وحجم وعدد الأورام الليفية.",
    "briefEN": "Minimally invasive uterine-sparing myomectomy removing symptomatic fibroids while preserving uterine integrity and fertility, chosen via laparoscopy or hysteroscopy.",
    "axes": {
      "ar": [
        {
          "title": "🔍 الحفاظ على الرحم واستئصال الليفي بالمنظار",
          "content": "جراحة دقيقة مخصصة للسيدات الراغبات في الحفاظ على الرحم والقدرة الإنجابية؛ حيث يتم استئصال الأورام الليفية فقط وخياطة جدار الرحم بطبقات تجميلية متينة مع الحفاظ الكامل على نسيج الرحم."
        },
        {
          "title": "⚠️ اختيار نوع المنظار المناسب",
          "content": "1. المنظار الرحمي: للأورام الليفية الواقعة داخل تجويف الرحم وتحت البطانة (Submucous).\n2. منظار البطن: للأورام الليفية النامية في جدار الرحم (Intramural) أو البارزة للخارج (Subserous)."
        },
        {
          "title": "🛡️ التقنيات الجراحية الحديثة",
          "content": "استخدام أجهزة تفتيت الورم الليفي الآمنة (Morcellator) داخل أكياس عازلة لاستخراجه عبر فتحة المنظار دون الحاجة لفتح البطن، وإغلاق جدار الرحم بخياطة محكمة متعددة الطبقات."
        },
        {
          "title": "💊 تأثير الجراحة على الحمل المستقبلي",
          "content": "إزالة الأورام الليفية التي تعيق انغراس الجنين أو تسبب الإجهاض تعيد للرحم كفاءته الوظيفية الكاملة وتساعد على حدوث حمل صحي ومستقر."
        }
      ],
      "en": [
        {
          "title": "🔍 Uterine Preservation & Myomectomy",
          "content": "Targeted surgical excision of leiomyomas preserving uterine anatomy and reproductive potential through multi-layered myometrial reconstruction."
        },
        {
          "title": "⚠️ Approach Selection Criteria",
          "content": "Hysteroscopic approach for submucosal fibroids versus laparoscopic approach for intramural and subserosal fibroids based on mapping."
        },
        {
          "title": "🛡️ Advanced Surgical Technology",
          "content": "Contained in-bag morcellation for safe extraction through keyhole ports and meticulous multi-layer suturing to optimize scar tensile strength."
        },
        {
          "title": "💊 Reproductive Benefits",
          "content": "Removes mechanical barriers to embryo implantation, resolves menorrhagia, and restores anatomical integrity for future successful pregnancies."
        }
      ]
    }
  },
  {
    "id": "laparoscopic-hysterectomy",
    "category": "surgery",
    "nameAR": "استئصال الرحم بالمنظار",
    "nameEN": "Laparoscopic Hysterectomy (TLH)",
    "briefAR": "إزالة الرحم باستخدام منظار البطن في الحالات التي تستدعي استئصاله وتكون مناسبة لهذا النوع من الجراحة، من خلال فتحات صغيرة بدلًا من الشق الجراحي التقليدي بالبطن.",
    "briefEN": "Total laparoscopic hysterectomy removing the uterus via micro-incisions for medically indicated cases, providing a safe alternative to open abdominal surgery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم استئصال الرحم بالمنظار (TLH)",
          "content": "جراحة استئصال الرحم بالكامل (مع أو بدون المبيضين حسب الحالة والعمر) من خلال تقنية ثقوب المفتاح الدقيقة، مما يجنب المريضة جرح البطن العرضي أو الطولي الكبير ومضاعفاته."
        },
        {
          "title": "⚠️ دواعي اللجوء للعملية",
          "content": "الأورام الليفية الكبيرة أو المتعددة المصحوبة بنزيف شديد وفقر دم حاد، هبوط الرحم المتقدم، بطانة الرحم المهاجرة الشديدة المستعصية على العلاج، أو أورام بطانة الرحم الموضعية."
        },
        {
          "title": "🛡️ مميزات الأمان والتعافي السريع",
          "content": "فقدان دم طفيف جداً أثناء الجراحة، تجنب آلام جرح البطن المفتوح، انعدام التصاقات ما بعد الجراحة، ومغادرة المستشفى خلال 24 ساعة فقط."
        },
        {
          "title": "💊 الرعاية بعد العملية والعودة للحياة",
          "content": "تستطيع المريضة المشي وممارسة أنشطتها الخفيفة في اليوم التالي للعملية، مع توجيهات طبية واضحة للتعافي التام وتجنب حمل الأوزان الثقيلة لعدة أسابيع."
        }
      ],
      "en": [
        {
          "title": "🔍 Overview of TLH",
          "content": "Total laparoscopic hysterectomy detaches and removes the uterus entirely through keyhole ports, avoiding large abdominal incisions."
        },
        {
          "title": "⚠️ Clinical Indications",
          "content": "Symptomatic uterine fibroids unresponsive to therapy, adenomyosis, severe refractory endometriosis, abnormal bleeding with severe anemia, or localized neoplasia."
        },
        {
          "title": "🛡️ Safety & Patient Advantages",
          "content": "Negligible intraoperative blood loss, minimal pain, absence of extensive abdominal wall trauma, and 24-hour hospital stay."
        },
        {
          "title": "💊 Postoperative Recovery",
          "content": "Immediate ambulation on postoperative day 1, with smooth functional rehabilitation and minimal recovery downtime."
        }
      ]
    }
  },
  {
    "id": "laparoscopic-ovarian-cystectomy",
    "category": "surgery",
    "nameAR": "استئصال أكياس المبيض بالمنظار",
    "nameEN": "Laparoscopic Ovarian Cystectomy",
    "briefAR": "إزالة بعض أنواع أكياس المبيض باستخدام منظار البطن، مع تحديد طريقة التدخل وفقًا لنوع الكيس وحجمه وعمر المريضة وحالة المبيض.",
    "briefEN": "Laparoscopic excision of ovarian cysts with meticulous preservation of functional ovarian cortical tissue, customized to cyst pathology, size, and age.",
    "axes": {
      "ar": [
        {
          "title": "🔍 الحفاظ على نسيج ومخزون المبيض",
          "content": "الهدف الأساسي لجراحة أكياس المبيض بالمنظار هو تقشير واستئصال الكيس بالكامل بدقة بالغة مع الحفاظ التام على الأنسجة السليمة المتبقية من المبيض ومخزون البويضات."
        },
        {
          "title": "⚠️ أنواع الأكياس التي تتطلب الاستئصال",
          "content": "الأكياس الجلدانية (Dermoid Cysts)، أكياس الشوكولاتة الناتجة عن بطانة الرحم المهاجرة، الأكياس المصلية أو المخاطية الكبيرة، أو الأكياس المستمرة لأشهر والتي لا تستجيب للعلاج الدوائي."
        },
        {
          "title": "🛡️ التقنية الجراحية وأمان الإجراء",
          "content": "عزل الكيس واستخراجه عبر كيس جراحي عازل (Endo-bag) لمنع انسكاب أي سوائل داخل تجويف الحوض، واستخدام الكي الدقيق لمنع النزيف دون إلحاق أي ضرر حراري بحويصلات المبيض."
        },
        {
          "title": "💊 الوقاية من الالتصاقات ومتابعة الخصوبة",
          "content": "تغليف المبيض بمواد وقائية مضادة للالتصاقات، وإرسال العينة لتحليل الأنسجة الباثولوجي، والاطمئنان على انتظام التبويض وسريانه الطبيعي بعد العملية."
        }
      ],
      "en": [
        {
          "title": "🔍 Preserving Ovarian Reserve",
          "content": "Microsurgical laparoscopic stripping of ovarian cyst wall while strictly preserving functional healthy cortex and primordial follicular pool."
        },
        {
          "title": "⚠️ Pathological Types Treated",
          "content": "Endometriomas (chocolate cysts), mature dermoid teratomas, persistent large cystadenomas, and complex functional cysts refractory to surveillance."
        },
        {
          "title": "🛡️ Surgical Technique & Containment",
          "content": "Atraumatic cyst enucleation and retrieval via endobag to prevent peritoneal spillage, utilizing meticulous hemostasis to safeguard ovarian reserve."
        },
        {
          "title": "💊 Fertility Protection",
          "content": "Application of anti-adhesion barriers, histopathological analysis, and documented preservation of postoperative ovulatory cycles."
        }
      ]
    }
  },
  {
    "id": "laparoscopic-endometriosis-treatment",
    "category": "surgery",
    "nameAR": "علاج بطانة الرحم المهاجرة بالمنظار",
    "nameEN": "Laparoscopic Endometriosis Excision",
    "briefAR": "استخدام منظار البطن لتشخيص وعلاج بؤر بطانة الرحم المهاجرة والالتصاقات المرتبطة بها عند وجود داعٍ جراحي، خاصة في الحالات المصحوبة بالألم أو مشكلات الخصوبة.",
    "briefEN": "Laparoscopic excision and ablation of endometriotic peritoneal implants and pelvic adhesions, alleviating pain and restoring pelvic anatomy for fertility.",
    "axes": {
      "ar": [
        {
          "title": "🔍 جراحة بطانة الرحم المهاجرة المتخصصة",
          "content": "إجراء جراحي تخصصي دقيق يهدف إلى استئصال أو كي بؤر بطانة الرحم المهاجرة المنتشرة على الغشاء البريتوني، فك الالتصاقات الحوضية المعقدة، واستعادة الوضع التشريحي الطبيعي للرحم والمبيضين."
        },
        {
          "title": "⚠️ دواعي التدخل الجراحي بالمنظار",
          "content": "آلام الحوض والظهر الحادة المزمنة، آلام شديدة غير محتملة أثناء الدورة الشهرية أو العلاقة الزوجية، وجود أكياس شوكولاتة تؤثر على وظيفة المبيض، أو تأخر الحمل غير المستجيب للعلاجات الدوائية."
        },
        {
          "title": "🛡️ استراتيجية الجراحة التحفظية",
          "content": "تحرير قنوات فالوب والمبيضين من الالتصاقات دون إلحاق أذى بالأعصاب الحوضية أو الأوعية الدموية، وتحسين البيئة الحيوية للحوض لتقليل الالتهابات المزمنة."
        },
        {
          "title": "💊 تحسن الأعراض وفرص الإنجاب",
          "content": "تحقيق راحة هائلة وسريعة من الآلام المزمنة، ورفع معدلات حدوث الحمل التلقائي أو تعزيز استجابة المبيضين لمحاولات الحقن المجهري التالية."
        }
      ],
      "en": [
        {
          "title": "🔍 Surgical Excision Principles",
          "content": "Specialized laparoscopic identification, radical excision, and ablation of peritoneal endometriotic implants and pelvic scarring."
        },
        {
          "title": "⚠️ Surgical Indications",
          "content": "Severe chronic dysmenorrhea, deep dyspareunia, large ovarian endometriomas, or distortion of pelvic tubo-ovarian anatomy causing infertility."
        },
        {
          "title": "🛡️ Nerve-Sparing Anatomy Restoration",
          "content": "Careful mobilization of ovaries, freeing adherent fallopian tubes, and excising implants while protecting pelvic neural and ureteral pathways."
        },
        {
          "title": "💊 Pain Relief & Fertility Optimization",
          "content": "Dramatic alleviation of chronic pelvic pain syndromes and substantial optimization of spontaneous and ART pregnancy rates."
        }
      ]
    }
  },
  {
    "id": "hysteroscopic-polypectomy",
    "category": "surgery",
    "nameAR": "إزالة الزوائد اللحمية بالمنظار الرحمي",
    "nameEN": "Hysteroscopic Polypectomy",
    "briefAR": "إزالة الزوائد اللحمية الموجودة داخل تجويف الرحم باستخدام منظار الرحم، بما يسمح برؤية الزائدة وإزالتها مباشرة من داخل التجويف.",
    "briefEN": "Direct visual hysteroscopic excision of endometrial polyps from the uterine cavity, eliminating bleeding and restoring optimal cavity contour.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هي الزوائد اللحمية بالرحم؟",
          "content": "نمو موضعي حميد لنسيج بطانة الرحم داخل التجويف، قد يتراوح حجمه من بضعة مليمترات إلى عدة سنتيمترات، ويشكل عائقاً ميكانيكياً لحدوث الحمل وسبباً شائعاً لنزول دم غير منتظم."
        },
        {
          "title": "⚠️ أعراض وجود الزوائد اللحمية",
          "content": "نزيف بين الدورات الشهرية (تنقيط دم)، دورة شهرية غزيرة أو طويلة المدة، نزيف بعد انقطاع الطمث، أو تأخر الحمل وفشل انغراس الأجنة في تجويف الرحم."
        },
        {
          "title": "🛡️ طريقة الاستئصال بالمنظار الرحمي",
          "content": "رؤية الزائدة اللحمية مباشرة وبدقة عالية على الشاشة، واستئصالها من قاعدتها بالكامل باستخدام مقصات جراحية مجهرية دون كحت بطانة الرحم السليمة ودون أي جروح خارجية."
        },
        {
          "title": "💊 النتائج والفحص الباثولوجي",
          "content": "إرسال الزائدة المستأصلة لتحليل الأنسجة للاطمئنان على سلامتها، مع اختفاء النزيف تماماً واستعادة البطانة لصفاتها المثالية لاستقبال الجنين."
        }
      ],
      "en": [
        {
          "title": "🔍 What are Endometrial Polyps?",
          "content": "Benign overgrowths of endometrial stroma and glands projecting into the cavity, frequently causing abnormal bleeding and implantation failure."
        },
        {
          "title": "⚠️ Clinical Symptoms",
          "content": "Intermenstrual spotting, menorrhagia, postmenopausal bleeding, or unexplained subfertility with filling defects on ultrasound."
        },
        {
          "title": "🛡️ Hysteroscopic Excision Technique",
          "content": "Direct visualization and selective base resection using micro-scissors or bipolar loop without disturbing adjacent healthy endometrium."
        },
        {
          "title": "💊 Histopathology & Recovery",
          "content": "Routine histopathological verification, immediate resolution of bleeding complaints, and restoration of normal endometrial receptivity."
        }
      ]
    }
  },
  {
    "id": "hysteroscopic-adhesiolysis",
    "category": "surgery",
    "nameAR": "فك التصاقات الرحم بالمنظار",
    "nameEN": "Hysteroscopic Adhesiolysis",
    "briefAR": "تشخيص وفك الالتصاقات الموجودة داخل تجويف الرحم باستخدام المنظار الرحمي، وهي التصاقات قد ترتبط باضطراب الدورة الشهرية أو تأخر الحمل لدى بعض الحالات.",
    "briefEN": "Hysteroscopic division and release of intrauterine synechiae (Asherman syndrome), restoring uterine cavity volume, normal menses, and fertility potential.",
    "axes": {
      "ar": [
        {
          "title": "🔍 التصاقات تجويف الرحم (متلازمة أشرمان)",
          "content": "تكون أحزمة ليفية أو التصاقات بين جدران الرحم المتقابلة، تنتج عادة بعد عمليات تنظيف سابقة أو التهابات حادة، مما يؤدي لضيق أو انسداد تجويف الرحم واختفاء الدورة أو قلتها الشديدة."
        },
        {
          "title": "⚠️ تأثير الالتصاقات على الحمل والدورة",
          "content": "انقطاع أو شح شديد في دم الحيض، تأخر الإنجاب لعدم قدرة البويضة المخصبة على الانغراس، والإجهاض المتكرر نتيجة عدم كفاية مساحة تجويف الرحم."
        },
        {
          "title": "🛡️ تقنية فك الالتصاقات بالمنظار",
          "content": "إدخال المنظار الرحمي الدقيق وقص الالتصاقات الليفية بحرص شديد لإعادة التجويف إلى شكله وحجمه الطبيعي دون إحداث أي إصابة لعضلة الرحم."
        },
        {
          "title": "💊 الوقاية من عودة الالتصاقات",
          "content": "وضع بالون سيليكوني طبي مؤقت أو جل حاجز داخل الرحم، مع كورس علاجي هرموني مكثف لعدة أسابيع لتحفيز بطانة الرحم على التجدد والنمو السليم."
        }
      ],
      "en": [
        {
          "title": "🔍 Intrauterine Adhesions (Asherman Syndrome)",
          "content": "Fibrous bands bridging the endometrial walls, usually resulting from vigorous post-abortal curettage or infection, causing hypomenorrhea and sterility."
        },
        {
          "title": "⚠️ Clinical Manifestations",
          "content": "Severe hypomenorrhea/amenorrhea, secondary infertility, and recurrent miscarriages due to obliterated cavity volume."
        },
        {
          "title": "🛡️ Operative Division Technique",
          "content": "Precise hysteroscopic division of synechiae restoring anatomical cavity contours without traumatizing the underlying myometrium."
        },
        {
          "title": "💊 Secondary Prevention Protocol",
          "content": "Placement of intra-uterine anti-adhesion barriers or pediatric balloons combined with cyclic high-dose estrogen therapy for mucosal regeneration."
        }
      ]
    }
  },
  {
    "id": "hysteroscopic-septum-resection",
    "category": "surgery",
    "nameAR": "علاج الحاجز الرحمي بالمنظار",
    "nameEN": "Hysteroscopic Septum Resection (Metroplasty)",
    "briefAR": "إزالة أو تصحيح الحاجز الرحمي من داخل تجويف الرحم باستخدام المنظار الرحمي في الحالات التي تستدعي التدخل، دون الحاجة إلى فتح جراحي بالبطن.",
    "briefEN": "Hysteroscopic division of congenital uterine septa, normalizing uterine architecture to treat recurrent miscarriages and subfertility without abdominal surgery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو الحاجز الرحمي؟",
          "content": "عيب خلقي شائع يحدث أثناء التطور الجنيني للرحم؛ حيث يفصل جدار ليفي أو عضلي تجويف الرحم إلى نصفين، ونظراً لضعف إمداده الدموي فإنه يعد سبباً رئيسياً للإجهاض المتكرر والولادة المبكرة."
        },
        {
          "title": "⚠️ متى يتطلب الحاجز الرحمي الاستئصال؟",
          "content": "عند تكرار فقدان الحمل في الثلث الأول أو الثاني، فشل محاولات الحقن المجهري، أو كإجراء استباقي وقائي للسيدات المقبلات على برامج الإخصاب المساعد."
        },
        {
          "title": "🛡️ طريقة العملية بالمنظار الرحمي",
          "content": "عملية يوم واحد تستغرق أقل من 20 دقيقة؛ يتم فيها قطع الحاجز الرحمي بدقة بالغة من منتصفه حتى يتوحد التجويف دون إزالة أي أنسجة وبدون نزيف أو ألم."
        },
        {
          "title": "💊 النتائج الإنجابية ومعدلات النجاح",
          "content": "يرفع استئصال الحاجز الرحمي معدلات اكتمال الحمل إلى أكثر من 85-90%، ويقضي تماماً على خطر الإجهاض المتكرر المرتبط بضيق تجويف الرحم."
        }
      ],
      "en": [
        {
          "title": "🔍 Congenital Septate Uterus",
          "content": "A developmental Müllerian anomaly where a fibromuscular partition divides the uterine cavity, poorly vascularized and strongly associated with recurrent fetal loss."
        },
        {
          "title": "⚠️ Indications for Metroplasty",
          "content": "History of recurrent miscarriages, preterm labor, repeated IVF failures, or prophylactic treatment before assisted reproduction."
        },
        {
          "title": "🛡️ Operative Technique",
          "content": "A brief 20-minute day-case procedure incising the septum midline until cavity symmetry is unified, with zero tissue excision and minimal bleeding."
        },
        {
          "title": "💊 Reproductive Prognosis",
          "content": "Metroplasty restores normal term delivery rates above 85-90%, virtually eliminating miscarriage risks related to anatomical cavity restriction."
        }
      ]
    }
  },
  {
    "id": "laparoscopic-ectopic-pregnancy",
    "category": "surgery",
    "nameAR": "علاج الحمل خارج الرحم بالمنظار",
    "nameEN": "Laparoscopic Ectopic Pregnancy Management",
    "briefAR": "استخدام منظار البطن لعلاج بعض حالات الحمل خارج الرحم عندما يكون التدخل الجراحي مطلوبًا، مع تحديد الإجراء المناسب وفقًا لمكان الحمل وحالة المريضة.",
    "briefEN": "Minimally invasive laparoscopic intervention for ectopic gestations requiring surgical management, preserving contralateral tubal anatomy and maternal safety.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو الحمل خارج الرحم (Ectopic Pregnancy)؟",
          "content": "حالة ينغرس فيها كيس الحمل خارج تجويف الرحم، وغالباً ما يكون في إحدى قناتي فالوب (بنسبة 95%)، وتعد حالة حرجة تتطلب تدخلاً سريعاً لمنع انفجار القناة والنزيف الداخلي."
        },
        {
          "title": "⚠️ العلامات والأعراض التحذيرية",
          "content": "ألم حاد مفاجئ في أحد جانبي أسفل البطن، نزيف مهبلي بني أو داكن، دوخة أو هبوط في ضغط الدم، مع وجود اختبار حمل إيجابي وتأكيد عدم وجود كيس الحمل داخل الرحم بالسونار."
        },
        {
          "title": "🛡️ التدخل الجراحي بالمنظار",
          "content": "الدخول الفوري بمنظار البطن لإيقاف أي نزيف واستخراج كيس الحمل؛ إما بفتح القناة واستخراج الحمل مع الحفاظ عليها (Salpingostomy) أو استئصال القناة التالفة (Salpingectomy) إذا كانت متهتكة."
        },
        {
          "title": "💊 الأمان والخصوبة المستقبلية",
          "content": "المنظار يضمن تعافياً فورياً مع الحفاظ على القناة السليمة الأخرى والمبيضين، مما يتيح للمريضة فرصة ممتازة لحدوث حمل طبيعي داخل الرحم مستقبلاً."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Ectopic Pregnancy?",
          "content": "Implantation of the gestational sac outside the endometrial cavity (most commonly in the fallopian tube), representing a gynecologic emergency."
        },
        {
          "title": "⚠️ Warning Symptoms",
          "content": "Unilateral acute pelvic pain, abnormal vaginal bleeding, dizziness, positive beta-hCG, and empty uterine cavity on transvaginal ultrasound."
        },
        {
          "title": "🛡️ Laparoscopic Management",
          "content": "Emergency laparoscopy providing immediate hemostasis and pregnancy evacuation via salpingostomy (tubal preservation) or salpingectomy if ruptured."
        },
        {
          "title": "💊 Safety & Future Fertility",
          "content": "Rapid post-op recovery preserving the contralateral adnexa and maintaining strong potential for future healthy intrauterine pregnancies."
        }
      ]
    }
  },
  {
    "id": "endoscopy-fertility-evaluation",
    "category": "surgery",
    "nameAR": "تشخيص وعلاج أسباب تأخر الإنجاب بالمنظار",
    "nameEN": "Endoscopic Evaluation & Therapy for Infertility",
    "briefAR": "استخدام منظار الرحم أو البطن في حالات مختارة من تأخر الإنجاب لتشخيص وعلاج مشكلات مثل الالتصاقات، وبطانة الرحم المهاجرة، أو بعض مشكلات تجويف الرحم وقنوات فالوب.",
    "briefEN": "Combined or selective hysteroscopic and laparoscopic evaluation in subfertile women to diagnose and treat pelvic adhesions, endometriosis, and tubal pathology.",
    "axes": {
      "ar": [
        {
          "title": "🔍 دور المناظير في حل مشكلات تأخر الإنجاب",
          "content": "المناظير النسائية هي الأداة الشاملة التي تجمع بين التشخيص الدقيق والعلاج الفوري في خطوة واحدة، للمشكلات التي لا تظهر بوضوح في الأشعة أو السونار الروتيني."
        },
        {
          "title": "⚠️ الحالات التي تستفيد من الإجراء",
          "content": "تأخر الإنجاب غير المفسر، فشل دورات التلقيح الصناعي أو الحقن المجهري، الاشتباه في انسداد قنوات فالوب، وجود ارتشاح بالقناة، أو وجود التصاقات ناتجة عن جراحات سابقة."
        },
        {
          "title": "🛡️ الجمع بين منظار البطن والرحم",
          "content": "إجراء مزدوج يتم فيه فحص تجويف الرحم بالمنظار الرحمي وفك أي حواجز أو زوائد، متزامناً مع فحص الحوض والمبيضين وقنوات فالوب بمنظار البطن واختبار مرور الصبغة."
        },
        {
          "title": "💊 النتائج ورفع معدلات الحمل",
          "content": "إصلاح البيئة الإنجابية للأم يرفع من فرص حدوث الحمل الطبيعي في الأشهر التالية للعملية بنسب كبيرة، أو يجهز الرحم لاستقبال الأجنة بنجاح تام في الحقن المجهري."
        }
      ],
      "en": [
        {
          "title": "🔍 Role of Endoscopy in Fertility",
          "content": "Comprehensive \"one-stop\" diagnostic and therapeutic intervention resolving subtle pelvic and uterine anomalies missed by non-invasive imaging."
        },
        {
          "title": "⚠️ Target Candidates",
          "content": "Unexplained subfertility, recurrent IVF failure, suspected tubal occlusion, hydrosalpinges, or pelvic scarring from previous surgeries."
        },
        {
          "title": "🛡️ Combined Laparo-Hysteroscopy",
          "content": "Simultaneous inspection and correction of intra-cavitary lesions (hysteroscopy) along with tubal patency testing and peritoneal adhesiolysis (laparoscopy)."
        },
        {
          "title": "💊 Optimizing Conception Outcomes",
          "content": "Restores fertile physiological conditions, substantially boosting spontaneous conception rates and improving IVF implantation success."
        }
      ]
    }
  },
  {
    "id": "laparoscopy-chronic-pelvic-pain",
    "category": "surgery",
    "nameAR": "تشخيص وعلاج آلام الحوض المزمنة بالمنظار",
    "nameEN": "Laparoscopy for Chronic Pelvic Pain",
    "briefAR": "قد يُستخدم منظار البطن في حالات مختارة من آلام الحوض المزمنة للبحث عن أسباب مثل بطانة الرحم المهاجرة أو الالتصاقات، مع إمكانية علاج بعض المشكلات أثناء الإجراء نفسه.",
    "briefEN": "Laparoscopic exploration and intervention for persistent chronic pelvic pain, identifying and managing underlying endometriosis, adhesions, or pelvic congestion.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم آلام الحوض المزمنة",
          "content": "ألم مستمر أو متقطع في أسفل البطن والحوض يستمر لأكثر من 6 أشهر، ويؤثر سلباً على ممارسة الحياة اليومية والراحة النفسية للسيدة دون وجود تشخيص واضح بالفحوصات الأولية."
        },
        {
          "title": "⚠️ الأسباب الخفية التي يكشفها المنظار",
          "content": "بؤر بطانة الرحم المهاجرة الدقيقة على جدار الحوض، الالتصاقات الحوضية الناتجة عن التهابات سابقة أو جراحات الزائدة أو القيصرية، أو احتقان أوردة الحوض."
        },
        {
          "title": "🛡️ العلاج الجراحي التحفظي أثناء الفحص",
          "content": "فك الالتصاقات برفق لتخفيف الشد على الأعضاء الحوضية، استئصال بؤر بطانة الرحم المهاجرة، واستئصال الأكياس لتخفيف الضغط العصبي المسبب للألم."
        },
        {
          "title": "💊 استعادة جودة الحياة",
          "content": "تحقيق انخفاض دراماتيكي في نوبات الألم وتحسن ملحوظ في جودة النوم والنشاط اليومي، مع التخلص من الاعتماد المستمر على المسكنات القوية."
        }
      ],
      "en": [
        {
          "title": "🔍 Chronic Pelvic Pain Syndrome",
          "content": "Persistent, non-cyclical lower abdominal pain lasting over 6 months that causes functional disability and eludes superficial diagnostic modalities."
        },
        {
          "title": "⚠️ Occult Etiologies Identified",
          "content": "Atypical peritoneal endometriosis, dense pelvic adhesions tethering bowel/ovaries from prior surgeries, or ovarian vein congestion."
        },
        {
          "title": "🛡️ Simultaneous Therapeutic Lysis",
          "content": "Meticulous adhesiolysis releasing organ tension, peritoneal lesion vaporization, and decompression of pelvic nerve irritation."
        },
        {
          "title": "💊 Quality of Life Restoration",
          "content": "Produces immediate and sustained pain relief, restores physical vitality, and eliminates chronic dependence on potent analgesics."
        }
      ]
    }
  },
  {
    "id": "cosmetic-gynecology",
    "category": "cosmetic",
    "nameAR": "التجميل النسائي",
    "nameEN": "Cosmetic & Aesthetic Gynecology",
    "briefAR": "مجموعة من الإجراءات الجراحية وغير الجراحية التي تهدف إلى علاج التغيرات الوظيفية أو الشكلية بالمنطقة التناسلية، ويتم اختيار الإجراء حسب المشكلة التي تعاني منها كل حالة.",
    "briefEN": "Comprehensive surgical and non-surgical aesthetic and reconstructive procedures restoring functional harmony and aesthetic wellness for women.",
    "axes": {
      "ar": [
        {
          "title": "🔍 مفهوم التجميل والتقويم النسائي الحديث",
          "content": "تخصص طبي دقيق يجمع بين استعادة الكفاءة الوظيفية للأنسجة وعضلات الحوض وتحسين المظهر الجمالي للمنطقة الحميمية، لعلاج الآثار الناتجة عن الولادات المتكررة أو التغيرات الهرمونية مع التقدم بالعمر."
        },
        {
          "title": "⚠️ دواعي الإجراءات التجميلية النسائية",
          "content": "الشعور بالارتخاء والاتساع بعد الولادات الطبيعية، جفاف وضمور الأنسجة، عدم التماثل أو التضخم في الشفرات، سلس البول الإجهادي، وتراجع الراحة والرضا أثناء العلاقة الزوجية."
        },
        {
          "title": "🛡️ الخيارات الجراحية وغير الجراحية المتاحة",
          "content": "تشمل التقنيات الحديثة: الإجراءات غير الجراحية كجلسات الليزر التجديدي وحقن البلازما (PRP) وحمض الهيالورونيك، وصولاً إلى الإجراءات الجراحية التقويمية الدقيقة في غرف عمليات مجهزة بأعلى درجات الخصوصية."
        },
        {
          "title": "💊 الخصوصية والنتائج الإيجابية",
          "content": "تتم كافة الفحوصات والإجراءات بسرية تامة واحترافية متناهية، وتمنح المرأة استعادة ثقتها بنفسها وراحتها النفسية والجسدية بصورة ملحوظة."
        }
      ],
      "en": [
        {
          "title": "🔍 Overview of Aesthetic Gynecology",
          "content": "A specialized discipline integrating pelvic functional restoration with anatomical rejuvenation, repairing tissue changes from childbirth and aging."
        },
        {
          "title": "⚠️ Indications for Consultation",
          "content": "Post-delivery vaginal laxity, mucosal atrophy, labial asymmetry or hypertrophy, stress incontinence, and marital intimacy discomfort."
        },
        {
          "title": "🛡️ Non-Surgical & Surgical Modalities",
          "content": "Advanced non-invasive regenerative laser, PRP rejuvenation, and hyaluronic acid fillers, alongside microsurgical reconstructive repairs."
        },
        {
          "title": "💊 Privacy & Patient Confidence",
          "content": "Administered under the strictest standards of medical confidentiality, restoring personal comfort, self-confidence, and intimate wellness."
        }
      ]
    }
  },
  {
    "id": "vaginal-tightening",
    "category": "cosmetic",
    "nameAR": "تضييق المهبل",
    "nameEN": "Vaginal Tightening",
    "briefAR": "إجراء يهدف إلى علاج اتساع وارتخاء المهبل، خاصة بعد الولادات المتكررة، من خلال إصلاح وشد الأنسجة والعضلات وفقًا لدرجة الارتخاء.",
    "briefEN": "Procedures treating vaginal canal laxity and tissue stretching following repeated childbirths, tightening muscles and mucosal support according to severity.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أسباب اتساع وارتخاء المهبل",
          "content": "تمدد وتمزق عضلات وأنسجة قاع الحوض نتيجة الولادات الطبيعية المتكررة أو ولادة أجنة بأوزان كبيرة، بالإضافة إلى ضعف الكولاجين مع التقدم في العمر وتراجع هرمون الإستروجين."
        },
        {
          "title": "⚠️ الأعراض والشكاوى المصاحبة",
          "content": "الشعور بالثقل أو وجود هواء وأصوات مزعجة تخرج من المهبل، انخفاض الإحساس والرضا أثناء العلاقة الزوجية، والشعور بعدم الراحة أثناء ممارسة الرياضة."
        },
        {
          "title": "🛡️ طرق التضييق المتاحة (ليزر وجراحة)",
          "content": "1. التضييق بالليزر أو الترددات الحرارية: للحالات البسيطة والمتوسطة لتحفيز ألياف الكولاجين.\n2. التضييق الجراحي التجميلي: للحالات المتقدمة لشد وتثبيت العضلات المتباعدة وإزالة الأنسجة الزائدة."
        },
        {
          "title": "💊 التعافي والنتائج الدائمة",
          "content": "يستعيد المهبل قطره ومرونته الطبيعية السابقة، ويتحقق تحسن جذري في الوظيفة والدعم التشريحي مع فترة نقاهة مريحة وسريعة."
        }
      ],
      "en": [
        {
          "title": "🔍 Etiology of Vaginal Relaxation",
          "content": "Stretching and detachment of pelvic floor musculature resulting from vaginal deliveries or age-related collagen loss."
        },
        {
          "title": "⚠️ Symptoms & Clinical Manifestations",
          "content": "Pelvic heaviness, vaginal flatulence, decreased frictional sensation during intercourse, and athletic discomfort."
        },
        {
          "title": "🛡️ Treatment Modalities",
          "content": "Non-invasive fractional laser/RF for mild laxity stimulating neo-collagenesis, versus cosmetic surgical repair for substantial structural laxity."
        },
        {
          "title": "💊 Recovery & Long-Term Results",
          "content": "Restores anatomical canal caliber and natural elasticity, significantly enhancing pelvic comfort and intimate satisfaction."
        }
      ]
    }
  },
  {
    "id": "vaginoplasty",
    "category": "cosmetic",
    "nameAR": "رأب المهبل (Vaginoplasty)",
    "nameEN": "Vaginoplasty Surgical Reconstruction",
    "briefAR": "جراحة لإصلاح وشد الأنسجة والعضلات المحيطة بالمهبل في حالات الارتخاء، بهدف استعادة الدعم التشريحي للمنطقة وتحسين الوظيفة.",
    "briefEN": "Surgical repair and reconstitution of vaginal and perineal muscular architecture in severe laxity, restoring anatomical structural support and function.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هي جراحة رأب المهبل (Vaginoplasty)؟",
          "content": "عملية جراحية دقيقة تهدف إلى إعادة بناء وتضييق كامل القناة المهبلية، عن طريق تقريب عضلات قاع الحوض المتباعدة وخياطتها، وإزالة الترهلات الزائدة من الغشاء المخاطي."
        },
        {
          "title": "⚠️ الفئات المرشحة للعملية",
          "content": "السيدات اللاتي يعانين من ارتخاء شديد لا يستجيب لتمارين كيجل أو جلسات الليزر، خاصة بعد الولادات المتكررة أو حدوث شق عجان سابق لم يلتئم بشكل مثالي."
        },
        {
          "title": "🛡️ خطوات الجراحة والتقنيات التجميلية",
          "content": "تُجرى تحت تخدير نصفي أو كلي باستخدام خيوط تجميلية دقيقة وقابلة للامتصاص ذاتياً، دون ترك أي آثار أو ندبات خارجية ظاهرة."
        },
        {
          "title": "💊 إرشادات ما بعد الجراحة والتعافي",
          "content": "الالتزام بالراحة وتجنب رفع الأحمال الثقيلة لمدة أسبوعين، الحفاظ على نظافة المنطقة، واستئناف العلاقة الزوجية والأنشطة الكاملة بعد مرور 6 أسابيع من العملية."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Vaginoplasty?",
          "content": "A surgical reconstructive procedure tightening the entire vaginal canal by approximating separated levator ani muscles and resecting redundant mucosa."
        },
        {
          "title": "⚠️ Ideal Candidates",
          "content": "Severe canal relaxation refractory to pelvic exercises or non-surgical therapy, compromised perineal bodies, or poorly healed episiotomy scars."
        },
        {
          "title": "🛡️ Surgical Execution",
          "content": "Conducted under regional/general anesthesia utilizing absorbable cosmetic sutures, leaving no visible external scarring."
        },
        {
          "title": "💊 Postoperative Care & Timeline",
          "content": "Rest for 2 weeks, pelvic hygiene compliance, and resuming vigorous exercise and marital intercourse after 6 weeks."
        }
      ]
    }
  },
  {
    "id": "labiaplasty",
    "category": "cosmetic",
    "nameAR": "تجميل الشفرات (Labiaplasty)",
    "nameEN": "Labiaplasty & Labial Reshaping",
    "briefAR": "إجراء جراحي لتعديل حجم أو شكل الشفرات، ويمكن إجراؤه عند وجود تضخم أو عدم تماثل يسبب انزعاجًا وظيفيًا أو مشكلة شكلية للمريضة.",
    "briefEN": "Cosmetic surgical procedure refining the contour and size of the labia minora or majora to address hypertrophy, asymmetry, or functional discomfort.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هي عملية تجميل الشفرات (Labiaplasty)؟",
          "content": "جراحة تجميلية دقيقة تهدف إلى تقليص حجم أو تعديل شكل الشفرات المهبلية (الصغيرة أو الكبيرة)، لعلاج التضخم أو الترهل أو عدم التماثل بين الجانبين بأعلى درجات التناسق الجمالي."
        },
        {
          "title": "⚠️ الأسباب الوظيفية والجمالية للإجراء",
          "content": "الشعور بالاحتكاك والألم أثناء ممارسة الرياضة كالمشي أو ركوب الدراجات، صعوبة ارتداء الملابس الضيقة، الالتهابات المتكررة، أو الانزعاج من المظهر الخارجي غير المتناسق."
        },
        {
          "title": "🛡️ التقنيات الجراحية الحديثة (Trim & Wedge)",
          "content": "استخدام تقنية القص الطولي الموجه أو الاستئصال الإسفيني (Wedge Technique) للحفاظ على الحواف الطبيعية للشفرات ولونها وحساسيتها العصبية، باستخدام خيوط تجميلية دقيقة."
        },
        {
          "title": "💊 التعافي والنتائج الدائمة",
          "content": "عملية يوم واحد تستغرق نحو 45 دقيقة، وتستطيع السيدة العودة لممارسة أعمالها اليومية الخفيفة خلال أيام قليلة مع تحقيق مظهر متناسق ومريح مدى الحياة."
        }
      ],
      "en": [
        {
          "title": "🔍 Definition of Labiaplasty",
          "content": "A delicate plastic surgical procedure reducing and contouring the labia minora or majora to correct hypertrophy and asymmetry."
        },
        {
          "title": "⚠️ Functional & Aesthetic Rationale",
          "content": "Frictional irritation during sports, discomfort wearing snug clothing, recurrent local dermatitis, and aesthetic self-consciousness."
        },
        {
          "title": "🛡️ Advanced Surgical Techniques",
          "content": "Employing wedge resection or edge contouring to preserve the natural neurovascular border and pigmentation using fine absorbable sutures."
        },
        {
          "title": "💊 Recovery & Permanent Outcomes",
          "content": "A 45-minute outpatient procedure allowing return to routine desk work in 3-5 days, delivering lasting anatomical comfort and symmetry."
        }
      ]
    }
  },
  {
    "id": "postpartum-vaginal-laxity",
    "category": "cosmetic",
    "nameAR": "علاج ارتخاء المهبل بعد الولادة",
    "nameEN": "Postpartum Vaginal Laxity Treatment",
    "briefAR": "تقييم درجة ارتخاء الأنسجة والعضلات بعد الولادة وتحديد العلاج المناسب حسب الحالة، والذي قد يتضمن إصلاح عضلات وأجزاء من جدار المهبل عند الحاجة.",
    "briefEN": "Evaluating postpartum pelvic tissue and muscular relaxation, formulating tailored corrective protocols from pelvic rehabilitation to surgical repair.",
    "axes": {
      "ar": [
        {
          "title": "🔍 تشخيص درجة الارتخاء بعد الولادة",
          "content": "تقييم سريري دقيق لقوة عضلات قاع الحوض (عضلات الرافعة الشرجية) ومرونة جدار المهبل الأمامي والخلفي بعد مرور 3 إلى 6 أشهر من الولادة لتحديد التدخل الأنسب."
        },
        {
          "title": "⚠️ تدرج خيارات العلاج المتاحة",
          "content": "1. الارتخاء البسيط: برامج إعادة تأهيل عضلات الحوض (تمارين كيجل المتطورة والتحفيز الكهرومغناطيسي).\n2. الارتخاء المتوسط: جلسات الليزر التجديدي لشد الكولاجين.\n3. الارتخاء الشديد المصحوب بتمزقات عضلية: التدخل الجراحي التجميلي لترميم العضلات."
        },
        {
          "title": "🛡️ التوقيت المناسب للعلاج",
          "content": "يُفضل البدء بعد انتهاء فترة النفاس واستقرار الهرمونات، مع إمكانية تنسيق الخطة بما يتوافق مع رغبة السيدة في تكرار الإنجاب مستقبلاً."
        },
        {
          "title": "💊 المزايا الوقائية والوظيفية",
          "content": "علاج الارتخاء مبكراً يمنع تفاقمه إلى هبوط رحمي أو سلس بول في المستقبل، ويستعيد حيوية ودعم منطقة الحوض بصورة شاملة."
        }
      ],
      "en": [
        {
          "title": "🔍 Clinical Grading of Postpartum Laxity",
          "content": "Comprehensive assessment of levator ani muscle tone and anterior/posterior vaginal wall support 3-6 months post-delivery."
        },
        {
          "title": "⚠️ Graded Treatment Modalities",
          "content": "Pelvic floor physical rehabilitation (guided Kegel exercises), non-ablative laser tightening for moderate laxity, and surgical reconstruction for severe tears."
        },
        {
          "title": "🛡️ Optimal Timing",
          "content": "Initiated after puerperium when hormonal baseline stabilizes, considering future childbearing plans."
        },
        {
          "title": "💊 Preventive Health Benefits",
          "content": "Early management prevents progressive pelvic organ prolapse and urinary stress incontinence, preserving lifelong core pelvic stability."
        }
      ]
    }
  },
  {
    "id": "vaginal-dryness-treatment",
    "category": "cosmetic",
    "nameAR": "علاج جفاف المهبل",
    "nameEN": "Vaginal Dryness & Atrophy Treatment",
    "briefAR": "تحديد سبب جفاف المهبل واختيار العلاج المناسب، خاصة مع التغيرات الهرمونية المرتبطة بسن اليأس أو بعد الولادة والرضاعة.",
    "briefEN": "Diagnosing underlying causes of vaginal dryness and atrophy, applying cutting-edge regenerative laser and hormonal therapies for lasting tissue hydration.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أسباب جفاف وضمور المهبل",
          "content": "ينتج جفاف المهبل عن نقص هرمون الإستروجين (أثناء الرضاعة الطبيعية، أو في مرحلة انقطاع الطمث)، أو بسبب الغسولات الكيميائية القاسية، مما يؤدي لترقق البطانة وفقدان ترطيبها الطبيعي."
        },
        {
          "title": "⚠️ الأعراض والمشكلات المصاحبة",
          "content": "حكة وحرقة مستمرة بالمهبل، ألم وانزعاج شديد أثناء العلاقة الزوجية (Dyspareunia)، تكرار التهابات المسالك البولية، وظهور تشققات دقيقة بالأنسجة."
        },
        {
          "title": "🛡️ بروتوكولات العلاج التجديدية الحديثة",
          "content": "1. الليزر المهبلي التجديدي (MonaLisa Touch / CO2 Laser): ينشط تدفق الدم ويحفز تكوين خلايا مخاطية وكولاجين جديد.\n2. حقن البلازما الغنية بالصفائح (PRP): لتجديد الأنسجة الحيوية.\n3. العلاج الهرموني الموضعي الآمن: كريمات أو تحاميل إستروجين موضعية منخفضة الجرعة."
        },
        {
          "title": "💊 استعادة الراحة والمرونة",
          "content": "جلسات سريعة وغير مؤلمة بالعيادة تستغرق 10 دقائق، تعيد الترطيب الطبيعي والمرونة للأنسجة بنسب نجاح تفوق 90%، مما يقضي على الألم تماماً."
        }
      ],
      "en": [
        {
          "title": "🔍 Etiology of Vaginal Dryness",
          "content": "Hypoestrogenic states during lactation or menopause cause thinning of the mucosal epithelium, reduced vascularity, and loss of lubrication."
        },
        {
          "title": "⚠️ Clinical Presentation",
          "content": "Intense pruritus, burning, dyspareunia, recurrent lower urinary tract infections, and mucosal micro-fissuring."
        },
        {
          "title": "🛡️ Regenerative Therapeutic Protocols",
          "content": "Fractional CO2 laser resurfacing stimulating mucosal glycogen production, autologous PRP microinjections, and targeted ultra-low dose topical estrogens."
        },
        {
          "title": "💊 Clinical Efficacy",
          "content": "Painless 10-minute outpatient sessions restoring natural mucosal hydration, elasticity, and pain-free intimate wellness in >90% of cases."
        }
      ]
    }
  },
  {
    "id": "female-urinary-incontinence",
    "category": "cosmetic",
    "nameAR": "علاج سلس البول عند السيدات",
    "nameEN": "Female Urinary Incontinence Management",
    "briefAR": "تشخيص نوع ودرجة سلس البول لتحديد العلاج المناسب، خاصة سلس البول الإجهادي الذي قد يظهر مع الكحة أو العطس أو المجهود.",
    "briefEN": "Diagnosing types and degrees of female urinary incontinence, providing non-surgical laser therapy and minimally invasive mid-urethral sling interventions.",
    "axes": {
      "ar": [
        {
          "title": "🔍 أنواع سلس البول عند السيدات",
          "content": "1. سلس البول الإجهادي (Stress Incontinence): تسرب لا إرادي للبول مع الكحة أو العطس أو الضحك أو ممارسة الرياضة نتيجة ضعف عضلات الحوض.\n2. سلس البول الإلحاحي (Urge Incontinence): رغبة مفاجئة وشديدة في التبول يصعب التحكم بها."
        },
        {
          "title": "⚠️ الفحوصات التشخيصية الدقيقة",
          "content": "الفحص الإكلينيكي لتقييم دعم مجرى البول وعنق المثانة، تحليل البول ومزرعته لاستبعاد الالتهابات، وفحص ديناميكية البول (Urodynamics) عند الحاجة."
        },
        {
          "title": "🛡️ العلاجات الحديثة غير الجراحية",
          "content": "جلسات الليزر المهبلي التجديدي لتحفيز وتكثيف الكولاجين حول مجرى البول ودعم عنق المثانة، بالتزامن مع تمارين تقوية عضلات الحوض."
        },
        {
          "title": "💊 التدخلات الجراحية البسيطة (الشريط المهبلي TOT/TVT)",
          "content": "للحالات المتقدمة؛ تركيب شريط داعم دقيق لمجرى البول من خلال فتحة مهبلية ميكروسكوبية بعملية يوم واحد تحقق الشفاء التام من التسرب بنسبة تفوق 95%."
        }
      ],
      "en": [
        {
          "title": "🔍 Classifications of Female Incontinence",
          "content": "Stress urinary incontinence (involuntary leakage upon coughing, laughing, or exercising due to urethral hypermobility) versus urge incontinence."
        },
        {
          "title": "⚠️ Diagnostic Workup",
          "content": "Pelvic examination assessing bladder neck support, urinalysis, post-void residual volume, and urodynamic studies."
        },
        {
          "title": "🛡️ Non-Surgical Laser Therapies",
          "content": "Non-ablative Erbium/CO2 laser tightening the anterior vaginal wall sub-urethral fascia, coupled with pelvic floor muscle training."
        },
        {
          "title": "💊 Minimally Invasive Slings (TOT/TVT)",
          "content": "Sub-urethral mid-urethral synthetic sling placement via a micro-incision in a day-case surgery yielding cure rates >95%."
        }
      ]
    }
  },
  {
    "id": "pelvic-organ-prolapse",
    "category": "cosmetic",
    "nameAR": "علاج هبوط أعضاء الحوض",
    "nameEN": "Pelvic Organ Prolapse (POP) Management",
    "briefAR": "تشخيص وعلاج هبوط الرحم أو جدران المهبل الناتج عن ضعف عضلات وأنسجة قاع الحوض، مع اختيار العلاج وفقًا لنوع ودرجة الهبوط وأعراض المريضة.",
    "briefEN": "Diagnosing and managing uterine and vaginal vault prolapse resulting from pelvic floor laxity, offering restorative conservative and surgical repairs.",
    "axes": {
      "ar": [
        {
          "title": "🔍 ما هو هبوط أعضاء الحوض؟",
          "content": "نزول أو تدلي أحد أعضاء الحوض (المثانة، الرحم، أو المستقيم) إلى داخل القناة المهبلية نتيجة ضعف وتمزق الأربطة والأنسجة الداعمة لقاع الحوض."
        },
        {
          "title": "⚠️ درجات وأعراض الهبوط الحوضي",
          "content": "الشعور بكتلة أو ثقل يبرز من المهبل، صعوبة أو تكرار في التبول، صعوبة في الإخراج، وألم مزمن في أسفل الظهر يزداد مع الوقوف لفترات طويلة."
        },
        {
          "title": "🛡️ الخيارات التحفظية وغير الجراحية",
          "content": "للحالات المبكرة: العلاج الطبيعي المكثف لقاع الحوض، وتعديل نمط الحياة وتجنب الإمساك، أو استخدام الفرزجة المهبلية (Pessary) الداعمة كخيار غير جراحي."
        },
        {
          "title": "💊 الجراحات التقويمية والترميمية الحديثة",
          "content": "إصلاح وترميم جدار المهبل الأمامي (Cystocele) والخلفي (Rectocele)، أو تثبيت الرحم/قبة المهبل بالأربطة الحوضية عبر المنظار أو المهبل لاستعادة الدعم التشريحي الكامل."
        }
      ],
      "en": [
        {
          "title": "🔍 What is Pelvic Organ Prolapse?",
          "content": "Descent of the uterus, bladder (cystocele), or rectum (rectocele) into the vaginal canal due to attenuation of pelvic fascial supports."
        },
        {
          "title": "⚠️ Symptoms & Staging",
          "content": "Sensation of a vaginal bulge, incomplete bladder emptying, defecatory dysfunction, and low back pressure exacerbated by prolonged standing."
        },
        {
          "title": "🛡️ Conservative Management",
          "content": "Targeted pelvic floor physical therapy, constipation prevention, and fitting of supportive vaginal pessaries."
        },
        {
          "title": "💊 Reconstructive Surgical Solutions",
          "content": "Anterior/posterior colporrhaphy, perineorrhaphy, or laparoscopic/vaginal apical sacrospinous fixation preserving vaginal coital function."
        }
      ]
    }
  },
  {
    "id": "postpartum-perineal-repair",
    "category": "cosmetic",
    "nameAR": "إصلاح التغيرات بعد الولادة",
    "nameEN": "Postpartum Perineal & Pelvic Reconstruction",
    "briefAR": "تقييم التغيرات التي قد تحدث في منطقة المهبل والعجان بعد الولادة، مثل الارتخاء أو ضعف عضلات قاع الحوض، وتحديد الإجراء العلاجي المناسب لكل مشكلة.",
    "briefEN": "Assessing postpartum anatomical alterations in the perineum and vaginal introitus, restoring scarred, weakened, or lax tissues for total functional recovery.",
    "axes": {
      "ar": [
        {
          "title": "🔍 التغيرات التشريحية في منطقة العجان بعد الولادة",
          "content": "تتعرض منطقة العجان (بين المهبل والشرج) لضغوط شديدة أثناء الولادة الطبيعية قد تسفر عن تمزقات أو التئام مشوه لشق العجان (Episiotomy)، مما يضعف المدخل المهبلي."
        },
        {
          "title": "⚠️ المشكلات الناجمة عن سوء التئام شق العجان",
          "content": "ندبات جراحية سميكة ومؤلمة عند اللمس أو أثناء العلاقة الزوجية، اتساع فتحة المهبل الخارجية، وضعف العضلة العجانية المركزية الحامية للحوض."
        },
        {
          "title": "🛡️ جراحة ترميم وتجميل منطقة العجان (Perineoplasty)",
          "content": "إزالة الندبة المشوهة القديمة، إعادة خياطة وضم العضلات العجانية المتباعدة بدقة، وتجميل الجلد الخارجي بخياطة مخفية لتضييق فتحة المهبل واستعادة شكلها الطبيعي."
        },
        {
          "title": "💊 التعافي والراحة الدائمة",
          "content": "إجراء بسيط يُجرى في جراحة اليوم الواحد، يقضي تماماً على الألم القديم ويعيد الدعم القوي للمنطقة مع نتائج جمالية ووظيفية ممتازة."
        }
      ],
      "en": [
        {
          "title": "🔍 Postpartum Perineal Alterations",
          "content": "The perineal body undergoes immense distension during vaginal birth, frequently suffering lacerations or hypertrophic scarring from episiotomy."
        },
        {
          "title": "⚠️ Sequelae of Defective Healing",
          "content": "Painful hypertrophic perineal scar tissue, introital gaping, persistent dyspareunia, and diminished pelvic floor structural integrity."
        },
        {
          "title": "🛡️ Perineoplasty Reconstruction",
          "content": "Scar tissue revision, anatomical re-approximation of the bulbospongiosus and superficial transverse perineal muscles, and cosmetic skin closure."
        },
        {
          "title": "💊 Patient Recovery & Long-Term Comfort",
          "content": "Outpatient procedure eliminating dyspareunia, restoring introital tightness, and providing lasting functional and aesthetic restoration."
        }
      ]
    }
  }
];

export const CATEGORIES = [
  {
    "id": "all",
    "nameAR": "الكل",
    "nameEN": "All"
  },
  {
    "id": "pregnancy",
    "nameAR": "خدمات الحمل والولادة",
    "nameEN": "Pregnancy & Delivery"
  },
  {
    "id": "fertility",
    "nameAR": "خدمات تأخر الإنجاب والحقن المجهري",
    "nameEN": "Fertility & IVF"
  },
  {
    "id": "surgery",
    "nameAR": "خدمات المناظير الجراحية النسائية",
    "nameEN": "Gynecological Endoscopy"
  },
  {
    "id": "cosmetic",
    "nameAR": "خدمات التجميل والتقويم النسائي",
    "nameEN": "Cosmetic & Reconstructive Gynecology"
  }
];
