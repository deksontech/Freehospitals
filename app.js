const stateCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi", "Solan", "Kullu"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Andaman and Nicobar Islands": ["Port Blair", "Mayabunder", "Diglipur", "Rangat", "Car Nicobar"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"],
  Ladakh: ["Leh", "Kargil", "Nubra", "Zanskar"],
  Lakshadweep: ["Kavaratti", "Agatti", "Minicoy", "Amini"],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
};

const translations = {
  en: {
    language: "Language",
    doctors: "Doctors",
    specialties: "Specialties",
    symptoms: "Symptoms",
    faq: "FAQ",
    help: "Help",
    login: "Login / Sign up",
    urgentCare: "Need urgent care?",
    emergencyTitle: "Medical emergency?",
    emergencyText: "Call local emergency services or visit the nearest hospital immediately. Freehospitals helps with doctor discovery and contact support.",
    heroEyebrow: "Find the right doctor faster",
    heroTitle: "Book trusted care near you.",
    heroCopy: "Compare verified doctors by specialty, experience, patient rating, language, and the soonest available appointment.",
    findDoctor: "Find a doctor",
    howItWorks: "How it works",
    searchLabel: "Doctor, symptom, or specialty",
    searchPlaceholder: "Try cardiologist, skin, fever",
    specialty: "Specialty",
    allSpecialties: "All specialties",
    state: "State",
    allStates: "All states",
    city: "City",
    allCities: "All cities",
    availability: "Availability",
    anyTime: "Any time",
    today: "Today",
    tomorrow: "Tomorrow",
    thisWeek: "This week",
    callToConfirm: "Call to confirm",
    hospitalClinic: "Hospital or clinic",
    hospitalPlaceholder: "Search Apollo, Fortis, City Hospital, or private clinic",
    popular: "Popular:",
    symptomEyebrow: "Search by symptom",
    symptomTitle: "Not sure which specialist you need?",
    symptomCopy: "Choose what feels closest. We will point the search toward the right category.",
    journeyEyebrow: "Simple care journey",
    journeyTitle: "From search to callback in minutes.",
    journeyCopy: "Find a doctor, submit one request, and let the care desk help you connect.",
    step1Title: "Find a doctor",
    step1Copy: "Search by symptom, specialty, state, city, hospital, language, and availability.",
    step2Title: "Submit request",
    step2Copy: "Share patient details, health concern, and the best time to be contacted.",
    step3Title: "Care desk connects",
    step3Copy: "The Freehospitals care desk helps you with the next call, WhatsApp, or email step.",
    trustEyebrow: "Why patients use Freehospitals",
    trustTitle: "Clear, free, and easy to act on.",
    freeCost: "Free of Cost",
    noHidden: "No hidden charges",
    careDeskSupport: "Care desk support",
    hospitalsPrivate: "Hospitals and private clinics",
    indiaStates: "Available across Indian states",
    refine: "Refine Results",
    reset: "Reset",
    useLocation: "Use my location",
    nearMeCopy: "Choose state and city, or allow location to find nearby options.",
    categories: "Categories",
    languages: "Languages",
    timePreference: "Time Preference",
    minRating: "Minimum Rating",
    notSure: "Not sure who to choose?",
    careNoteCopy: "Share symptoms and preferences. A care coordinator can help match the right specialist.",
    helpFind: "Help me find a doctor",
    showing: "Showing {shown} of {total} doctors",
    recommended: "Recommended Matches",
    sortBy: "Sort by",
    recommendedSort: "Recommended",
    highestRating: "Highest rating",
    soonest: "Soonest available",
    noDoctors: "No doctors match those filters.",
    noExact: "No exact match here yet. Try nearby cities, another specialty, or call the care desk.",
    noBroad: "Try a broader specialty, lower rating, or another availability window.",
    callDesk: "Call care desk",
    privacy: "Privacy Policy",
    terms: "Terms",
    footerText: "Freehospitals helps patients discover doctors and request contact support.",
    contactDoctor: "Contact doctor",
    requestCallback: "Request a callback",
    contactCopy: "Share your details and preferred time. We will save this request for the care desk, then you can call, WhatsApp, or email directly.",
    patientName: "Patient name",
    mobile: "Mobile number",
    email: "Email",
    age: "Age",
    gender: "Gender",
    preferredContact: "Preferred contact method",
    preferredTime: "Preferred time",
    healthConcern: "Health concern",
    consent: "I agree that Freehospitals may contact me by phone, WhatsApp, or email about this request.",
    submitRequest: "Submit request",
    whatsappDesk: "WhatsApp care desk",
    openEmail: "Open email app",
    submitOnce: "Submit once, then choose call, WhatsApp, or email.",
    callCareDesk: "Call Care Desk",
    findDoctorMobile: "Find Doctor",
    verified: "Verified",
    freeOfCost: "Free of Cost",
    availableToday: "Available Today",
    availableTomorrow: "Available Tomorrow",
    videoConsult: "Video Consult",
    homeVisit: "Home Visit",
    speaksHindi: "Speaks Hindi",
    hospitalAffiliated: "Hospital Affiliated",
    privateClinic: "Private Clinic",
    viewProfile: "View profile",
    requestContact: "Request contact",
    shortlist: "Shortlist",
    saved: "Saved",
    rating: "Rating",
    yearsExperience: "{years} years experience",
    doctorProfile: "Doctor profile",
    verifiedProfile: "Verified profile",
    documentsChecked: "Documents checked",
    documentsPending: "Documents pending",
    openMap: "Open location map",
    openSeo: "Open SEO-friendly link",
    saving: "Saving...",
    savingRequest: "Saving your request for the care desk...",
    requestSaved: "Request saved in the admin panel. You can now call, WhatsApp, or open email.",
    invalidPhone: "Please enter a valid 10 digit Indian mobile number.",
    helpMeFind: "Help me find a doctor",
  },
  hi: {
    language: "भाषा",
    doctors: "डॉक्टर",
    specialties: "विशेषताएं",
    symptoms: "लक्षण",
    faq: "सवाल",
    help: "मदद",
    login: "लॉगिन / साइन अप",
    urgentCare: "तुरंत देखभाल चाहिए?",
    emergencyTitle: "मेडिकल इमरजेंसी?",
    emergencyText: "स्थानीय आपातकालीन सेवा को कॉल करें या तुरंत नजदीकी अस्पताल जाएं। Freehospitals डॉक्टर खोजने और संपर्क सहायता में मदद करता है।",
    heroEyebrow: "सही डॉक्टर जल्दी खोजें",
    heroTitle: "अपने पास भरोसेमंद देखभाल पाएं।",
    heroCopy: "विशेषता, अनुभव, मरीज रेटिंग, भाषा और उपलब्ध समय के आधार पर सत्यापित डॉक्टरों की तुलना करें।",
    findDoctor: "डॉक्टर खोजें",
    howItWorks: "कैसे काम करता है",
    searchLabel: "डॉक्टर, लक्षण या विशेषता",
    searchPlaceholder: "जैसे कार्डियोलॉजिस्ट, त्वचा, बुखार",
    specialty: "विशेषता",
    allSpecialties: "सभी विशेषताएं",
    state: "राज्य",
    allStates: "सभी राज्य",
    city: "शहर",
    allCities: "सभी शहर",
    availability: "उपलब्धता",
    anyTime: "कोई भी समय",
    today: "आज",
    tomorrow: "कल",
    thisWeek: "इस सप्ताह",
    callToConfirm: "पुष्टि के लिए कॉल करें",
    hospitalClinic: "अस्पताल या क्लिनिक",
    hospitalPlaceholder: "Apollo, Fortis, City Hospital या private clinic खोजें",
    popular: "लोकप्रिय:",
    symptomEyebrow: "लक्षण से खोजें",
    symptomTitle: "कौन सा विशेषज्ञ चाहिए, पता नहीं?",
    symptomCopy: "जो सबसे करीब लगे उसे चुनें। हम खोज को सही श्रेणी की ओर ले जाएंगे।",
    journeyEyebrow: "आसान देखभाल यात्रा",
    journeyTitle: "खोज से कॉलबैक तक, कुछ ही मिनटों में।",
    journeyCopy: "डॉक्टर खोजें, एक अनुरोध भेजें, और care desk को आपको जोड़ने दें।",
    step1Title: "डॉक्टर खोजें",
    step1Copy: "लक्षण, विशेषता, राज्य, शहर, अस्पताल, भाषा और उपलब्धता से खोजें।",
    step2Title: "अनुरोध भेजें",
    step2Copy: "मरीज की जानकारी, स्वास्थ्य समस्या और संपर्क का सही समय साझा करें।",
    step3Title: "Care desk जोड़ेगा",
    step3Copy: "Freehospitals care desk कॉल, WhatsApp या email से अगला कदम बताने में मदद करता है।",
    trustEyebrow: "मरीज Freehospitals क्यों चुनते हैं",
    trustTitle: "स्पष्ट, मुफ्त और आसान।",
    freeCost: "मुफ्त",
    noHidden: "कोई छुपा शुल्क नहीं",
    careDeskSupport: "Care desk सहायता",
    hospitalsPrivate: "अस्पताल और private clinics",
    indiaStates: "भारत के राज्यों में उपलब्ध",
    refine: "परिणाम सुधारें",
    reset: "रीसेट",
    useLocation: "मेरी लोकेशन इस्तेमाल करें",
    nearMeCopy: "राज्य और शहर चुनें, या आसपास विकल्प खोजने के लिए लोकेशन अनुमति दें।",
    categories: "श्रेणियां",
    languages: "भाषाएं",
    timePreference: "समय पसंद",
    minRating: "न्यूनतम रेटिंग",
    notSure: "किसे चुनें, समझ नहीं आ रहा?",
    careNoteCopy: "लक्षण और पसंद बताएं। Care coordinator सही specialist मिलाने में मदद करेगा।",
    helpFind: "मुझे डॉक्टर खोजने में मदद करें",
    showing: "{total} में से {shown} डॉक्टर दिख रहे हैं",
    recommended: "सुझाए गए डॉक्टर",
    sortBy: "क्रमबद्ध करें",
    recommendedSort: "सुझाए गए",
    highestRating: "सबसे अच्छी रेटिंग",
    soonest: "सबसे जल्दी उपलब्ध",
    noDoctors: "इन फिल्टर से कोई डॉक्टर नहीं मिला।",
    noExact: "यहां exact match नहीं मिला। आसपास के शहर, दूसरी विशेषता या care desk से बात करें।",
    noBroad: "विशेषता, रेटिंग या उपलब्धता को थोड़ा बदलकर देखें।",
    callDesk: "Care desk को कॉल करें",
    privacy: "Privacy Policy",
    terms: "Terms",
    footerText: "Freehospitals मरीजों को डॉक्टर खोजने और contact request भेजने में मदद करता है।",
    contactDoctor: "डॉक्टर से संपर्क",
    requestCallback: "Callback request",
    contactCopy: "अपनी जानकारी और पसंदीदा समय साझा करें। हम request care desk में save करेंगे, फिर आप call, WhatsApp या email चुन सकते हैं।",
    patientName: "मरीज का नाम",
    mobile: "मोबाइल नंबर",
    email: "Email",
    age: "उम्र",
    gender: "लिंग",
    preferredContact: "संपर्क का पसंदीदा तरीका",
    preferredTime: "पसंदीदा समय",
    healthConcern: "स्वास्थ्य समस्या",
    consent: "मैं सहमत हूं कि Freehospitals इस request के बारे में मुझे phone, WhatsApp या email से संपर्क कर सकता है।",
    submitRequest: "Request भेजें",
    whatsappDesk: "Care desk WhatsApp",
    openEmail: "Email app खोलें",
    submitOnce: "एक बार submit करें, फिर call, WhatsApp या email चुनें।",
    callCareDesk: "Care Desk कॉल करें",
    findDoctorMobile: "डॉक्टर खोजें",
    verified: "सत्यापित",
    freeOfCost: "मुफ्त",
    availableToday: "आज उपलब्ध",
    availableTomorrow: "कल उपलब्ध",
    videoConsult: "Video consult",
    homeVisit: "Home visit",
    speaksHindi: "Hindi बोलते हैं",
    hospitalAffiliated: "अस्पताल से जुड़े",
    privateClinic: "Private clinic",
    viewProfile: "Profile देखें",
    requestContact: "Contact request",
    shortlist: "Shortlist",
    saved: "Saved",
    rating: "रेटिंग",
    yearsExperience: "{years} साल अनुभव",
    doctorProfile: "Doctor profile",
    verifiedProfile: "सत्यापित profile",
    documentsChecked: "Documents checked",
    documentsPending: "Documents pending",
    openMap: "Location map खोलें",
    openSeo: "SEO link खोलें",
    saving: "Save हो रहा है...",
    savingRequest: "आपकी request care desk के लिए save हो रही है...",
    requestSaved: "Request admin panel में save हो गई। अब आप call, WhatsApp या email कर सकते हैं।",
    invalidPhone: "कृपया सही 10 digit Indian mobile number डालें।",
    helpMeFind: "मुझे डॉक्टर खोजने में मदद करें",
  },
  gu: {
    language: "ભાષા",
    doctors: "ડૉક્ટર્સ",
    specialties: "વિશેષતા",
    symptoms: "લક્ષણો",
    faq: "પ્રશ્નો",
    help: "મદદ",
    login: "લૉગિન / સાઇન અપ",
    urgentCare: "તાત્કાલિક સારવાર જોઈએ?",
    emergencyTitle: "મેડિકલ ઇમરજન્સી?",
    emergencyText: "સ્થાનિક ઇમરજન્સી સેવા પર કૉલ કરો અથવા તરત નજીકની હોસ્પિટલ જાઓ. Freehospitals ડૉક્ટર શોધવામાં અને સંપર્ક સહાયમાં મદદ કરે છે.",
    heroEyebrow: "યોગ્ય ડૉક્ટર ઝડપથી શોધો",
    heroTitle: "તમારા નજીક વિશ્વસનીય સારવાર શોધો.",
    heroCopy: "વિશેષતા, અનુભવ, દર્દી રેટિંગ, ભાષા અને ઉપલબ્ધ સમય પ્રમાણે verified doctors સરખાવો.",
    findDoctor: "ડૉક્ટર શોધો",
    howItWorks: "કેવી રીતે કામ કરે છે",
    searchLabel: "ડૉક્ટર, લક્ષણ અથવા વિશેષતા",
    searchPlaceholder: "જેમ કે cardiologist, skin, fever",
    specialty: "વિશેષતા",
    allSpecialties: "બધી વિશેષતા",
    state: "રાજ્ય",
    allStates: "બધા રાજ્ય",
    city: "શહેર",
    allCities: "બધા શહેર",
    availability: "ઉપલબ્ધતા",
    anyTime: "કોઈપણ સમય",
    today: "આજે",
    tomorrow: "કાલે",
    thisWeek: "આ અઠવાડિયે",
    callToConfirm: "પુષ્ટિ માટે કૉલ કરો",
    hospitalClinic: "હોસ્પિટલ અથવા ક્લિનિક",
    hospitalPlaceholder: "Apollo, Fortis, City Hospital અથવા private clinic શોધો",
    popular: "લોકપ્રિય:",
    symptomEyebrow: "લક્ષણથી શોધો",
    symptomTitle: "કયો specialist જોઈએ તે ખબર નથી?",
    symptomCopy: "જે સૌથી નજીક લાગે તે પસંદ કરો. અમે search ને યોગ્ય category તરફ દોરીશું.",
    journeyEyebrow: "સરળ સારવાર સફર",
    journeyTitle: "Search થી callback સુધી મિનિટોમાં.",
    journeyCopy: "ડૉક્ટર શોધો, એક request મોકલો, અને care desk તમને જોડવામાં મદદ કરશે.",
    step1Title: "ડૉક્ટર શોધો",
    step1Copy: "લક્ષણ, વિશેષતા, રાજ્ય, શહેર, હોસ્પિટલ, ભાષા અને ઉપલબ્ધતા પ્રમાણે શોધો.",
    step2Title: "Request મોકલો",
    step2Copy: "દર્દીની વિગતો, આરોગ્ય સમસ્યા અને સંપર્ક માટે યોગ્ય સમય શેર કરો.",
    step3Title: "Care desk જોડશે",
    step3Copy: "Freehospitals care desk call, WhatsApp અથવા email માટે આગળનું પગલું સમજાવવામાં મદદ કરે છે.",
    trustEyebrow: "દર્દીઓ Freehospitals કેમ પસંદ કરે છે",
    trustTitle: "સ્પષ્ટ, મફત અને સરળ.",
    freeCost: "મફત",
    noHidden: "કોઈ છુપો ચાર્જ નહીં",
    careDeskSupport: "Care desk support",
    hospitalsPrivate: "હોસ્પિટલ અને private clinics",
    indiaStates: "ભારતના રાજ્યોમાં ઉપલબ્ધ",
    refine: "પરિણામ સુધારો",
    reset: "Reset",
    useLocation: "મારી location વાપરો",
    nearMeCopy: "રાજ્ય અને શહેર પસંદ કરો, અથવા નજીકના options માટે location allow કરો.",
    categories: "Categories",
    languages: "ભાષાઓ",
    timePreference: "સમય પસંદગી",
    minRating: "ન્યૂનતમ rating",
    notSure: "કયો ડૉક્ટર પસંદ કરવો?",
    careNoteCopy: "લક્ષણો અને પસંદગી શેર કરો. Care coordinator યોગ્ય specialist શોધવામાં મદદ કરશે.",
    helpFind: "મને ડૉક્ટર શોધવામાં મદદ કરો",
    showing: "{total} માંથી {shown} ડૉક્ટર બતાવી રહ્યા છીએ",
    recommended: "સૂચવેલા matches",
    sortBy: "Sort",
    recommendedSort: "Recommended",
    highestRating: "સૌથી ઊંચી rating",
    soonest: "સૌથી વહેલી ઉપલબ્ધતા",
    noDoctors: "આ filters માટે કોઈ doctor નથી.",
    noExact: "અહીં exact match નથી. નજીકના શહેર, બીજી specialty અથવા care desk અજમાવો.",
    noBroad: "વધુ broad specialty, ઓછી rating અથવા બીજી availability અજમાવો.",
    callDesk: "Care desk કૉલ કરો",
    privacy: "Privacy Policy",
    terms: "Terms",
    footerText: "Freehospitals દર્દીઓને doctors શોધવામાં અને contact request મોકલવામાં મદદ કરે છે.",
    contactDoctor: "ડૉક્ટરનો સંપર્ક",
    requestCallback: "Callback request",
    contactCopy: "તમારી વિગતો અને પસંદ સમય શેર કરો. અમે request care desk માં save કરીશું, પછી તમે call, WhatsApp અથવા email પસંદ કરી શકો.",
    patientName: "દર્દીનું નામ",
    mobile: "મોબાઇલ નંબર",
    email: "Email",
    age: "ઉંમર",
    gender: "લિંગ",
    preferredContact: "સંપર્કનો પસંદ રસ્તો",
    preferredTime: "પસંદ સમય",
    healthConcern: "આરોગ્ય સમસ્યા",
    consent: "હું સહમત છું કે Freehospitals આ request માટે મને phone, WhatsApp અથવા email દ્વારા સંપર્ક કરી શકે.",
    submitRequest: "Request મોકલો",
    whatsappDesk: "Care desk WhatsApp",
    openEmail: "Email app ખોલો",
    submitOnce: "એક વાર submit કરો, પછી call, WhatsApp અથવા email પસંદ કરો.",
    callCareDesk: "Care Desk કૉલ કરો",
    findDoctorMobile: "ડૉક્ટર શોધો",
    verified: "Verified",
    freeOfCost: "મફત",
    availableToday: "આજે ઉપલબ્ધ",
    availableTomorrow: "કાલે ઉપલબ્ધ",
    videoConsult: "Video consult",
    homeVisit: "Home visit",
    speaksHindi: "Hindi બોલે છે",
    hospitalAffiliated: "Hospital affiliated",
    privateClinic: "Private clinic",
    viewProfile: "Profile જુઓ",
    requestContact: "Contact request",
    shortlist: "Shortlist",
    saved: "Saved",
    rating: "Rating",
    yearsExperience: "{years} વર્ષ અનુભવ",
    doctorProfile: "Doctor profile",
    verifiedProfile: "Verified profile",
    documentsChecked: "Documents checked",
    documentsPending: "Documents pending",
    openMap: "Location map ખોલો",
    openSeo: "SEO link ખોલો",
    saving: "Save થઈ રહ્યું છે...",
    savingRequest: "તમારી request care desk માટે save થઈ રહી છે...",
    requestSaved: "Request admin panel માં save થઈ ગઈ. હવે તમે call, WhatsApp અથવા email કરી શકો.",
    invalidPhone: "કૃપા કરીને સાચો 10 digit Indian mobile number નાખો.",
    helpMeFind: "મને ડૉક્ટર શોધવામાં મદદ કરો",
  },
};

