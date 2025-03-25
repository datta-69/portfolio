// Smooth scrolling with header offset
const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile menu improvements
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle menu with animation
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
  navLinks.classList.remove('active');
  mobileMenu.classList.remove('open');
});

// Update active link detection with header offset
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const navLinksAll = document.querySelectorAll('.nav-links a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - headerHeight - 50) {
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});