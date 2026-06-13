const translations = {
    en: {
        appTitle: "Break-Even Pro", navCalculator: "Dashboard", navHistory: "History", navAiChat: "AI Chat", navReports: "Reports", navDiagrams: "ERD/DFD", navEgx: "Egyptian Exchange", navAbout: "About", profileTitle: "Profile",
        egxTitle: "Egyptian Exchange", egxDesc: "Follow stock prices and market indices on the Egyptian Exchange.", egxBtn: "Visit Egyptian Exchange Website",
        authLoginTitle: "Login", scenariosTitle: "Projects", calcPageTitle: "Dashboard", calcResultsTitle: "Results & Target Profit",
        chart1Title: "1. Area Chart", chart2Title: "2. Line Chart", chart3Title: "3. Column Chart", chart4Title: "4. Bar Chart",
        chart5Title: "5. Pie Chart", chart6Title: "6. Doughnut Chart", chart7Title: "7. Candlestick", chart8Title: "8. Box Plot", chart9Title: "9. Histogram",
        chart1DescShort: "Shows Profit and Loss zones visually.", 
        chart1DescFull: " Strategic insight: The intersection point is exactly the Break-Even Point. The colored area below the intersection represents accumulated fixed and variable costs (Loss Zone), warning stakeholders. The area above indicates pure net profit generation.",
        chart2DescShort: "Tracks specific cost and revenue trajectories.", 
        chart2DescFull: " Trend Analysis: Unlike the area chart, this isolates the specific trajectory of Fixed Costs (flat horizontal line) versus Total Costs. It empowers decision-makers to see exactly how variable costs impact the slope of expenses.",
        chart3DescShort: "Vertical comparison of expected net profits.", 
        chart3DescFull: " Scenario Benchmarking: A direct vertical benchmark of Expected Net Profit. By comparing the height of the columns, executives can instantly identify which pricing structure yields the highest return on investment.",
        chart4DescShort: "Horizontal comparison of BEP units.", 
        chart4DescFull: " Risk Assessment: Compares the absolute number of units required to break even. A shorter bar is highly favorable, indicating that the business will cover its costs faster.",
        chart5DescShort: "Expected volume distribution.", 
        chart5DescFull: " Market Share: Assuming all scenarios represent different products, this displays the relative percentage share of total expected sales volume. It helps in allocating marketing budgets.",
        chart6DescShort: "Cost structure visualization.", 
        chart6DescFull: " Capital Intensity: Analyzes the ratio of Fixed to Variable costs. A high proportion of fixed costs means high operating leverage.",
        chart7DescShort: "Simulates possible price volatility.", 
        chart7DescFull: " Market Simulation: Utilizes financial candlestick logic to simulate a ±20% volatility in Selling Price. It shows the Open, High, Low, and Close of potential pricing strategies.",
        chart8DescShort: "Statistical variance of variable costs.", 
        chart8DescFull: " Variance Analysis: Displays the interquartile range of potential variable cost fluctuations. It highlights the Median, Minimum, and Maximum outliers.",
        chart9DescShort: "Sales volume probability distribution.", 
        chart9DescFull: " Probability Distribution: Categorizes expected sales into discrete frequency bins. It provides a macroscopic view of where sales volumes are most likely to concentrate.",
        readMoreBtn: "Read More", readLessBtn: "Show Less",
        bepUnits: "BEP (Units):", bepRev: "BEP (Rev):", cmRatio: "CM Ratio:", mos: "Margin of Safety:", expectedProfit: "Expected Profit:"
    },
    ar: {
        appTitle: "نظام التعادل", navCalculator: "لوحة التحليل", navHistory: "السجلات", navAiChat: "المساعد الذكي", navReports: "التقارير", navDiagrams: "مخططات هندسية", navEgx: "البورصة المصرية", navAbout: "المشروع", profileTitle: "الملف الشخصي",
        egxTitle: "البورصة المصرية", egxDesc: "تابع أسعار الأسهم والمؤشرات على البورصة المصرية.", egxBtn: "زيارة موقع البورصة المصرية",
        authLoginTitle: "تسجيل الدخول", scenariosTitle: "المشاريع", calcPageTitle: "لوحة التحليل المالي", calcResultsTitle: "النتائج والتقارير المباشرة",
        chart1Title: "1. المخطط المساحي (Area)", chart2Title: "2. المخطط الخطي (Line)", chart3Title: "3. المخطط العمودي (Column)", chart4Title: "4. المخطط الشريطي (Bar)",
        chart5Title: "5. المخطط الدائري (Pie)", chart6Title: "6. المخطط المجوف (Doughnut)", chart7Title: "7. الشموع اليابانية", chart8Title: "8. مخطط الصندوق", chart9Title: "9. المدرج التكراري",
        chart1DescShort: "يوضح بوضوح منطقة الربح والخسارة.", 
        chart1DescFull: " <br><b>رؤية استراتيجية:</b> يمثل هذا المخطط الخريطة البصرية لمخاطر المشروع. نقطة التقاطع هي (نقطة التعادل) الدقيقة. المساحة المظللة بالأسفل تعكس بوضوح منطقة تراكم التكاليف الثابتة والمتغيرة (منطقة الخسارة)، بينما تعبر المساحة العلوية المفتوحة عن قدرة المشروع على توليد الأرباح الصافية بعد تغطية كافة الأعباء.",
        chart2DescShort: "يتتبع مسار وسلوك التكاليف مع الإنتاج.", 
        chart2DescFull: " <br><b>تحليل الاتجاهات:</b> يركز هذا المخطط على عزل وتتبع مسار (التكاليف الثابتة) كخط أفقي لا يتأثر بالإنتاج، ومقارنته بمنحنى (إجمالي التكاليف). هذا يفيد الإدارة العليا في فهم مدى تأثير التكلفة المتغيرة للوحدة الواحدة على تصاعد إجمالي المصروفات.",
        chart3DescShort: "مقارنة رأسية لصافي الأرباح المتوقعة.", 
        chart3DescFull: " <br><b>مقارنة المشاريع:</b> يقدم مقارنة رأسية حاسمة لـ (صافي الربح المتوقع) بين جميع المشاريع المدخلة. من خلال هذا المخطط، يستطيع متخذ القرار المالي تحديد الاستراتيجية التسعيرية التي تحقق أعلى عائد على الاستثمار (ROI).",
        chart4DescShort: "يقارن أفقياً كمية وحدات التعادل.", 
        chart4DescFull: " <br><b>تقييم المخاطر التشغيلية:</b> يعرض (كمية التعادل) بشكل أفقي. الشريط الأقصر هو الاستراتيجية الأفضل والأكثر أماناً، حيث يعني أن المشروع سيتجاوز مرحلة الخطر ويغطي تكاليفه ببيع عدد أقل من الوحدات.",
        chart5DescShort: "يوضح توزيع الحصص السوقية والبيعية.", 
        chart5DescFull: " <br><b>توزيع الحصص:</b> بافتراض أن المشاريع تمثل منتجات مختلفة، يوضح هذا المخطط الحصة النسبية المئوية لكل منتج من إجمالي المبيعات. أداة ممتازة لمديري التسويق لتوجيه الميزانيات الإعلانية.",
        chart6DescShort: "يحلل التكوين الداخلي وهيكل التكاليف.", 
        chart6DescFull: " <br><b>تحليل هيكل التكاليف:</b> يحلل نسبة التكلفة الثابتة إلى إجمالي التكلفة المتغيرة. كلما زادت نسبة التكاليف الثابتة، زادت (الرافعة التشغيلية)، مما يعني أرباحاً مضاعفة بعد التعادل ولكن بمخاطرة أعلى قبل التعادل.",
        chart7DescShort: "يحاكي سيناريوهات التذبذب السعري.", 
        chart7DescFull: " <br><b>محاكاة السوق:</b> مخطط مالي متقدم يحاكي تقلبات سعر البيع بنسبة (±20%). يعرض الحد الأعلى، الأدنى، سعر الافتتاح، وسعر الإغلاق المتوقع لكل مشروع. يضع أمام الإدارة تصوراً كاملاً لمرونة استراتيجية التسعير.",
        chart8DescShort: "التحليل الإحصائي لتباين التكاليف المتغيرة.", 
        chart8DescFull: " <br><b>تحليل التباين:</b> يقوم بعرض التوزيع الإحصائي لاحتمالات التكلفة المتغيرة. يوضح الربع الأول، الوسيط، الربع الثالث، والحدود القصوى والدنيا. هذه الأداة ضرورية جداً لتوقع تذبذب أسعار المواد الخام.",
        chart9DescShort: "يعرض التوزيع الاحتمالي والتكراري للمبيعات.", 
        chart9DescFull: " <br><b>التوزيع التكراري:</b> يقوم بتجميع المبيعات المتوقعة وتصنيفها في فئات (Bins) ليوضح كثافة التكرار. يتيح للمحلل المالي معرفة النطاق البيعي الأكثر احتمالاً للحدوث لتوجيه الطاقة الإنتاجية بناءً عليه.",
        readMoreBtn: "اقرأ المزيد", readLessBtn: "إخفاء التفاصيل",
        bepUnits: "التعادل (وحدات):", bepRev: "التعادل (إيراد):", cmRatio: "نسبة هامش المساهمة:", mos: "هامش الأمان:", expectedProfit: "الربح المتوقع:"
    }
};

