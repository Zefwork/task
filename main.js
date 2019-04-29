const budget = +prompt("Ваш бюджет?");
const name = prompt("Название вашего магазина?");

let mainList = {
  shopBudget: budget,
  shopName: name,
  shopGoods: [],
  employers: {},
  open
}

alert(mainList.shopBudget / 30);

console.log(mainList.shopBudget, mainList.shopName, mainList.shopGoods, mainList.employers);