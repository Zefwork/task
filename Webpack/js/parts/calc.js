//Calculator
export default function calc() {
  let persons = document.getElementsByClassName('counter-block-input')[0],
    days = document.getElementsByClassName('counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;
    if (days.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
      totalValue.classList.add('h1');
    }
  });

  days.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;
    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
      totalValue.classList.add('total-sum');
    }
  });

  select.addEventListener('change', function () {
    if (persons.value == '' || days.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let t = total;
      totalValue.innerHTML = t * this.options[this.selectedIndex].value;
    }
  })
}