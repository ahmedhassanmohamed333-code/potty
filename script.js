// ==========================================
// ⬇️ منطقة المنهج (Syllabus) ⬇️
// عدد الأقفال على الباب يتم حسابه تلقائياً بناءً على عدد الأسئلة في الدرس.
// ==========================================

const syllabus = [
    {
        chapter: "قصيدة في الوفاء والخذلان",
        branches: [
            {
                title: "1. البيت الأول: عتاب الخِلّ",
                lesson: "📜 خريطة الهروب:\n\nإِذَا الخِلُّ لَمْ يَهْجُرْكَ إِلَّا مَلَالَةً *** فَلَيْسَ لَهُ إِلَّا الفِرَاقَ عِتَابُ\n\nالمعنى: إذا كان صديقك قد ابتعد عنك بسبب المَلل والسآمة فقط (لا لسبب حقيقي أو خطأ ارتكبته)، فإن أفضل رد عليه هو أن تتركه وتبتعد عنه أيضاً، فهذا هو العتاب المناسب له، لا الجدال أو التوسل.",
                questions: [
                    { q: "ما معنى كلمة 'مَلالة' في البيت؟", options: ["الفرح الشديد", "السآمة والضجر", "الغضب العنيف"], a: "السآمة والضجر" },
                    { q: "ماذا يفعل الشاعر مع من هجره بسبب المَلل فقط؟", options: ["يستعطفه ليعود", "يهجره هو الآخر (الفراق)", "يغضب ويهدده"], a: "يهجره هو الآخر (الفراق)" },
                    { q: "أكمل البيت: إِذَا الخِلُّ لَمْ يَهْجُرْكَ إِلَّا مَلَالَةً *** ................", options: ["فَلَيْسَ لَهُ إِلَّا الفِرَاقَ عِتَابُ", "وَلَيْسَ لَهُ عِنْدِي سِوَى الوُدِّ ثَوَابُ", "فَإِنَّ لَهُ فِي القَلْبِ أَعْظَمَ بَابِ"], a: "فَلَيْسَ لَهُ إِلَّا الفِرَاقَ عِتَابُ" }
                ]
            },
            {
                title: "2. البيت الثاني: الثقة بالإنسان",
                lesson: "📜 خريطة الهروب:\n\nبِمَنْ يَثِقُ الإِنْسَانُ فِيمَا يَنُوبُهُ *** وَمِنْ أَيْنَ لِلْحُرِّ الكَرِيمِ صَحَابُ؟\n\nالمعنى: يتساءل الشاعر متحسراً: بمن يمكن للإنسان أن يثق عندما تنزل به مصيبة أو أمر مهم (يَنُوبُهُ)؟ ومن أين يجد الإنسان الحر ذو الأخلاق الكريمة أصدقاء حقيقيين يستحقون هذه الثقة؟ فهو يعبّر عن ندرة الصديق الوفي.",
                questions: [
                    { q: "ماذا يعني الفعل 'يَنُوبُهُ' في البيت؟", options: ["يُسعده", "ينزل به من أمر أو مصيبة", "يبتعد عنه"], a: "ينزل به من أمر أو مصيبة" },
                    { q: "ما الفكرة الرئيسية في هذا البيت؟", options: ["كثرة الأصدقاء الأوفياء", "صعوبة إيجاد صديق يوثق به", "أن المال يجلب الأصدقاء"], a: "صعوبة إيجاد صديق يوثق به" },
                    { q: "أكمل البيت: بِمَنْ يَثِقُ الإِنْسَانُ فِيمَا يَنُوبُهُ *** ................", options: ["وَمِنْ أَيْنَ لِلْحُرِّ الكَرِيمِ صَحَابُ؟", "وَكَيْفَ يُطِيقُ العَيْشَ وَهُوَ مُصَابُ؟", "وَأَيْنَ لَهُ فِي النَّاسِ عِنْدَ حِسَابُ؟"], a: "وَمِنْ أَيْنَ لِلْحُرِّ الكَرِيمِ صَحَابُ؟" }
                ]
            },
            {
                title: "3. البيت الثالث: ذئاب في ثياب",
                lesson: "📜 خريطة الهروب:\n\nوَقَدْ صَارَ هَذَا النَّاسُ إِلَّا أَقَلَّهُمْ *** ذِئَابًا عَلَى أَجْسَادِهِنَّ ثِيَابُ!\n\nالمعنى: يصف الشاعر حال أغلب الناس بأنهم أصبحوا كالذئاب المفترسة في دواخلهم، لكنهم يتظاهرون بالطيبة والإنسانية من الخارج (ثياب)، أي أن مظهرهم يخالف حقيقتهم الخبيثة. وهذا تشبيه بليغ يبرز النفاق والخداع.",
                questions: [
                    { q: "بمن شبّه الشاعر أغلب الناس؟", options: ["بالأسود الشجاعة", "بالذئاب المفترسة", "بالحمائم الوديعة"], a: "بالذئاب المفترسة" },
                    { q: "ما الفكرة التي يعبّر عنها البيت؟", options: ["إخلاص الناس ووفاؤهم", "نفاق الناس وخداع مظهرهم لحقيقتهم", "شجاعة الناس وقوتهم"], a: "نفاق الناس وخداع مظهرهم لحقيقتهم" },
                    { q: "أكمل البيت: وَقَدْ صَارَ هَذَا النَّاسُ إِلَّا أَقَلَّهُمْ *** ................", options: ["ذِئَابًا عَلَى أَجْسَادِهِنَّ ثِيَابُ!", "أُسُودًا إِذَا مَا حَلَّ بِالنَّاسِ خَطْبُ!", "طُيُورًا تُغَنِّي وَالفُؤَادُ يَذُوبُ!"], a: "ذِئَابًا عَلَى أَجْسَادِهِنَّ ثِيَابُ!" }
                ]
            },
            {
                title: "4. البيت الرابع: الجزاء والقول",
                lesson: "📜 خريطة الهروب:\n\nوَمَا كُلُّ فَعَّالٍ يُجَازَى بِفِعْلِهِ *** وَلَا كُلُّ قَوَّالٍ لَدَيَّ يُجَابُ\n\nالمعنى: يقول الشاعر إن الدنيا لا تسير دائماً بالعدل؛ فليس كل من يفعل فعلاً حسناً يُكافأ عليه، وليس كل من يتكلم كثيراً (قوّال) يستحق أن يُستجاب له أو يُصدَّق كلامه عند الشاعر. أي أنه لا ينخدع بكثرة الكلام دون فعل حقيقي.",
                questions: [
                    { q: "ماذا يعني الشاعر بـ'فَعَّال' و'قَوَّال' في البيت؟", options: ["اسمان لشخصين معينين", "صيغتا مبالغة: كثير الفعل، وكثير القول", "أدوات ربط نحوية فقط"], a: "صيغتا مبالغة: كثير الفعل، وكثير القول" },
                    { q: "ما موقف الشاعر ممن يكثر الكلام دون فعل؟", options: ["يستجيب له فوراً", "لا يستجيب لكلامه ولا يصدقه", "يكافئه على كلامه"], a: "لا يستجيب لكلامه ولا يصدقه" },
                    { q: "أكمل البيت: وَمَا كُلُّ فَعَّالٍ يُجَازَى بِفِعْلِهِ *** ................", options: ["وَلَا كُلُّ قَوَّالٍ لَدَيَّ يُجَابُ", "وَلَا كُلُّ مَنْ يَبْكِي عَلَيْهِ يُثَابُ", "وَلَا كُلُّ ذِي وَجْهٍ لَهُ إِهَابُ"], a: "وَلَا كُلُّ قَوَّالٍ لَدَيَّ يُجَابُ" }
                ]
            },
            {
                title: "5. البيت الخامس: كلام كطنين الذباب",
                lesson: "📜 خريطة الهروب:\n\nوَرُبَّ كَلَامٍ مَرَّ فَوْقَ مَسَامِعِي *** كَمَا طَنَّ فِي لَوْحِ الهَجِيرِ ذُبَابُ!\n\nالمعنى: كثيراً ما يسمع الشاعر كلاماً (جارحاً أو تافهاً) فلا يعيره اهتماماً، بل يمرّ على أذنيه كما يمرّ طنين الذباب في يوم شديد الحر (الهجير) دون أن يلتفت إليه أحد أو يتأثر به. تشبيه يدل على استخفافه بكلام الآخرين.",
                questions: [
                    { q: "بم شبّه الشاعر الكلام الذي يمر بأذنيه دون اهتمام؟", options: ["بصوت الرعد", "بطنين الذباب في الحر", "بنغمة موسيقية جميلة"], a: "بطنين الذباب في الحر" },
                    { q: "ما دلالة كلمة 'الهجير' في البيت؟", options: ["شدة الحر", "شدة البرد", "هطول المطر"], a: "شدة الحر" },
                    { q: "أكمل البيت: وَرُبَّ كَلَامٍ مَرَّ فَوْقَ مَسَامِعِي *** ................", options: ["كَمَا طَنَّ فِي لَوْحِ الهَجِيرِ ذُبَابُ!", "كَمَا مَرَّ فِي ظِلِّ الرَّبِيعِ سَحَابُ!", "كَمَا دَقَّ فِي لَيْلِ الشِّتَاءِ بَابُ!"], a: "كَمَا طَنَّ فِي لَوْحِ الهَجِيرِ ذُبَابُ!" }
                ]
            },
            {
                title: "6. البيت السادس: ليتك تحلو",
                lesson: "📜 خريطة الهروب:\n\nفَلَيْتَكَ تَحْلُو وَالحَيَاةُ مَرِيرَةٌ *** وَلَيْتَكَ تَرْضَى وَالأَنَامُ غِضَابُ\n\nالمعنى: يخاطب الشاعر شخصاً عزيزاً عليه، متمنياً أن يكون هو (المخاطَب) طيباً وحلواً معه حتى لو كانت الحياة كلها مُرّة وصعبة، ومتمنياً أن يكون هذا الشخص راضياً عنه حتى لو غضب عليه كل الناس (الأنام). أي أن رضا هذا الشخص يهمه أكثر من رضا الدنيا كلها.",
                questions: [
                    { q: "ما معنى كلمة 'الأنام' في البيت؟", options: ["النجوم", "الناس والخلق", "الحيوانات فقط"], a: "الناس والخلق" },
                    { q: "ماذا يتمنى الشاعر من المخاطَب رغم مرارة الحياة؟", options: ["أن يبتعد عنه", "أن يكون حلواً/طيباً معه", "أن يغضب مثل الآخرين"], a: "أن يكون حلواً/طيباً معه" },
                    { q: "أكمل البيت: فَلَيْتَكَ تَحْلُو وَالحَيَاةُ مَرِيرَةٌ *** ................", options: ["وَلَيْتَكَ تَرْضَى وَالأَنَامُ غِضَابُ", "وَلَيْتَكَ تَبْقَى وَالزَّمَانُ يُعَابُ", "وَلَيْتَكَ تَصْفُو وَالخُطُوبُ تُذَابُ"], a: "وَلَيْتَكَ تَرْضَى وَالأَنَامُ غِضَابُ" }
                ]
            },
            {
                title: "7. البيت السابع: عامر وخراب",
                lesson: "📜 خريطة الهروب:\n\nوَلَيْتَ الَّذِي بَيْنِي وَبَيْنَكَ عَامِرٌ *** وَبَيْنِي وَبَيْنَ العَالَمِينَ خَرَابُ\n\nالمعنى: يختم الشاعر بتمنيه أن تبقى العلاقة التي تجمعه بهذا الشخص (المخاطَب) قوية ومزدهرة (عامرة)، حتى لو خربت علاقته بكل العالمين من حوله. وفي هذا مبالغة جميلة تدل على مدى تقديره لهذه العلاقة الخاصة مقارنة بكل شيء آخر.",
                questions: [
                    { q: "ما الطباق (التضاد) الموجود في هذا البيت؟", options: ["حلو / مرّ", "عامر / خراب", "يفعل / يقول"], a: "عامر / خراب" },
                    { q: "ماذا يتمنى الشاعر بخصوص علاقته بالمخاطَب مقارنة بعلاقته بالعالم؟", options: ["أن تخرب العلاقتان معاً", "أن تبقى علاقته به عامرة ولو خربت علاقته بالعالمين", "أن يهتم بالعالمين أكثر منه"], a: "أن تبقى علاقته به عامرة ولو خربت علاقته بالعالمين" },
                    { q: "أكمل البيت: وَلَيْتَ الَّذِي بَيْنِي وَبَيْنَكَ عَامِرٌ *** ................", options: ["وَبَيْنِي وَبَيْنَ العَالَمِينَ خَرَابُ", "وَبَيْنِي وَبَيْنَ الحَاسِدِينَ عِتَابُ", "وَبَيْنِي وَبَيْنَ الدَّهْرِ صُلْحٌ وَبَابُ"], a: "وَبَيْنِي وَبَيْنَ العَالَمِينَ خَرَابُ" }
                ]
            }
        ]
    }
    // يمكنك إضافة المزيد من القصائد/الفصول هنا...
];

