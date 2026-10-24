// Centralized service images mapper
import fallbackLaparoscopy from '../assets/images/laparoscopy-hysteroscopy.png';
import fallbackRoutinePreg from '../assets/images/routine-pregnancy.png';

// Eagerly import all service images from assets/services
const SERVICE_IMAGES_GLOB = import.meta.glob('../assets/services/*.*', {
  eager: true,
  import: 'default'
});

const normalizeName = (name) => {
  if (!name) return '';
  return name.replace(/\.(jpeg|jpg|png)$/i, '')
             .replace(/[أإآ]/g, 'ا')
             .replace(/ة/g, 'ه')
             .replace(/ى/g, 'ي')
             .replace(/\s+/g, ' ')
             .trim();
};

// Build lookup maps by direct filename and normalized filename
const FILE_MAP = {};
const NORMALIZED_FILE_MAP = {};
Object.entries(SERVICE_IMAGES_GLOB).forEach(([filePath, module]) => {
  const filename = filePath.replace(/\\/g, '/').split('/').pop();
  if (module) {
    FILE_MAP[filename] = module;
    NORMALIZED_FILE_MAP[normalizeName(filename)] = module;
  }
});

// Explicit service ID to image filename mapping
export const SERVICE_FILE_NAMES = {
  // الحمل والولادة (13 خدمة)
  'routine-pregnancy': 'متابعة الحمل.jpeg',
  'high-risk-pregnancy': 'متابعة الحمل عالي الخصوبة والحمل الحرج.jpeg',
  'natural-delivery': 'الولادة الطبيعية.jpeg',
  'painless-natural-delivery': 'الولادة الطبيعية بدون ألم.jpeg',
  'cesarean-delivery': 'الولادة القيصيرية.jpeg',
  'painless-cesarean': 'الولادة القيصرية بدون ألم.jpeg',
  'twin-pregnancy': 'متابعة الحمل بتوأم.jpeg',
  'pregnancy-after-ivf': 'متابعة الحمل بعد الحقن المجهري.jpeg',
  'gestational-diabetes': 'متابعة سكر الحمل.jpeg',
  'preeclampsia-hypertension': 'متابعة ضغط لحمل وتسمم والحمل.jpeg',
  'recurrent-miscarriage': 'علاج ومتابعة الاجهاض المتكرر.jpeg',
  'fetal-ultrasound-growth': 'السونار ومتابعة نمو الجنين.jpeg',
  'postpartum-care': 'متابعه ما بعد الولادة.jpeg',

  // تأخر الإنجاب والحقن المجهري (18 خدمة)
  'fertility-treatment': 'علاج تأخر الانجاب.jpeg',
  'diagnosing-delayed-conception': 'تشخيص أسباب تأخر الحمل.jpeg',
  'icsi-ivf': 'الحقن المجهري.jpeg',
  'ivf-treatment': 'أطفال الأنابيب.jpeg',
  'iui-insemination': 'التلقيح الصناعي.jpeg',
  'ovulation-induction-monitoring': 'تنشيط ومتابعه التبويض.jpeg',
  'poor-ovulation-treatment': 'علاج ضعف التبويض.jpeg',
  'pcos-fertility': 'تكيس المبايض تأخر الحمل.jpeg',
  'ovarian-reserve-ultrasound': 'تقييم مخزون المبيض.jpeg',
  'endometriosis-infertility': 'بطانة الرحم المهاجرة وتأخر الانجاب.jpeg',
  'fallopian-tubes-patency': 'فحص قنوات فألوب وتأخر الحمل.jpeg',
  'egg-freezing-fertility-preservation': 'تجميد البويضات وحفظ الخصوبه.jpeg',
  'embryo-cryopreservation': 'تجميد الأجنة.jpeg',
  'gender-selection': 'تحديد نوع الجنين.jpeg',
  'pgt-genetic-testing': 'الفحص الوراثي  للأجنه قبل النقل.jpeg',
  'recurrent-ivf-failure': 'فشل الحقن المجهري المتكرر.jpeg',
  'recurrent-loss-fertility': 'الاجهاض المتكرر وتأخر الانجاب.jpeg',
  'fertility-pregnancy-after-ivf': 'متابعة الحمل بعد الحقن المجهري.jpeg',

  // المناظير الجراحية (14 خدمة)
  'diagnostic-hysteroscopy': 'منظار الرحم التشخيصي.jpeg',
  'operative-hysteroscopy': 'منظار الرحم الجراحي.jpeg',
  'diagnostic-laparoscopy': 'منظار البطن التشخيصي.jpeg',
  'operative-laparoscopy': 'منظار البطن الجراحي.jpeg',
  'laparoscopic-myomectomy': 'استئصال الأورام الليفية بالمنظار.jpeg',
  'laparoscopic-hysterectomy': 'استئصال الرحم بالمنظار.jpeg',
  'laparoscopic-ovarian-cystectomy': 'استئصال أكياس المبيض بالمنظار.jpeg',
  'laparoscopic-endometriosis-treatment': 'علاج بطانة الرحم المهاجرة بالمنظار.jpeg',
  'hysteroscopic-polypectomy': 'ازالة الزوائد اللحمية بالمنظار الرحمي.jpeg',
  'hysteroscopic-adhesiolysis': 'فك التصاقات الرحم بالمنظار.jpeg',
  'hysteroscopic-septum-resection': 'علاج الحاجز الرحمي بالمنظار.PNG',
  'laparoscopic-ectopic-pregnancy': 'علاج الحمل خارج الرحم بالمنظار.jpeg',
  'endoscopy-fertility-evaluation': 'تشخيص وعلاج أسباب تأخر الأنجاب بالمنظار.jpeg',
  'laparoscopy-chronic-pelvic-pain': 'تشخيص وعلاج الام الحوض المزمنه بالمنظار.PNG',

  // التجميل والتقويم النسائي (9 خدمات)
  'cosmetic-gynecology': 'التجميل النسائي.jpeg',
  'vaginal-tightening': 'تضييق المهبل.jpeg',
  'vaginoplasty': 'رأب المهبل.jpeg',
  'labiaplasty': 'تجميل الشفرات.jpeg',
  'postpartum-vaginal-laxity': 'علاج ارتخاء المهبل بعد الولادة.jpeg',
  'vaginal-dryness-treatment': 'علاج جفاف المهبل.jpeg',
  'female-urinary-incontinence': 'علاج سلس البول عند السيدات.jpeg',
  'pelvic-organ-prolapse': 'علاج هبوط أعضاء الحوض.jpeg',
  'postpartum-perineal-repair': 'اصلاح التغيرات بعد الولادة.jpeg'
};

// Map each service to its loaded image or fallback
export const SERVICE_IMAGES = {};

Object.entries(SERVICE_FILE_NAMES).forEach(([serviceId, filename]) => {
  const found = filename ? (FILE_MAP[filename] || NORMALIZED_FILE_MAP[normalizeName(filename)]) : null;
  if (found) {
    SERVICE_IMAGES[serviceId] = found;
  } else if (serviceId.includes('laparoscop') || serviceId.includes('hysteroscop') || serviceId.includes('endoscopy') || serviceId.includes('septum')) {
    SERVICE_IMAGES[serviceId] = fallbackLaparoscopy;
  } else {
    SERVICE_IMAGES[serviceId] = fallbackRoutinePreg;
  }
});

export const getServiceImage = (serviceId) => {
  return SERVICE_IMAGES[serviceId] || fallbackRoutinePreg;
};

export { fallbackRoutinePreg, fallbackLaparoscopy };
export default SERVICE_IMAGES;