let currentLanguage = localStorage.getItem("freehospitalsLanguage") || "en";
const pathLanguage = window.location.pathname.split("/").filter(Boolean)[0];
if (["hi", "gu"].includes(pathLanguage)) currentLanguage = pathLanguage;

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] || translations.en[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replace(`{${name}}`, value), template);
}

let doctors = [
  {
    id: 1,
    name: "Dr. Ananya Mehta",
    specialty: "Cardiologist",
    practiceType: "Hospital Affiliated",
    hospitalName: "Sterling Hospital",
    state: "Gujarat",
    city: "Ahmedabad",
    rating: 4.9,
    reviews: 328,
    availability: "Today",
    nextSlot: "11:30 AM",
    experience: 14,
    visits: ["Clinic", "Video"],
    languages: ["English", "Hindi", "Gujarati"],
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Heart rhythm, hypertension, cholesterol care, and preventive cardiac checkups.",
  },
  {
    id: 2,
    name: "Dr. Rohan Shah",
    specialty: "Dermatologist",
    practiceType: "Private Clinic",
    hospitalName: "",
    state: "Gujarat",
    city: "Surat",
    rating: 4.8,
    reviews: 214,
    availability: "Tomorrow",
    nextSlot: "10:00 AM",
    experience: 9,
    visits: ["Clinic", "Video"],
    languages: ["English", "Hindi", "Gujarati"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Acne, hair fall, allergy, pigmentation, and long-term skin health plans.",
  },
  {
    id: 3,
    name: "Dr. Nisha Kapoor",
    specialty: "Pediatrician",
    practiceType: "Hospital Affiliated",
    hospitalName: "Nanavati Max Super Speciality Hospital",
    state: "Maharashtra",
    city: "Mumbai",
    rating: 4.7,
    reviews: 187,
    availability: "Today",
    nextSlot: "3:15 PM",
    experience: 11,
    visits: ["Clinic", "Home"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Newborn care, vaccinations, child nutrition, fever, cough, and growth tracking.",
  },
  {
    id: 4,
    name: "Dr. Kabir Sethi",
    specialty: "Orthopedic Surgeon",
    practiceType: "Hospital Affiliated",
    hospitalName: "Max Super Speciality Hospital",
    state: "Delhi",
    city: "New Delhi",
    rating: 4.6,
    reviews: 156,
    availability: "This week",
    nextSlot: "Wed 5:30 PM",
    experience: 16,
    visits: ["Clinic"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Joint pain, sports injuries, fracture care, arthritis, and recovery planning.",
  },
  {
    id: 5,
    name: "Dr. Farah Contractor",
    specialty: "Gynecologist",
    practiceType: "Private Clinic",
    hospitalName: "",
    state: "Karnataka",
    city: "Bengaluru",
    rating: 4.9,
    reviews: 271,
    availability: "Tomorrow",
    nextSlot: "1:45 PM",
    experience: 13,
    visits: ["Clinic", "Video"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Pregnancy care, PCOS, menstrual health, fertility guidance, and preventive screening.",
  },
  {
    id: 6,
    name: "Dr. Sameer Iyer",
    specialty: "General Physician",
    practiceType: "Private Clinic",
    hospitalName: "",
    state: "Tamil Nadu",
    city: "Chennai",
    rating: 4.5,
    reviews: 442,
    availability: "Today",
    nextSlot: "7:00 PM",
    experience: 18,
    visits: ["Clinic", "Video", "Home"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Fever, infections, diabetes follow-ups, blood pressure, fatigue, and annual checks.",
  },
  {
    id: 7,
    name: "Dr. Priya Menon",
    specialty: "Neurologist",
    practiceType: "Hospital Affiliated",
    hospitalName: "Aster Medcity",
    state: "Kerala",
    city: "Kochi",
    rating: 4.8,
    reviews: 132,
    availability: "This week",
    nextSlot: "Fri 12:00 PM",
    experience: 15,
    visits: ["Clinic", "Video"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Headaches, migraine, seizures, nerve pain, stroke follow-up, and memory concerns.",
  },
  {
    id: 8,
    name: "Dr. Arjun Bansal",
    specialty: "ENT Specialist",
    practiceType: "Hospital Affiliated",
    hospitalName: "Eternal Hospital",
    state: "Rajasthan",
    city: "Jaipur",
    rating: 4.6,
    reviews: 205,
    availability: "Tomorrow",
    nextSlot: "4:20 PM",
    experience: 12,
    visits: ["Clinic"],
    languages: ["English", "Hindi"],
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Ear pain, sinus, tonsils, hearing issues, throat infections, and allergy care.",
  },
];

let currentContactSource = "Doctor listing contact form";

const listingState = {
  search: "",
  hospital: "",
  specialty: "All",
  state: "All",
  city: "All",
  availability: "All",
  categories: new Set(),
  languages: new Set(),
  times: new Set(),
  rating: 4,
  sort: "recommended",
  saved: new Set(),
  user: JSON.parse(localStorage.getItem("freehospitalsUser") || localStorage.getItem("carefindUser") || "null"),
};
try {
  listingState.saved = new Set(JSON.parse(localStorage.getItem("freehospitalsSavedDoctors") || "[]"));
} catch {
  listingState.saved = new Set();
}

const doctorList = document.querySelector("#doctorList");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const ratingRange = document.querySelector("#ratingRange");
const ratingOutput = document.querySelector("#ratingOutput");
const specialtyFilter = document.querySelector("#specialtyFilter");
const hospitalFilter = document.querySelector("#hospitalFilter");
const stateFilter = document.querySelector("#stateFilter");
const cityFilter = document.querySelector("#cityFilter");
const availabilityFilter = document.querySelector("#availabilityFilter");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resetFilters = document.querySelector("#resetFilters");
const openAuth = document.querySelector("#openAuth");
const authModal = document.querySelector("#authModal");
const authForm = document.querySelector("#authForm");
const authMessage = document.querySelector("#authMessage");
const contactModal = document.querySelector("#contactModal");
const contactForm = document.querySelector("#contactForm");
const contactDoctorName = document.querySelector("#contactDoctorName");
const selectedDoctorId = document.querySelector("#selectedDoctorId");
const contactMessage = document.querySelector("#contactMessage");
const whatsappButton = document.querySelector("#whatsappButton");
const emailButton = document.querySelector("#emailButton");
const nearMeButton = document.querySelector("#nearMeButton");
const nearMeMessage = document.querySelector("#nearMeMessage");
const emptyReset = document.querySelector("#emptyReset");
const emptyEnquiry = document.querySelector("#emptyEnquiry");
const emptyStateCopy = document.querySelector("#emptyStateCopy");
const doctorDetailModal = document.querySelector("#doctorDetailModal");
const doctorDetailContent = document.querySelector("#doctorDetailContent");
const categoryFilters = document.querySelector("#categoryFilters");
const generalEnquiryButton = document.querySelector("#generalEnquiryButton");
const languageSelect = document.querySelector("#languageSelect");
const openWizard = document.querySelector("#openWizard");
const findWizard = document.querySelector("#findWizard");
const doctorWizard = document.querySelector("#doctorWizard");
const wizardEnquiry = document.querySelector("#wizardEnquiry");
const searchSuggestions = document.querySelector("#searchSuggestions");
const openSavedDrawer = document.querySelector("#openSavedDrawer");
const savedDrawer = document.querySelector("#savedDrawer");
const savedList = document.querySelector("#savedList");
const successCard = document.querySelector("#successCard");
const anotherRequest = document.querySelector("#anotherRequest");
const openFilters = document.querySelector("#openFilters");
const closeFilters = document.querySelector("#closeFilters");
const browseCities = document.querySelector("#browseCities");
const browseSpecialties = document.querySelector("#browseSpecialties");

const searchSynonyms = {
  "skin doctor": "Dermatologist",
  skin: "Dermatologist",
  rash: "Dermatologist",
  allergy: "Dermatologist",
  "heart doctor": "Cardiologist",
  heart: "Cardiologist",
  bp: "Cardiologist",
  "blood pressure": "Cardiologist",
  "children doctor": "Pediatrician",
  "child doctor": "Pediatrician",
  baby: "Pediatrician",
  vaccination: "Pediatrician",
  "ladies doctor": "Gynecologist",
  pregnancy: "Gynecologist",
  pcos: "Gynecologist",
  periods: "Gynecologist",
  "haddi doctor": "Orthopedic Surgeon",
  bone: "Orthopedic Surgeon",
  fracture: "Orthopedic Surgeon",
  "back pain": "Orthopedic Surgeon",
  fever: "General Physician",
  cough: "General Physician",
  diabetes: "General Physician",
};

const suggestionItems = [
  ["skin doctor", "Dermatologist"],
  ["heart doctor", "Cardiologist"],
  ["bp", "Cardiologist"],
  ["children doctor", "Pediatrician"],
  ["ladies doctor", "Gynecologist"],
  ["pregnancy", "Gynecologist"],
  ["haddi doctor", "Orthopedic Surgeon"],
  ["back pain", "Orthopedic Surgeon"],
  ["fever", "General Physician"],
  ["diabetes", "General Physician"],
];

function careDeskDoctor() {
  return {
    id: 0,
    name: "Freehospitals care desk",
    specialty: listingState.specialty !== "All" ? listingState.specialty : "Care desk help",
    practiceType: "Care Desk",
    hospitalName: "",
    state: listingState.state !== "All" ? listingState.state : "",
    city: listingState.city !== "All" ? listingState.city : "",
  };
}

function uniqueValues(key) {
  return [...new Set(doctors.map((doctor) => doctor[key]))].sort();
}

function normalizeDoctorForUi(doctor) {
  return {
    ...doctor,
    practiceType: doctor.practiceType || (doctor.hospitalName ? "Hospital Affiliated" : "Private Clinic"),
    hospitalName: doctor.hospitalName || "",
    visits: Array.isArray(doctor.visits) ? doctor.visits : [],
    languages: Array.isArray(doctor.languages) ? doctor.languages : [],
    services: Array.isArray(doctor.services) ? doctor.services : [],
    services_hi: Array.isArray(doctor.services_hi) ? doctor.services_hi : [],
    services_gu: Array.isArray(doctor.services_gu) ? doctor.services_gu : [],
    specialty_hi: doctor.specialty_hi || "",
    specialty_gu: doctor.specialty_gu || "",
    bio_hi: doctor.bio_hi || "",
    bio_gu: doctor.bio_gu || "",
    timeOfDay: doctor.timeOfDay || "Morning",
    address: doctor.address || "",
    mapUrl: doctor.mapUrl || "",
    education: doctor.education || "",
    registrationNumber: doctor.registrationNumber || "",
    yearsVerified: Math.max(0, Number(doctor.yearsVerified) || 0),
    verified: doctor.verified !== false,
    documentsChecked: Boolean(doctor.documentsChecked),
    featured: Boolean(doctor.featured),
    published: doctor.published !== false,
  };
}

function localizedDoctor(doctor) {
  if (currentLanguage === "hi") {
    return {
      ...doctor,
      displaySpecialty: doctor.specialty_hi || doctor.specialty,
      displayBio: doctor.bio_hi || doctor.bio,
      displayServices: doctor.services_hi?.length ? doctor.services_hi : doctor.services,
    };
  }

  if (currentLanguage === "gu") {
    return {
      ...doctor,
      displaySpecialty: doctor.specialty_gu || doctor.specialty,
      displayBio: doctor.bio_gu || doctor.bio,
      displayServices: doctor.services_gu?.length ? doctor.services_gu : doctor.services,
    };
  }

  return {
    ...doctor,
    displaySpecialty: doctor.specialty,
    displayBio: doctor.bio,
    displayServices: doctor.services,
  };
}

function fillSelect(select, values, placeholder) {
  select.innerHTML = `<option value="All">${placeholder}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function updateCityOptions() {
  const cities =
    listingState.state === "All"
      ? [...new Set(Object.values(stateCities).flat())].sort()
      : stateCities[listingState.state] || [];
  fillSelect(cityFilter, cities, t("allCities"));
  cityFilter.value = listingState.city;
}

function appointmentRank(value) {
  return { Today: 1, Tomorrow: 2, "This week": 3, "Call to confirm": 4 }[value] || 5;
}

function matchesSet(selected, available) {
  return selected.size === 0 || [...selected].some((item) => available.includes(item));
}

function updateAuthButton() {
  openAuth.textContent = listingState.user ? `Hi, ${listingState.user.name || "there"}` : t("login");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function trustBadges(doctor) {
  const badges = [t("freeOfCost")];
  if (doctor.verified) badges.unshift(t("verified"));
  if (doctor.documentsChecked) badges.push(t("documentsChecked"));
  if (doctor.availability === "Today") badges.push(t("availableToday"));
  if (doctor.availability === "Tomorrow") badges.push(t("availableTomorrow"));
  if (doctor.visits.includes("Video")) badges.push(t("videoConsult"));
  if (doctor.visits.includes("Home")) badges.push(t("homeVisit"));
  if (doctor.languages.includes("Hindi")) badges.push(t("speaksHindi"));
  badges.push(doctor.practiceType === "Hospital Affiliated" ? t("hospitalAffiliated") : t("privateClinic"));
  return badges;
}

function affiliationLine(doctor) {
  if (doctor.practiceType === "Care Desk") return "Care desk will help match the right doctor";
  return doctor.practiceType === "Hospital Affiliated" && doctor.hospitalName
    ? `Affiliated to ${doctor.hospitalName}`
    : t("privateClinic");
}

function isValidIndianPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  const normalized =
    digits.startsWith("91") && digits.length === 12
      ? digits.slice(2)
      : digits.startsWith("0") && digits.length === 11
        ? digits.slice(1)
        : digits;
  return /^[6-9]\d{9}$/.test(normalized);
}

function doctorSeoPath(doctor) {
  const prefix = currentLanguage === "en" ? "" : `/${currentLanguage}`;
  return `${prefix}/doctors/${slugify(doctor.specialty)}/${slugify(doctor.city)}`;
}

function expandedSearchTerms(term) {
  const cleanTerm = String(term || "").trim().toLowerCase();
  if (!cleanTerm) return [];

  const terms = [cleanTerm];
  Object.entries(searchSynonyms).forEach(([alias, specialty]) => {
    if (cleanTerm.includes(alias)) terms.push(specialty.toLowerCase());
  });
  return [...new Set(terms)];
}

function filteredDoctors() {
  const searchTerms = expandedSearchTerms(listingState.search);
  const hospitalTerm = listingState.hospital.trim().toLowerCase();

  return doctors
    .filter((doctor) => doctor.published !== false)
    .filter((doctor) => {
      const searchable = [
        doctor.name,
        doctor.specialty,
        doctor.specialty_hi,
        doctor.specialty_gu,
        doctor.state,
        doctor.city,
        doctor.practiceType,
        doctor.hospitalName,
        doctor.bio,
        doctor.bio_hi,
        doctor.bio_gu,
        doctor.address,
        doctor.education,
        ...doctor.services,
        ...doctor.services_hi,
        ...doctor.services_gu,
        ...doctor.languages,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (searchTerms.length === 0 || searchTerms.some((term) => searchable.includes(term))) &&
        (!hospitalTerm ||
          doctor.practiceType.toLowerCase().includes(hospitalTerm) ||
          doctor.hospitalName.toLowerCase().includes(hospitalTerm) ||
          (hospitalTerm.includes("private") && doctor.practiceType === "Private Clinic")) &&
        (listingState.specialty === "All" || doctor.specialty === listingState.specialty) &&
        (listingState.categories.size === 0 || listingState.categories.has(doctor.specialty)) &&
        (listingState.state === "All" || doctor.state === listingState.state) &&
        (listingState.city === "All" || doctor.city === listingState.city) &&
        (listingState.availability === "All" || doctor.availability === listingState.availability) &&
        doctor.rating >= listingState.rating &&
        matchesSet(listingState.languages, doctor.languages)
        && matchesSet(listingState.times, [doctor.timeOfDay])
      );
    })
    .sort((a, b) => {
      if (listingState.sort === "rating") return b.rating - a.rating;
      if (listingState.sort === "soonest") return appointmentRank(a.availability) - appointmentRank(b.availability);
      return Number(b.featured) - Number(a.featured) || b.rating * 100 + b.reviews - (a.rating * 100 + a.reviews);
    });
}

function doctorCard(doctor) {
  const displayDoctor = localizedDoctor(doctor);
  const isSaved = listingState.saved.has(doctor.id);
  return `
    <article class="doctor-card">
      <img class="doctor-photo" src="${doctor.image}" alt="Portrait of ${doctor.name}" />
      <div class="doctor-main">
        <h3>${doctor.name}${doctor.verified ? `<span class="verified-badge">${t("verified")}</span>` : ""}</h3>
        <p class="specialty-line">${displayDoctor.displaySpecialty} in ${doctor.city}, ${doctor.state}</p>
        <p class="affiliation-line">${affiliationLine(doctor)}</p>
        ${doctor.address ? `<p class="meta-line">${doctor.address}</p>` : ""}
        <p class="meta-line">${t("yearsExperience", { years: doctor.experience })} - ${doctor.languages.join(", ")}</p>
        <div class="trust-badges" aria-label="Doctor highlights">
          ${trustBadges(doctor).map((badge) => `<span>${badge}</span>`).join("")}
        </div>
        <p class="bio">${displayDoctor.displayBio}</p>
        <div class="chips" aria-label="Visit options">
          ${displayDoctor.displayServices.map((service) => `<span class="chip">${service}</span>`).join("") || doctor.visits.map((visit) => `<span class="chip">${visit}</span>`).join("")}
        </div>
      </div>
      <div class="doctor-action">
        <div>
          <p class="rating">${t("rating")} ${doctor.rating.toFixed(1)} (${doctor.reviews})</p>
          <p class="fee">${t("freeOfCost")}</p>
          <p class="availability">${doctor.availability} - ${doctor.nextSlot}</p>
        </div>
        <div class="actions">
          <a class="whatsapp-button" href="${whatsAppUrl(doctor, "Doctor card WhatsApp")}" target="_blank" rel="noreferrer">WhatsApp</a>
          <a class="call-button" href="tel:+918586930497">Call</a>
          <button class="detail-button" type="button" data-detail="${doctor.id}">${t("viewProfile")}</button>
          <button class="book-button" type="button" data-contact="${doctor.id}" data-source="Doctor card request">${t("requestContact")}</button>
          <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${doctor.id}">
            ${isSaved ? t("saved") : t("shortlist")}
          </button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const results = filteredDoctors();
  doctorList.innerHTML = results.map(doctorCard).join("");
  resultCount.textContent = t("showing", { shown: results.length, total: doctors.length });
  emptyState.hidden = results.length > 0;
  emptyStateCopy.textContent =
    listingState.state !== "All" || listingState.city !== "All"
      ? t("noExact")
      : t("noBroad");
  renderNearbySuggestions(results.length);
}

function trackEvent(type, details = {}) {
  const payload = JSON.stringify({
    type,
    details,
    path: window.location.pathname,
    language: currentLanguage,
    createdAt: new Date().toISOString(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
  }).catch(() => {});
}

function renderBrowseLinks() {
  const cities = [...new Set(doctors.filter((doctor) => doctor.published !== false).map((doctor) => doctor.city))]
    .filter(Boolean)
    .slice(0, 10);
  const specialties = uniqueValues("specialty").slice(0, 10);

  browseCities.innerHTML = cities
    .map((city) => `<button type="button" data-browse-city="${city}">${city}</button>`)
    .join("");
  browseSpecialties.innerHTML = specialties
    .map((specialty) => `<button type="button" data-browse-specialty="${specialty}">${specialty}</button>`)
    .join("");
}

function renderSearchSuggestions() {
  const term = searchInput.value.trim().toLowerCase();
  const matches = suggestionItems
    .filter(([label, specialty]) => label.includes(term) || specialty.toLowerCase().includes(term))
    .slice(0, 5);

  if (!term || matches.length === 0) {
    searchSuggestions.hidden = true;
    searchSuggestions.innerHTML = "";
    return;
  }

  searchSuggestions.innerHTML = matches
    .map(([label, specialty]) => `<button type="button" data-suggestion="${label}" data-specialty="${specialty}">${label} <span>${specialty}</span></button>`)
    .join("");
  searchSuggestions.hidden = false;
}

function renderSavedDrawer() {
  const savedDoctors = doctors.filter((doctor) => listingState.saved.has(doctor.id));
  savedList.innerHTML = savedDoctors.length
    ? savedDoctors
        .map((doctor) => {
          const displayDoctor = localizedDoctor(doctor);
          return `
            <article class="saved-item">
              <img src="${doctor.image}" alt="Portrait of ${doctor.name}" />
              <div>
                <strong>${doctor.name}</strong>
                <span>${displayDoctor.displaySpecialty} in ${doctor.city}</span>
                <span>${doctor.availability} - ${doctor.nextSlot}</span>
              </div>
              <button class="book-button" type="button" data-contact="${doctor.id}" data-source="Saved drawer request">${t("requestContact")}</button>
              <button class="save-button" type="button" data-remove-saved="${doctor.id}">Remove</button>
            </article>
          `;
        })
        .join("")
    : `<p class="form-note">No saved doctors yet. Use Shortlist on doctor cards to save options here.</p>`;
}

function applyWizardFilters() {
  const problem = doctorWizard.querySelector("#wizardProblem").value;
  const city = doctorWizard.querySelector("#wizardCity").value.trim();
  const patient = doctorWizard.querySelector("#wizardPatient").value;
  const language = doctorWizard.querySelector("#wizardLanguage").value;
  const urgency = doctorWizard.querySelector("#wizardUrgency").value;

  listingState.search = patient === "child" && !problem ? "child fever vaccination" : "";
  listingState.specialty = problem || "All";
  listingState.availability = urgency || "All";
  listingState.languages.clear();
  if (language) listingState.languages.add(language);

  if (city) {
    const stateMatch = Object.entries(stateCities).find(([, cities]) => cities.some((item) => item.toLowerCase() === city.toLowerCase()));
    if (stateMatch) {
      listingState.state = stateMatch[0];
      listingState.city = stateMatch[1].find((item) => item.toLowerCase() === city.toLowerCase());
    } else {
      listingState.city = "All";
    }
  }

  searchInput.value = listingState.search;
  specialtyFilter.value = listingState.specialty;
  stateFilter.value = listingState.state;
  updateCityOptions();
  cityFilter.value = listingState.city;
  availabilityFilter.value = listingState.availability;
  document.querySelectorAll('input[name="language"]').forEach((input) => {
    input.checked = listingState.languages.has(input.value);
  });
  render();
  document.querySelector("#doctors").scrollIntoView({ behavior: "smooth" });
}

function updateCheckboxSet(name, set) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) set.add(input.value);
      else set.delete(input.value);
      render();
    });
  });
}

function openContactForm(doctor, source = "Doctor listing contact form") {
  currentContactSource = source;
  selectedDoctorId.value = doctor.id;
  contactDoctorName.textContent = doctor.id ? `Contact ${doctor.name}` : t("helpMeFind");
  contactMessage.textContent = t("submitOnce");
  contactMessage.className = "form-note";
  emailButton.hidden = true;
  emailButton.removeAttribute("href");
  successCard.hidden = true;
  contactForm.website.value = "";

  if (listingState.user) {
    contactForm.patientName.value = listingState.user.name || "";
    contactForm.patientEmail.value = listingState.user.email || "";
    contactForm.patientPhone.value = listingState.user.phone || "";
  }

  contactForm.patientCity.value = listingState.city !== "All" ? listingState.city : "";
  if (!doctor.id && listingState.search) {
    contactForm.patientMessage.value = `I need help finding a doctor for: ${listingState.search}`;
  }
  updateWhatsAppLink(doctor);
  contactModal.showModal();
}

function detailMarkup(doctor) {
  const displayDoctor = localizedDoctor(doctor);
  return `
    <div class="modal-heading">
      <div>
        <p class="eyebrow">${t("doctorProfile")}</p>
        <h2>${doctor.name}</h2>
      </div>
      <button class="icon-button" type="button" data-close="doctorDetailModal" aria-label="Close doctor profile">x</button>
    </div>
    <div class="doctor-detail-grid">
      <img class="doctor-detail-photo" src="${doctor.image}" alt="Portrait of ${doctor.name}" />
      <div>
        <p class="specialty-line">${displayDoctor.displaySpecialty} in ${doctor.city}, ${doctor.state}</p>
        ${doctor.verified ? `<p class="verified-profile-line">${t("verifiedProfile")}${doctor.registrationNumber ? ` - Reg. ${doctor.registrationNumber}` : ""}</p>` : ""}
        <p class="affiliation-line">${affiliationLine(doctor)}</p>
        <p class="rating">${t("rating")} ${doctor.rating.toFixed(1)} from ${doctor.reviews} patients</p>
        <p class="fee">${t("freeOfCost")}</p>
        <div class="trust-badges">${trustBadges(doctor).map((badge) => `<span>${badge}</span>`).join("")}</div>
      </div>
    </div>
    <p class="bio">${displayDoctor.displayBio}</p>
    ${doctor.education ? `<p class="meta-line">${doctor.education}</p>` : ""}
    ${doctor.documentsChecked || doctor.yearsVerified ? `<p class="meta-line">${doctor.documentsChecked ? t("documentsChecked") : t("documentsPending")}${doctor.yearsVerified ? ` - ${t("yearsExperience", { years: doctor.yearsVerified })}` : ""}</p>` : ""}
    <div class="detail-facts">
      <span>${t("yearsExperience", { years: doctor.experience })}</span>
      <span>${affiliationLine(doctor)}</span>
      <span>${doctor.languages.join(", ")}</span>
      <span>${doctor.visits.join(", ")}</span>
      <span>${doctor.availability} - ${doctor.nextSlot}</span>
      <span>${doctor.timeOfDay}</span>
      ${doctor.address ? `<span>${doctor.address}</span>` : ""}
    </div>
    ${displayDoctor.displayServices.length ? `<div class="chips">${displayDoctor.displayServices.map((service) => `<span class="chip">${service}</span>`).join("")}</div>` : ""}
    <div class="contact-actions">
      <button class="primary-button" type="button" data-contact="${doctor.id}" data-source="Doctor profile request">${t("requestContact")}</button>
      <a class="whatsapp-button" href="${whatsAppUrl(doctor, "Doctor profile WhatsApp")}" target="_blank" rel="noreferrer">${t("whatsappDesk")}</a>
      <a class="call-button" href="tel:+918586930497">Call +91 8586930497</a>
    </div>
    ${doctor.mapUrl ? `<a class="seo-link" href="${doctor.mapUrl}" target="_blank" rel="noreferrer">${t("openMap")}</a>` : ""}
    <a class="seo-link" href="${doctorSeoPath(doctor)}">${t("openSeo")}</a>
  `;
}

function openDoctorDetail(doctor) {
  doctorDetailContent.innerHTML = detailMarkup(doctor);
  doctorDetailModal.showModal();
}

function whatsAppUrl(doctor, source = "WhatsApp quick action") {
  const patientName = contactForm.patientName?.value || listingState.user?.name || "";
  const text = [
    `Hello, I want help contacting ${doctor.name}.`,
    doctor.city || doctor.state ? `${doctor.specialty} in ${doctor.city}, ${doctor.state}.` : `Need: ${doctor.specialty}.`,
    patientName ? `Patient name: ${patientName}` : "",
    `Source: ${source}`,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/918586930497?text=${encodeURIComponent(text)}`;
}

function updateWhatsAppLink(doctor) {
  whatsappButton.href = whatsAppUrl(doctor, currentContactSource);
}

function renderNearbySuggestions(hasResults) {
  const nearbySuggestions = document.querySelector("#nearbySuggestions");
  if (!nearbySuggestions) return;

  if (hasResults || listingState.state === "All" || listingState.city === "All") {
    nearbySuggestions.innerHTML = "";
    return;
  }

  const cities = [...new Set(doctors
    .filter((doctor) => doctor.published !== false && doctor.state === listingState.state && doctor.city !== listingState.city)
    .map((doctor) => doctor.city))]
    .slice(0, 5);

  nearbySuggestions.innerHTML = cities.length
    ? `<span>Try nearby:</span>${cities.map((city) => `<button type="button" data-nearby-city="${city}">${city}</button>`).join("")}`
    : "";
}

function contactEmailUrl(doctor, formData) {
  const subject = `Doctor contact request for ${doctor.name}`;
  const body = [
    "New doctor contact request",
    "",
    `Doctor: ${doctor.name} - ${doctor.specialty}`,
    `Affiliation: ${affiliationLine(doctor)}`,
    `Doctor location: ${doctor.city}, ${doctor.state}`,
    `Patient name: ${formData.get("patientName")}`,
    `Patient phone: ${formData.get("patientPhone")}`,
    `Patient email: ${formData.get("patientEmail")}`,
    `Patient city: ${formData.get("patientCity")}`,
    `Patient age: ${formData.get("patientAge") || "Not provided"}`,
    `Patient gender: ${formData.get("patientGender") || "Not provided"}`,
    `Preferred contact: ${formData.get("preferredContact") || "Phone call"}`,
    `Preferred time: ${formData.get("preferredTime") || "Not provided"}`,
    "",
    `Health concern: ${formData.get("patientMessage")}`,
  ].join("\n");

  return `mailto:vishal@deksontech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  languageSelect.value = currentLanguage;
  document.title = currentLanguage === "en" ? "Freehospitals Doctor Listings" : `${t("findDoctor")} | Freehospitals`;

  setText(".language-switcher span", t("language"));
  setText('.nav-links a[href="#doctors"]', t("doctors"));
  setText('.nav-links a[href="#specialties"]', t("specialties"));
  setText('.nav-links a[href="#symptoms"]', t("symptoms"));
  setText('.nav-links a[href="#faq"]', t("faq"));
  setText('.nav-links a[href="#help"]', t("help"));
  setText(".urgent-link", t("urgentCare"));
  setText(".emergency-banner strong", t("emergencyTitle"));
  setText(".emergency-banner span", t("emergencyText"));
  setText(".search-copy .eyebrow", t("heroEyebrow"));
  setText("#page-title", t("heroTitle"));
  setText(".search-copy > p:not(.eyebrow)", t("heroCopy"));
  setText('.hero-actions a[href="#doctors"]', t("findDoctor"));
  setText('.hero-actions a[href="#journey"]', t("howItWorks"));
  setText('label[for="searchInput"] span', t("searchLabel"));
  setPlaceholder("#searchInput", t("searchPlaceholder"));
  setText('label[for="specialtyFilter"] span', t("specialty"));
  setText('label[for="stateFilter"] span', t("state"));
  setText('label[for="cityFilter"] span', t("city"));
  setText('label[for="availabilityFilter"] span', t("availability"));
  setText('label[for="hospitalFilter"] span', t("hospitalClinic"));
  setPlaceholder("#hospitalFilter", t("hospitalPlaceholder"));
  setText(".quick-searches span", t("popular"));
  setText("#symptoms .eyebrow", t("symptomEyebrow"));
  setText("#symptom-title", t("symptomTitle"));
  setText("#symptoms .section-copy p:not(.eyebrow)", t("symptomCopy"));
  setText("#journey .eyebrow", t("journeyEyebrow"));
  setText("#journey-title", t("journeyTitle"));
  setText("#journey .section-copy p:not(.eyebrow)", t("journeyCopy"));
  setText("#journey .steps article:nth-child(1) h3", t("step1Title"));
  setText("#journey .steps article:nth-child(1) p", t("step1Copy"));
  setText("#journey .steps article:nth-child(2) h3", t("step2Title"));
  setText("#journey .steps article:nth-child(2) p", t("step2Copy"));
  setText("#journey .steps article:nth-child(3) h3", t("step3Title"));
  setText("#journey .steps article:nth-child(3) p", t("step3Copy"));
  setText(".trust-cards .eyebrow", t("trustEyebrow"));
  setText("#freehospitals-trust-title", t("trustTitle"));
  setText(".trust-card-grid article:nth-child(1) strong", t("freeCost"));
  setText(".trust-card-grid article:nth-child(2) strong", t("noHidden"));
  setText(".trust-card-grid article:nth-child(3) strong", t("careDeskSupport"));
  setText(".trust-card-grid article:nth-child(4) strong", t("hospitalsPrivate"));
  setText(".trust-card-grid article:nth-child(5) strong", t("indiaStates"));
  setText(".panel-heading h2", t("refine"));
  setText("#resetFilters", t("reset"));
  setText("#nearMeButton", t("useLocation"));
  setText("#nearMeMessage", t("nearMeCopy"));
  setText("#categoryFilters h3", t("categories"));
  setText(".filter-group:nth-of-type(2) h3", t("languages"));
  setText(".filter-group:nth-of-type(3) h3", t("timePreference"));
  setText(".filter-group:nth-of-type(4) h3", t("minRating"));
  setText(".care-note h2", t("notSure"));
  setText(".care-note p", t("careNoteCopy"));
  setText("#generalEnquiryButton", t("helpFind"));
  setText(".results-bar h2", t("recommended"));
  setText(".sort-control span", t("sortBy"));
  setText("#emptyState h2", t("noDoctors"));
  setText("#emptyReset", t("reset"));
  setText("#emptyEnquiry", t("helpFind"));
  setText(".empty-actions .call-button", t("callDesk"));
  setText(".site-footer span", t("footerText"));
  setText('.site-footer a[href="privacy.html"]', t("privacy"));
  setText('.site-footer a[href="terms.html"]', t("terms"));
  setText("#contactForm .eyebrow", t("contactDoctor"));
  setText("#contactDoctorName", selectedDoctorId.value === "0" ? t("helpMeFind") : selectedDoctorId.value ? contactDoctorName.textContent : t("requestCallback"));
  setText("#contactForm .modal-copy", t("contactCopy"));
  setText('label[for="patientName"] span', t("patientName"));
  setText('label[for="patientPhone"] span', t("mobile"));
  setText('label[for="patientEmail"] span', t("email"));
  setText('label[for="patientCity"] span', t("city"));
  setText('label[for="patientAge"] span', t("age"));
  setText('label[for="patientGender"] span', t("gender"));
  setText('label[for="preferredContact"] span', t("preferredContact"));
  setText('label[for="preferredTime"] span', t("preferredTime"));
  setText('label[for="patientMessage"] span', t("healthConcern"));
  setText('label[for="patientConsent"] span', t("consent"));
  setText('#contactForm button[type="submit"]', t("submitRequest"));
  setText("#whatsappButton", t("whatsappDesk"));
  setText("#emailButton", t("openEmail"));
  setText("#contactMessage", t("submitOnce"));
  setText('.mobile-contact-bar a[href^="tel"]', t("callCareDesk"));
  setText('.mobile-contact-bar a[href="#doctors"]', t("findDoctorMobile"));

  specialtyFilter.options[0].textContent = t("allSpecialties");
  stateFilter.options[0].textContent = t("allStates");
  cityFilter.options[0].textContent = t("allCities");
  availabilityFilter.options[0].textContent = t("anyTime");
  availabilityFilter.options[1].textContent = t("today");
  availabilityFilter.options[2].textContent = t("tomorrow");
  availabilityFilter.options[3].textContent = t("thisWeek");
  availabilityFilter.options[4].textContent = t("callToConfirm");
  sortSelect.options[0].textContent = t("recommendedSort");
  sortSelect.options[1].textContent = t("highestRating");
  sortSelect.options[2].textContent = t("soonest");

  updateAuthButton();
  render();
}

searchInput.addEventListener("input", (event) => {
  listingState.search = event.target.value;
  renderSearchSuggestions();
  render();
});

searchSuggestions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-suggestion]");
  if (!button) return;
  trackEvent("search_suggestion_click", { suggestion: button.dataset.suggestion, specialty: button.dataset.specialty });
  listingState.search = button.dataset.suggestion;
  listingState.specialty = button.dataset.specialty;
  searchInput.value = button.dataset.suggestion;
  specialtyFilter.value = button.dataset.specialty;
  searchSuggestions.hidden = true;
  render();
});

