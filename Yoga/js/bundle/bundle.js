(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {
  let ajax = require('../parts/ajax.js');
  let calc = require('../parts/calc.js');
  let modal = require('../parts/modal.js');
  let scroll = require('../parts/scroll.js');
  let slider = require('../parts/slider.js');
  let tab = require('../parts/tab.js');
  let timer = require('../parts/timer.js');

  ajax();
  calc();
  modal();
  scroll();
  slider();
  tab();
  timer();
});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
// AJAX form sending
function ajax() {
  let message = new Object();
  message.loading = "Loading...";
  message.success = "Thank you! We will connect you soon.";
  message.error = "Oops... Something went wrong";

  let form = document.getElementsByClassName('main-form')[0],
    mainForm = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

  let elem = document.createElement("img");
  elem.src = 'img/loader.gif';

  statusMessage.classList.add('status');

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.appendChild(statusMessage);
    // AJAX
    let req = new XMLHttpRequest();
    req.open("POST", 'server.php');
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let formData = new FormData(form);

    req.send(formData);

    req.onreadystatechange = function () {
      if (req.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        statusMessage.appendChild(elem);
      } else if (req.readyState === 4) {
        if (req.status === 200 && req.status < 300) {
          // Adding content on page
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.console.error;
        }
      }
    }
    for (let i = 0; i < input.length; i++) {
      // Removing input text
      input[i].value = '';
    }
  })

  mainForm.addEventListener('submit', e => {
    e.preventDefault();
    mainForm.appendChild(statusMessage);
    // AJAX
    let req = new XMLHttpRequest();
    req.open("POST", 'server.php');
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let formData = new FormData(form);

    req.send(formData);

    req.onreadystatechange = function () {
      if (req.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        statusMessage.appendChild(elem);
      } else if (req.readyState === 4) {
        if (req.status === 200 && req.status < 300) {
          console.log("TCL: req.onreadystatechange -> req.status", req.status)
          // Adding content on page
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.console.error;
        }
      }
    }
    for (let i = 0; i < input.length; i++) {
      // Removing input text
      input[i].value = '';
    }
  })
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
//Calculator
function calc() {
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

module.exports = calc;
},{}],4:[function(require,module,exports){
// Modal
function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  })

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  })
}

module.exports = modal;
},{}],5:[function(require,module,exports){
// Smooth scrolling
function scroll() {
  (function () {
    scrollTo();
  })();

  function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
  }

  function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function () {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        targetAnchor.focus();
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
 // Slider
function slider() {
  let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.getElementsByClassName('dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', e => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  setInterval(() => {
    showSlides(slideIndex += 1);
  }, 3500);
}

module.exports = slider;
},{}],7:[function(require,module,exports){
  // Tab content reveal
function tab() {
  let tab = document.getElementsByClassName('info-header-tab'),
    tabContent = document.getElementsByClassName('info-tabcontent'),
    info = document.getElementsByClassName('info-header')[0];

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.remove('show');
    }
  }

  info.addEventListener('click', function (e) {
    let target = e.target;
    if (target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tab;
},{}],8:[function(require,module,exports){
// Timer
function timer() {
  let deadline = '2019-05-30';

  function getRemTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    if (Date.parse(endtime) > Date.parse(new Date())) {
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    } else {
      return {
        'total': '0',
        'hours': '00',
        'minutes': '00',
        'seconds': '00'
      };
    }
  };

  function setClock(id, endtime) {
    let timeInterval = setInterval(updateClock, 1000);
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getRemTime(endtime);
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };

    updateClock();
  };

  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
