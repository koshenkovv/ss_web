function hideLoginStudent(loginStudentSelector, exitButtonSelector) {
  const loginStudent = document.querySelector(loginStudentSelector);
  const exitButton = document.querySelector(exitButtonSelector);

  if (loginStudent && exitButton) {
    {
      exitButton.style.display = "none"; // Скрываем кнопку выхода
      loginStudent.classList.add("student-login-invisible"); // Добавляем класс для скрытия loginStudent
      loginStudent.classList.remove("student-login-visible"); // Убираем класс, который делает loginStudent видимым
    }
  }
}

function showStudentLoginBlock() {
  // Находим элемент с классом 'student-login-block'
  const loginStudent = document.querySelector(".student-login");
  const exitButton = document.querySelector(".exit-login-student");
  if (loginStudent) {
    exitButton.style.display = "block";
    loginStudent.style.display = "flex";
    loginStudent.classList.remove("student-login-invisible");
    loginStudent.classList.add("student-login-visible");
  }
}

function showStudentRegBlock() {
  const loginStudent = document.querySelector(".student-reg");
  const exitButton = document.querySelector(".exit-reg-student");
  if (loginStudent) {
    exitButton.style.display = "block";
    loginStudent.style.display = "flex";
    loginStudent.classList.remove("student-login-invisible");
    loginStudent.classList.add("student-login-visible");
  }
}

function hideLoginStudent(loginStudentSelector, exitButtonSelector) {
  const loginStudent = document.querySelector(loginStudentSelector);
  const exitButton = document.querySelector(exitButtonSelector);

  if (loginStudent && exitButton) {
    {
      exitButton.style.display = "none"; // Скрываем кнопку выхода
      loginStudent.classList.add("student-login-invisible"); // Добавляем класс для скрытия loginStudent
      loginStudent.classList.remove("student-login-visible"); // Убираем класс, который делает loginStudent видимым
    }
  }
}

function showStudentLoginBlock() {
  // Находим элемент с классом 'student-login-block'
  const loginStudent = document.querySelector(".student-login");
  const exitButton = document.querySelector(".exit-login-student");
  if (loginStudent) {
    exitButton.style.display = "block";
    loginStudent.style.display = "flex";
    loginStudent.classList.remove("student-login-invisible");
    loginStudent.classList.add("student-login-visible");
  }
}

function showStudentRegBlock() {
  const loginStudent = document.querySelector(".student-reg");
  const exitButton = document.querySelector(".exit-reg-student");
  if (loginStudent) {
    exitButton.style.display = "block";
    loginStudent.style.display = "flex";
    loginStudent.classList.remove("student-login-invisible");
    loginStudent.classList.add("student-login-visible");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://studentsays.ru/universities/")
    .then((response) => response.json())
    .then((data) => {
      const selectElement = document.getElementById("universities");
      data.forEach((university) => {
        const option = new Option(university.name, university.idUniversity);
        selectElement.add(option);
      });
    })
    .catch((error) => console.error("Ошибка:", error));
});

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const errorMessages = document.querySelector(".error-message");
    console.log(errorMessages);
    errorMessages.style.display = "none";

    const inputs = form.querySelectorAll(".input-el");
    inputs.forEach((input) => {
      input.classList.remove("error"); // Удаляем предыдущие красные рамки
    });

    console.log(inputs);
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
        (input.value.length < 8 ||
          !input.value.match(/[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
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
      console.log("Форма валидна. Отправляем данные...");
      console.log("Данные формы:", new FormData(form));

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": getCookie("csrftoken"), // Убедитесь, что функция getCookie реализована
        },
      })
        .then((response) => {
          console.log("Ответ сервера (response):", response);
          return response.json();
        })
        .then((data) => {
          console.log("Данные, полученные от сервера:", data);
          if (
            !data.error &&
            data.data &&
            data.data.refresh &&
            data.data.access
          ) {
            alert("Вы успешно вошли в систему!");
          } else {
            alert(data.error || "Произошла неизвестная ошибка");
          }
        })
        .catch((error) => console.error("Ошибка:", error));
    }
  });

  function displayError(input) {
    const errorMessages = document.querySelector(".error-message");
    console.log(errorMessages);
    input.classList.add("error"); // Добавляем красную рамку
    errorMessages.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    console.log("Начало отправки формы");

    const errorMessages = document.querySelector(".error-message");
    console.log("Сообщения об ошибках:", errorMessages);
    errorMessages.style.display = "none";

    const inputs = form.querySelectorAll(".input-el");
    console.log("Поля формы:", inputs);
    inputs.forEach((input) => {
      input.classList.remove("error"); // Удаляем предыдущие красные рамки
    });
    let isValid = true; // Флаг, отслеживающий валидность формы

    // Валидация каждого поля
    inputs.forEach((input) => {
      const errorMessageElement = input.nextElementSibling;
      if (input.name === "username" && !input.value.match(/^[a-zA-Z0-9]+$/)) {
        displayError(input, errorMessageElement, "Некорректный логин");
        isValid = false;
      } else if (
        input.name === "password" &&
        (input.value.length < 8 ||
          !input.value.match(/[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
      ) {
        displayError(input, errorMessageElement, "Некорректный пароль");
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

    if (isValid) {
      console.log("Форма валидна. Отправляем данные...");
      console.log("Данные формы:", new FormData(form));

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": getCookie("csrftoken"), // Убедитесь, что функция getCookie реализована
        },
      })
        .then((response) => {
          console.log("Ответ сервера (response):", response);
          return response.json();
        })
        .then((data) => {
          console.log("Данные, полученные от сервера:", data);
          if (
            !data.error &&
            data.data &&
            data.data.refresh &&
            data.data.access
          ) {
            alert("Вы успешно вошли в систему!");
          } else {
            alert(data.error || "Произошла неизвестная ошибка");
          }
        })
        .catch((error) => console.error("Ошибка:", error));
    }
  });

  function displayError(input, errorMessageElement, errorMessage) {
    console.log("Ошибка валидации:", errorMessage);
    const errorMessages = document.querySelector(".error-message");
    input.classList.add("error");
    errorMessages.style.display = "block";
    if (errorMessageElement) {
      errorMessageElement.innerText = errorMessage; // Убедитесь, что errorMessageElement существует и может отображать текст ошибки
    }
  }
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// JavaScript код
document.addEventListener("DOMContentLoaded", function () {
  const passwordIcon = document.getElementById("password_icon");
  const passwordInput = document.querySelector('input[name="password"]');

  passwordIcon.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    // Изменение изображения иконки
    passwordIcon.src =
      type === "password"
        ? "./assets/images/open-eye.svg"
        : "./assets/images/close-eye.svg";
  });
});
