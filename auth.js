// =====================================================
// نظام المصادقة والحسابات - DYS-CONNECT Auth System
// =====================================================

// قاعدة البيانات المحلية للحسابات
const usersDatabase = {
    // حسابات الأمهات
    'fatima_01': {
        password: 'pass123',
        role: 'mother',
        name: 'فاطمة ',
        email: 'fatima@example.com',
        photo: '👩‍👦',
        city: 'خنشلة',
        children: [
            { id: 1, name: 'علي', age: 6, status: 'متابعة منتظمة' },
            { id: 2, name: 'ليا', age: 4, status: 'تقييم مبدئي' }
        ]
    },
    'layla_02': {
        password: 'pass123',
        role: 'mother',
        name: 'ليلى محمد',
        email: 'layla@example.com',
        photo: '👩‍👦',
        city: 'خنشلة',
        children: [
            { id: 3, name: 'محمد', age: 7, status: 'متابعة منتظمة' }
        ]
    },
    'aisha_03': {
        password: 'pass123',
        role: 'mother',
        name: 'عائشة أحمد',
        email: 'aisha@example.com',
        photo: '👩‍👦',
        city: 'قسنطينة',
        children: [
            { id: 4, name: 'سارة', age: 5, status: 'تقييم مبدئي' },
            { id: 5, name: 'حسن', age: 3, status: 'متابعة منتظمة' }
        ]
    },
    
    // حسابات المعلمين
    'ahmed_teacher': {
        password: 'pass123',
        role: 'teacher',
        name: 'مريم',
        email: 'ahmed@school.edu',
        photo: '🧑‍🏫',
        school: 'مدرسة النور الابتدائية - الجزائر',
        students: [
            { id: 1, name: 'علي', status: 'طبيعي' },
            { id: 3, name: 'محمد', status: 'يحتاج متابعة' },
            { id: 6, name: 'رقية', status: 'طبيعي' }
        ]
    },
    'sara_teacher': {
        password: 'pass123',
        role: 'teacher',
        name: 'سارة حسن',
        email: 'sara@school.edu',
        photo: '🧑‍🏫',
        school: 'مدرسة الفردوس الابتدائية - وهران',
        students: [
            { id: 2, name: 'ليا', status: 'يحتاج تقييم' },
            { id: 7, name: 'فاطمة', status: 'طبيعي' }
        ]
    },
    'mohsen_teacher': {
        password: 'pass123',
        role: 'teacher',
        name: 'محسن كريم',
        email: 'mohsen@school.edu',
        photo: '🧑‍🏫',
        school: 'مدرسة الهلال الابتدائية - قسنطينة',
        students: [
            { id: 4, name: 'سارة', status: 'يحتاج متابعة' },
            { id: 5, name: 'حسن', status: 'طبيعي' },
            { id: 8, name: 'زكريا', status: 'يحتاج تقييم' }
        ]
    },
    
    // حسابات المختصين
    'dr_amina': {
        password: 'pass123',
        role: 'specialist',
        name: 'د. أمينة محمود',
        email: 'dr.amina@clinic.dz',
        photo: '🧠',
        specialization: 'معالجة التخاطب',
        location: 'العيادة المتخصصة - الجزائر',
        cases: [
            { caseId: 1, childName: 'علي', status: 'تحت المتابعة', sessions: 12 },
            { caseId: 2, childName: 'محمد', status: 'خطة جديدة', sessions: 3 }
        ]
    },
    'dr_karim': {
        password: 'pass123',
        role: 'specialist',
        name: 'د. كريم ياسين',
        email: 'dr.karim@clinic.dz',
        photo: '🧠',
        specialization: 'علم النفس التربوي',
        location: 'مركز الدعم النفسي - وهران',
        cases: [
            { caseId: 3, childName: 'سارة', status: 'تحت المتابعة', sessions: 8 }
        ]
    },
    'dr_huda': {
        password: 'pass123',
        role: 'specialist',
        name: 'د. هدى فرحات',
        email: 'dr.huda@clinic.dz',
        photo: '🧠',
        specialization: 'التقييم النفسي',
        location: 'مركز التقييم الشامل - قسنطينة',
        cases: [
            { caseId: 4, childName: 'رقية', status: 'انتظار نتائج', sessions: 5 },
            { caseId: 5, childName: 'فاطمة', status: 'تحت المتابعة', sessions: 10 }
        ]
    },
    
    // حسابات المؤسسات
    'school_algiers': {
        password: 'pass123',
        role: 'institution',
        name: 'مدرسة النور الابتدائية',
        email: 'info@school-algiers.dz',
        photo: '🏫',
        city: 'الجزائر',
        teamMembers: [
            { id: 't1', name: 'أحمد محمد علي', role: 'معلم' },
            { id: 't2', name: 'ليلى عباس', role: 'مديرة' }
        ],
        students: 150
    },
    'school_oran': {
        password: 'pass123',
        role: 'institution',
        name: 'مدرسة الفردوس الابتدائية',
        email: 'info@school-oran.dz',
        photo: '🏫',
        city: 'وهران',
        teamMembers: [
            { id: 't3', name: 'سارة حسن', role: 'معلمة' },
            { id: 't4', name: 'محمود علي', role: 'مدير' }
        ],
        students: 120
    },
    'school_constantine': {
        password: 'pass123',
        role: 'institution',
        name: 'مدرسة الهلال الابتدائية',
        email: 'info@school-constantine.dz',
        photo: '🏫',
        city: 'قسنطينة',
        teamMembers: [
            { id: 't5', name: 'محسن كريم', role: 'معلم' },
            { id: 't6', name: 'نجاح محمد', role: 'مديرة' }
        ],
        students: 180
    },
    
    // حسابات الباحثين
    'dr_youssef': {
        password: 'pass123',
        role: 'researcher',
        name: 'د. يوسف حميد',
        email: 'dr.youssef@university.dz',
        photo: '🎓',
        university: 'جامعة الجزائر 2',
        specialty: 'صعوبات التعلم النمائية',
        researchProjects: [
            { id: 'r1', title: 'دراسة الديسليكسيا في المرحلة الابتدائية', status: 'جارية' },
            { id: 'r2', title: 'فعالية التدخلات المبكرة', status: 'قيد الموافقة' }
        ]
    },
    'prof_fatima': {
        password: 'pass123',
        role: 'researcher',
        name: 'أ.د. فاطمة خياط',
        email: 'prof.fatima@university.dz',
        photo: '🎓',
        university: 'جامعة وهران',
        specialty: 'علم النفس الإكلينيكي',
        researchProjects: [
            { id: 'r3', title: 'الفحص المبكر للصعوبات', status: 'مكتملة' },
            { id: 'r4', title: 'برامج التدخل المدرسي', status: 'جارية' }
        ]
    },
    'prof_ali': {
        password: 'pass123',
        role: 'researcher',
        name: 'أ.د. علي سعيد',
        email: 'prof.ali@university.dz',
        photo: '🎓',
        university: 'جامعة قسنطينة 1',
        specialty: 'التربية الخاصة',
        researchProjects: [
            { id: 'r5', title: 'دور الأسرة في التكفل', status: 'جارية' },
            { id: 'r6', title: 'التكامل بين الفريق التربوي', status: 'قيد الموافقة' }
        ]
    }
};

