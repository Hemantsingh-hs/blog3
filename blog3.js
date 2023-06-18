// JavaScript code goes here

// Scroll to section when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  // Toggle active state for navigation links
  function toggleActiveLink() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        const targetId = section.getAttribute('id');
        navLinks.forEach(function(link) {
          if (link.getAttribute('href').substring(1) === targetId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', toggleActiveLink);
  