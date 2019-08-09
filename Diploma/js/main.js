let overlay = document.getElementById('overlay'),
    popupBtn = document.getElementById('popup-btn'),
    main = document.getElementById('main'),
    mainCards = document.querySelector('.main-cards')
    custom = document.getElementById('custom'),
    surname = document.getElementById('name'),
    age = document.getElementById('age'),
    male = document.getElementById('male'),
    female = document.getElementById('female'),
    select = document.getElementById('select'),
    bio = document.getElementById('bio'),
    readyBtn = document.getElementById('ready'),
    resetBtn = document.getElementById('reset'),
    votingBtn = document.getElementById('voting'),
    crimeBtn = document.getElementById('crime');

popupBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  main.style.display = 'none';

  custom.style.display = 'flex';
  let customChild = custom.children;
  for (let i = 0; i < customChild.length; i++) {
    customChild[i].style.display = 'block';
  }
});

function skinSlider() {
  let slideIndex = 1,
    skinSlider = document.getElementsByClassName('skin')[0],
    skinSliderItem = document.getElementsByClassName('skin-color'),
    prev = skinSlider.querySelector('.prev'),
    next = skinSlider.querySelector('.next');

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  function showSlides(n) {
    if (slideIndex > skinSliderItem.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = skinSliderItem.length;
    }
    if (female.checked && slideIndex < 4) {
      slideIndex = 4;
    } else if (male.checked && slideIndex > 3) {
      slideIndex = 1;
    }

    for (let i = 0; i < skinSliderItem.length; i++) {
      skinSliderItem[i].style.display = 'none';
    }

    skinSliderItem[slideIndex - 1].style.display = 'block';

    let personSkin = document.getElementById('person-skin');
    personSkin.style.background = `url('./img/skin/skin-${slideIndex}.png') center no-repeat`;
    personSkin.style.backgroundSize = 'cover';

    male.addEventListener('click', () => {
      slideIndex = 1;

      personSkin.style.background = `url('./img/skin/skin-${slideIndex}.png') center no-repeat`;
      personSkin.style.backgroundSize = 'cover';

      for (let i = 0; i < skinSliderItem.length; i++) {
        skinSliderItem[i].style.display = 'none';
      }

      skinSliderItem[slideIndex - 1].style.display = 'block';
    });

    female.addEventListener('click', () => {
      slideIndex = 4;

      personSkin.style.background = `url('./img/skin/skin-${slideIndex}.png') center no-repeat`;
      personSkin.style.backgroundSize = 'cover';

      for (let i = 0; i < skinSliderItem.length; i++) {
        skinSliderItem[i].style.display = 'none';
      }

      skinSliderItem[slideIndex - 1].style.display = 'block';
    });
  }
};

function hairSlider() {
  let slideIndex = 1,
    hairSlider = document.getElementsByClassName('hair')[0],
    hairSliderItem = document.getElementsByClassName('hair-style'),
    prev = hairSlider.querySelector('.prev'),
    next = hairSlider.querySelector('.next');

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log("TCL: showSlides -> slideIndex", slideIndex)
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  function showSlides(n) {
    if (slideIndex > hairSliderItem.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = hairSliderItem.length;
    }
    if (female.checked && slideIndex < 4) {
      slideIndex = 4;
    } else if (male.checked && slideIndex > 3) {
      slideIndex = 1;
    }

    for (let i = 0; i < hairSliderItem.length; i++) {
      hairSliderItem[i].style.display = 'none';
    }

    hairSliderItem[slideIndex - 1].style.display = 'block';

    let personHair = document.getElementById('person-hair');
    personHair.style.background = `url('./img/hair/construct/hair-${slideIndex}.png') center no-repeat`;
    personHair.style.backgroundSize = 'cover';

    male.addEventListener('click', () => {
      slideIndex = 1;

      personHair.style.background = `url('./img/hair/construct/hair-${slideIndex}.png') center no-repeat`;
      personHair.style.backgroundSize = 'cover';

      for (let i = 0; i < hairSliderItem.length; i++) {
        hairSliderItem[i].style.display = 'none';
      }

      hairSliderItem[slideIndex - 1].style.display = 'block';
    });

    female.addEventListener('click', () => {
      slideIndex = 4;

      personHair.style.background = `url('./img/hair/construct/hair-${slideIndex}.png') center no-repeat`;
      personHair.style.backgroundSize = 'cover';

      for (let i = 0; i < hairSliderItem.length; i++) {
        hairSliderItem[i].style.display = 'none';
      }

      hairSliderItem[slideIndex - 1].style.display = 'block';
    });
  }
};

