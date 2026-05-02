// --- DOM Elements ---
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// --- Set Current Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Scroll Spy (Highlight Active Nav Link) ---
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Check if scroll position is within the section
    // Adding an offset for earlier triggering
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// --- Intersection Observer for Scroll Animations (Fade-In) ---
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

fadeElements.forEach(el => appearOnScroll.observe(el));

// --- Form Submission (Backend Integration Prep) ---
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // UI Loading State
  submitBtn.innerHTML = '<span>Sending...</span><i class="ph ph-spinner ph-spin"></i>';
  submitBtn.disabled = true;
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  // Get Form Data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  try {
    // For now, simulate a successful network request
    // Once backend is ready, we will uncomment the fetch logic below
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    formStatus.textContent = 'Message sent successfully!';
    formStatus.classList.add('success');
    contactForm.reset();
  } catch (error) {
    console.error('Error:', error);
    formStatus.textContent = error.message || 'Failed to send message. Please try again.';
    formStatus.classList.add('error');
  } finally {
    // Reset Button State
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
  }
});
