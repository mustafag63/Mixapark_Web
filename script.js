// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
const squadRooms = document.querySelectorAll('.squad-room img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(imgSrc) {
    lightbox.style.display = 'flex';
    lightboxImg.src = imgSrc;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        openLightbox(item.src);
    });
});

squadRooms.forEach(room => {
    room.addEventListener('click', () => {
        openLightbox(room.src);
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Prepare WhatsApp message
    const whatsappMessage = `Merhaba! Web sitesinden mesaj geldi:%0A%0A` +
        `İsim: ${encodeURIComponent(name)}%0A` +
        `E-posta: ${encodeURIComponent(email)}%0A` +
        `Telefon: ${encodeURIComponent(phone)}%0A` +
        `Mesaj: ${encodeURIComponent(message)}`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/905385582763?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    alert('Mesajınız WhatsApp üzerinden iletiliyor. En kısa sürede size dönüş yapacağız.');
    
    // Reset form
    contactForm.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter Animation for Statistics (if needed in future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all activity cards
document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll to top button (optional)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5B2C91 0%, #7C3AED 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 20px rgba(91, 44, 145, 0.4);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 10px 30px rgba(91, 44, 145, 0.5)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 5px 20px rgba(91, 44, 145, 0.4)';
});

// Add hover effect to cards
document.querySelectorAll('.activity-card, .squad-info-card, .feature-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active class to current nav item based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Video autoplay on scroll
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.play().catch(error => {
        console.log('Video autoplay prevented:', error);
    });
}

// Preload critical images
const criticalImages = [
    'web/logo3.png',
    'web/IMG_2530.jpeg',
    'web/IMG_2531.jpeg'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Add bounce effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
                otherButton.parentElement.querySelector('.faq-answer').classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        button.setAttribute('aria-expanded', !isExpanded);
        answer.classList.toggle('active');
    });
});

// Smooth scroll for FAQ links in navigation (if added)
document.querySelectorAll('a[href="#faq"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const faqSection = document.getElementById('faq');
        if (faqSection) {
            const offsetTop = faqSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

console.log('🎮 Mixapark Website Loaded Successfully! 🎉');
