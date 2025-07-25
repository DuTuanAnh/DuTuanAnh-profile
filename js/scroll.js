document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header-area');
  function toggleHeaderBg() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', toggleHeaderBg);
  toggleHeaderBg();
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav li a");

  function onScroll() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    let offset = 80; 

    let found = false;
    sections.forEach((section, idx) => {
      const top = section.offsetTop - offset;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
        found = true;
      }
    });
    
    if (!found && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[navLinks.length - 1].classList.add("active");
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});