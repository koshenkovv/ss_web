document.addEventListener("DOMContentLoaded", function () {
  // Найти элемент select и изображение по их классам
  var selectElement = document.querySelector(".sort");
  var imageElement = document.querySelector(".sort-img");

  // Функция для смены изображения
  function changeImage() {
    // Получаем выбранное значение
    var selectedValue = selectElement.value;

    // Путь к изображениям
    var imagePath = "./assets/images/";

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
