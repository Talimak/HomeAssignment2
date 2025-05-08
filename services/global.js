document.addEventListener('DOMContentLoaded', () => {
    darkLightMode();
    hamburgerBtn();
});

function darkLightMode(){
    const toggleBtn = document.querySelector('.dark-mode-toggle');
    const icon = toggleBtn.querySelector('i');
  
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Switch icons
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
}

function hamburgerBtn() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}