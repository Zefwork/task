let budget = +prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
  shopBudget: budget,
  shopName: name,
  shopGoods: [],
  employers: {},
  open: true
}

for(i = 0; i < 5; i++) {
  let a = prompt("Какой тип товаров будем продавать?");
  if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
    console.log('All is ok!');
    mainList.shopGoods[i] = a;
  } else {

  }
}

if (time < 0) {
  console.log("It's impossible");
} else if (time > 8 && time < 20) {
  console.log("Time to work")
} else if (time > 20) {
  console.log("Time to sleep")
} else {
  console.log("Impossible")
}

alert(mainList.shopBudget / 30);

console.log(mainList);