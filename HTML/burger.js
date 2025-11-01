// burger.js - управление бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== БУРГЕР-МЕНЮ ЗАГРУЖЕНО ===');
    
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.mobile-menu__close');
    const mobileLinks = document.querySelectorAll('.mobile-menu__items a');
    
    // Проверяем, что элементы найдены
    if (!burgerMenu || !mobileMenu) {
        console.error('❌ Не найдены элементы бургер-меню!');
        return;
    }
    
    console.log('✅ Элементы бургер-меню найдены');
    
    // Открытие/закрытие меню
    burgerMenu.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        burgerMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл
    });
    
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = ''; // Разблокируем скролл
    });
    
    // Закрытие меню при клике на ссылку
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Закрытие меню при клике вне его области
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Адаптация при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1023) {
            mobileMenu.classList.remove('active');
            burgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});