specialtyFilter.addEventListener("change", (event) => {
  listingState.specialty = event.target.value;
  render();
});

stateFilter.addEventListener("change", (event) => {
  listingState.state = event.target.value;
  listingState.city = "All";
  updateCityOptions();
  render();
});

cityFilter.addEventListener("change", (event) => {
  listingState.city = event.target.value;
  render();
});

availabilityFilter.addEventListener("change", (event) => {
  listingState.availability = event.target.value;
  render();
});

ratingRange.addEventListener("input", (event) => {
  listingState.rating = Number(event.target.value);
  ratingOutput.textContent = `${listingState.rating.toFixed(1)}+`;
  render();
});

sortSelect.addEventListener("change", (event) => {
  listingState.sort = event.target.value;
  render();
});

doctorList.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  const contactButton = event.target.closest("[data-contact]");
  const detailButton = event.target.closest("[data-detail]");

  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    if (listingState.saved.has(id)) listingState.saved.delete(id);
    else listingState.saved.add(id);
    localStorage.setItem("freehospitalsSavedDoctors", JSON.stringify([...listingState.saved]));
    render();
  }

  if (contactButton) {
    const doctor = doctors.find((item) => item.id === Number(contactButton.dataset.contact));
    trackEvent("request_click", { source: contactButton.dataset.source || "Doctor card request", doctor: doctor?.name || "" });
    openContactForm(doctor, contactButton.dataset.source || "Doctor card request");
  }

  if (detailButton) {
    const doctor = doctors.find((item) => item.id === Number(detailButton.dataset.detail));
    trackEvent("view_profile", { doctor: doctor?.name || "" });
    openDoctorDetail(doctor);
  }
});