function clothesSlider() {
  let slideIndex = 1,
    clothesSlider = document.getElementsByClassName('clothes')[0],
    clothesSliderItem = document.getElementsByClassName('clothes-style'),
    prev = clothesSlider.querySelector('.prev'),
    next = clothesSlider.querySelector('.next');

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  function showSlides(n) {
    if (slideIndex > clothesSliderItem.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = clothesSliderItem.length;
    }
    if (female.checked && slideIndex < 4) {
      slideIndex = 4;
    } else if (male.checked && slideIndex > 3) {
      slideIndex = 1;
    }

    for (let i = 0; i < clothesSliderItem.length; i++) {
      clothesSliderItem[i].style.display = 'none';
    }

    clothesSliderItem[slideIndex - 1].style.display = 'block';

    let personClothes = document.getElementById('person-clothes');
    personClothes.style.background = `url('./img/clothes/construct/clothes-${slideIndex}.png') center no-repeat`;
    personClothes.style.backgroundSize = 'cover';

    male.addEventListener('click', () => {
      slideIndex = 1;
      
      personClothes.style.background = `url('./img/clothes/construct/clothes-${slideIndex}.png') center no-repeat`;
      personClothes.style.backgroundSize = 'cover';

      for (let i = 0; i < clothesSliderItem.length; i++) {
        clothesSliderItem[i].style.display = 'none';
      }

      clothesSliderItem[slideIndex - 1].style.display = 'block';
    });

    female.addEventListener('click', () => {
      slideIndex = 4

      personClothes.style.background = `url('./img/clothes/construct/clothes-${slideIndex}.png') center no-repeat`;
      personClothes.style.backgroundSize = 'cover';

      for (let i = 0; i < clothesSliderItem.length; i++) {
        clothesSliderItem[i].style.display = 'none';
      }

      clothesSliderItem[slideIndex - 1].style.display = 'block';
    });
  }
};

skinSlider();
hairSlider();
clothesSlider();

readyBtn.addEventListener('click', () => {
  let newName = surname.value,
      newAge = age.value,
      newSelect = select.value,
      newBio = bio.value,
      skinStyle = document.getElementById('person-skin').style.background,
      clothesStyle = document.getElementById('person-clothes').style.background,
      hairStyle = document.getElementById('person-hair').style.background;

  if (isNaN(newAge) || newAge.length >= 3 ) {
    alert("Укажите правильный возраст кандидата");
    return false;
  }

  if (newAge == '') {
    alert("Укажите возраст кандидата");
    return false;
  }

  if (newName == '') {
    alert("Укажите фамилию, имя и отчество кандидата");
    return false;
  }

  if (newBio == '') {
    alert("Укажите биографию кандидата");
    return false;
  }

  let mainCardsItem = document.createElement('div'),
      candidateBlock = document.createElement('div'),
      person = document.createElement('div'),
      personSkin = document.createElement('div'),
      personClothes = document.createElement('div'),
      personHair = document.createElement('div'),
      personShoes = document.createElement('div'),
      result = document.createElement('div'),
      resultCount = document.createElement('div'),
      progress = document.createElement('div'),
      progressBar = document.createElement('div'),
      candName = document.createElement('div'),
      candAge = document.createElement('div'),
      sexText = document.createElement('div'),
      candSex = document.createElement('div'),
      selectText = document.createElement('div'),
      candSelect = document.createElement('div'),
      bioText = document.createElement('div'),
      candBio = document.createElement('div');

  mainCardsItem.className = 'main-cards-item';
  candidateBlock.className = 'candidate-block';
  person.className = 'person construct photo';
  personSkin.className = 'person-skin';
  personClothes.className = 'person-clothes';
  personHair.className = 'person-hair';
  personShoes.className = 'person-shoes';
  result.className = 'result';
  resultCount.className = 'result-count';
  progress.className = 'progress';
  progressBar.className = 'progress-bar';
  candName.className = 'name';
  candAge.className = 'age';
  candSex.className = 'sex';
  candSelect.className = 'views';
  candBio.className = 'bio';


  personSkin.style.background = skinStyle;
  personClothes.style.background = clothesStyle;
  personHair.style.background = hairStyle;
  candName.innerText = newName;
  sexText.innerText = 'Пол:';
  candAge.innerText = `${newAge} лет`;
  candSex.innerText = document.querySelector('input[name="sex"]:checked').value;
  selectText.innerText = 'Полит. взгляды:';
  candSelect.innerText = newSelect;
  bioText.innerText = 'Биография';
  candBio.innerText = newBio;

  mainCards.appendChild(mainCardsItem);
  mainCardsItem.appendChild(candidateBlock);
  candidateBlock.appendChild(person);
  person.appendChild(personSkin);
  person.appendChild(personClothes);
  person.appendChild(personHair);
  person.appendChild(personShoes);
  candidateBlock.appendChild(result);
  result.appendChild(resultCount);
  result.appendChild(progress);
  progress.appendChild(progressBar);
  mainCardsItem.appendChild(candName);
  mainCardsItem.appendChild(candAge);
  mainCardsItem.appendChild(sexText);
  mainCardsItem.appendChild(candSex);
  mainCardsItem.appendChild(selectText);
  mainCardsItem.appendChild(candSelect);
  mainCardsItem.appendChild(bioText);
  mainCardsItem.appendChild(candBio);

  custom.style.display = 'none';
  main.style.display = 'block';

  let progressBarHeight = document.querySelectorAll('.progress-bar'),
      resultCountNumber = document.querySelectorAll('.result-count');

  for (let i = 0; i < progressBarHeight.length; i++) {
    progressBarHeight[i].style.height = 0;
  }

  for (let i = 0; i < resultCountNumber.length; i++) {
    resultCountNumber[i].innerText = '0%';
  }
});