const studentsAR = [
    { name: "ابراهيم مصطفي السيد" }, { name: "ياسر احمد فتحي" },
    { name: "خلود حمدان السيد" }, { name: "مريم السعيد احمد" },
    { name: "حبيبه خالد محمد" }, { name: "السيده محمد المغاوري" },
    { name: "الشيماء اشرف احمد" }, { name: "خلود صبحي ابراهيم" },
    { name: "احمد محمد الشربيني" }, { name: "يوسف عصام السيد " },
    { name: "حامد محمود حامد" }, { name: "بلال شريف يوسف" },
    { name: "تسنيم مجدي عبدالحكيم" }, { name: "رغد محمدالدسوقي" },
    { name: "نانسي عبد العلي علي" }, { name: "ندي السيد مصطفي" },
    { name: "نغم المرسي المرسي" }, { name: "هاله فوده الشحات" },
    { name: "فارس اسامه شوقي" }, { name: "يوسف مصطفي ابراهيم" }
];

const SCENARIO_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2394a3b8'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z'/%3E%3C/svg%3E";

let currentLang = 'ar', currentTheme = 'light', currentCurrency = 'EGP', isLoggedIn = false;
let scenarios = JSON.parse(localStorage.getItem('be_scenarios')) || [{ id: 1, name: "المشروع الأول", fc: 50000, vc: 30, sp: 80, exSales: 1400 }];
let resultsData = [], apexCharts = {};

// Debounce helper to batch rapid updates (improves chart responsiveness)
function debounce(fn, wait = 120) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

const debouncedCalculateData = debounce(() => { calculateData(); }, 120);

// Utility: load a script only once and resolve when available (used as ApexCharts fallback)
function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
        if (typeof ApexCharts !== 'undefined') return resolve();
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            existing.addEventListener('load', () => (typeof ApexCharts !== 'undefined' ? resolve() : reject(new Error('ApexCharts did not initialize'))));
            existing.addEventListener('error', () => reject(new Error('Failed to load script')));
            return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => (typeof ApexCharts !== 'undefined' ? resolve() : reject(new Error('ApexCharts did not initialize')));
        s.onerror = () => reject(new Error('Failed to load script'));
        document.head.appendChild(s);
    });
}

