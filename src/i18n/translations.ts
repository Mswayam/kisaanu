export interface TranslationDictionary {
  [key: string]: string;
}

export interface Translations {
  en: TranslationDictionary;
  hi: TranslationDictionary;
}

export const translations: Translations = {
  en: {
    // General / Common
    brandName: "KISAANU NEXUS",
    tagline: "Let's grow together",
    back: "Back",
    languageToggle: "EN",
    cancel: "Cancel",
    okay: "Okay",
    saveChanges: "Save Changes",
    
    // Welcome & Language Screen
    chooseLanguageTitle: "Choose Your Language / भाषा चुनें",
    englishBtnLabel: "English",
    hindiBtnLabel: "हिन्दी (Hindi)",
    versionFooter: "v1.4.0 • Secured & Trusted Farm Network",
    alreadyHaveAccount: "Already registered? Sign In",
    newFarmerRegister: "New Farmer? Register Account",

    // Registration Screen
    registerTitle: "Farmer Registration",
    registerSubtitle: "Join Kisaanu Nexus to manage your farm and track work daily.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name (e.g. Swayam Mhaske)",
    mobileLabel: "Mobile Number",
    villageLocationLabel: "Farm / Village Location",
    villageLocationPlaceholder: "e.g. Sector 4B, Kisaanu Farm",
    cropTypeLabel: "Primary Crop Type",
    cropPaddy: "Paddy (Rice)",
    cropWheat: "Wheat",
    cropSugarcane: "Sugarcane",
    cropCotton: "Cotton / Vegetables",
    registerSubmitBtn: "Create Account & Continue",

    // Login Screen
    welcomeBack: "Welcome Back! 👋",
    loginSubtitle: "Login using your mobile number",
    mobileNumberLabel: "Mobile Number",
    phonePlaceholder: "98765 43210",
    sendOtp: "Send OTP",
    disclaimerText: "We'll send a 6-digit verification code to your mobile number.",
    secureInfo: "Your information is 100% secure",

    // OTP Verification Screen
    verifyTitle: "Verify Your Mobile Number",
    verifySubtitlePrefix: "We sent a 6-digit code to ",
    didnReceiveCode: "Didn't receive the code?",
    resendOtp: "Resend OTP",
    verifyAndContinue: "Verify & Continue",
    wrongNumberLink: "Wrong number? Change number",

    // Permissions Screen
    allowPermissionsTitle: "Allow Permissions",
    permissionsSubtitle: "We need the following permissions to make your farm work smooth and trackable.",
    locationPermissionTitle: "Location Permission",
    locationPermissionDesc: "To mark daily attendance & record field locations.",
    cameraPermissionTitle: "Camera Permission",
    cameraPermissionDesc: "To capture work proof photos and crop issues.",
    micPermissionTitle: "Microphone Permission",
    micPermissionDesc: "To quickly record voice notes about farm tasks.",
    allowAllContinue: "Allow All & Continue",
    permissionsFooterNote: "You can change these options later in app settings.",

    // Screen 5: Dashboard Home
    goodMorningUser: "Good Morning, Suresh! 👋",
    todaysDate: "Today's date: 15 Oct, 2026",
    todaysOverview: "TODAY'S OVERVIEW",
    assignedTasks: "Assigned Tasks",
    checkedInToday: "Checked In Today",
    activeBadge: "Active",
    doneBadge: "Done",
    quickActions: "QUICK ACTIONS",
    voiceLog: "Voice Log",
    photoProof: "Photo Proof",

    // Bottom Navigation Tabs
    tabHome: "Home",
    tabTasks: "Tasks",
    tabVoice: "Voice",
    tabAttendance: "Attendance",
    tabProfile: "Profile",

    // Screen 6: Today's Tasks
    farmingTasksTitle: "FARMING TASKS",
    tabTodayCount: "Today (2)",
    tabCompleted: "Completed",
    irrigatingCrops: "Irrigating Crops",
    riceZoneNorth: "Rice Zone - North • 08:00 AM",
    fertilizerApplication: "Fertilizer Application",
    riceZoneWest: "Rice Zone - West • 11:00 AM",
    doNowBtn: "Do Now",
    earnTrustBanner: "Complete your tasks on time and earn trust!",

    // Screen 7: Task Details
    taskDetailsTitle: "TASK DETAILS",
    pendingBadge: "Pending",
    instructionsTitle: "INSTRUCTIONS",
    instructionsSubtitle: "Irrigate the crop as per schedule:",
    instruction1: "• Check water flow in the lines",
    instruction2: "• Ensure all fertilizer dispensers are active",
    instruction3: "• Cover full designated area evenly",
    startTaskBtn: "Start Task",

    // Screen 8: Task In Progress
    taskInProgressTitle: "TASK IN PROGRESS",
    timeElapsed: "TIME ELAPSED",
    taskStartedTime: "Task Started: 08:15 AM",
    currentActiveTask: "CURRENT ACTIVE TASK",
    irrigationProcess: "Irrigation Process",
    locationPeaZone: "Location: Pea Zone - North",
    notesOptional: "Notes (Optional)",
    notesPlaceholder: "Add notes about your work...",
    completeTaskBtn: "Complete Task",

    // Screen 9: Complete Task Confirmation
    taskCompleteTitle: "TASK COMPLETE",
    confirmCompletion: "Confirm Completion",
    didYouCompleteTask: "Did you complete the task:",
    atPeaZoneNorth: "at Pea Zone - North",
    yesCompletedBtn: "Yes, Completed",
    notYetBtn: "Not Yet",
    stopTaskBtn: "Stop Task",
    stopTaskSubtext: "Stop the timer and cancel current progress.",

    // Screen 10: Photo Proof
    photoProofTitle: "Photo Proof",
    isPhotoClear: "Is this photo clear?",
    yesClearBtn: "Yes, Clear",
    retakeBtn: "Retake",
    currentTaskLocation: "CURRENT TASK LOCATION",
    locationIrrigationPeaZone: "Irrigation, Pea Zone - North",
    gallery: "Gallery",
    flash: "Flash",

    // Screen 11: Voice Proof
    voiceProofTitle: "Voice Proof",
    recordVoiceStatementTitle: "Record Voice Statement",
    recordVoiceStatementDesc: "Please state your name and confirm you have completed the irrigation work in the Pea Zone.",
    photoAddedBadge: "Photo Added",
    voicePendingBadge: "Voice Pending",
    readyToRecordLabel: "Are you ready to record your statement?",
    startVoiceNoteBtn: "Start Voice Note",

    // Screen 12: Voice Note (Optional)
    voiceNoteOptionalTitle: "Voice Note (Optional)",
    recordShortVoiceNoteTitle: "Record a short voice note about your work",
    recordShortVoiceNoteDesc: "Explain details of crops, issues or general farm observations.",
    recordingText: "Recording...",
    taskTag: "Task: Irrigation - Pea Zone - North",
    pauseRecordingBtn: "Pause Recording",
    playBackBtn: "Play Back",
    reRecordBtn: "Re-record",
    voiceNoteFooterNote: "Voice note is optional • Tap Pause to finalize",

    // Screen 13: Submit Proof
    submitProofTitle: "Submit Proof",
    reviewAttachmentsTitle: "REVIEW ATTACHMENTS",
    fieldProofPhotoName: "Field_Proof_Photo.jpg",
    fieldProofPhotoSize: "Size: 1.2 MB",
    voiceNoteProofTitle: "Voice Note Proof (00:08)",
    farmingTaskLabel: "FARMING TASK",
    taskIrrigationPeaZone: "Irrigation - Pea Zone - North",
    submissionTimestampLabel: "SUBMISSION TIMESTAMP",
    submissionTimestampValue: "26 Jul 2026, 08:42 AM",
    submitWorkProofBtn: "Submit Work Proof",

    // Screen 14: Submission Success
    workSubmittedSuccessfullyTitle: "Work Submitted Successfully!",
    workSubmittedDesc: "Thank you! Your work has been submitted for review.",
    submissionIdLabel: "Submission ID",
    submissionIdValue: "#KN-28192",
    workDoneLabel: "Work Done",
    workDoneValue: "Irrigation Complete",
    backToHomeLink: "Back to Home",

    // Screen 15: Attendance Check-In
    todaysAttendanceTitle: "TODAY'S ATTENDANCE",
    youAreCheckedInBadge: "You are Checked In",
    youAreCheckedOutBadge: "You are Checked Out",
    checkInTimeLabel: "CHECK-IN TIME",
    checkInTimeValue: "08:05 AM",
    checkInDateValue: "Date: 26 July, 2026",
    verifiedLocationTitle: "VERIFIED LOCATION",
    foliageFieldLocation: "Foliage Field Sec 4B, Kisaanu Farm",
    gpsAlertNote: "Your location was automatically verified during check-in. This app uses secure GPS verification for reliable records.",
    checkInNowBtn: "Check-in Now",

    // Screen 16: Attendance Check-Out
    checkOutTitle: "CHECK-OUT ATTENDANCE",
    youAreCheckedInAlert: "Currently Checked In (Active Shift)",
    checkInTimeTodayLabel: "Punch-In Time Today",
    currentTimeLabel: "Punch-Out Time Now",
    currentTimeValue: "06:15 PM",
    shiftDurationLabel: "Total Shift Working Time",
    shiftDurationValue: "10 hours 10 minutes",
    checkOutLocationTitle: "VERIFIED CHECK-OUT LOCATION",
    mainGateLocation: "Main Gate Entrance, Sector 1",
    confirmCheckOutBtn: "Swipe / Click to Confirm Check-Out",
    checkedOutSuccessMsg: "Checked Out Successfully!",

    // Screen 17: Voice Activity Log
    voiceActivityLogTitle: "VOICE ACTIVITY LOG",
    recordDailyActivityTitle: "Record Daily Activity",
    recordDailyActivityDesc: "Record voice note about your activity",
    stopAndSaveRecordingBtn: "Stop & Save Recording",
    voiceTranslateSubtext: "Please speak clearly. We will automatically translate and save your log in English & Hindi.",

    // Screen 18: Input Log
    activityLogTitle: "ACTIVITY LOG",
    loggedFarmInputsTitle: "Logged Farm Inputs",
    loggedFarmInputsDesc: "Review or add logs for materials used today.",
    organicCompost: "Organic Compost",
    quantity25Bags: "25 Bags",
    sector4B: "Sector 4B",
    date26Jul: "26/07/2026",
    ureaFertilizer: "Urea Fertilizer",
    quantity10Bags: "10 Bags",
    sector2A: "Sector 2A",
    date25Jul: "25/07/2026",
    seedsWheat: "Seeds (Wheat)",
    quantity50Kg: "50 KG",
    mainWarehouse: "Main Warehouse",
    date24Jul: "24/07/2026",
    addNewInputEntryBtn: "Add New Input Entry +",
    savedBadge: "Saved",
    syncedBadge: "Synced",

    // Screen 19: Notifications Offline / System Status
    systemStatusTitle: "SYSTEM STATUS",
    youAreOfflineTitle: "You are offline",
    youAreOfflineDesc: "Some features are not available.",
    offlineSyncNote: "Your data will sync when internet is available. Rest assured, your attendance logs are saved securely offline.",
    checkConnectionBtn: "Check Connection",

    // Screen 20: Farmer Profile & Settings
    farmerProfileTitle: "MY PROFILE",
    sureshName: "Suresh Kumar",
    userRole: "Senior Farm Manager • Sector 4B",
    tasksCompletedStat: "148",
    tasksCompletedLabel: "Tasks Completed",
    attendanceRateStat: "98%",
    attendanceRateLabel: "Attendance Rate",
    trustRatingStat: "4.9 ⭐",
    trustRatingLabel: "Trust Rating",
    personalFarmDetailsMenu: "Personal & Farm Information",
    languagePreferencesMenu: "Language & Localization (EN | हिंदी)",
    attendanceHistoryMenu: "Attendance History & Logs",
    farmInputsLogMenu: "Farm Inputs & Material Logs",
    systemStatusOfflineMenu: "System & Network Status",
    helpSupportMenu: "Help & Emergency Support",
    logoutMenu: "Sign Out / Switch Account",

    // Completion / Restart
    completedTitle: "All 21 Screens Completed!",
    completedSubtitle: "Great work! You have navigated through all 21 exact screens.",
    restartDemo: "Restart App Flow"
  },

  hi: {
    // General / Common
    brandName: "KISAANU NEXUS",
    tagline: "आइए साथ मिलकर प्रगति करें",
    back: "पीछे",
    languageToggle: "हिंदी",
    cancel: "रद्द करें",
    okay: "ठीक है",
    saveChanges: "परिवर्तन सहेजें",

    // Welcome & Language Screen
    chooseLanguageTitle: "Choose Your Language / भाषा चुनें",
    englishBtnLabel: "English",
    hindiBtnLabel: "हिन्दी (Hindi)",
    versionFooter: "v1.4.0 • सुरक्षित एवं विश्वसनीय कृषि नेटवर्क",
    alreadyHaveAccount: "पहले से पंजीकृत हैं? साइन इन करें",
    newFarmerRegister: "नए किसान? खाता बनाएं",

    // Registration Screen
    registerTitle: "किसान पंजीकरण",
    registerSubtitle: "अपने खेत का प्रबंधन करने और दैनिक काम को ट्रैक करने के लिए किसानू नेक्सस से जुड़ें।",
    fullNameLabel: "पूरा नाम",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें (जैसे स्वयं म्हस्के)",
    mobileLabel: "मोबाइल नंबर",
    villageLocationLabel: "फार्म / गांव का स्थान",
    villageLocationPlaceholder: "जैसे सेक्टर 4B, किसानू फार्म",
    cropTypeLabel: "प्राथमिक फसल का प्रकार",
    cropPaddy: "धान (चावल)",
    cropWheat: "गेहूँ",
    cropSugarcane: "गन्ना",
    cropCotton: "कपास / सब्जियां",
    registerSubmitBtn: "खाता बनाएं और आगे बढ़ें",

    // Login Screen
    welcomeBack: "वापसी पर स्वागत है! 👋",
    loginSubtitle: "अपने मोबाइल नंबर का उपयोग करके लॉगिन करें",
    mobileNumberLabel: "मोबाइल नंबर",
    phonePlaceholder: "98765 43210",
    sendOtp: "ओटीपी भेजें",
    disclaimerText: "हम आपके मोबाइल नंबर पर 6 अंकों का सत्यापन कोड भेजेंगे।",
    secureInfo: "आपकी जानकारी 100% सुरक्षित है",

    // OTP Verification Screen
    verifyTitle: "अपना मोबाइल नंबर सत्यापित करें",
    verifySubtitlePrefix: "हमने कोड भेजा है ",
    didnReceiveCode: "कोड प्राप्त नहीं हुआ?",
    resendOtp: "पुनः ओटीपी भेजें",
    verifyAndContinue: "सत्यापित करें और आगे बढ़ें",
    wrongNumberLink: "गलत नंबर? नंबर बदलें",

    // Permissions Screen
    allowPermissionsTitle: "अनुमतियाँ दें",
    permissionsSubtitle: "आपके खेत के काम को सुचारू और ट्रैक योग्य बनाने के लिए हमें निम्नलिखित अनुमतियों की आवश्यकता है।",
    locationPermissionTitle: "स्थान अनुमति",
    locationPermissionDesc: "दैनिक उपस्थिति दर्ज करने और खेत के स्थानों को रिकॉर्ड करने के लिए।",
    cameraPermissionTitle: "कैमरा अनुमति",
    cameraPermissionDesc: "काम के प्रमाण फ़ोटो और फसल की समस्याओं को कैप्चर करने के लिए।",
    micPermissionTitle: "माइक अनुमति",
    micPermissionDesc: "खेत के कार्यों के बारे में त्वरित वॉइस नोट्स रिकॉर्ड करने के लिए।",
    allowAllContinue: "सभी अनुमतियाँ दें और आगे बढ़ें",
    permissionsFooterNote: "आप इन विकल्पों को बाद में ऐप सेटिंग में बदल सकते हैं।",

    // Screen 5: Dashboard Home
    goodMorningUser: "शुभ प्रभात, सुरेश! 👋",
    todaysDate: "आज की तारीख: 15 अक्टूबर, 2026",
    todaysOverview: "आज का अवलोकन",
    assignedTasks: "सौंपे गए कार्य",
    checkedInToday: "आज की उपस्थिति",
    activeBadge: "सक्रिय",
    doneBadge: "पूर्ण",
    quickActions: "त्वरित कार्रवाई",
    voiceLog: "वॉइस लॉग",
    photoProof: "फोटो प्रमाण",

    // Bottom Navigation Tabs
    tabHome: "होम",
    tabTasks: "कार्य",
    tabVoice: "वॉइस",
    tabAttendance: "उपस्थिति",
    tabProfile: "प्रोफ़ाइल",

    // Screen 6: Today's Tasks
    farmingTasksTitle: "कृषि कार्य",
    tabTodayCount: "आज (2)",
    tabCompleted: "पूर्ण",
    irrigatingCrops: "फसलों की सिंचाई",
    riceZoneNorth: "चावल क्षेत्र - उत्तर • 08:00 AM",
    fertilizerApplication: "उर्वरक अनुप्रयोग",
    riceZoneWest: "चावल क्षेत्र - पश्चिम • 11:00 AM",
    doNowBtn: "अभी करें",
    earnTrustBanner: "समय पर अपने कार्य पूरे करें और विश्वास कमाएं!",

    // Screen 7: Task Details
    taskDetailsTitle: "कार्य का विवरण",
    pendingBadge: "लंबित",
    instructionsTitle: "निर्देश",
    instructionsSubtitle: "शीड्यूल के अनुसार फसल की सिंचाई करें:",
    instruction1: "• लाइनों में पानी का प्रवाह जांचें",
    instruction2: "• सुनिश्चित करें कि सभी उर्वरक डिस्पेंसर सक्रिय हैं",
    instruction3: "• पूरे निर्दिष्ट क्षेत्र को समान रूप से कवर करें",
    startTaskBtn: "कार्य शुरू करें",

    // Screen 8: Task In Progress
    taskInProgressTitle: "कार्य प्रगति पर है",
    timeElapsed: "बीता हुआ समय",
    taskStartedTime: "कार्य शुरू हुआ: 08:15 AM",
    currentActiveTask: "वर्तमान सक्रिय कार्य",
    irrigationProcess: "सिंचाई प्रक्रिया",
    locationPeaZone: "स्थान: मटर क्षेत्र - उत्तर",
    notesOptional: "नोट्स (वैकल्पिक)",
    notesPlaceholder: "अपने काम के बारे में नोट्स जोड़ें...",
    completeTaskBtn: "कार्य पूरा करें",

    // Screen 9: Complete Task Confirmation
    taskCompleteTitle: "कार्य पूर्ण",
    confirmCompletion: "सत्यापन की पुष्टि करें",
    didYouCompleteTask: "क्या आपने कार्य पूरा कर लिया है:",
    atPeaZoneNorth: "मटर क्षेत्र - उत्तर में",
    yesCompletedBtn: "हाँ, पूरा हो गया",
    notYetBtn: "अभी नहीं",
    stopTaskBtn: "कार्य रोकें",
    stopTaskSubtext: "टाइमर रोकें और वर्तमान प्रगति रद्द करें।",

    // Screen 10: Photo Proof
    photoProofTitle: "फोटो प्रमाण",
    isPhotoClear: "क्या यह फोटो स्पष्ट है?",
    yesClearBtn: "हाँ, स्पष्ट है",
    retakeBtn: "पुनः लें",
    currentTaskLocation: "वर्तमान कार्य स्थान",
    locationIrrigationPeaZone: "सिंचाई, मटर क्षेत्र - उत्तर",
    gallery: "गैलरी",
    flash: "फ्लैश",

    // Screen 11: Voice Proof
    voiceProofTitle: "वॉइस प्रमाण",
    recordVoiceStatementTitle: "वॉइस विवरण रिकॉर्ड करें",
    recordVoiceStatementDesc: "कृपया अपना नाम बताएं और पुष्टि करें कि आपने मटर क्षेत्र में सिंचाई कार्य पूरा कर लिया है।",
    photoAddedBadge: "फोटो जोड़ी गई",
    voicePendingBadge: "वॉइस लंबित",
    readyToRecordLabel: "क्या आप अपना विवरण रिकॉर्ड करने के लिए तैयार हैं?",
    startVoiceNoteBtn: "वॉइस नोट शुरू करें",

    // Screen 12: Voice Note (Optional)
    voiceNoteOptionalTitle: "वॉइस नोट (वैकल्पिक)",
    recordShortVoiceNoteTitle: "अपने काम के बारे में एक संक्षिप्त वॉइस नोट रिकॉर्ड करें",
    recordShortVoiceNoteDesc: "फसलों, मुद्दों या सामान्य खेत के अवलोकनों का विवरण समझाएं।",
    recordingText: "रिकॉर्डिंग ज़ारी है...",
    taskTag: "कार्य: सिंचाई - मटर क्षेत्र - उत्तर",
    pauseRecordingBtn: "रिकॉर्डिंग रोकें",
    playBackBtn: "पुनः सुनें",
    reRecordBtn: "पुनः रिकॉर्ड करें",
    voiceNoteFooterNote: "वॉइस नोट वैकल्पिक है • अंतिम रूप देने के लिए पॉज़ पर टैप करें",

    // Screen 13: Submit Proof
    submitProofTitle: "प्रमाण जमा करें",
    reviewAttachmentsTitle: "संलग्नक की समीक्षा करें",
    fieldProofPhotoName: "Field_Proof_Photo.jpg",
    fieldProofPhotoSize: "आकार: 1.2 MB",
    voiceNoteProofTitle: "वॉइस नोट प्रमाण (00:08)",
    farmingTaskLabel: "कृषि कार्य",
    taskIrrigationPeaZone: "सिंचाई - मटर क्षेत्र - उत्तर",
    submissionTimestampLabel: "जमा करने का समय",
    submissionTimestampValue: "26 जुलाई 2026, 08:42 AM",
    submitWorkProofBtn: "कार्य प्रमाण जमा करें",

    // Screen 14: Submission Success
    workSubmittedSuccessfullyTitle: "कार्य सफलतापूर्वक जमा किया गया!",
    workSubmittedDesc: "धन्यवाद! आपका काम समीक्षा के लिए जमा कर दिया गया है।",
    submissionIdLabel: "सबमिशन आई डी",
    submissionIdValue: "#KN-28192",
    workDoneLabel: "किया गया कार्य",
    workDoneValue: "सिंचाई पूर्ण",
    backToHomeLink: "होम पर वापस जाएँ",

    // Screen 15: Attendance Check-In
    todaysAttendanceTitle: "आज की उपस्थिति",
    youAreCheckedInBadge: "आपकी उपस्थिति दर्ज हो चुकी है",
    youAreCheckedOutBadge: "आप चेक-आउट हैं",
    checkInTimeLabel: "चेक-इन का समय",
    checkInTimeValue: "08:05 AM",
    checkInDateValue: "दिनांक: 26 जुलाई, 2026",
    verifiedLocationTitle: "सत्यापित स्थान",
    foliageFieldLocation: "फोलिएज फील्ड सेक 4B, किसानू फार्म",
    gpsAlertNote: "चेक-इन के दौरान आपका स्थान स्वचालित रूप से सत्यापित किया गया था। यह ऐप विश्वसनीय रिकॉर्ड के लिए सुरक्षित GPS सत्यापन का उपयोग करता है।",
    checkInNowBtn: "अभी चेक-इन करें",

    // Screen 16: Attendance Check-Out
    checkOutTitle: "उपस्थिति चेक-आउट",
    youAreCheckedInAlert: "वर्तमान में चेक-इन (सक्रिय शिफ्ट)",
    checkInTimeTodayLabel: "पंच-इन समय (आज)",
    currentTimeLabel: "पंच-आउट समय (अभी)",
    currentTimeValue: "06:15 PM",
    shiftDurationLabel: "कुल कार्य अवधि",
    shiftDurationValue: "10 घंटे 10 मिनट",
    checkOutLocationTitle: "सत्यापित चेक-आउट स्थान",
    mainGateLocation: "मुख्य द्वार प्रवेश, सेक्टर 1",
    confirmCheckOutBtn: "चेक-आउट की पुष्टि के लिए स्वाइप / क्लिक करें",
    checkedOutSuccessMsg: "सफलतापूर्वक चेक-आउट किया गया!",

    // Screen 17: Voice Activity Log
    voiceActivityLogTitle: "वॉइस गतिविधि लॉग",
    recordDailyActivityTitle: "दैनिक गतिविधि रिकॉर्ड करें",
    recordDailyActivityDesc: "अपनी गतिविधि के बारे में वॉइस नोट रिकॉर्ड करें",
    stopAndSaveRecordingBtn: "रिकॉर्डिंग रोकें और सहेजें",
    voiceTranslateSubtext: "कृपया स्पष्ट बोलें। हम आपकी लॉग का अंग्रेजी और हिंदी में अनुवाद और सहेजेंगे।",

    // Screen 18: Input Log
    activityLogTitle: "गतिविधि लॉग",
    loggedFarmInputsTitle: "दर्ज किए गए कृषि इनपुट",
    loggedFarmInputsDesc: "आज उपयोग की गई सामग्री के लॉग की समीक्षा करें या जोड़ें।",
    organicCompost: "जैविक खाद (कम्पोस्ट)",
    quantity25Bags: "25 बैग",
    sector4B: "सेक्टर 4B",
    date26Jul: "26/07/2026",
    ureaFertilizer: "यूरिया उर्वरक",
    quantity10Bags: "10 बैग",
    sector2A: "सेक्टर 2A",
    date25Jul: "25/07/2026",
    seedsWheat: "बीज (गेहूँ)",
    quantity50Kg: "50 किलोग्राम",
    mainWarehouse: "मुख्य गोदाम",
    date24Jul: "24/07/2026",
    addNewInputEntryBtn: "नया इनपुट दर्ज करें +",
    savedBadge: "सहेजा गया",
    syncedBadge: "सिंक किया गया",

    // Screen 19: Notifications Offline / System Status
    systemStatusTitle: "सिस्टम स्थिति",
    youAreOfflineTitle: "आप ऑफ़लाइन हैं",
    youAreOfflineDesc: "कुछ सुविधाएं उपलब्ध नहीं हैं।",
    offlineSyncNote: "इंटरनेट उपलब्ध होने पर आपका डेटा सिंक हो जाएगा। निश्चिंत रहें, आपकी उपस्थिति लॉग ऑफ़लाइन सुरक्षित रूप से सहेजे गए हैं।",
    checkConnectionBtn: "कनेक्शन जांचें",

    // Screen 20: Farmer Profile & Settings
    farmerProfileTitle: "मेरी प्रोफ़ाइल",
    sureshName: "सुरेश कुमार",
    userRole: "सीनियर फार्म मैनेजर • सेक्टर 4B",
    tasksCompletedStat: "148",
    tasksCompletedLabel: "पूरे किए गए कार्य",
    attendanceRateStat: "98%",
    attendanceRateLabel: "उपस्थिति दर",
    trustRatingStat: "4.9 ⭐",
    trustRatingLabel: "विश्वास रेटिंग",
    personalFarmDetailsMenu: "व्यक्तिगत और फार्म जानकारी",
    languagePreferencesMenu: "भाषा एवं क्षेत्रीय सेटिंग (EN | हिंदी)",
    attendanceHistoryMenu: "उपस्थिति इतिहास और लॉग",
    farmInputsLogMenu: "फार्म इनपुट और सामग्री लॉग",
    systemStatusOfflineMenu: "सिस्टम और नेटवर्क स्थिति",
    helpSupportMenu: "सहायता और आपातकालीन सहायता",
    logoutMenu: "साइन आउट / खाता बदलें",

    // Completion / Restart
    completedTitle: "सभी 21 स्क्रीन पूरी हुईं!",
    completedSubtitle: "उत्कृष्ट कार्य! आपने सभी 21 स्क्रीन सफलतापूर्वक पूरी कर ली हैं।",
    restartDemo: "ऐप फ़्लो पुनः प्रारंभ करें"
  }
};
