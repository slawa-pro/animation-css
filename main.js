const elemOne = document.querySelector('.elem_one');
const elemTwo = document.querySelector('.elem_two');
const elemThree = document.querySelector('.elem_three');

function resetRotorSquare() {
  void elemOne.offsetWidth;
  void elemTwo.offsetWidth;
  void elemThree.offsetWidth;
}

function rotorSquare() {
  resetRotorSquare();
  console.log("reset отработал");
  
  elemOne.style.animation = 'clockwise 4s ease-in-out';
  
  elemOne.addEventListener('animationend', function onFirstEnd() {
    console.log('Первый отработал');
    elemOne.style.backgroundColor = '#CC0605';
    elemTwo.style.backgroundColor = '#FFFFFF';
    elemTwo.style.animation = 'clockwise 4s ease-in-out';
    
    elemTwo.addEventListener('animationend', function onSecondEnd() {
      console.log('Второй отработал');
      elemTwo.style.backgroundColor = '#00FF00';
      elemThree.style.backgroundColor = '#FFFFFF';
      elemThree.style.animation = 'clockwise 4s ease-in-out';
      
      elemThree.addEventListener('animationend', function onThirdEnd() {
        console.log('Третий отработал');
        resetRotorSquare();
        setTimeout(rotorSquareBack, 1000);
      }, { once: true });
    }, { once: true });
  }, { once: true });
}

function rotorSquareBack() {
  resetRotorSquare();
  
  console.log("reset назад отработал");
  elemThree.style.animation = 'counterclockwise 2s ease-in-out';
  
  elemThree.addEventListener('animationend', function onThirdBackEnd() {
    console.log('Третий назад отработал ');
    elemThree.style.backgroundColor = '#FFFFFF';
    elemTwo.style.backgroundColor = '#00FF00';
    elemTwo.style.animation = 'counterclockwise 2s ease-in-out';
    
  elemTwo.addEventListener('animationend', function onSecondBackEnd() {
    console.log('Второй назад отработал');
    elemThree.style.backgroundColor = '#00FF00';
    elemTwo.style.backgroundColor = '#CC0605';
    elemOne.style.backgroundColor = '#FFFFFF';

  elemOne.style.animation = 'counterclockwise 2s ease-in-out';
      
  elemOne.addEventListener('animationend', function onFirstBackEnd() {
    console.log('Первый назад отработал');
    resetRotorSquare();
    console.log("reset назад отработал");
        setTimeout(rotorSquare, 1000);
      }, { once: true });
    }, { once: true });
  }, { once: true });
}

rotorSquare();