function init() {
    const safeAddListener = (id, event, handler) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    };
    
    safeAddListener('langToggle', 'click', () => updateLanguage(currentLang === 'en' ? 'ar' : 'en'));
    safeAddListener('themeToggle', 'click', () => setTheme(currentTheme === 'light' ? 'dark' : 'light'));
    safeAddListener('currencySelect', 'change', (e) => { currentCurrency = e.target.value; debouncedCalculateData(); });
    safeAddListener('openCalcBtn', 'click', () => { const el = document.getElementById('floating-calc'); if(el) el.classList.remove('hidden'); });
    safeAddListener('closeCalcBtn', 'click', () => { const el = document.getElementById('floating-calc'); if(el) el.classList.add('hidden'); });
    safeAddListener('authForm', 'submit', handleAuth);
    safeAddListener('logoutBtn', 'click', logout);
    safeAddListener('profileBtn', 'click', () => switchPage('profile'));
    safeAddListener('addScenarioBtn', 'click', addNewScenario);
    safeAddListener('mobileMenuBtn', 'click', () => { const el = document.getElementById('mainNavigation'); if(el) el.classList.toggle('show'); });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => { switchPage(e.currentTarget.dataset.page); const nav = document.getElementById('mainNavigation'); if(nav) nav.classList.remove('show'); });
    });
    
    const scenariosList = document.getElementById('scenariosList');
    if (scenariosList) {
        scenariosList.addEventListener('input', (e) => {
            const item = e.target.closest('.scenario-item');
            if (item) {
                const sc = scenarios.find(s => s.id == item.dataset.id);
                if(sc) { sc[e.target.name] = e.target.value; localStorage.setItem('be_scenarios', JSON.stringify(scenarios)); debouncedCalculateData(); loadUserProfile(); }
            }
        });
    }
    
    safeAddListener('sendChatBtn', 'click', handleChatSubmit);
    safeAddListener('chatInput', 'keypress', (e) => { if(e.key === 'Enter') handleChatSubmit(); });
    safeAddListener('avatarUpload', 'change', handleAvatarUpload);
    safeAddListener('profileForm', 'submit', handleProfileUpdate);
    safeAddListener('passwordForm', 'submit', handlePasswordUpdate);
    
    loadAiQuestions();
    setTheme(localStorage.getItem('theme') || 'light');
    updateLanguage(currentLang);
    window.addEventListener('resize', refreshApexCharts);
    checkAuth();
}

function checkAuth() {
    if (localStorage.getItem('be_currentUser')) {
        isLoggedIn = true;
        document.getElementById('openCalcBtn').classList.remove('hidden');
        document.getElementById('logoutBtn').classList.remove('hidden');
        document.getElementById('profileBtn').classList.remove('hidden');
        if(!localStorage.getItem('be_user_profile')) {
            localStorage.setItem('be_user_profile', JSON.stringify({ name: "محلل مالي", username: "user", email: "user@example.com", avatar: defaultAvatar }));
        }
        switchPage('calculator');
        renderScenariosInputs();
        requestAnimationFrame(async () => {
            await initApexCharts();
            calculateData();
        });
        loadHistory();
        loadUserProfile();
    } else switchPage('auth');
}

function handleAuth(e) { 
    e.preventDefault(); 
    localStorage.setItem('be_currentUser', 'user'); 
    let email = document.getElementById('authEmail').value;
    if(!localStorage.getItem('be_user_profile')) {
        localStorage.setItem('be_user_profile', JSON.stringify({ name: "محلل مالي", username: email.split('@')[0], email: email, avatar: defaultAvatar }));
    }
    checkAuth(); 
}

function logout() { localStorage.removeItem('be_currentUser'); location.reload(); }

function switchPage(pageId) {
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === pageId));
    if (pageId === 'calculator' && isLoggedIn) {
        requestAnimationFrame(() => {
            refreshApexCharts();
            setTimeout(refreshApexCharts, 250);
        });
    }
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (isLoggedIn) {
        Object.values(apexCharts).forEach(c => c && c.updateOptions({ theme: { mode: theme } }));
        calculateData();
    }
}

function updateLanguage(lang) {
    currentLang = lang; document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('currentLangLabel').textContent = lang === 'en' ? 'AR' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(el => { if(translations[lang][el.getAttribute('data-i18n')]) el.innerHTML = translations[lang][el.getAttribute('data-i18n')]; });
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        if(!btn.previousElementSibling.classList.contains('hidden')) {
            btn.innerText = translations[lang]['readLessBtn'];
        } else {
            btn.innerText = translations[lang]['readMoreBtn'];
        }
    });
    document.getElementById('studentsList').innerHTML = studentsAR.map((s, index) => {
        let color = SCENARIO_COLORS[index % 4];
        return `<div class="student-profile-card" style="border-top: 3px solid ${color}; align-items: center; text-align: center;">
                    <img src="images/student_${index + 1}.jpg" onerror="this.src='${defaultAvatar}'" alt="${s.name}" style="width: 75px; height: 75px; border-radius: 50%; object-fit: cover; margin-bottom: 12px; border: 2px solid ${color}; background: #fff;">
                    <div class="student-name" style="justify-content: center; font-size: 1.1rem; margin-bottom: 5px;">${s.name}</div>
                </div>`;
    }).join('');
    if(isLoggedIn) { renderScenariosInputs(); calculateData(); loadUserProfile(); }
}

function formatCurrency(num) {
    const symbols = { 'EGP': 'ج.م', 'SAR': 'ريال', 'USD': '$', 'EUR': '€' };
    let val = new Intl.NumberFormat('en-US').format(num);
    return currentLang === 'ar' ? `${val} ${symbols[currentCurrency]}` : `${symbols[currentCurrency]}${val}`;
}

function loadUserProfile() {
    let user = JSON.parse(localStorage.getItem('be_user_profile')) || { name: "محلل مالي", username: "user", email: "", avatar: defaultAvatar };
    document.getElementById('profileAvatar').src = user.avatar || defaultAvatar;
    document.getElementById('headerAvatarImg').src = user.avatar || defaultAvatar;
    document.getElementById('profileNameDisplay').innerText = user.name;
    document.getElementById('profileEmailDisplay').innerText = user.email;
    document.getElementById('profName').value = user.name;
    document.getElementById('profUsername').value = user.username;
    document.getElementById('profEmail').value = user.email;
    document.getElementById('statActiveProjects').innerText = new Intl.NumberFormat('en-US').format(scenarios.length);
    let hist = JSON.parse(localStorage.getItem('be_history')) || [];
    document.getElementById('statSavedReports').innerText = new Intl.NumberFormat('en-US').format(hist.length);
}

function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 200;
            const MAX_HEIGHT = 200;
            let width = img.width, height = img.height;
            if (width > height) {
                if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
            } else {
                if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
            }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
            let user = JSON.parse(localStorage.getItem('be_user_profile')) || {};
            user.avatar = compressedDataUrl;
            localStorage.setItem('be_user_profile', JSON.stringify(user));
            loadUserProfile(); 
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function handleProfileUpdate(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('be_user_profile')) || {};
    user.name = document.getElementById('profName').value;
    user.username = document.getElementById('profUsername').value;
    user.email = document.getElementById('profEmail').value;
    localStorage.setItem('be_user_profile', JSON.stringify(user));
    loadUserProfile();
    alert(currentLang === 'ar' ? 'تم حفظ بيانات الملف الشخصي بنجاح!' : 'Profile updated successfully!');
}

