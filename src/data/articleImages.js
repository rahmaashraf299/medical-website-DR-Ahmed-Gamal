// Centralized article images mapper
import routinePregImg from '../assets/images/routine-pregnancy.png';
import highRiskImg from '../assets/images/high-risk-pregnancy.png';
import fertilityImg from '../assets/images/fertility-treatment.png';
import icsiIvfImg from '../assets/images/icsi-ivf.png';
import laparoscopyImg from '../assets/images/laparoscopy-hysteroscopy.png';
import advancedUltrasoundImg from '../assets/images/advanced-ultrasound.png';
import bleedingFibroidsImg from '../assets/images/uterine-bleeding-fibroids.png';
import dueDateImg from '../assets/images/tool-due-date.png';
import pregWeeksImg from '../assets/images/tool-preg-weeks.png';
import icsiDueDateImg from '../assets/images/tool-icsi-due-date.png';

// Fallback image map by imageKey
export const FALLBACK_ARTICLE_IMAGES = {
  'routine-pregnancy': routinePregImg,
  'high-risk-pregnancy': highRiskImg,
  'fertility-treatment': fertilityImg,
  'icsi-ivf': icsiIvfImg,
  'laparoscopy-hysteroscopy': laparoscopyImg,
  'advanced-ultrasound': advancedUltrasoundImg,
  'uterine-bleeding-fibroids': bleedingFibroidsImg,
  'tool-due-date': dueDateImg,
  'tool-preg-weeks': pregWeeksImg,
  'tool-icsi-due-date': icsiDueDateImg
};

// Eagerly import all article images from assets/articles
const ARTICLE_IMAGES_GLOB = import.meta.glob('../assets/articles/*.jpeg', {
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

const FILE_MAP = {};
const NORMALIZED_FILE_MAP = {};
Object.entries(ARTICLE_IMAGES_GLOB).forEach(([filePath, module]) => {
  const filename = filePath.replace(/\\/g, '/').split('/').pop();
  if (module) {
    FILE_MAP[filename] = module;
    NORMALIZED_FILE_MAP[normalizeName(filename)] = module;
  }
});

// Explicit mapping from article ID to filename in assets/articles
export const ARTICLE_FILE_NAMES = {
  'natural-birth-guide': 'الولادة الطبيعية كل ما تحتاجين معرفته من بداية الطلق حتي الولادة.jpeg',
  'natural-birth-benefits': 'فوائد الولادة الطبيعية للام والطفل ومتي تكون الخيار المناسب.jpeg',
  'epidural-natural-birth': 'الولادة الطبيعية بدون الم كيف تعمل حقنه الابيديورال.jpeg',
  'vbac-after-c-section': 'الولادة الطبيعية بعد القيصرية هل يمكن الولادة طبيعيا بعد عملية قيصرية سابقة.jpeg',
  'icsi-step-by-step': 'الحقن المجهري خطوه بخطوه من تنشيط المبيض حتي نقل الاجنه.jpeg',
  'icsi-vs-ivf-vs-iui': 'الفرق بين الحقن المجهري واطفال  الانابيب والتلقيح الصناعي.jpeg',
  'icsi-failure-reasons': 'اسباب فشل الحقن المجهري لماذا قد لا يحدث الحمل بعد نقل الاجنه.jpeg',
  'hysteroscopy-guide': 'منظار الرحم لماذا يجري وما الحالات التي يعالجها.jpeg',
  'laparoscopy-guide': 'منظار البطن النسائي ومميزاته والتعافي بعد العمليه.jpeg',
  'laparoscopic-myomectomy': 'استئصال الاورام الليفيه بالمنظار متي يمكن ازال الورم مع الحفاظ علي الرحم.jpeg'
};

export const ARTICLE_IMAGES = {};

Object.entries(ARTICLE_FILE_NAMES).forEach(([articleId, filename]) => {
  const found = filename ? (FILE_MAP[filename] || NORMALIZED_FILE_MAP[normalizeName(filename)]) : null;
  if (found) {
    ARTICLE_IMAGES[articleId] = found;
  }
});

export const getArticleImage = (articleId, imageKey) => {
  if (articleId && ARTICLE_IMAGES[articleId]) {
    return ARTICLE_IMAGES[articleId];
  }
  if (imageKey && FALLBACK_ARTICLE_IMAGES[imageKey]) {
    return FALLBACK_ARTICLE_IMAGES[imageKey];
  }
  return routinePregImg;
};

export default ARTICLE_IMAGES;
