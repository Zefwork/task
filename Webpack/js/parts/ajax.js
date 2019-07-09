// AJAX form sending
export default function ajax() {
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