doctorDetailContent.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close]");
  const contactButton = event.target.closest("[data-contact]");

  if (closeButton) {
    doctorDetailModal.close();
  }

  if (contactButton) {
    const doctor = doctors.find((item) => item.id === Number(contactButton.dataset.contact));
    doctorDetailModal.close();
    trackEvent("request_click", { source: contactButton.dataset.source || "Doctor profile request", doctor: doctor?.name || "" });
    openContactForm(doctor, contactButton.dataset.source || "Doctor profile request");
  }
});

openAuth.addEventListener("click", () => {
  if (listingState.user) {
    authForm.authName.value = listingState.user.name || "";
    authForm.authEmail.value = listingState.user.email || "";
    authForm.authPhone.value = listingState.user.phone || "";
  }
  authModal.showModal();
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(authForm);
  const password = String(formData.get("password") || "");

  if (password.length < 6) {
    authMessage.textContent = "Please use a password with at least 6 characters.";
    return;
  }

  const user = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
  };

  authMessage.textContent = "Signing you in...";
  fetch("/api/users/login-or-signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user, password }),
  })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Login failed.");
      listingState.user = result.user;
      localStorage.setItem("freehospitalsUser", JSON.stringify(listingState.user));
      authMessage.textContent = "You are logged in.";
      updateAuthButton();
      setTimeout(() => authModal.close(), 600);
    })
    .catch((error) => {
      listingState.user = user;
      localStorage.setItem("freehospitalsUser", JSON.stringify(listingState.user));
      authMessage.textContent = `${error.message} Saved on this browser for now.`;
      updateAuthButton();
    });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const doctor = doctors.find((item) => item.id === Number(formData.get("doctorId"))) || careDeskDoctor();
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalLabel = submitButton.textContent;

  if (String(formData.get("website") || "").trim()) {
    contactMessage.textContent = "Request could not be submitted. Please call the care desk.";
    contactMessage.className = "form-note error";
    return;
  }

  if (!isValidIndianPhone(formData.get("patientPhone"))) {
    contactMessage.textContent = t("invalidPhone");
    contactMessage.className = "form-note error";
    contactForm.patientPhone.focus();
    return;
  }

  const payload = {
    doctorName: doctor.name,
    doctorSpecialty: doctor.specialty,
    doctorAffiliation: affiliationLine(doctor),
    doctorCity: doctor.city,
    doctorState: doctor.state,
    patientName: String(formData.get("patientName") || "").trim(),
    patientPhone: String(formData.get("patientPhone") || "").trim(),
    patientEmail: String(formData.get("patientEmail") || "").trim(),
    patientCity: String(formData.get("patientCity") || "").trim(),
    patientAge: String(formData.get("patientAge") || "").trim(),
    patientGender: String(formData.get("patientGender") || "").trim(),
    preferredContact: String(formData.get("preferredContact") || "Phone call").trim(),
    preferredTime: String(formData.get("preferredTime") || "").trim(),
    patientMessage: String(formData.get("patientMessage") || "").trim(),
    source: window.location.pathname.startsWith("/doctors/")
      ? `${currentContactSource} from ${window.location.pathname}`
      : currentContactSource,
  };

  submitButton.disabled = true;
  submitButton.textContent = t("saving");
  contactMessage.textContent = t("savingRequest");
  contactMessage.className = "form-note";
  emailButton.href = contactEmailUrl(doctor, formData);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || "Could not save the request.");

    contactMessage.textContent = t("requestSaved");
    contactMessage.className = "form-note success";
    successCard.hidden = false;
    emailButton.hidden = false;
    updateWhatsAppLink(doctor);
    trackEvent("request_submitted", { source: payload.source, doctor: payload.doctorName, specialty: payload.doctorSpecialty });
  } catch (error) {
    contactMessage.textContent = `${error.message} You can still call, WhatsApp, or open email.`;
    contactMessage.className = "form-note error";
    emailButton.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.close}`).close();
  });
});

resetFilters.addEventListener("click", () => {
  listingState.search = "";
  listingState.hospital = "";
  listingState.specialty = "All";
  listingState.state = "All";
  listingState.city = "All";
  listingState.availability = "All";
  listingState.categories.clear();
  listingState.languages.clear();
  listingState.times.clear();
  listingState.rating = 4;
  listingState.sort = "recommended";

  searchInput.value = "";
  hospitalFilter.value = "";
  specialtyFilter.value = "All";
  stateFilter.value = "All";
  updateCityOptions();
  cityFilter.value = "All";
  availabilityFilter.value = "All";
  ratingRange.value = "4";
  ratingOutput.textContent = "4.0+";
  sortSelect.value = "recommended";
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  document.body.classList.remove("filters-open");
  render();
});

emptyReset.addEventListener("click", () => resetFilters.click());
emptyEnquiry.addEventListener("click", () => openContactForm(careDeskDoctor(), "No-results general enquiry"));
generalEnquiryButton.addEventListener("click", () => openContactForm(careDeskDoctor(), "General enquiry from help panel"));
openFilters.addEventListener("click", () => {
  document.body.classList.add("filters-open");
  trackEvent("filter_drawer_open");
});
closeFilters.addEventListener("click", () => document.body.classList.remove("filters-open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.body.classList.remove("filters-open");
});
document.querySelector(".sidebar").addEventListener("click", (event) => {
  if (event.target.classList.contains("sidebar")) document.body.classList.remove("filters-open");
});
openWizard.addEventListener("click", () => {
  findWizard.hidden = !findWizard.hidden;
  trackEvent("wizard_toggle", { open: !findWizard.hidden });
  if (!findWizard.hidden) findWizard.scrollIntoView({ behavior: "smooth" });
});
doctorWizard.addEventListener("submit", (event) => {
  event.preventDefault();
  trackEvent("wizard_submit");
  applyWizardFilters();
});
wizardEnquiry.addEventListener("click", () => {
  applyWizardFilters();
  openContactForm(careDeskDoctor(), "Find my doctor wizard enquiry");
});
openSavedDrawer.addEventListener("click", () => {
  renderSavedDrawer();
  savedDrawer.showModal();
});
savedList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-saved]");
  const contactButton = event.target.closest("[data-contact]");
  if (removeButton) {
    listingState.saved.delete(Number(removeButton.dataset.removeSaved));
    localStorage.setItem("freehospitalsSavedDoctors", JSON.stringify([...listingState.saved]));
    renderSavedDrawer();
    render();
  }
  if (contactButton) {
    const doctor = doctors.find((item) => item.id === Number(contactButton.dataset.contact));
    savedDrawer.close();
    trackEvent("request_click", { source: contactButton.dataset.source || "Saved drawer request", doctor: doctor?.name || "" });
    openContactForm(doctor, contactButton.dataset.source || "Saved drawer request");
  }
});
anotherRequest.addEventListener("click", () => {
  successCard.hidden = true;
  contactMessage.textContent = t("submitOnce");
  contactMessage.className = "form-note";
  contactForm.patientMessage.value = "";
  contactForm.preferredTime.value = "";
});

contactForm.querySelectorAll(".choice-chips").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest("[data-choice]");
    if (!button) return;
    const field = contactForm.elements[group.dataset.choiceGroup];
    if (!field) return;
    if (field.tagName === "TEXTAREA" && field.value.trim()) field.value = `${field.value.trim()}, ${button.dataset.choice}`;
    else field.value = button.dataset.choice;
    group.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  });
});

document.querySelectorAll("[data-quick-specialty]").forEach((button) => {
  button.addEventListener("click", () => {
    listingState.search = "";
    listingState.specialty = button.dataset.quickSpecialty;
    listingState.state = button.dataset.quickState;
    listingState.city = button.dataset.quickCity;
    searchInput.value = "";
    specialtyFilter.value = listingState.specialty;
    stateFilter.value = listingState.state;
    updateCityOptions();
    cityFilter.value = listingState.city;
    document.querySelector("#doctors").scrollIntoView({ behavior: "smooth" });
    render();
  });
});

document.querySelector("#nearbySuggestions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-nearby-city]");
  if (!button) return;
  listingState.city = button.dataset.nearbyCity;
  cityFilter.value = listingState.city;
  render();
});

browseCities.addEventListener("click", (event) => {
  const button = event.target.closest("[data-browse-city]");
  if (!button) return;
  const city = button.dataset.browseCity;
  const stateMatch = Object.entries(stateCities).find(([, cities]) => cities.includes(city));
  listingState.state = stateMatch?.[0] || "All";
  listingState.city = city;
  stateFilter.value = listingState.state;
  updateCityOptions();
  cityFilter.value = city;
  trackEvent("browse_city_click", { city });
  render();
  document.querySelector("#doctors").scrollIntoView({ behavior: "smooth" });
});

browseSpecialties.addEventListener("click", (event) => {
  const button = event.target.closest("[data-browse-specialty]");
  if (!button) return;
  listingState.specialty = button.dataset.browseSpecialty;
  specialtyFilter.value = listingState.specialty;
  trackEvent("browse_specialty_click", { specialty: listingState.specialty });
  render();
  document.querySelector("#doctors").scrollIntoView({ behavior: "smooth" });
});

document.body.addEventListener("click", (event) => {
  const callLink = event.target.closest('a[href^="tel:"]');
  const whatsappLink = event.target.closest('a[href*="wa.me"]');
  if (callLink) trackEvent("call_click", { href: callLink.getAttribute("href") });
  if (whatsappLink) trackEvent("whatsapp_click", { href: whatsappLink.getAttribute("href") });
});

document.querySelectorAll("[data-symptom]").forEach((button) => {
  button.addEventListener("click", () => {
    listingState.search = button.dataset.symptom;
    listingState.specialty = button.dataset.specialty;
    searchInput.value = button.dataset.symptom;
    specialtyFilter.value = button.dataset.specialty;
    document.querySelector("#doctors").scrollIntoView({ behavior: "smooth" });
    render();
  });
});

nearMeButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    nearMeMessage.textContent = "Location is not available in this browser. Please choose your state and city.";
    nearMeMessage.className = "form-note error";
    return;
  }

  nearMeMessage.textContent = "Checking your location...";
  nearMeMessage.className = "form-note";
  navigator.geolocation.getCurrentPosition(
    () => {
      nearMeMessage.textContent = "Location allowed. Please choose the nearest city from the list for the most accurate matches.";
      nearMeMessage.className = "form-note success";
    },
    () => {
      nearMeMessage.textContent = "Location permission was not allowed. You can still choose state and city manually.";
      nearMeMessage.className = "form-note error";
    },
  );
});

updateCheckboxSet("language", listingState.languages);
updateCheckboxSet("time", listingState.times);

hospitalFilter.addEventListener("input", (event) => {
  listingState.hospital = event.target.value;
  render();
});

languageSelect.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem("freehospitalsLanguage", currentLanguage);
  const selectedSpecialty = listingState.specialty;
  const selectedState = listingState.state;
  const selectedCity = listingState.city;
  initializeFilters();
  listingState.specialty = selectedSpecialty;
  listingState.state = selectedState;
  listingState.city = selectedCity;
  specialtyFilter.value = selectedSpecialty;
  stateFilter.value = selectedState;
  updateCityOptions();
  cityFilter.value = selectedCity;
  applyTranslations();
});

function renderCategoryFilters() {
  const specialties = uniqueValues("specialty");
  categoryFilters.innerHTML = `<h3>${t("categories")}</h3>${specialties
    .map(
      (specialty) => `
        <label><input type="checkbox" name="category" value="${specialty}" /> ${specialty}</label>
      `,
    )
    .join("")}`;
  updateCheckboxSet("category", listingState.categories);
}

function initializeFilters() {
  fillSelect(specialtyFilter, uniqueValues("specialty"), t("allSpecialties"));
  fillSelect(stateFilter, Object.keys(stateCities).sort(), t("allStates"));
  renderCategoryFilters();
  renderBrowseLinks();
  updateCityOptions();
  updateAuthButton();
  applySeoRouteFilters();
}

function applySeoRouteFilters() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const offset = ["hi", "gu"].includes(parts[0]) ? 1 : 0;
  if (parts[offset] !== "doctors" || parts.length < offset + 3) return;

  const specialtySlug = parts[offset + 1];
  const citySlug = parts[offset + 2];
  const match = doctors.find((doctor) => slugify(doctor.specialty) === specialtySlug && slugify(doctor.city) === citySlug);

  if (!match) return;

  listingState.specialty = match.specialty;
  listingState.state = match.state;
  listingState.city = match.city;
  specialtyFilter.value = match.specialty;
  stateFilter.value = match.state;
  updateCityOptions();
  cityFilter.value = match.city;
  document.title = `${match.specialty} doctors in ${match.city} | Freehospitals`;
}

function loadDoctors() {
  return fetch("/api/doctors")
    .then((response) => {
      if (!response.ok) throw new Error("Doctor API unavailable.");
      return response.json();
    })
    .then((result) => {
      if (result.ok && Array.isArray(result.doctors) && result.doctors.length > 0) {
        doctors = result.doctors.map(normalizeDoctorForUi);
      }
    })
    .catch(() => {
      // Opening index.html directly still works with the fallback doctors above.
    });
}

function loadUserSession() {
  return fetch("/api/users/me")
    .then((response) => {
      if (!response.ok) throw new Error("No active user session.");
      return response.json();
    })
    .then((result) => {
      if (result.ok) {
        listingState.user = result.user;
        localStorage.setItem("freehospitalsUser", JSON.stringify(listingState.user));
      }
    })
    .catch(() => {});
}

Promise.all([loadDoctors(), loadUserSession()]).finally(() => {
  initializeFilters();
  applyTranslations();
});