resetBtn.addEventListener('click', () => {
  main.style.display = 'none';
  custom.style.display = 'flex';

  surname.value = '';
  age.value = '';
  male.checked = true;
  select.value = 'Либеральные';
  bio.value = '';
  
  skinSlider();
  hairSlider();
  clothesSlider();

  let lastItem = document.querySelectorAll('.main-cards-item')[2];
  let progressBar = document.querySelectorAll('.progress-bar');

  mainCards.removeChild(lastItem);
  progressBar.style.height = '0';
});

votingBtn.addEventListener('click', () => {
  let first = Math.floor((Math.random() * 40) + 10),
      second = Math.floor((Math.random() * 40) + 10),
      third = 100 - (first + second),
      progressBarHeight = document.querySelectorAll('.progress-bar'),
      resultCountNumber = document.querySelectorAll('.result-count');
      
  progressBarHeight[0].style.height = `${first}%`;
  progressBarHeight[1].style.height = `${second}%`;
  progressBarHeight[2].style.height = `${third}%`;

  resultCountNumber[0].innerText = `${first}%`;
  resultCountNumber[1].innerText = `${second}%`;
  resultCountNumber[2].innerText = `${third}%`;

  let mainCardsWinner = document.querySelectorAll('.main-cards-item');

  if (progressBarHeight[0].style.height > progressBarHeight[1].style.height && progressBarHeight[0].style.height > progressBarHeight[2].style.height) {
    mainCardsWinner[0].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[1].className = 'main-cards-item';
    mainCardsWinner[2].className = 'main-cards-item';
  } else if (progressBarHeight[1].style.height > progressBarHeight[0].style.height && progressBarHeight[1].style.height > progressBarHeight[2].style.height) {
    mainCardsWinner[1].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[0].className = 'main-cards-item';
    mainCardsWinner[2].className = 'main-cards-item';
  } else if (progressBarHeight[2].style.height > progressBarHeight[0].style.height && progressBarHeight[2].style.height > progressBarHeight[1].style.height) {
    mainCardsWinner[2].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[0].className = 'main-cards-item';
    mainCardsWinner[1].className = 'main-cards-item';
  }
});

crimeBtn.addEventListener('click', () => {
  let first = Math.floor((Math.random() * 37) + 1),
      second = Math.floor((Math.random() * 38) + 1),
      third = 100 - (first + second),
      progressBarHeight = document.querySelectorAll('.progress-bar'),
      resultCountNumber = document.querySelectorAll('.result-count');

  progressBarHeight[0].style.height = `${first}%`;
  progressBarHeight[1].style.height = `${second}%`;
  progressBarHeight[2].style.height = `${third}%`;

  resultCountNumber[0].innerText = `${first}%`;
  resultCountNumber[1].innerText = `${second}%`;
  resultCountNumber[2].innerText = `${third}%`;

  let mainCardsWinner = document.querySelectorAll('.main-cards-item');

  if (progressBarHeight[0].style.height > progressBarHeight[1].style.height && progressBarHeight[0].style.height > progressBarHeight[2].style.height) {
    mainCardsWinner[0].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[1].className = 'main-cards-item';
    mainCardsWinner[2].className = 'main-cards-item';
  } else if (progressBarHeight[1].style.height > progressBarHeight[0].style.height && progressBarHeight[1].style.height > progressBarHeight[2].style.height) {
    mainCardsWinner[1].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[0].className = 'main-cards-item';
    mainCardsWinner[2].className = 'main-cards-item';
  } else if (progressBarHeight[2].style.height > progressBarHeight[0].style.height && progressBarHeight[2].style.height > progressBarHeight[1].style.height) {
    mainCardsWinner[2].className = 'main-cards-item main-cards-item-active';
    mainCardsWinner[0].className = 'main-cards-item';
    mainCardsWinner[1].className = 'main-cards-item';
  }
});