// الاتصالات بين الأدوار - من يستطيع رؤية من
const roleConnections = {
    mother: ['specialist', 'researcher', 'teacher'],
    teacher: ['mother', 'specialist', 'researcher', 'institution'],
    specialist: ['mother', 'teacher', 'researcher', 'institution'],
    institution: ['teacher', 'specialist', 'researcher'],
    researcher: ['mother', 'teacher', 'specialist', 'institution']
};

// =====================================================
// دوال المصادقة
// =====================================================

/**
 * تسجيل الدخول
 */
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error-message');
    const loginBtn = document.getElementById('login-btn');
    const btnText = document.getElementById('btn-text');
    
    // مسح الخطأ السابق
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';
    
    // التحقق من المدخلات
    if (!username || !password) {
        showLoginError('يرجى إدخال اسم المستخدم وكلمة المرور');
        return;
    }
    
    // محاكاة التحميل
    loginBtn.classList.add('loading');
    btnText.textContent = 'جاري التحقق...';
    loginBtn.disabled = true;
    
    // محاكاة تأخير الشبكة
    setTimeout(() => {
        const user = usersDatabase[username];
        
        if (!user) {
            showLoginError('اسم المستخدم غير موجود');
            loginBtn.classList.remove('loading');
            btnText.textContent = 'تسجيل الدخول';
            loginBtn.disabled = false;
            return;
        }
        
        if (user.password !== password) {
            showLoginError('كلمة المرور غير صحيحة');
            loginBtn.classList.remove('loading');
            btnText.textContent = 'تسجيل الدخول';
            loginBtn.disabled = false;
            return;
        }
        
        // تسجيل الدخول ناجح
        saveUserSession(username, user);
        
        // إضافة تأثير نجاح
        anime({
            targets: '.login-card',
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 400,
            easing: 'easeInQuad',
            complete: () => {
                window.location.href = 'dashboard.html';
            }
        });
    }, 800);
}

