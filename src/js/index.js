// curent year
document.getElementById('year').textContent = new Date().getFullYear();

// preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  // Add animation class
  preloader.classList.add('hide-preloader');

  // Fade in content
  // content.classList.remove('opacity-0');

  // Fully remove preloader after animation
  setTimeout(() => {
    preloader.remove(); // Or use: preloader.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
  }, 800); // Match animation duration
});
//Header
// Reusable Dropdown Logic
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButtons = document.querySelectorAll('[data-dropdown]');
  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ✅ Hover logic (Desktop only)
  if (!isTouchDevice) {
    dropdownButtons.forEach(button => {
      const parent = button.closest('.dropdown');
      const menu = parent.querySelector('.dropdown-menu');

      parent.addEventListener('mouseenter', () => {
        parent.classList.add('showDropdown');
        menu.classList.add('show');
      });

      parent.addEventListener('mouseleave', () => {
        parent.classList.remove('showDropdown');
        menu.classList.remove('show');
      });
    });
  }

  // ✅ Click logic (Always enabled)
  document.addEventListener('click', function (e) {
    const isDropdownBtn = e.target.closest('[data-dropdown]');
    const isInsideDropdown = e.target.closest('.dropdown');
    const allMenus = document.querySelectorAll('.dropdown-menu');
    const allDropdowns = document.querySelectorAll('.dropdown');

    if (isDropdownBtn) {
      const parent = isDropdownBtn.closest('.dropdown');
      const menu = parent.querySelector('.dropdown-menu');

      allMenus.forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });

      allDropdowns.forEach(d => {
        if (d !== parent) d.classList.remove('showDropdown');
      });

      parent.classList.toggle('showDropdown');
      menu.classList.toggle('show');
    } else if (!isInsideDropdown) {
      allMenus.forEach(m => m.classList.remove('show'));
      allDropdowns.forEach(d => d.classList.remove('showDropdown'));
    }
  });
});

// Mobile Menu Toggle
const mobileToggleBtn = document.querySelector('[data-mobile-menu-toggle]');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileBtn = document.querySelector('[data-close-mobile]');

mobileToggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('offcanvas-open');
});

closeMobileBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('offcanvas-open');
});

// Function to match left spacing of the slider wrapper with the container
// bg
function setResponsiveGradient() {
  const gradientEl = document.querySelector('.tecnologia-bg');
  const width = window.innerWidth;

  if (!gradientEl) return;

  if (width < 576) {
    gradientEl.style.background =
      'linear-gradient(180deg, #3c8b84 -20.56%, #fefefd 50.63%)';
  } else if (width < 768) {
    gradientEl.style.background =
      'linear-gradient(180deg, #3c8b84 -50%, #fefefd 90%)';
  } else {
    gradientEl.style.background =
      'linear-gradient(180deg, #3c8b84 -32.56%, #fefefd 82.63%)';
  }
}

// Run on page load
setResponsiveGradient();

// Run on window resize
window.addEventListener('resize', setResponsiveGradient);

// any link clickable
document.querySelectorAll('.linkify').forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', () => {
    const href = el.getAttribute('data-href');
    if (href) window.location.href = href;
  });
});
