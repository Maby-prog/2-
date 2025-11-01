// Элементы DOM
const registrationForm = document.getElementById('registrationForm');
const createAccountBtn = document.getElementById('createAccountBtn');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const errorCloseBtn = document.getElementById('errorCloseBtn');

// Поля формы
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

// Функция проверки заполнения полей
function validateForm() {
    let isValid = true;
    
    const nameValue = userName.value.trim();
    const emailValue = userEmail.value.trim();
    const passwordValue = userPassword.value.trim();

    // Сбрасываем стили
    resetFieldStyles();

    // Проверка имени
    if (nameValue === '') {
        userName.classList.add('error');
        isValid = false;
    } else {
        userName.classList.add('valid');
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        userEmail.classList.add('error');
        isValid = false;
    } else {
        userEmail.classList.add('valid');
    }

    // Проверка пароля
    if (passwordValue === '' || passwordValue.length < 6) {
        userPassword.classList.add('error');
        isValid = false;
    } else {
        userPassword.classList.add('valid');
    }

    return isValid;
}

// Функция сброса стилей полей
function resetFieldStyles() {
    userName.classList.remove('error', 'valid');
    userEmail.classList.remove('error', 'valid');
    userPassword.classList.remove('error', 'valid');
}

// Функция показа модального окна
function showModal(modal) {
    console.log('Showing modal:', modal.id); // Для отладки
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция скрытия модального окна
function hideModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Функция сброса формы
function resetForm() {
    registrationForm.reset();
    resetFieldStyles();
}

// Функция обработки успешной регистрации
function handleSuccessfulRegistration() {
    console.log('Registration successful!');
    
    // Показываем окно успеха
    showModal(successModal);
    
    // Сбрасываем форму через 2 секунды после закрытия окна
    setTimeout(() => {
        resetForm();
    }, 2000);
}

// Функция обработки ошибки регистрации
function handleRegistrationError() {
    console.log('Registration error!');
    
    // Показываем окно ошибки
    showModal(errorModal);
}

// Обработчик клика на кнопку создания аккаунта
createAccountBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Create account button clicked');
    
    if (validateForm()) {
        console.log('Form is valid');
        handleSuccessfulRegistration();
    } else {
        console.log('Form is invalid');
        handleRegistrationError();
    }
});

// Обработчики закрытия модальных окон
successCloseBtn.addEventListener('click', function() {
    console.log('Closing success modal');
    hideModal(successModal);
});

errorCloseBtn.addEventListener('click', function() {
    console.log('Closing error modal');
    hideModal(errorModal);
});

// Закрытие модальных окон при клике вне контента
window.addEventListener('click', function(e) {
    if (e.target === successModal) {
        hideModal(successModal);
    }
    if (e.target === errorModal) {
        hideModal(errorModal);
    }
});

// Закрытие модальных окон по клавише Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideModal(successModal);
        hideModal(errorModal);
    }
});

// Валидация в реальном времени (опционально)
[userName, userEmail, userPassword].forEach(input => {
    input.addEventListener('input', function() {
        // Убираем классы при вводе
        this.classList.remove('error', 'valid');
        
        const value = this.value.trim();
        
        if (value !== '') {
            if (this.id === 'userEmail') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(value)) {
                    this.classList.add('valid');
                }
            } else if (this.id === 'userPassword') {
                if (value.length >= 6) {
                    this.classList.add('valid');
                }
            } else {
                this.classList.add('valid');
            }
        }
    });
});

// Для отладки - проверяем, что элементы найдены
console.log('Elements found:', {
    createAccountBtn: !!createAccountBtn,
    successModal: !!successModal,
    errorModal: !!errorModal,
    userName: !!userName,
    userEmail: !!userEmail,
    userPassword: !!userPassword
});