/**
 * حفظ جلسة المستخدم
 */
function saveUserSession(username, userData) {
    const sessionData = {
        username: username,
        role: userData.role,
        name: userData.name,
        email: userData.email,
        photo: userData.photo,
        loginTime: new Date().toISOString(),
        ...userData
    };
    
    localStorage.setItem('currentUser', JSON.stringify(sessionData));
    localStorage.setItem('selectedRole', userData.role);
    
    // حفظ في سجل المستخدمين الأخيرين
    saveRecentUser(username);
}

/**
 * الحصول على بيانات المستخدم الحالي
 */
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

/**
 * تسجيل الخروج
 */
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('selectedRole');
        localStorage.removeItem('recentUsers');
        window.location.href = 'login.html';
    }
}

/**
 * التبديل السريع إلى حساب آخر (بدون تسجيل خروج)
 */
function quickSwitchAccount(username) {
    const user = usersDatabase[username];
    if (!user) {
        alert('المستخدم غير موجود');
        return;
    }
    
    // حفظ الحساب الجديد
    saveUserSession(username, user);
    
    // إعادة تحميل الصفحة مع الحساب الجديد
    location.reload();
}

/**
 * حفظ المستخدم الأخير (السجل)
 */
function saveRecentUser(username) {
    let recentUsers = JSON.parse(localStorage.getItem('recentUsers') || '[]');
    
    // إزالة المستخدم إذا كان موجوداً بالفعل
    recentUsers = recentUsers.filter(u => u !== username);
    
    // إضافة المستخدم في البداية
    recentUsers.unshift(username);
    
    // الحفاظ على آخر 5 مستخدمين فقط
    recentUsers = recentUsers.slice(0, 5);
    
    localStorage.setItem('recentUsers', JSON.stringify(recentUsers));
}

/**
 * الحصول على المستخدمين الأخيرين
 */
function getRecentUsers() {
    const recentUsers = JSON.parse(localStorage.getItem('recentUsers') || '[]');
    return recentUsers
        .map(username => usersDatabase[username])
        .filter(user => user !== undefined)
        .map((user, username) => ({
            username: Object.keys(usersDatabase).find(key => usersDatabase[key] === user),
            name: user.name,
            role: user.role,
            photo: user.photo
        }));
}

/**
 * التحقق من تسجيل الدخول
 */
function checkAuthentication() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

/**
 * عرض رسالة خطأ
 */
function showLoginError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    
    // تهز الحقول
    anime({
        targets: '.login-card',
        translateX: [-10, 10, -10, 10, 0],
        duration: 400,
        easing: 'easeInOutQuad'
    });
}

/**
 * ملء بيانات الدخول التجريبية
 */
function fillCredentials(username, password) {
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
    
    // تأثير بصري
    anime({
        targets: '.input-group input',
        backgroundColor: ['rgba(196, 30, 58, 0.1)', 'transparent'],
        duration: 600,
        easing: 'easeOutQuad'
    });
    
    // التركيز على زر الدخول
    document.getElementById('login-btn').focus();
}

