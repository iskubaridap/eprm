var appRouter = Backbone.Router.extend({
    routes: {
        "": "homeRoute",
        "af-atidrmp": "afAtidrmpRoute",
        "asm": "asmRoute",
        "asm-faq": "asmFaqRoute",
        "asm-get-started": "asmGetStartedRoute",
        "asm-marketing-comms-policy": "asmMarketingCommsPolicyRoute",
        "asm-training-resources": "asmTrainingResourcesRoute",
        "ccri": "ccriRoute",
        "contact-us": "contactUsRoute",
        "support": "supportRoute",
        "demos-how-to": "demosHowToRoute",
        "cyber-2": "cyber2Route",
        "cyber": "cyberRoute",
        "eprm-videos": "eprmVideosRoute",
        "faq": "faqRoute",
        "get-an-account": "getAnAccountRoute",
        "marms": "marmsRoute",
        "pki": "pkiRoute",
        "request-training": "requestTrainingRoute",
        "training-schedule": "trainingScheduleRoute",
        "short-lecture": "shortLectureRoute",
        "user-guides": "userGuidesRoute",
        "youtube-channel": "youtubeChannelRoute",
        "isc": "iscRoute",
        "newsletters": "newsLettersRoute",
        "patch-notes": "patchNotesRoute",
        "information-protection": "informationProtectionRoute",
        "opsec": "opsecRoute",
        "recorded-webinars": "recordedWebinarsRoute",
    },
    initialize: function() {
      this.on('route', this.trackPageView);
    },
    trackPageView: function() {
        const path = Backbone.history.getFragment();
        try {
            gtag('config', 'UA-2066965-14', {'page_path': '/' + path});
        } catch(err) {
            console.log(`error in 'gtag'`);
        }
        // console.log(path);
    },
    homeRoute: function () {
        new home();
    },
    afAtidrmpRoute: function (){
        new afAtidrmp();
    },
    asmRoute: function (){
        new asm();
    },
    asmFaqRoute: function (){
        new asmFaq();
    },
    asmGetStartedRoute: function (){
        new asmGetStarted();
    },
    asmMarketingCommsPolicyRoute: function (){
        new asmMarketingCommsPolicy();
    },
    asmTrainingResourcesRoute: function (){
        new asmTrainingResources();
    },
    ccriRoute: function (){
        new ccri();
    },
    contactUsRoute: function (){
        new contactUs();
    },
    supportRoute: function (){
        new support();
    },
    demosHowToRoute: function (){
        new demosHowTo();
    },
    cyber2Route: function (){
        new cyber2();
    },
    cyberRoute: function (){
        new cyber();
    },
    eprmVideosRoute: function (){
        new eprmVideos();
    },
    faqRoute: function (){
        new faq();
    },
    getAnAccountRoute: function (){
        new getAnAccount();
    },
    marmsRoute: function (){
        new marms();
    },
    pkiRoute: function (){
        new pki();
    },
    requestTrainingRoute: function (){
        new requestTraining();
    },
    trainingScheduleRoute: function (){
        new trainingSchedule();
    },
    shortLectureRoute: function (){
        new shortLecture();
    },
    userGuidesRoute: function (){
        new userGuides();
    },
    youtubeChannelRoute: function (){
        new youtubeChannel();
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/playlist?list=PL5Hq9F5JtDTTdENCgKnVFnvC_kNbdtvBZ";
        }, 1000);
    },
    iscRoute: function (){
        new isc();
    },
    newsLettersRoute: function (){
        new newsletters();
    },
    patchNotesRoute: function (){
        new patchNotes();
    },
    informationProtectionRoute: function (){
        new informationProtection();
    },
    opsecRoute: function (){
        new opsec();
    },
    recordedWebinarsRoute: function (){
        new recordedWebinars();
    }
});