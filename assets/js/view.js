const setPage = function (page, title) {
    return Backbone.View.extend({
        el: $('#main-content'),
        initialize: function(){
            this.render();
        },
        render: function(){
            const that = this;
            $.get( `./pages/${page}.html`, function (data) {
                const e = document.querySelector(`.dropdown-sub-item[title='${title}']`);
                let docTitle = null;
                let navTarget = null;
                const setActive = () => {
                    document.querySelectorAll('.nav-main').forEach((_elem) => {
                        _elem.classList.remove('active');
                    });
                    document.querySelectorAll('.nav-sub-main').forEach((_elem) => {
                        _elem.classList.remove('active');
                    });
                    e.classList.add('active');
                };
                
                template = _.template(data, {});
                that.$el.html(template);
                document.title = title;
                
                docTitle = (document.querySelector('title').innerText);
                navTarget = document.querySelector(`.nav-main[title='${docTitle}']`) || document.querySelector(`.nav-sub-main[title='${docTitle}']`)
                
                document.querySelectorAll('.nav-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                document.querySelectorAll('.nav-sub-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                if(navTarget) {
                    let parentElem = null;
                    
                    if(navTarget.classList.contains('dropdown-item')) {
                        parentElem = navTarget.parentNode.parentNode.parentNode;
                        parentElem.querySelector('.dropdown-toggle').classList.add('active')
                    } else if(navTarget.classList.contains('dropdown-sub-item')) {
                        parentElem = navTarget.parentNode.parentNode.parentNode;
                        parentElem.querySelector('.dropdown-sub-toggle').classList.add('active');
                        setTimeout(() => {
                            parentElem.parentNode.parentNode.querySelector('.dropdown-toggle').classList.add('active');
                        }, 50);
                    } else if(navTarget.classList.contains('nav-link')) {
                        // reserve code
                    }
                    navTarget.classList.add('active');
                } else {
                    // reserve code it assume this is "Home"
                }
                try {
                    document.querySelector('.page-main-img').addEventListener('click', a => {
                        const elem = a.target;
                        if(elem.classList.contains('text-wrap')) {
                            elem.classList.remove('text-wrap');
                            elem.classList.add('normal');
                        } else {
                            elem.classList.add('text-wrap');
                            elem.classList.remove('normal');
                        }
                    });
                } catch(err) {}
            }, 'html');
        }
    });
};
var home = setPage('home', 'Home');
var afAtidrmp = setPage('af-atidrmp', 'AF AT/IDRMP');
var asm = setPage('asm', 'ASM');
var asmFaq = setPage('asm-faq', 'ASM-FAQ');
var asmGetStarted = setPage('asm-get-started', 'ASM-Get Started');
var asmMarketingCommsPolicy = setPage('asm-marketing-comms-policy', 'ASM-Marketing Comms Policy');
var asmTrainingResources = setPage('asm-training-resources', 'ASM-Training Resources');
var ccri = setPage('ccri', 'CCRI');
var contactUs = setPage('contact-us', 'Contact Us');
var support = setPage('support', 'Support');
var demosHowTo = setPage('demos-how-to', 'Demo / How-To');
var cyber2 = setPage('cyber-2', 'Cyber');
var cyber = setPage('cyber', 'Cyber');
var eprmVideos = setPage('eprm-videos', 'EPRM Videos');
var faq = setPage('faq', 'FAQ');
var getAnAccount = setPage('get-an-account', 'Get an Account');
var marms = setPage('marms', 'MARMS');
var pki = setPage('pki', 'PKI');
var requestTraining = setPage('request-training', 'Request Training');
var trainingSchedule = setPage('training-schedule', 'Training Schedule');
var shortLecture = setPage('short-lecture', 'Short Lectures');
var userGuides = setPage('user-guides', 'User Guides');
var youtubeChannel = setPage('youtube-channel', 'YouTube Channel');
var isc = setPage('isc', 'ISC');
var newsletters = setPage('newsletters', 'Newsletters');
var patchNotes = setPage('patch-notes', 'Patch Notes');
var informationProtection = setPage('information-protection', 'Information Protection');
var opsec = setPage('opsec', 'OPSEC');
var recordedWebinars = setPage('recorded-webinars', 'Recorded Webinars');