let budget,
name,
time,
price

function start() {
  budget = +prompt("Ваш бюджет?");

  while (isNaN(budget) || budget == '' || budget == null) {
    budget = +prompt("Ваш бюджет?");
  }

  name = prompt("Название вашего магазина?").toUpperCase();
  time = 21;
}
start();

let mainList = {
  shopBudget: budget,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: true,
  discount: false
}

function chooseProducts() {
  for (i = 0; i < 5; i++) {
    let a = prompt("Какой тип товаров будем продавать?");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
      console.log('All is ok!');
      mainList.shopGoods[i] = a;
    } else {
      i = i - 1;
    }
  }
}
chooseProducts();

function workTime(time) {
  if (time < 0) {
    console.log("It's impossible");
  } else if (time > 8 && time < 20) {
    console.log("Time to work")
  } else if (time < 24) {
    console.log("Time to sleep")
  } else {
    console.log("Impossible")
  }
}
workTime(18);

function dayBudget() {
  alert(mainList.shopBudget / 30);
}
dayBudget();

function discountSystem(price) {
  let discount = mainList.discount;
  if(discount) {
    price * 0.8;
  }
}
discountSystem(80);

function chooseEmployers() {
  for (i = 0; i < 4; i++) {
    let a = prompt("Имя сотрудника");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 30) {
      console.log('All is ok!');
      mainList.employers[i] = a;
    } else {
      i = i - 1;
    }
  }
}
chooseEmployers();

console.log(mainList);