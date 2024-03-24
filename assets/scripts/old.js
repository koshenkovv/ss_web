document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    // Сброс предыдущих ошибок
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => {
      message.innerText = "";
    });

    const inputs = form.querySelectorAll(".input-box input");
    inputs.forEach((input) => {
      input.classList.remove("error"); // Удаляем предыдущие красные рамки
    });

    let isValid = true; // Флаг, отслеживающий валидность формы

    // Валидация каждого поля
    inputs.forEach((input) => {
      const errorMessageElement = input.nextElementSibling;
      if (
        input.name === "email" &&
        !input.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ) {
        displayError(input, errorMessageElement, "Некорректный email");
        isValid = false;
      } else if (
        input.name === "username" &&
        !input.value.match(/^[a-zA-Z0-9]+$/)
      ) {
        displayError(input, errorMessageElement, "Некорректный логин");
        isValid = false;
      } else if (input.name === "student_id" && !input.value.match(/^\d+$/)) {
        displayError(input, errorMessageElement, "Некорректный номер билета");
        isValid = false;
      } else if (
        input.name === "password" &&
        input.value.length < 8 &&
        !input.value.match(/^[a-zA-Z0-9]+$/)
      ) {
        displayError(input, errorMessageElement, "Некорректный пароль");
        isValid = false;
      } else if (
        input.name === "confirm_password" &&
        input.value !== form.querySelector('input[name="password"]').value
      ) {
        displayError(input, errorMessageElement, "Пароли не совпадают");
        isValid = false;
      } else if (input.name === "first_name" || input.name === "last_name") {
        if (!input.value.match(/^[а-яА-ЯёЁ]+$/)) {
          displayError(
            input,
            errorMessageElement,
            "Используйте только буквы русского алфавита"
          );
          isValid = false;
        }
      } else if (input.name === "student_id" && !input.value.match(/^\d+$/)) {
        displayError(
          input,
          errorMessageElement,
          "Номер студенческого билета должен содержать только цифры"
        );
        isValid = false;
      } else if (!input.value.trim()) {
        displayError(
          input,
          errorMessageElement,
          "Это поле необходимо заполнить"
        );
        isValid = false;
      }
    });

    // Если форма валидна, можно отправить данные
    if (isValid) {
      // Отправка формы, например, через fetch API или XMLHttpRequest
      console.log("Форма валидна. Отправляем данные...");
    }
  });

  function displayError(input, errorElement, message) {
    input.classList.add("error"); // Добавляем красную рамку
    errorElement.innerText = message; // Отображаем сообщение об ошибке
  }
});
