// DYS-CONNECT Main JavaScript File

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeCounters();
    initializeRoleSelection();
    initializeFormValidation();
    initializeDashboard();
    initializeMap();
    initializeLibrary();
    initializeMessages();
    initializePlans();
    initializeWelcomeModal();
});

// Welcome Modal functionality
function initializeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    const hasSeenWelcome = sessionStorage.getItem('welcomeModalShown');
    
    if (modal && !hasSeenWelcome) {
        // Show modal after a short delay for better UX
        setTimeout(() => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            sessionStorage.setItem('welcomeModalShown', 'true');
        }, 500);
    }
}

window.closeWelcomeModal = function() {
    const modal = document.getElementById('welcome-modal');
    if (modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
};

window.scrollToFeaturesFromModal = function() {
    closeWelcomeModal();
    setTimeout(() => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 300);
};

// Typewriter effect for hero section
function initializeTypewriter() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const typed = new Typed('#typed-text', {
            strings: [
                'مرحبًا بك في DYS-CONNECT',
                'حيث يبدأ التكفل الذكي',
                'والدعم المبكر للأطفال'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Role selection functionality
function initializeRoleSelection() {
    // Store selected role in localStorage
    window.selectRole = function(role) {
        localStorage.setItem('selectedRole', role);
        
        // Animate card selection
        const cards = document.querySelectorAll('.card-hover');
        cards.forEach(card => {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0.7';
        });
        
        // Highlight selected card
        event.target.closest('.card-hover').style.transform = 'scale(1.05)';
        event.target.closest('.card-hover').style.opacity = '1';
        event.target.closest('.card-hover').style.border = '3px solid #C41E3A';
        
        // Navigate to registration after animation
        setTimeout(() => {
            window.location.href = 'register.html';
        }, 800);
    };
}

// Smooth scrolling
function scrollToRoles() {
    const rolesSection = document.getElementById('roles');
    if (rolesSection) {
        rolesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            if (validateForm(data)) {
                showSuccessMessage();
                // Simulate form submission
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000);
            } else {
                showErrorMessage('يرجى تعبئة جميع الحقول المطلوبة');
            }
        });
    });
}

