document.addEventListener("DOMContentLoaded", function () {
  // Найти элемент select и изображение по их классам
  var selectElement = document.querySelector(".sort");
  var imageElement = document.querySelector(".sort-img");

  // Функция для смены изображения
  function changeImage() {
    // Получаем выбранное значение
    var selectedValue = selectElement.value;

    // Путь к изображениям
    var imagePath = "/media/images/";

    // Выбор изображения в зависимости от выбранного значения
    if (selectedValue === "1" || selectedValue === "3") {
      imageElement.src = imagePath + "sort_by_best.svg";
    } else if (selectedValue === "2" || selectedValue === "4") {
      imageElement.src = imagePath + "sort_by_worst.svg";
    }
  }

  // Добавить обработчик события при изменении выбранной опции
  selectElement.addEventListener("change", changeImage);
});

document.addEventListener("DOMContentLoaded", function () {
  // Найти элемент select и изображение по их классам
  var selectElement = document.querySelector(".mobile-sort");
  var imageElement = document.querySelector(".mobile-sort-img");

  // Функция для смены изображения
  function changeImage() {
    // Получаем выбранное значение
    var selectedValue = selectElement.value;

    // Путь к изображениям
    var imagePath = "/media/images/";

    // Выбор изображения в зависимости от выбранного значения
    if (selectedValue === "1" || selectedValue === "3") {
      imageElement.src = imagePath + "sort_by_best.svg";
    } else if (selectedValue === "2" || selectedValue === "4") {
      imageElement.src = imagePath + "sort_by_worst.svg";
    }
  }

  // Добавить обработчик события при изменении выбранной опции
  selectElement.addEventListener("change", changeImage);
});

function switchComments() {
  var comments = document.querySelector(".appeal-comments");

  if (comments) {
    // Переключаем класс visible, чтобы управлять видимостью и анимацией
    comments.classList.toggle("visible");
  } else {
    console.error("Элемент с классом appeal-comments не найден.");
  }
}

function switchImageShow() {
  var element = document.querySelector(".descktop-image-show");
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
}

function showImage(event) {
  var imgShowcase = document.getElementById("imageShowcase");

  // Исправлено: Извлечение style.backgroundImage напрямую из event.target может не сработать, как ожидается.
  // Нужно проверить, что event.target действительно содержит background-image.
  var imageUrl = getComputedStyle(event.target).backgroundImage; // Получаем полный стиль элемента, включая background-image.

  // Очищаем URL от "url(" и ")" с помощью регулярного выражения, а также от возможных кавычек.
  var cleanUrl = imageUrl.replace(/(url\(|\)|"|')/g, "");

  // Устанавливаем извлеченный URL в качестве src для img.
  imgShowcase.src = cleanUrl;

  switchImageShow();
}