// =====================================================
// دوال الربط بين الحسابات
// =====================================================

/**
 * الحصول على المستخدمين المرتبطين بالدور الحالي
 */
function getConnectedUsers(currentUserRole) {
    const connectedRoles = roleConnections[currentUserRole] || [];
    const connectedUsers = [];
    
    // البحث عن جميع المستخدمين من الأدوار المتصلة
    Object.entries(usersDatabase).forEach(([username, userData]) => {
        if (connectedRoles.includes(userData.role)) {
            connectedUsers.push({
                username: username,
                name: userData.name,
                role: userData.role,
                email: userData.email,
                photo: userData.photo,
                ...userData
            });
        }
    });
    
    return connectedUsers;
}

/**
 * الحصول على جميع المستخدمين من دور معين
 */
function getUsersByRole(role) {
    const users = [];
    
    Object.entries(usersDatabase).forEach(([username, userData]) => {
        if (userData.role === role) {
            users.push({
                username: username,
                name: userData.name,
                role: userData.role,
                email: userData.email,
                photo: userData.photo,
                ...userData
            });
        }
    });
    
    return users;
}

/**
 * البحث عن مستخدم بواسطة الاسم أو البريد الإلكتروني
 */
function searchUsers(query, connectedRolesOnly = true) {
    const currentUser = getCurrentUser();
    const currentRole = currentUser ? currentUser.role : null;
    
    let usersToSearch = usersDatabase;
    
    // تصفية المستخدمين المتصلين فقط إذا لزم الأمر
    if (connectedRolesOnly && currentRole) {
        const connectedRoles = roleConnections[currentRole];
        usersToSearch = Object.fromEntries(
            Object.entries(usersDatabase).filter(([_, userData]) => 
                connectedRoles.includes(userData.role)
            )
        );
    }
    
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    Object.entries(usersToSearch).forEach(([username, userData]) => {
        if (
            userData.name.includes(query) ||
            username.toLowerCase().includes(lowerQuery) ||
            (userData.email && userData.email.toLowerCase().includes(lowerQuery))
        ) {
            results.push({
                username: username,
                name: userData.name,
                role: userData.role,
                email: userData.email,
                photo: userData.photo,
                ...userData
            });
        }
    });
    
    return results;
}

/**
 * الحصول على معلومات مختصرة عن مستخدم
 */
function getUserInfo(username) {
    const user = usersDatabase[username];
    if (!user) return null;
    
    return {
        username: username,
        name: user.name,
        role: user.role,
        email: user.email,
        photo: user.photo,
        ...user
    };
}

/**
 * التحقق من إمكانية الوصول بين دورين
 */
function canAccess(fromRole, toRole) {
    const allowedRoles = roleConnections[fromRole] || [];
    return allowedRoles.includes(toRole);
}

/**
 * الحصول على معلومات الدور
 */
function getRoleInfo(role) {
    const roleInfo = {
        mother: {
            label: 'أم',
            icon: '👩‍👦',
            description: 'الأم أو ولي الأمر'
        },
        teacher: {
            label: 'معلم',
            icon: '🧑‍🏫',
            description: 'معلم أو معلمة'
        },
        specialist: {
            label: 'مختص',
            icon: '🧠',
            description: 'متخصص في صعوبات التعلم'
        },
        institution: {
            label: 'مؤسسة',
            icon: '🏫',
            description: 'مؤسسة تعليمية'
        },
        researcher: {
            label: 'باحث',
            icon: '🎓',
            description: 'باحث أكاديمي'
        }
    };
    
    return roleInfo[role] || null;
}

// =====================================================
// تهيئة الصفحة
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    // التحقق من تسجيل الدخول على صفحات أخرى
    const currentPage = window.location.pathname;
    
    // إذا كان المستخدم مسجلاً دخولاً وحاول الوصول لصفحة تسجيل الدخول
    if (currentPage.includes('login.html')) {
        const currentUser = getCurrentUser();
        if (currentUser) {
            // إعادة التوجيه إلى لوحة التحكم
            window.location.href = 'dashboard.html';
        }
    }
});
