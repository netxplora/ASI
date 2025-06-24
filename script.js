document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init();
  
  // Menu toggle functionality
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  
  if (menuButton && closeButton && fullscreenMenu) {
    menuButton.addEventListener('click', function() {
      fullscreenMenu.classList.remove('hidden');
      setTimeout(() => {
        fullscreenMenu.classList.remove('opacity-0');
      }, 10);
    });
    
    closeButton.addEventListener('click', function() {
      fullscreenMenu.classList.add('opacity-0');
      setTimeout(() => {
        fullscreenMenu.classList.add('hidden');
      }, 300);
    });
  }
  
  // Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form validation logic here
      alert('Thank you for your message. We will get back to you soon!');
      contactForm.reset();
    });
  }
});