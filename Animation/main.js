let btn = document.querySelector('.btn');

function myAnimation() {
  let elem = document.querySelector('.box'),
      pos = 0;
      id = setInterval(frame, 10);
  
      function frame() {
        if (pos == 300) {
          clearInterval(id);
        } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
        }
      }
}

btn.addEventListener('click', myAnimation);

let btns = document.getElementsByTagName('button'),
    btnBlock = document.querySelector('.btn-block');

btnBlock.addEventListener('click', function(e) {
  if (e.target && e.target.matches('button.first')) {
    console.log('hi');
  }
});