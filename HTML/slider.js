document.addEventListener('DOMContentLoaded', function() {
    console.log('=== ДЕБАГ СЛАЙДЕРА ===');
    
    // Находим элементы
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    console.log('Найденные элементы:', {
        slider: slider,
        slides: slides.length,
        prevBtn: prevBtn,
        nextBtn: nextBtn
    });
    
    // Проверяем, все ли элементы найдены
    if (!slider || slides.length === 0 || !prevBtn || !nextBtn) {
        console.error('❌ Не найдены элементы слайдера!');
        console.log('slider:', slider);
        console.log('slides:', slides.length);
        console.log('prevBtn:', prevBtn);
        console.log('nextBtn:', nextBtn);
        return;
    }
    
    console.log('✅ Все элементы найдены');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    console.log('Количество слайдов:', slideCount);
    
    function updateSlider() {
        console.log('Переключение на слайд:', currentSlide);
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    function nextSlide() {
        console.log('Кнопка NEXT нажата');
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    function prevSlide() {
        console.log('Кнопка PREV нажата');
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Добавляем обработчики
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    console.log('✅ Обработчики добавлены');
    
    // Инициализация
    updateSlider();
    
    // Тест: автоматическое переключение каждые 3 секунды
    setInterval(() => {
        console.log('Автопереключение...');
        nextSlide();
    }, 7000);
});