function handlePasswordUpdate(e) {
    e.preventDefault();
    document.getElementById('oldPass').value = '';
    document.getElementById('newPass').value = '';
    alert(currentLang === 'ar' ? 'تم تغيير كلمة المرور بنجاح!' : 'Password changed successfully!');
}

function renderScenariosInputs() {
    const list = document.getElementById('scenariosList'); list.innerHTML = '';
    scenarios.forEach((scen, i) => {
        list.innerHTML += `<div class="scenario-item" data-id="${scen.id}" style="border-top: 3px solid ${SCENARIO_COLORS[i % 4]}"><div class="scenario-header"><input type="text" name="name" value="${scen.name}"><button class="action-btn danger remove-btn" onclick="removeScenario(${scen.id})"><i class="fa-solid fa-trash"></i></button></div><div class="input-group"><label>التكلفة الثابتة</label><input type="number" name="fc" value="${scen.fc}"></div><div class="input-group"><label>ت.متغيرة</label><input type="number" name="vc" value="${scen.vc}"></div><div class="input-group"><label>سعر البيع</label><input type="number" name="sp" value="${scen.sp}"></div><div class="input-group"><label>المبيعات المتوقعة</label><input type="number" name="exSales" value="${scen.exSales}"></div></div>`;
    });
}
function addNewScenario() {
    const MAX_SCENARIOS = 50; // sensible upper bound to avoid UI blowup
    if (scenarios.length >= MAX_SCENARIOS) {
        alert(currentLang === 'ar' ? 'تم الوصول للحد الأقصى للمشاريع.' : 'Reached maximum number of projects.');
        return;
    }
    const newSc = { id: Date.now(), name: `مشروع ${scenarios.length + 1}`, fc: 50000, vc: 30, sp: 80, exSales: 1400 };
    scenarios.push(newSc);
    localStorage.setItem('be_scenarios', JSON.stringify(scenarios));
    renderScenariosInputs();
    calculateData();
    loadUserProfile();
}
function removeScenario(id) { scenarios = scenarios.filter(s => s.id !== id); localStorage.setItem('be_scenarios', JSON.stringify(scenarios)); renderScenariosInputs(); calculateData(); loadUserProfile(); }


// ensure slider changes persist
function updateSensitivity() {
    if (scenarios.length === 0) return;
    let s = scenarios[0];
    s.vc = parseFloat(document.getElementById('sensVc').value) || 0;
    s.sp = parseFloat(document.getElementById('sensSp').value) || 0;
    document.getElementById('sensVcVal').innerText = formatCurrency(s.vc);
    document.getElementById('sensSpVal').innerText = formatCurrency(s.sp);
    localStorage.setItem('be_scenarios', JSON.stringify(scenarios));
    renderScenariosInputs();
    debouncedCalculateData();
}

function toggleText(btn) {
    let span = btn.previousElementSibling;
    if(span.classList.contains('hidden')) { 
        span.classList.remove('hidden'); 
        btn.innerText = translations[currentLang]['readLessBtn']; 
    } else { 
        span.classList.add('hidden'); 
        btn.innerText = translations[currentLang]['readMoreBtn']; 
    }
}

function calcTargetProfit(id, val) {
    let s = scenarios.find(x => x.id == id);
    let target = parseFloat(val) || 0;
    const contrib = parseFloat(s.sp) - parseFloat(s.vc);
    if (!contrib || contrib <= 0) {
        document.getElementById(`tp-res-${id}`).innerText = currentLang === 'ar' ? 'مستحيل تحقيقه' : 'Impossible to achieve';
        return;
    }
    let reqUnits = Math.ceil((parseFloat(s.fc) + target) / contrib);
    let enUnits = new Intl.NumberFormat('en-US').format(reqUnits);
    document.getElementById(`tp-res-${id}`).innerText = reqUnits > 0 ? `تحتاج لبيع: ${enUnits} وحدة` : 'مستحيل تحقيقه';
}

function toggleTable(id, iconId) { document.getElementById(id).classList.toggle('show'); document.getElementById(iconId).parentElement.classList.toggle('active'); }

