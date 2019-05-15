let open_shop = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_flag = document.getElementsByClassName('discount-flag')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    discount_btn = document.getElementsByTagName('button')[3],
    employers_btn = document.getElementsByTagName('button')[4],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    discount_count_value = document.querySelector('.discount-count-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');

let budget,
    price

open_shop.addEventListener('click', () => {
  budget = +prompt("Ваш бюджет?", "");

  while (isNaN(budget) || budget == '' || budget == null) {
    budget = +prompt("Ваш бюджет?", "");
  }

  price = +prompt("Ваша цена?", "");

  while (isNaN(price) || price == '' || price == null) {
    price = +prompt("Ваша цена?", "");
  }

  budget_value.textContent = budget;
  name_value.textContent = prompt("Название вашего магазина?").toUpperCase();
  mainList.shopBudget = budget;
  mainList.shopPrice = price;
  console.log(mainList.shopPrice);
});

goods_btn.addEventListener('click', () => {
  for (i = 0; i < goods_item.length; i++) {
    let a = goods_item[i].value;
    if ((typeof (a)) === 'string' && (typeof (a)) != null && a.length < 50) {
      console.log('ok');
      mainList.shopGoods[i] = a;
      goods_value.textContent = mainList.shopGoods;
    } else {
      i = i - 1;
    }
  }
});

choose_item.addEventListener('change', () => {
  let items = choose_item.value;

  if (isNaN(items) && items != '') {
    mainList.shopItems = items.split(', ');
    mainList.shopItems.sort();

    items_value.textContent = mainList.shopItems;
  }
});

time_value.addEventListener('change', () => {
  let time = time_value.value;

  if (time < 0) {
    console.log("It's impossible");
    mainList.open = false;
  } else if (time > 8 && time < 20) {
    console.log("Time to work");
    mainList.open = true;
  } else if (time < 24) {
    console.log("Time to sleep");
    mainList.open = false;
  } else {
    console.log("Impossible");
    mainList.open = false;
  }
  if (mainList.open == true) {
    isopen_value.style.backgroundColor = 'green';
  } else {
    isopen_value.style.backgroundColor = 'red';
  }
});

budget_btn.addEventListener('click', () => {
  count_budget_value.value = budget / 30;
});

employers_btn.addEventListener('click', () => {
  for (i = 0; i < hire_employers_item.length; i++) {
    let name = hire_employers_item[i].value;
    mainList.employers[i] = name;

    employers_value.textContent += mainList.employers[i] + ", ";
  }
});

discount_btn.addEventListener('click', () => {
  let discount = discount_count_value.value / 100;
  let price = mainList.shopPrice;

  if (isNaN(discount) || discount == '' || discount == null) {
    mainList.discount == false;
    discount_flag.style.backgroundColor = 'red';
  } else {
    mainList.discount == true;
    discount_flag.style.backgroundColor = 'green';
    mainList.shopPrice = price - (price * discount);
    discount_value.textContent = mainList.shopPrice;
  }
});

let mainList = {
  shopBudget: budget,
  shopPrice: price,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: true,
  discount: false,
  shopItems: []
}

console.log(mainList);