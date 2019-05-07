//Получим кнопку "Открыть магазин" через id
let openShop = document.getElementById('open-btn');

//Получим все поля в левом меню через классы
let main = document.body.getElementsByClassName('main-info')[0].childNodes;

//Получим поля категории товаров через класс
let goodsItems = document.getElementsByClassName('goods-item');

//Получим все 3 кнопки через Tag
let btns = document.querySelector('.main').getElementsByTagName('button');

//Получим поля ввода товаров, времени и расчета бюджета через querySelector
let inputFields = document.querySelectorAll('input.goods-item, input.choose-item, input.time-value, input.count-budget-value');

//Получим поля имен сотрудников через querySelectorAll
let employeeNames = document.querySelectorAll('input.hire-employers-item');