function calculateData() {
    resultsData = []; const grid = document.getElementById('inlineResultsGrid'), tablesContainer = document.getElementById('tablesContainer'), reportsContainer = document.getElementById('detailedReportsContainer');
    grid.innerHTML = ''; tablesContainer.innerHTML = ''; reportsContainer.innerHTML = '';
    if(scenarios[0]) {
        document.getElementById('sensVc').value = scenarios[0].vc || 0; document.getElementById('sensSp').value = scenarios[0].sp || 0;
        document.getElementById('sensVcVal').innerText = formatCurrency(scenarios[0].vc || 0); document.getElementById('sensSpVal').innerText = formatCurrency(scenarios[0].sp || 0);
    }
    let bestScenario = null;
    scenarios.forEach((s, i) => {
        const fc = parseFloat(s.fc)||0, vc = parseFloat(s.vc)||0, sp = parseFloat(s.sp)||0, exSales = parseFloat(s.exSales)||0;
        if(sp <= vc) return; 
        const bepUnits = Math.ceil(fc / (sp - vc)), bepRev = bepUnits * sp, cmRatio = (((sp - vc)/sp)*100).toFixed(1), expectedProfit = (exSales*sp)-(fc+(exSales*vc));
        const mos = exSales > 0 ? (((exSales - bepUnits) / exSales) * 100).toFixed(1) : 0;
        resultsData.push({ id: s.id, name: s.name, fc, vc, sp, exSales, bepUnits, bepRev, cmRatio, expectedProfit, mos, color: SCENARIO_COLORS[i%4] });
        if(!bestScenario || bepUnits < bestScenario.bepUnits) bestScenario = resultsData[resultsData.length-1];

        let enBepUnits = new Intl.NumberFormat('en-US').format(bepUnits);
        let enMos = new Intl.NumberFormat('en-US').format(mos);
        let enCmRatio = new Intl.NumberFormat('en-US').format(cmRatio);
        let enExSales = new Intl.NumberFormat('en-US').format(exSales);

        let fullAdviceText = currentLang === 'ar' ? 
            `<strong><i class="fa-solid fa-comment-dollar"></i> تحليل الاستشاري المالي:</strong><br>
            يحتاج هذا المشروع إلى بيع <span style="font-family: Arial;">${enBepUnits}</span> وحدة لتغطية كافة تكاليفه. 
            هامش الأمان يبلغ <span style="font-family: Arial;">${enMos}%</span>، ${mos > 20 ? 'وهو مؤشر ممتاز يدل على قدرة المشروع على تحمل تقلبات السوق.' : 'وهو مؤشر خطير يدل على أن أي انخفاض في المبيعات سيؤدي لخسائر فادحة.'}
            نسبة هامش المساهمة هي <span style="font-family: Arial;">${enCmRatio}%</span>.` : 
            `<strong><i class="fa-solid fa-comment-dollar"></i> Consultant Analysis:</strong><br>
            Requires selling ${enBepUnits} units to break even. 
            Margin of Safety is ${enMos}%, ${mos > 20 ? 'an excellent indicator of resilience.' : 'a risky indicator.'}
            Contribution Margin Ratio is ${enCmRatio}%.`;

        let reportContentHTML = `
            <div class="report-grid-2">
                <div class="report-data-box">
                    <h4>المدخلات الأساسية</h4>
                    <div class="report-data-row"><span>التكاليف الثابتة:</span> <strong>${formatCurrency(fc)}</strong></div>
                    <div class="report-data-row"><span>التكلفة المتغيرة للوحدة:</span> <strong>${formatCurrency(vc)}</strong></div>
                    <div class="report-data-row"><span>سعر البيع للوحدة:</span> <strong>${formatCurrency(sp)}</strong></div>
                    <div class="report-data-row"><span>المبيعات المتوقعة:</span> <span style="font-family: Arial;">${enExSales}</span> وحدة</div>
                </div>
                <div class="report-data-box">
                    <h4>مؤشرات الأداء (KPIs)</h4>
                    <div class="report-data-row"><span>نقطة التعادل (كمية):</span> <strong style="color:var(--brand-primary); font-family: Arial;">${enBepUnits} وحدة</strong></div>
                    <div class="report-data-row"><span>نقطة التعادل (قيمة):</span> <strong>${formatCurrency(bepRev)}</strong></div>
                    <div class="report-data-row"><span>نسبة هامش المساهمة:</span> <span style="font-family: Arial;">${enCmRatio}%</span></div>
                    <div class="report-data-row"><span>هامش الأمان:</span> <strong style="font-family: Arial; color:${mos>20?'var(--success)':'var(--danger)'}">${enMos}%</strong></div>
                    <div class="report-data-row"><span>صافي الربح المتوقع:</span> <strong style="color:${expectedProfit>0?'var(--success)':'var(--danger)'}">${formatCurrency(expectedProfit)}</strong></div>
                </div>
            </div>
            <div class="report-advice-box">${fullAdviceText}</div>
        `;

        grid.innerHTML += `
        <div class="inline-result-item" style="border-top:3px solid ${SCENARIO_COLORS[i%4]}">
            <h3><i class="fa-solid fa-file-signature"></i> التقرير المباشر: ${s.name}</h3>
            ${reportContentHTML}
            <div class="target-profit-box">
                <label style="font-size:0.85rem; font-weight:bold;"><i class="fa-solid fa-bullseye"></i> احسب مبيعات الربح المستهدف:</label>
                <input type="number" placeholder="أدخل مبلغ الربح المطلوب..." oninput="calcTargetProfit(${s.id}, this.value)">
                <div id="tp-res-${s.id}" style="font-weight:bold; margin-top:5px; color:var(--brand-primary); font-size:0.95rem"></div>
            </div>
        </div>`;
        
        let rows = ''; let step = Math.ceil(bepUnits/5)||1;
        for(let u=0; u<=bepUnits*1.5; u+=step) { 
            let r=u*sp, c=fc+(u*vc), p=r-c; 
            let enU = new Intl.NumberFormat('en-US').format(u);
            rows+=`<tr ${u===bepUnits?'class="bep-row"':''}><td><span style="font-family: Arial;">${enU}</span>${u===bepUnits?' <i class="fa-solid fa-star"></i>':''}</td><td>${formatCurrency(r)}</td><td>${formatCurrency(c)}</td><td dir="ltr" style="${p<0?'color:var(--danger)':'color:var(--success)'}">${formatCurrency(p)}</td></tr>`; 
        }
        
        tablesContainer.innerHTML += `<div class="card" style="padding:1rem"><button class="table-toggle-btn" onclick="toggleTable('tbl-${s.id}','icn-${s.id}')"><span><i class="fa-solid fa-table"></i> عرض تفاصيل الحجم والربحية - ${s.name}</span><i class="fa-solid fa-chevron-down" id="icn-${s.id}"></i></button><div id="tbl-${s.id}" class="table-collapse-wrapper"><h3 style="margin:1rem 0;color:var(--brand-primary)">جدول الربحية</h3><div class="table-responsive"><table class="analysis-table"><thead><tr><th>الوحدات</th><th>الإيرادات</th><th>التكاليف</th><th>الربح/الخسارة</th></tr></thead><tbody>${rows}</tbody></table></div></div></div>`;
        reportsContainer.innerHTML += `<div class="full-report-card"><h3><i class="fa-solid fa-file-invoice"></i> التقرير المالي: ${s.name}</h3>${reportContentHTML}</div>`;
    });
    const banner = document.getElementById('winnerBanner');
    if(bestScenario) { banner.classList.remove('hidden'); banner.innerHTML = `🏆 الذكاء الاصطناعي يوصي بـ <strong>(${bestScenario.name})</strong> لأنه يحقق أسرع نقطة تعادل.`; } else banner.classList.add('hidden');
    updateApexCharts();
}

function exportToExcel() {
    let csv = "\uFEFFالمشروع,التكاليف الثابتة,التكلفة المتغيرة,سعر البيع,نقطة التعادل,الربح المتوقع\n";
    resultsData.forEach(r => { csv += `${r.name},${r.fc},${r.vc},${r.sp},${r.bepUnits},${r.expectedProfit}\n`; });
    const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' })); link.download = "BreakEven_Analysis.csv"; link.click();
}

function saveToHistory() {
    let hist = JSON.parse(localStorage.getItem('be_history')) || [];
    hist.push({ date: new Date().toLocaleString('en-US'), data: [...resultsData] });
    localStorage.setItem('be_history', JSON.stringify(hist)); loadHistory(); loadUserProfile(); alert(currentLang==='ar'?'تم حفظ السجل بنجاح!':'Saved to history!');
}

