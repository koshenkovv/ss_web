document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href;

  // Извлекаем число из адресной строки
  var match = url.match(/\/appeal\/(\d+)/);

  // Проверяем, найдено ли число в адресной строке
  if (match) {
    var idReport = match[1];
    const accessToken = localStorage.getItem("access_token");

    // Формируем URL для отправки запроса
    var apiUrl = "https://studentsays.ru/report/" + idReport;

    // Отправляем GET-запрос к серверу с токеном
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Не удалось получить данные");
      })
      .then((data) => {
        // Заполняем HTML страницу данными из ответа сервера
        document.getElementById("header").innerText = data.data.header;
        document.getElementById("text").innerText = data.data.text;
        document.getElementById("username").innerText =
          "Автор: " + data.data.idUser.username;
        document.getElementById("rating").innerText = data.data.rating;
        document.getElementById("date_created").innerText =
          "Дата создания: " + data.data.date_created;
        function displayAppropriateBlock(data) {
          // Итерируем с конца, чтобы найти последний непустой блок
          for (let i = 5; i > 0; i--) {
            if (data[`photo${i}`] !== null) {
              // Показываем только этот блок, если он найден
              const block = document.getElementsByClassName(
                `appeal-images-block-${i}`
              );
              if (block) {
                block.style.display = "grid";
              }
              break; // Останавливаем цикл, так как нашли первое непустое изображение с конца
            }
          }
        }
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  } else {
    // Если число не найдено в адресной строке, выводим сообщение об ошибке
    document.getElementById("reportData").innerHTML =
      "<p>Число после '/report/' не найдено в адресной строке</p>";
  }
});
