// delivery-i18n.js
const translations = {
  en: { shopkeeper: "Shopkeeper", delivery: "Delivery Boy", customer: "Customer", bid: "Bid", wallet: "Wallet", order: "Order" },
  bn: { shopkeeper: "দোকানদার", delivery: "ডেলিভারি বয়", customer: "কাস্টমার", bid: "বিড", wallet: "ওয়ালেট", order: "অর্ডার" },
  hi: { shopkeeper: "दुकानदार", delivery: "डिलिवरी बॉय", customer: "ग्राहक", bid: "बोली", wallet: "वॉलेट", order: "ऑर्डर" },
  ta: { shopkeeper: "கடைக்காரர்", delivery: "டெலிவரி பாய்", customer: "வாடிக்கையாளர்", bid: "ஏலம்", wallet: "வாலெட்", order: "ஆர்டர்" },
  te: { shopkeeper: "దుకాణదారుడు", delivery: "డెలివరీ బాయ్", customer: "కస్టమర్", bid: "బిడ్", wallet: "వాలెట్", order: "ఆర్డర్" },
  ml: { shopkeeper: "കടക്കാരൻ", delivery: "ഡെലിവറി ബോയ്", customer: "ഉപഭോക്താവ്", bid: "ലേലം", wallet: "വാലറ്റ്", order: "ഓർഡർ" },
  kn: { shopkeeper: "ಅಂಗಡಿಯವರು", delivery: "ಡೆಲಿವರಿ ಬಾಯ್", customer: "ಗ್ರಾಹಕ", bid: "ಬಿಡ್", wallet: "ವಾಲೆಟ್", order: "ಆರ್ಡರ್" },
  gu: { shopkeeper: "દુકાનદાર", delivery: "ડિલિવરી બોય", customer: "ગ્રાહક", bid: "બિડ", wallet: "વોલેટ", order: "ઓર્ડર" },
  mr: { shopkeeper: "दुकानदार", delivery: "डिलिव्हरी बॉय", customer: "ग्राहक", bid: "बोली", wallet: "वॉलेट", order: "ऑर्डर" },
  pa: { shopkeeper: "ਦੁਕਾਨਦਾਰ", delivery: "ਡਿਲੀਵਰੀ ਬੁਆਏ", customer: "ਗਾਹਕ", bid: "ਬੋਲੀ", wallet: "ਵਾਲਿਟ", order: "ਆਰਡਰ" },
  or: { shopkeeper: "ଦୋକାନୀ", delivery: "ଡେଲିଭରି ବୟ", customer: "ଗ୍ରାହକ", bid: "ବିଡ", wallet: "ୱାଲେଟ", order: "ଅର୍ଡର" },
  ur: { shopkeeper: "دکاندار", delivery: "ڈیلیوری بوائے", customer: "گاہک", bid: "بولی", wallet: "والٹ", order: "آرڈر" }
};

let currentLang = 'bn'; // ডিফল্ট বাংলা

export function setLanguage(langCode) {
  if (translations[langCode]) {
    currentLang = langCode;
    localStorage.setItem('dlv_lang', langCode);
  }
}

export function t(key) {
  return translations[currentLang][key] || key;
}

const savedLang = localStorage.getItem('dlv_lang');
if (savedLang && translations[savedLang]) currentLang = savedLang;
