
// تسجيل الدخول VIP
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');
const vipMessage = document.getElementById('vipMessage');

// فتح نافذة تسجيل الدخول
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// إغلاق النافذة
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// وظيفة تسجيل الدخول
function login() {
    const vipCode = document.getElementById('vipCode').value;
    
    if (vipCode === '7777') {
        loginModal.style.display = 'none';
        showVIPMessage();
        unlockVIPFeatures();
    } else {
        alert('رمز خاطئ! حاول مرة أخرى');
        document.getElementById('vipCode').value = '';
    }
}

// إظهار رسالة VIP
function showVIPMessage() {
    vipMessage.classList.remove('hidden');
    
    setTimeout(() => {
        vipMessage.classList.add('hidden');
    }, 3000);
}

// فتح ميزات VIP
function unlockVIPFeatures() {
    // تغيير لون الـ navbar
    const navbar = document.querySelector('.navbar');
    navbar.style.background = 'linear-gradient(135deg, #f59e0b, #ef4444)';
    navbar.style.backdropFilter = 'blur(20px)';
    
    // إضافة تأثيرات خاصة
    document.body.classList.add('vip-mode');
    
    // تغيير نص الزر
    loginBtn.textContent = 'VIP ✨';
    loginBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // إضافة نجوم متحركة
    createStars();
    
    // رسالة ترحيب
    setTimeout(() => {
        alert('🌟 مرحباً بك في منطقة VIP! استمتع بالتجربة المميزة 🌟');
    }, 1000);
}

// إنشاء نجوم متحركة
function createStars() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'sparkle';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 4000);
        }, i * 200);
    }
}

// تأثير المتابعة للماوس على الكروت
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});

// تأثير التمرير السلس للأزرار
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href.length > 1) {
            e.preventDefault();
            
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (error) {
                console.log('Invalid selector:', href);
            }
        }
    });
});

// تأثيرات التمرير
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// تأثير ظهور العناصر عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة العناصر
document.querySelectorAll('.project-card, .developer-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// تأثير الكتابة التلقائية للعنوان
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// تفعيل تأثير الكتابة عند تحميل الصفحة
window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        typeWriter(mainTitle, originalText, 150);
    }
});

// تأثيرات صوتية (اختياري)
function playSound(soundName) {
    // يمكن إضافة أصوات هنا إذا رغبت
    console.log(`Playing sound: ${soundName}`);
}

// تأثير النقر على المشاريع
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.matches('a, button')) {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
            }, 150);
        }
    });
});

// رسائل تحفيزية عشوائية
const motivationalMessages = [
    'استمروا في الإبداع! 🚀',
    'المستقبل لكم أيها المطورون الصغار! 💫',
    'كل مشروع خطوة نحو النجاح! ⭐',
    'شغفكم بالبرمجة يلهمنا! 💡',
    'مطورو المستقبل موجودون هنا! 🌟'
];

// إظهار رسالة تحفيزية كل 30 ثانية
setInterval(() => {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = randomMessage;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 4000);
}, 30000);

// CSS للرسائل التحفيزية
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .vip-mode {
        position: relative;
    }
    
    .vip-mode::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
        pointer-events: none;
        z-index: -1;
    }
`;

document.head.appendChild(style);

// تفعيل Enter للدخول
document.getElementById('vipCode').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        login();
    }
});

// تأثير الجسيمات المتحركة في الخلفية
function createParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.3;
    `;
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = '#6366f1';
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// تفعيل الجسيمات عند تحميل الصفحة
window.addEventListener('load', () => {
    createParticles();
    initScrollReveal();
    createFloatingParticles();
    initAdvancedAnimations();
    createHolographicParticles();
});

// إنشاء جسيمات هولوجرافية متقدمة
function createHolographicParticles() {
    const holoContainer = document.createElement('div');
    holoContainer.className = 'holo-container';
    holoContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(holoContainer);

    setInterval(() => {
        if (document.querySelectorAll('.dynamic-holo').length < 15) {
            const holoParticle = document.createElement('div');
            holoParticle.className = 'dynamic-holo';
            holoParticle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: linear-gradient(45deg, 
                    hsl(${Math.random() * 360}, 80%, 60%), 
                    hsl(${Math.random() * 360}, 80%, 80%)
                );
                border-radius: 50%;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                box-shadow: 
                    0 0 20px currentColor,
                    0 0 40px currentColor;
                animation: holoFloat ${Math.random() * 10 + 8}s linear infinite;
                filter: blur(${Math.random() * 2}px);
            `;
            
            holoContainer.appendChild(holoParticle);
            
            setTimeout(() => {
                if (holoParticle.parentNode) {
                    holoParticle.remove();
                }
            }, 18000);
        }
    }, 1500);
}

// تأثيرات متقدمة للتفاعل
function initAdvancedAnimations() {
    // تأثير ثلاثي الأبعاد للكروت
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 15;
            const rotateY = ((x - centerX) / centerX) * -15;
            
            card.style.transform = `
                translateY(-20px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.05)
            `;
            
            // تفعيل حدود التوهج
            const before = card.querySelector('::before');
            if (card.querySelector('::before')) {
                card.style.setProperty('--before-opacity', '1');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            card.style.setProperty('--before-opacity', '0');
        });
    });
    
    // تأثير الكتابة المتحركة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTypingEffect(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.type-effect').forEach(el => {
        observer.observe(el);
    });
}

// تأثير الكتابة المتحركة المتطور
function startTypingEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary-color)';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        element.textContent += text[i];
        i++;
        
        if (i >= text.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }, 100);
}

// تأثير المطر الضوئي
function createLightRain() {
    setInterval(() => {
        const drop = document.createElement('div');
        drop.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}vw;
            width: 2px;
            height: ${Math.random() * 100 + 50}px;
            background: linear-gradient(to bottom, 
                transparent, 
                rgba(99, 102, 241, 0.8), 
                transparent
            );
            pointer-events: none;
            z-index: -1;
            animation: lightDrop ${Math.random() * 3 + 2}s linear infinite;
        `;
        
        document.body.appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 5000);
    }, 300);
}

// تفعيل المطر الضوئي
setTimeout(createLightRain, 2000);

// تأثير ظهور العناصر عند التمرير
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// إنشاء جسيمات طائفة
function createFloatingParticles() {
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 20) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 8000);
        }
    }, 2000);
}

// تأثير تتبع الماوس للخلفية
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, var(--primary-color), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 4}px;
        top: ${e.clientY - 4}px;
        animation: cursorFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// CSS للكيرسر
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorFade {
        0% { opacity: 0.8; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.3); }
    }
`;
document.head.appendChild(cursorStyle);

console.log(`
██████╗ ███████╗██╗   ██╗███████╗███╗   ██╗     ██████╗ ██████╗ ██████╗ ███████╗███████╗
██╔═══╝ ██╔════╝██║   ██║██╔════╝████╗  ██║    ██╔════╝██╔═══██╗██╔══██╗██╔════╝╚════██║
███████╗█████╗  ██║   ██║█████╗  ██╔██╗ ██║    ██║     ██║   ██║██║  ██║█████╗      ██╔╝
╚════██║██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║    ██║     ██║   ██║██║  ██║██╔══╝     ██╔╝ 
███████║███████╗ ╚████╔╝ ███████╗██║ ╚████║    ╚██████╗╚██████╔╝██████╔╝███████╗   ██║  
╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝  

🌟 Seven Code7 - استوديو الإبداع العربي 🌟
مطورون أطفال عرب شغوفون بالتكنولوجيا والإبداع
`);