function validateForm(data) {
    // Basic validation - check required fields
    for (const key in data) {
        if (!data[key] || data[key].trim() === '') {
            return false;
        }
    }
    return true;
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    message.textContent = 'تم التسجيل بنجاح! جاري التحويل...';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function showErrorMessage(text) {
    const message = document.createElement('div');
    message.className = 'fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    message.textContent = text;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Dashboard functionality
function initializeDashboard() {
    const selectedRole = localStorage.getItem('selectedRole');
    if (selectedRole && document.getElementById('dashboard-content')) {
        loadDashboardContent(selectedRole);
    }
}

function loadDashboardContent(role) {
    const content = document.getElementById('dashboard-content');
    const roleData = getRoleData(role);
    
    content.innerHTML = `
        <div class="dashboard-header">
            <h1 class="text-3xl font-bold text-deep-brown font-cairo mb-6">
                لوحة تحكم ${roleData.title}
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${roleData.features.map(feature => `
                    <div class="bg-white p-6 rounded-lg shadow-lg card-hover">
                        <div class="text-3xl mb-4">${feature.icon}</div>
                        <h3 class="text-xl font-bold text-deep-brown font-cairo mb-2">${feature.title}</h3>
                        <p class="text-gentle-gray font-amiri">${feature.description}</p>
                        <button class="mt-4 btn-primary text-white px-4 py-2 rounded-lg">
                            ${feature.action}
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getRoleData(role) {
    const roles = {
        mother: {
            title: 'الأم',
            features: [
                {
                    icon: '🧠',
                    title: 'أدوات ذكية',
                    description: 'تلخيص، خرائط ذهنية، تمارين تفاعلية',
                    action: 'استكشاف الأدوات'
                },
                {
                    icon: '👶',
                    title: 'ملف الطفل',
                    description: 'متابعة التقدم والتوصيات',
                    action: 'عرض الملف'
                },
                {
                    icon: '💬',
                    title: 'الرسائل',
                    description: 'تواصل مع المعلم والمختص',
                    action: 'فتح المحادثات'
                }
            ]
        },
        teacher: {
            title: 'المعلم',
            features: [
                {
                    icon: '📋',
                    title: 'استبيان علمي',
                    description: 'إنشاء وتحليل الاستبيانات',
                    action: 'إنشاء استبيان'
                },
                {
                    icon: '👥',
                    title: 'قائمة التلاميذ',
                    description: 'إدارة الحالات والملاحظات',
                    action: 'عرض القائمة'
                },
                {
                    icon: '🤝',
                    title: 'التواصل',
                    description: 'تواصل مع الأهل والمختصين',
                    action: 'فتح المحادثات'
                }
            ]
        },
        specialist: {
            title: 'المختص',
            features: [
                {
                    icon: '📋',
                    title: 'الحالات المحالة',
                    description: 'استلام وإدارة الحالات',
                    action: 'عرض الحالات'
                },
                {
                    icon: '📊',
                    title: 'التقارير المهنية',
                    description: 'إعداد تقارير قابلة للطباعة',
                    action: 'إنشاء تقرير'
                },
                {
                    icon: '📅',
                    title: 'تقويم الجلسات',
                    description: 'جدولة وإدارة الجلسات',
                    action: 'فتح التقويم'
                }
            ]
        }
    };
    
    return roles[role] || roles.mother;
}

// Map functionality
function initializeMap() {
    const mapContainer = document.getElementById('map');
    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('map').setView([36.7783, 3.0588], 6); // Algeria coordinates
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Sample markers for different roles
        const markers = [
            { lat: 36.7783, lng: 3.0588, role: 'mother', name: 'فاطمة الزهراء', specialty: 'أم' },
            { lat: 35.6961, lng: -0.6337, role: 'teacher', name: 'أحمد محمد', specialty: 'معلم' },
            { lat: 36.1917, lng: 5.4106, role: 'specialist', name: 'د. سعيدة', specialty: 'مختص نفسي' },
            { lat: 36.7525, lng: 3.0417, role: 'institution', name: 'مدسة ابن خلدون', specialty: 'مؤسسة تعليمية' }
        ];
        
        markers.forEach(marker => {
            const color = getRoleColor(marker.role);
            const icon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            
            L.marker([marker.lat, marker.lng], { icon })
                .addTo(map)
                .bindPopup(`
                    <div class="text-right">
                        <h3 class="font-bold">${marker.name}</h3>
                        <p class="text-sm text-gray-600">${marker.specialty}</p>
                        <button onclick="requestContact('${marker.name}')" class="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm">
                            طلب تواصل
                        </button>
                    </div>
                `);
        });
    }
}

function getRoleColor(role) {
    const colors = {
        mother: '#C41E3A',
        teacher: '#E85A4F',
        specialist: '#F28B30',
        institution: '#D4AF37',
        researcher: '#6C757D'
    };
    return colors[role] || '#C41E3A';
}

function requestContact(name) {
    showSuccessMessage(`تم إرسال طلب التواصل إلى ${name}`);
}

// Library functionality
function initializeLibrary() {
    const searchInput = document.getElementById('library-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            filterLibraryResources(query);
        });
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterLibraryResources(query) {
    const resources = document.querySelectorAll('.resource-item');
    resources.forEach(resource => {
        const title = resource.querySelector('.resource-title').textContent.toLowerCase();
        const description = resource.querySelector('.resource-description').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
            resource.style.display = 'block';
        } else {
            resource.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const resources = document.querySelectorAll('.resource-item');
    resources.forEach(resource => {
        const resourceCategory = resource.getAttribute('data-category');
        
        if (category === 'all' || resourceCategory === category) {
            resource.style.display = 'block';
        } else {
            resource.style.display = 'none';
        }
    });
}

// Messages functionality
function initializeMessages() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-message');
    
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        addMessageToChat('أنت', message, 'sent');
        input.value = '';
        
        // Simulate response
        setTimeout(() => {
            addMessageToChat('الدكتور أحمد', 'شكراً على رسالتك. سأقوم بالرد عليك قريباً.', 'received');
        }, 1500);
    }
}

function addMessageToChat(sender, message, type) {
    const chatContainer = document.getElementById('chat-messages');
    if (!chatContainer) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type} mb-4 p-3 rounded-lg max-w-xs ${type === 'sent' ? 'bg-primary-red text-white ml-auto' : 'bg-gray-200 text-gray-800 mr-auto'}`;
    
    messageElement.innerHTML = `
        <div class="text-sm font-medium mb-1">${sender}</div>
        <div class="text-sm">${message}</div>
        <div class="text-xs opacity-75 mt-1">${new Date().toLocaleTimeString('ar-DZ')}</div>
    `;
    
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Plans functionality
function initializePlans() {
    const planButtons = document.querySelectorAll('.plan-btn');
    
    planButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            selectPlan(plan);
        });
    });
}

function selectPlan(plan) {
    const plans = {
        silver: { name: 'الباقة الفضية', price: '10,000 دج' },
        gold: { name: 'الباقة الذهبية', price: '15,000 دج' },
        diamond: { name: 'الباقة الماسية', price: '20,000 دج' }
    };
    
    const selectedPlan = plans[plan];
    if (selectedPlan) {
        showSuccessMessage(`تم اختيار ${selectedPlan.name} بسعر ${selectedPlan.price}`);
        
        // Simulate subscription process
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 left-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove after delay
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, -300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => notification.remove()
        });
    }, 3000);
}

// Export functions for global access
window.selectRole = window.selectRole;
window.scrollToRoles = scrollToRoles;
window.requestContact = requestContact;
window.closeWelcomeModal = closeWelcomeModal;
window.scrollToFeaturesFromModal = scrollToFeaturesFromModal;