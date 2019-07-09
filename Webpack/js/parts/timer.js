// Timer
export default function timer() {
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