// ==========================================
// نهاية منطقة المنهج
// ==========================================

let cIdx = 0; 
let bIdx = 0; 
let qIdx = 0; 
let needsLesson = true; 
let totalLocks = 0;
let locksBroken = 0;

window.onload = () => {
    populateIndex();
    setupDoorsAndLocks();
};

function populateIndex() {
    const select = document.getElementById('lesson-index');
    select.innerHTML = '';
    syllabus.forEach((chap, cIndex) => {
        let optGroup = document.createElement('optgroup');
        optGroup.label = chap.chapter;
        chap.branches.forEach((branch, bIndex) => {
            let opt = document.createElement('option');
            opt.value = `${cIndex}-${bIndex}`;
            opt.innerText = branch.title;
            optGroup.appendChild(opt);
        });
        select.appendChild(optGroup);
    });
}

// تجهيز الباب والأقفال للغرفة الجديدة
function setupDoorsAndLocks() {
    // إغلاق الأبواب
    document.getElementById('left-door').classList.remove('open-left');
    document.getElementById('right-door').classList.remove('open-right');
    document.getElementById('next-room-bg').style.opacity = '0';
    
    // إنشاء الأقفال بناءً على عدد الأسئلة
    totalLocks = syllabus[cIdx].branches[bIdx].questions.length;
    locksBroken = 0;
    document.getElementById('locks-left').innerText = totalLocks;
    
    const locksContainer = document.getElementById('locks-container');
    locksContainer.innerHTML = '';
    for (let i = 0; i < totalLocks; i++) {
        const lock = document.createElement('div');
        lock.className = 'padlock';
        lock.id = `lock-${i}`;
        lock.innerText = '🔒';
        locksContainer.appendChild(lock);
    }
}

