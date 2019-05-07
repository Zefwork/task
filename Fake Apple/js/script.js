let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu');

//Меняем порядок элементов
menu.insertBefore(menuItem[2], menuItem[1]);

//Добавляем пятый пункт
let newLi = document.createElement('li');
newLi.textContent = "Пятый пункт";
newLi.classList.add('menu-item');
menu.appendChild(newLi);

//Меняем background src
let body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url(img/apple_true.jpg)";

// Меняем заголовок
let title = document.getElementById('title');
title.innerHTML = "Мы продаем подлинную технику Apple!";

//Убираем рекламу
let adChild = document.querySelector('.adv');
adChild.parentNode.removeChild(adChild);

//Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let attitude = prompt("Ваше отношение к технике Apple");
let promptAnswer = document.getElementById('prompt');

promptAnswer.innerHTML = `${attitude}`;