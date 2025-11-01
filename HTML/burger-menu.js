// Бургер меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerContent = document.getElementById('burgerContent');
    const burgerOverlay = document.getElementById('burgerOverlay');
    
    if (burgerBtn && burgerContent) {
        burgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            burgerContent.classList.toggle('active');
            if (burgerOverlay) {
                burgerOverlay.classList.toggle('active');
            }
            document.body.style.overflow = burgerContent.classList.contains('active') ? 'hidden' : '';
        });
        
        // Закрытие по клику на overlay
        if (burgerOverlay) {
            burgerOverlay.addEventListener('click', function() {
                burgerBtn.classList.remove('active');
                burgerContent.classList.remove('active');
                this.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Закрытие по Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && burgerContent.classList.contains('active')) {
                burgerBtn.classList.remove('active');
                burgerContent.classList.remove('active');
                if (burgerOverlay) {
                    burgerOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    }
    
    // Обработка dropdown в бургер меню
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.burger-nav__link');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            item.classList.toggle('active');
        });
    });
});