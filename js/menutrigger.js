document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const menuClose = document.querySelector('.menu-close');
    const nav = document.querySelector('.nav');
    // Mở menu
    menuTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.add('active');
        menuClose.style.opacity = '1';
        menuClose.style.pointerEvents = 'auto';
    });
    // Đóng menu
    menuClose.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.remove('active');
        menuClose.style.opacity = '0';
        menuClose.style.pointerEvents = 'none';
    });
    // Đóng menu khi click vào link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuClose.style.opacity = '0';
            menuClose.style.pointerEvents = 'none';
        });
    });
    // Đóng menu khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (
            nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !menuTrigger.contains(e.target) &&
            !menuClose.contains(e.target)
        ) {
            nav.classList.remove('active');
            menuClose.style.opacity = '0';
            menuClose.style.pointerEvents = 'none';
        }
    });
});