function jumpToLesson() {
    const val = document.getElementById('lesson-index').value;
    const [c, b] = val.split('-');
    cIdx = parseInt(c);
    bIdx = parseInt(b);
    qIdx = 0;
    needsLesson = true;
    setupDoorsAndLocks();
    showFeedback("تم دخول غرفة جديدة! 🏰");
}

function drawQuestion() {
    if (cIdx >= syllabus.length) {
        alert("🏆 مبرووووك! لقد هربت من القلعة بنجاح بفضل ذكائك!");
        return;
    }
    document.getElementById('lesson-index').value = `${cIdx}-${bIdx}`;
    
    if (needsLesson) showLessonUI(false);
    else showQuestion();
}

function showLessonUI(isRetry) {
    const branchData = syllabus[cIdx].branches[bIdx];
    document.getElementById('lesson-title').innerText = branchData.title;
    
    let textToShow = branchData.lesson;
    if (isRetry) {
        document.getElementById('lesson-title').innerText = "👻 ظهر شبح القلعة!";
        textToShow = "إجابة خاطئة! الشبح يطلب منك قراءة هذا البيت وحفظه لتتمكن من المحاولة مجدداً:\n\n" + textToShow;
    }
    
    document.getElementById('lesson-text').innerText = textToShow;
    document.getElementById('lesson-section').classList.remove('hidden');
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function showQuestion() {
    const chapterData = syllabus[cIdx];
    const branchData = chapterData.branches[bIdx];
    const questionData = branchData.questions[qIdx];
    
    document.getElementById('chapter-branch-label').innerText = `${chapterData.chapter} - ${branchData.title}`;
    document.getElementById('question-counter').innerText = `البحث عن المفتاح ${qIdx + 1} من ${totalLocks}`;
    document.getElementById('question-text').innerText = questionData.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    questionData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, questionData.a);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('lesson-section').classList.add('hidden');
    document.getElementById('question-section').classList.remove('hidden');
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        // إجابة صحيحة: كسر القفل
        document.getElementById('quiz-modal').classList.add('hidden');
        showFeedback("🗝️ تم كسر القفل!");
        
        const currentLock = document.getElementById(`lock-${locksBroken}`);
        currentLock.classList.add('broken-lock');
        
        locksBroken++;
        document.getElementById('locks-left').innerText = totalLocks - locksBroken;
        
        // التحقق من كسر كل الأقفال
        if (locksBroken >= totalLocks) {
            setTimeout(() => {
                showFeedback("🌟 فُتح الباب!");
                
                // أنيميشن فتح الباب 3D
                document.getElementById('left-door').classList.add('open-left');
                document.getElementById('right-door').classList.add('open-right');
                document.getElementById('next-room-bg').style.opacity = '1';
                document.getElementById('locks-container').innerHTML = ''; // إخفاء الأقفال المكسورة
                
                // الانتقال للدرس التالي بعد ثوانٍ قليلة من الاستمتاع بفتح الباب
                setTimeout(() => {
                    qIdx = 0;
                    bIdx++;
                    needsLesson = true; 
                    if (bIdx >= syllabus[cIdx].branches.length) {
                        bIdx = 0;
                        cIdx++;
                    }
                    if(cIdx < syllabus.length) {
                        setupDoorsAndLocks(); // تجهيز الغرفة الجديدة
                        showFeedback("دخلت الغرفة التالية! 🚪");
                    }
                }, 2500);

            }, 1000);
        } else {
            // لا يزال هناك أسئلة
            qIdx++;
            needsLesson = false;
        }
    } else {
        // إجابة خاطئة
        needsLesson = true;
        showLessonUI(true);
    }
}

function showFeedback(text) {
    const feedback = document.getElementById('feedback-message');
    feedback.innerText = text;
    feedback.classList.remove('hidden');
    feedback.style.animation = 'none';
    feedback.offsetHeight; 
    feedback.style.animation = 'popIn 1.5s ease-out forwards';
}
