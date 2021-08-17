
// code on how to match cards taken from Marina Ferreira (freeCodeCamp.Org) Youtube video: "Memory Card Game-JavaScript Tutorial"
// Match cards by data type, same card click (prevent card getting stuck if double clicked) and lock-board// 
const cards = document.querySelectorAll('.flip-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
 

  function flipCard() {
    if (lockBoard) return;
   if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     resetBoard();
    }, 600);
  }

 function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

  cards.forEach(card => card.addEventListener('click', flipCard));

// Shuffle Cards CODE FROM Youtube Mar//

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

 //Reset game
 // Code inspired by Junior Developer Central - How to refresh/reload a page with JavaScript Youtube tutorial.
    document.querySelector('#reload')
    document.querySelector('#reload').addEventListener('click', () => {
      window.location.reload(true);
    }); 

    //Congratulations Pop up message when board is completed 
    //modal
let modal = document.getElementById("popup1")
function congratulations(){
    if (matchedCard.length == 16){
    modal.classList.add("show");
    closeModal();
    };
}

//Timer code inspired by stackoverflow


var myTimer;
function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 60;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Oh no, times up! You can continue this round untimed or click Reset to start again");
       }
     }
   }

  // Rules of Game based on VIDEO

  


