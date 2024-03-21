function hideLoginStudent(loginStudentSelector, exitButtonSelector) {
  const loginStudent = document.querySelector(loginStudentSelector);
  const exitButton = document.querySelector(exitButtonSelector);
  
  if (loginStudent && exitButton) {
   {
      exitButton.style.display = 'none'; // Скрываем кнопку выхода
      loginStudent.classList.add('student-login-invisible'); // Добавляем класс для скрытия loginStudent
      loginStudent.classList.remove('student-login-visible'); // Убираем класс, который делает loginStudent видимым
  }
}} 

  function showStudentLoginBlock() {
    // Находим элемент с классом 'student-login-block'
    const loginStudent = document.querySelector('.student-login');
    const exitButton = document.querySelector('.exit-login-student');
    if (loginStudent) {
        exitButton.style.display = 'block';
        loginStudent.style.display = 'flex';
        loginStudent.classList.remove("student-login-invisible");
        loginStudent.classList.add('student-login-visible');
    }
  }


  function showStudentRegBlock() {
    const loginStudent = document.querySelector('.student-reg');
    const exitButton = document.querySelector('.exit-reg-student');
    if (loginStudent) {
        exitButton.style.display = 'block';
        loginStudent.style.display = 'flex';
        loginStudent.classList.remove("student-login-invisible");
        loginStudent.classList.add('student-login-visible');
    }
  }

  document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Очищаем предыдущие ошибки
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.innerText = '';
        message.previousElementSibling.classList.remove('error');
    });

    let formIsValid = true; // Флаг валидности формы

    // Пример валидации для каждого поля
    validateField('username', 'Логин не может быть пустым');
    validateField('email', 'Введите корректный email');
    validateField('phone', 'Введите корректный номер телефона');
    validateField('first_name', 'Имя не может быть пустым');
    validateField('last_name', 'Фамилия не может быть пустой');
    validateField('student_id', 'Номер студенческого билета не может быть пустым');
    validatePassword();

    // Если форма валидна, здесь можно отправить форму
    if (formIsValid) {
        // Отправка формы, например, через AJAX или как предпочтительно
        console.log('Форма валидна, отправляем данные...');
    }

    function validateField(fieldName, errorMessage) {
        const field = document.forms['registrationForm'][fieldName];
        if (!field.value.trim()) {
            document.querySelector(`input[name="${fieldName}"]`).classList.add('error');
            document.querySelector(`input[name="${fieldName}"]`).nextElementSibling.innerText = errorMessage;
            formIsValid = false;
        }
    }

    function validatePassword() {
        const password = document.forms['registrationForm']['password'].value;
        const confirmPassword = document.forms['registrationForm']['confirm_password'].value;
        if (password !== confirmPassword) {
            document.querySelector('input[name="password"]').classList.add('error');
            document.querySelector('input[name="confirm_password"]').classList.add('error');
            document.querySelector('input[name="confirm_password"]').nextElementSibling.innerText = 'Пароли не совпадают';
            formIsValid = false;
            } else if (password.length < 8) {
            // Проверяем минимальную длину пароля
            document.querySelector('input[name="password"]').classList.add('error');
            document.querySelector('input[name="password"]').nextElementSibling.innerText = 'Пароль должен быть не менее 8 символов';
            formIsValid = false;
            }
            }
            };

              document.addEventListener('DOMContentLoaded', function() {
              fetch('https://studentsays.ru/universities/')
                  .then(response => response.json())
                  .then(data => {
                      const universities = data.data; // Обращение к списку университетов через data.data
                      const selectElement = document.getElementById('universities');
                      universities.forEach(university => {
                          const option = new Option(university.name, university.idUniversity);
                          selectElement.add(option);
                      });
                  })
                  .catch(error => console.error('Ошибка:', error));
          });
          