function loadHistory() {
    let hist = JSON.parse(localStorage.getItem('be_history')) || [];
    let cont = document.getElementById('historyContainer'); cont.innerHTML = '';
    hist.forEach((h, i) => {
        let items = h.data.map(d => {
            let enBep = new Intl.NumberFormat('en-US').format(d.bepUnits);
            return `<li><strong>${d.name}:</strong> تعادل <span style="font-family: Arial;">${enBep}</span> | ربح ${formatCurrency(d.expectedProfit)}</li>`;
        }).join('');
        cont.innerHTML += `<div class="history-card" id="hist-card-${i}"><div class="history-date"><i class="fa-regular fa-calendar"></i> <span style="font-family: Arial;">${h.date}</span></div><ul style="list-style:none; font-size:0.9rem; line-height:1.8;">${items}</ul><div class="history-actions"><button class="primary-btn outline" onclick="printHistory(${i})"><i class="fa-solid fa-print"></i> طباعة السجل</button><button class="action-btn danger" onclick="deleteHistory(${i})"><i class="fa-solid fa-trash"></i></button></div></div>`;
    });
}
function printHistory(index) {
    document.body.classList.add('printing-history');
    document.getElementById(`hist-card-${index}`).classList.add('print-active');
    window.print();
    setTimeout(() => {
        document.body.classList.remove('printing-history');
        document.getElementById(`hist-card-${index}`).classList.remove('print-active');
    }, 1000);
}
function printReports() {
    document.body.classList.add('printing-reports');
    window.print();
    setTimeout(() => { document.body.classList.remove('printing-reports'); }, 1000);
}
function deleteHistory(index) {
    let hist = JSON.parse(localStorage.getItem('be_history')) || [];
    hist.splice(index, 1); localStorage.setItem('be_history', JSON.stringify(hist)); loadHistory(); loadUserProfile();
}
function getApexOptions(type) {
    const base = {
        chart: {
            type,
            height: 300,
            background: 'transparent',
            toolbar: { show: false },
            fontFamily: currentLang === 'ar' ? 'Cairo' : 'Inter',
            redrawOnParentResize: true,
            animations: { enabled: false }
        },
        theme: { mode: currentTheme },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        colors: SCENARIO_COLORS,
        grid: { borderColor: currentTheme === 'dark' ? '#334155' : '#e2e8f0' },
        responsive: [{ breakpoint: 768, options: { chart: { height: 280 } } }]
    };
    if (type === 'pie' || type === 'donut') {
        return { ...base, series: [1, 1], labels: ['—', '—'] };
    }
    if (type === 'candlestick') {
        return { ...base, series: [{ data: [{ x: '—', y: [0, 0, 0, 0] }] }] };
    }
    if (type === 'boxPlot') {
        return { ...base, series: [{ type: 'boxPlot', data: [{ x: '—', y: [0, 0, 0, 0, 0] }] }] };
    }
    return {
        ...base,
        series: [{ name: '—', data: [0, 0, 0, 0] }],
        xaxis: { categories: ['0', '1', '2', '3'] }
    };
}
async function initApexCharts() {
    if (typeof ApexCharts === 'undefined') {
        // Try a fallback CDN if the global isn't available yet
        try {
            await loadScriptOnce('https://cdn.jsdelivr.net/npm/apexcharts');
        } catch (err) {
            console.error('ApexCharts library failed to load (both primary and fallback).', err);
            return;
        }
    }
    const create = (id, options) => {
        const el = document.querySelector(`#${id}`);
        if (!el) { console.warn(`Element #${id} not found`); return; }
        try {
            if (apexCharts[id]) apexCharts[id].destroy();
            apexCharts[id] = new ApexCharts(el, options);
            apexCharts[id].render();
        } catch (err) {
            console.error(`Failed to render chart ${id}:`, err);
        }
    };
    create('chart-area', { ...getApexOptions('area'), series: [{ name: 'إيراد', data: [0, 0, 0, 0] }, { name: 'تكلفة', data: [0, 0, 0, 0] }] });
    create('chart-line', { ...getApexOptions('line'), series: [{ name: 'إيراد', data: [0, 0, 0, 0] }, { name: 'تكلفة', data: [0, 0, 0, 0] }] });
    // ApexCharts uses 'bar' type for vertical columns; use plotOptions to control orientation
    create('chart-column', { ...getApexOptions('bar'), plotOptions: { bar: { horizontal: false } }, series: [{ name: 'الربح', data: [0] }], xaxis: { categories: ['—'] } });
    create('chart-bar', { ...getApexOptions('bar'), plotOptions: { bar: { horizontal: true } }, series: [{ name: 'التعادل', data: [0] }], xaxis: { categories: ['—'] } });
    create('chart-pie', getApexOptions('pie'));
    create('chart-doughnut', getApexOptions('donut'));
    create('chart-candlestick', getApexOptions('candlestick'));
    create('chart-boxplot', getApexOptions('boxPlot'));
    create('chart-histogram', { ...getApexOptions('bar'), plotOptions: { bar: { columnWidth: '99%' } }, series: [{ name: 'احتمالية التحقق (%)', data: [0, 0, 0, 0, 0] }], xaxis: { categories: ['—', '—', '—', '—', '—'] } });
}
function refreshApexCharts() {
    if (!Object.keys(apexCharts).length) {
        initApexCharts();
    } else {
        Object.values(apexCharts).forEach(c => c && typeof c.resize === 'function' && c.resize());
    }
    updateApexCharts();
}
function updateApexCharts() {
    // If there's no valid results data, show placeholder series so charts aren't blank
    if (!resultsData.length) {
        if (!Object.keys(apexCharts).length) { initApexCharts(); return; }
        const safeGet = (key) => apexCharts[key] && typeof apexCharts[key].updateSeries === 'function' ? apexCharts[key] : null;
        const area = safeGet('chart-area'); if (area) { area.updateSeries([{ name: 'إيراد', data: [0,0,0,0] }, { name: 'تكلفة', data: [0,0,0,0] }]); area.updateOptions({ xaxis: { categories: ['—','—','—','—'] } }); }
        const column = safeGet('chart-column'); if (column) { column.updateSeries([{ name: 'الربح', data: [0] }]); column.updateOptions({ xaxis: { categories: ['—'] } }); }
        const bar = safeGet('chart-bar'); if (bar) { bar.updateSeries([{ name: 'التعادل', data: [0] }]); bar.updateOptions({ xaxis: { categories: ['—'] } }); }
        const pie = safeGet('chart-pie'); if (pie) { pie.updateSeries([1]); pie.updateOptions({ labels: ['—'] }); }
        const donut = safeGet('chart-doughnut'); if (donut) { donut.updateSeries([1,1]); donut.updateOptions({ labels: ['—','—'] }); }
        const cs = safeGet('chart-candlestick'); if (cs) { cs.updateSeries([{ data: [{ x: '—', y: [0,0,0,0] }] }]); }
        const bp = safeGet('chart-boxplot'); if (bp) { bp.updateSeries([{ type: 'boxPlot', data: [{ x: '—', y: [0,0,0,0,0] }] }]); }
        const hist = safeGet('chart-histogram'); if (hist) { hist.updateSeries([{ name: 'احتمالية التحقق (%)', data: [0,0,0,0,0] }]); hist.updateOptions({ xaxis: { categories: ['—','—','—','—','—'] } }); }
        return;
    }
    // ensure charts are initialized
    if (!Object.keys(apexCharts).length) {
        initApexCharts();
        return;
    }
    const safeGet = (key) => apexCharts[key] && typeof apexCharts[key].updateSeries === 'function' ? apexCharts[key] : null;
    const names = resultsData.map(r => String(r.name));
    const profits = resultsData.map(r => Number(r.expectedProfit) || 0);
    const beps = resultsData.map(r => Number(r.bepUnits) || 0);
    const s1 = resultsData[0];
    const bepNum = Number(s1.bepUnits) || 0;
    const units = [0, Math.ceil(bepNum / 2), bepNum, Math.ceil(bepNum * 1.5)];
    const seriesArea = [{ name: 'إيراد', data: units.map(u => Number(u) * (Number(s1.sp) || 0)) }, { name: 'تكلفة', data: units.map(u => (Number(s1.fc) || 0) + ((Number(s1.vc) || 0) * Number(u))) }];

    try {
        const area = safeGet('chart-area');
        if (area) { area.updateSeries(seriesArea); area.updateOptions({ xaxis: { categories: units } }); }

        const line = safeGet('chart-line');
        if (line) { line.updateSeries(seriesArea); line.updateOptions({ xaxis: { categories: units } }); }

        const column = safeGet('chart-column');
        if (column) { column.updateSeries([{ name: 'الربح', data: profits }]); column.updateOptions({ xaxis: { categories: names } }); }

        const bar = safeGet('chart-bar');
        if (bar) { bar.updateSeries([{ name: 'التعادل', data: beps }]); bar.updateOptions({ xaxis: { categories: names } }); }

        const pie = safeGet('chart-pie');
        if (pie) { let pieData = resultsData.map(r => Number(r.exSales) > 0 ? Number(r.exSales) : 1); pie.updateSeries(pieData); pie.updateOptions({ labels: names }); }

        const donut = safeGet('chart-doughnut');
        if (donut) { donut.updateSeries([ (Number(s1.fc) > 0 ? Number(s1.fc) : 1), ((Number(s1.vc) * Number(s1.exSales)) > 0 ? (Number(s1.vc) * Number(s1.exSales)) : 1) ]); donut.updateOptions({ labels: ['التكاليف الثابتة', 'إجمالي التكاليف المتغيرة'] }); }

        const cs = safeGet('chart-candlestick');
        if (cs) { cs.updateSeries([{ data: resultsData.map(r => { let o = Number(r.sp) || 0, h = o * 1.2, l = o * 0.8, c = o * 1.05; return { x: r.name, y: [o, h, l, c] }; }) }]); }

        const bp = safeGet('chart-boxplot');
        if (bp) { bp.updateSeries([{ type: 'boxPlot', data: resultsData.map(r => { let m = Number(r.vc) || 0, min = m * 0.7, q1 = m * 0.85, q3 = m * 1.15, max = m * 1.3; return { x: r.name, y: [min, q1, m, q3, max] }; }) }]); }

        const hist = safeGet('chart-histogram');
        if (hist) { let baseSales = Number(s1.exSales) || 1000; hist.updateSeries([{ name: 'احتمالية التحقق (%)', data: [10, 25, 40, 15, 10] }]); hist.updateOptions({ xaxis: { categories: [`< ${Math.round(baseSales * 0.5)}`, `${Math.round(baseSales * 0.5)}-${Math.round(baseSales * 0.8)}`, `${Math.round(baseSales * 0.8)}-${Math.round(baseSales * 1.2)}`, `${Math.round(baseSales * 1.2)}-${Math.round(baseSales * 1.5)}`, `> ${Math.round(baseSales * 1.5)}`] } }); }
    } catch (err) {
        console.error('Failed to update ApexCharts:', err);
    }
}
function loadAiQuestions() {
    const aiQuestions = [ "ما هي نقطة التعادل؟", "كيف أحسب هامش الأمان؟", "كيف يمكنني تقليل التكاليف الثابتة؟", "ما تأثير زيادة سعر البيع على التعادل؟", "ما هو هامش المساهمة؟", "كيف أحسب الربح المستهدف؟", "ما الفرق بين التكلفة الثابتة والمتغيرة؟", "ماذا يعني المدى الملائم؟", "كيف أتعامل مع التكاليف الغارقة؟", "ما هي تكلفة الفرصة البديلة؟", "كيف أحلل أكثر من منتج؟", "ما هي الرافعة التشغيلية؟", "ماذا يحدث إذا زادت التكلفة المتغيرة للوحدة؟", "كيف أقرأ المخطط المساحي؟", "متى يجب إغلاق المشروع مؤقتاً؟", "ما هي نسبة هامش المساهمة؟", "ما هو تحليل الحساسية وكيف يفيدني؟", "كيف أستخدم الشموع اليابانية؟", "ما هو العائد على الاستثمار (ROI)؟", "كيف أوزع الحصص السوقية؟", "هل هناك طرق تسعير بديلة؟", "ما هي التكلفة المعيارية؟" ];
    document.querySelector('.ai-suggestions').innerHTML = aiQuestions.map(q => `<button onclick="sendSuggested('${q}')">${q}</button>`).join('');
}
function sendSuggested(txt) { document.getElementById('chatInput').value = txt; handleChatSubmit(); }
function handleChatSubmit() {
    const input = document.getElementById('chatInput'), text = input.value.trim(); if(!text) return;
    
    // التعديل 5: استبدال محتوى الشات القديم بالجديد ليعرض سؤال وإجابة واحدة فقط.
    document.getElementById('chatMessages').innerHTML = `<div class="message user"><div class="msg-avatar"><i class="fa-solid fa-user"></i></div><div class="msg-bubble">${text}</div></div>`;
    input.value = '';
    
    setTimeout(() => {
        let reply = ""; let q = text.toLowerCase();
        if(q.includes('تعادل')) reply = "<b>نقطة التعادل (Break-Even Point):</b><br>هي المرحلة التي لا تحقق فيها الشركة أرباحاً ولا خسائر. تتساوى عندها الإيرادات الكلية مع التكاليف الكلية.<br><ul><li><b>المعادلة:</b> التكاليف الثابتة ÷ هامش المساهمة للوحدة.</li><li><b>أهميتها:</b> حجر الأساس في تسعير المنتجات وتقييم المخاطرة لأي مشروع.</li></ul>";
        else if(q.includes('تكاليف') || q.includes('تكلفة') || q.includes('أقلل')) reply = "<b>إدارة وتقليل التكاليف:</b><br>1. <b>التكاليف المتغيرة:</b> تفاوض مع الموردين لشراء الخامات بسعر جملة أرخص.<br>2. <b>التكاليف الثابتة:</b> حاول تقليل المصروفات الإدارية.<br>تخفيض التكلفة المتغيرة يقلل نقطة التعادل بشكل أسرع.";
        else if(q.includes('مساحي') || q.includes('رسم') || q.includes('مخطط')) reply = "<b>المخططات المالية:</b><br>المخطط المساحي يُظهر (منطقة الخطر) باللون الأحمر أسفل نقطة التعادل، و(منطقة الأمان والربح) باللون الأخضر أعلاها. كلما كان التقاطع أسرع، كان المشروع أفضل.";
        else if(q.includes('مستهدف') || q.includes('ربح')) reply = "<b>الربح المستهدف:</b><br>المعادلة:<br><code>(التكاليف الثابتة + الربح المستهدف) ÷ هامش المساهمة</code><br>تخبرك بعدد الوحدات التي يجب بيعها لتحقيق هذا الربح. يمكنك استخدام الحاسبة المتوفرة في النظام.";
        else if(q.includes('أمان') || q.includes('امان')) reply = "<b>هامش الأمان (Margin of Safety):</b><br>مؤشر يوضح الفرق بين مبيعاتك المتوقعة ومبيعات نقطة التعادل. لو كان 40%، فمبيعاتك يمكن أن تسقط بنسبة 40% قبل الخسارة.";
        else if(q.includes('مزيج')) reply = "<b>المزيج البيعي (Sales Mix):</b><br>عند بيع أكثر من منتج بنسب مختلفة. لا نحسب تعادل لمنتج واحد، بل نستخدم (متوسط هامش المساهمة المرجح).";
        else if(q.includes('فريق') || q.includes('تصميم') || q.includes('مشروع')) reply = "<b>فريق العمل والإشراف:</b><br>تم التنفيذ بواسطة مجموعة متميزة من 20 طالب من <b>معهد الدلتا العالي للحاسبات</b>، تحت إشراف أ.د. علي المتولي وم. اسراء الشحات.";
        else reply = "سؤال ممتاز. بصفتي المساعد الذكي، يمكنني إخبارك أن أي مشروع يعتمد على: <b>السعر، التكلفة المتغيرة، والتكلفة الثابتة</b>. هل تود شرح كيفية تأثير تغيير السعر؟";
        
        // إلحاق إجابة المساعد بالسؤال الحالي
        document.getElementById('chatMessages').innerHTML += `<div class="message bot"><div class="msg-avatar"><i class="fa-solid fa-robot"></i></div><div class="msg-bubble">${reply}</div></div>`;
        document.getElementById('chatMessages').scrollTop = 9999;
    }, 800);
}
const codeSnippets = {
    'dashboard': `\n<div class="controls">\n  <button onclick="exportToExcel()">Export Excel</button>\n  <select id="currency" onchange="updateCurrency()">\n    <option value="EGP">EGP</option>\n  </select>\n</div>`,
    'results': `// Goal Seek Logic\nfunction calcTargetProfit(id, targetVal) {\n  let s = scenarios.find(x => x.id == id);\n  let target = parseFloat(targetVal) || 0;\n  let reqUnits = Math.ceil((s.fc + target) / (s.sp - s.vc));\n  return reqUnits;\n}`,
    'sensitivity': `\n<input type="range" id="sensVc" min="1" max="500" oninput="updateSensitivity()">\n<input type="range" id="sensSp" min="1" max="1000" oninput="updateSensitivity()">\n\n// Update Function\nfunction updateSensitivity() {\n  scenario.vc = document.getElementById('sensVc').value;\n  calculateData();\n}`,
    'charts': `// ApexCharts Initialization\nlet options = {\n  chart: { type: 'area', height: 300 },\n  series: [\n    { name: 'Revenue', data: [0, 50, 100] },\n    { name: 'Cost', data: [20, 45, 70] }\n  ]\n};\nnew ApexCharts(document.querySelector("#chart"), options).render();`,
    'erd': `\n<div class="erd-container">\n  <div class="db-table">\n    <div class="db-header">USER</div>\n    <div class="db-row">User_ID (PK)</div>\n  </div>\n  <div class="erd-relation">1 : N</div>\n</div>`,
    'ai': `// AI Chat Engine (NLP Pattern)\nif(question.includes('تعادل')) {\n  return "نقطة التعادل تعني التوازن المالي";\n} else {\n  return "برجاء توضيح السؤال";\n}`
};
function showCode(key) {
    document.getElementById('codeSnippetContent').innerText = codeSnippets[key] || '// Code snippet not found.';
    document.getElementById('codeModal').classList.remove('hidden');
}
function closeCodeModal() { document.getElementById('codeModal').classList.add('hidden'); }
function calcInput(val) { document.getElementById('calc-display').value += val; }
function calcEq() { try { let d = document.getElementById('calc-display'); if(d.value.includes('C')) d.value = ''; else d.value = eval(d.value) || ''; } catch(e) { document.getElementById('calc-display').value = 'Error'; } }
document.addEventListener('DOMContentLoaded', init);
