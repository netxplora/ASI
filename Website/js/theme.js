document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const themeIcon = document.getElementById('themeIcon');
  const themeIconMobile = document.getElementById('themeIconMobile');
  
  // Check for saved theme preference or use default dark theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  
  // Toggle theme when desktop button is clicked
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      toggleTheme();
    });
  }
  
  // Toggle theme when mobile button is clicked
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', function() {
      toggleTheme();
    });
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.className = 'ri-moon-line';
      if (themeIconMobile) themeIconMobile.className = 'ri-moon-line';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'ri-sun-line';
      if (themeIconMobile) themeIconMobile.className = 'ri-sun-line';
    }
  }
});