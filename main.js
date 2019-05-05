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
//start();

let mainList = {
  shopBudget: budget,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: true,
  discount: false,
  shopItems: [],
  chooseProducts: function() {
    for (i = 0; i < 5; i++) {
      let a = prompt("Какой тип товаров будем продавать?");
      if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
        mainList.shopGoods[i] = a;
      } else {
        i = i - 1;
      }
    }
  },
  workTime: function(time) {
    if (time < 0) {
      console.log("It's impossible");
    } else if (time > 8 && time < 20) {
      console.log("Time to work");
      mainList.open = true;
    } else if (time < 24) {
      console.log("Time to sleep")
    } else {
      console.log("Impossible")
    }
  },
  dayBudget: function() {
    alert(mainList.shopBudget / 30);
  },
  discountSystem: function(price) {
    if (mainList.discount) {
      price = price * 0.8;
    }
  },
  chooseEmployers: function() {
    for (i = 0; i < 4; i++) {
      let name = prompt("Имя сотрудника");
        mainList.employers[i] = name;
    }
  },
  chooseShopItems: function() {
    let items = prompt("Перечислите ваши товары через запятую", "").toLowerCase();
    mainList.shopItems = items.split(', ');
    console.log(mainList.shopItems);
    mainList.shopItems.push(prompt("Добавьте ещё товар", "").toLowerCase());
    mainList.shopItems.sort();
    console.log(mainList.shopItems);
    mainList.shopItems.forEach((item, i) => {
      alert("У нас вы можете купить. " + (i+1) + ': ' + item + '.');
    });
  }
}

//mainList.chooseProducts();

//mainList.workTime();

//mainList.dayBudget();

//mainList.discountSystem();

//mainList.chooseEmployers();

//mainList.chooseShopItems();

for (key in mainList) {
  alert("Наш магазин включает в себя: " + key + ".");
}

console.log(mainList);