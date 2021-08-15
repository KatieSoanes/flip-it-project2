// code on how to match cards taken from Marina Ferreira Youtube video "NAME VIDEO"
const cards = document.querySelectorAll('.flip-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  /* this.classList.toggle('flip');*/ 
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 400);

 }






cards.forEach(card => card.addEventListener('click', flipCard));
