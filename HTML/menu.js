
// ИСПРАВЛЕННЫЙ КОД ДЛЯ ВЫПАДАЮЩИХ МЕНЮ
console.log('=== МЕНЮ ЗАПУЩЕНО ===');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    
    // Находим элементы по классам
    const womenElement = document.querySelector('.main__item-extra');
    const menElement = document.querySelector('.main__item-extras');
    const mainItems = document.querySelector('.main__items');
    
    console.log('Найдены элементы:', {
        women: womenElement,
        men: menElement,
        mainItems: mainItems
    });
    
    if (!womenElement || !menElement || !mainItems) {
        console.error('❌ Элементы не найдены!');
        return;
    }
    
    console.log('✅ Элементы найдены, создаем меню...');
    
    // Создаем меню для женщин и добавляем ВНУТРЬ main__items
    const womenMenu = document.createElement('div');
    womenMenu.className = 'dropdown-menu women-dropdown';
    womenMenu.innerHTML = `
        <div class="dropdown-content">
            <div class="dropdown-item">Платья</div>
            <div class="dropdown-item">Блузки</div>
            <div class="dropdown-item">Юбки</div>
            <div class="dropdown-item">Брюки</div>
            <div class="dropdown-item">Обувь</div>
            <div class="dropdown-item">Аксессуары</div>
        </div>
    `;
    
    // Создаем меню для мужчин и добавляем ВНУТРЬ main__items
    const menMenu = document.createElement('div');
    menMenu.className = 'dropdown-menu men-dropdown';
    menMenu.innerHTML = `
        <div class="dropdown-content">
            <div class="dropdown-item">Рубашки</div>
            <div class="dropdown-item">Футболки</div>
            <div class="dropdown-item">Брюки</div>
            <div class="dropdown-item">Костюмы</div>
            <div class="dropdown-item">Обувь</div>
            <div class="dropdown-item">Аксессуары</div>
        </div>
    `;
    
    // Добавляем меню прямо в контейнер main__items
    mainItems.appendChild(womenMenu);
    mainItems.appendChild(menMenu);
    
    // Обработчики для женского меню
    womenElement.style.cursor = 'pointer';
    womenElement.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('👗 Клик по Women');
        
        const womenArrow = this.querySelector('img');
        
        // Закрываем мужское меню
        menMenu.classList.remove('active');
        const menArrow = menElement.querySelector('img');
        if (menArrow) menArrow.style.transform = 'rotate(0deg)';
        
        // Переключаем женское меню
        womenMenu.classList.toggle('active');
        if (womenArrow) {
            womenArrow.style.transform = womenMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
        }
    });
    
    // Обработчики для мужского меню
    menElement.style.cursor = 'pointer';
    menElement.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('👔 Клик по Men');
        
        const menArrow = this.querySelector('img');
        
        // Закрываем женское меню
        womenMenu.classList.remove('active');
        const womenArrow = womenElement.querySelector('img');
        if (womenArrow) womenArrow.style.transform = 'rotate(0deg)';
        
        // Переключаем мужское меню
        menMenu.classList.toggle('active');
        if (menArrow) {
            menArrow.style.transform = menMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
        }
    });
    
    // Закрытие меню при клике вне
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main__item-extra') && !e.target.closest('.main__item-extras') && 
            !e.target.closest('.dropdown-menu')) {
            womenMenu.classList.remove('active');
            menMenu.classList.remove('active');
            
            // Сбрасываем стрелки
            document.querySelectorAll('.main__item-extra img, .main__item-extras img').forEach(arrow => {
                arrow.style.transform = 'rotate(0deg)';
            });
        }
    });
    
    console.log('✅ Выпадающие меню готовы!');
});


