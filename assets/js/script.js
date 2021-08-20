

// Variables

let noOfMatches = 0
let currentTime = 60
let gameOn = true


let modalDisplay
let backgroundDisplay




//Reset game button

// Code inspired by How To Refresh/Reload A Page With JavaScript by Junior Developer Central 
// https://www.youtube.com/watch?v=5hLbCC2YPu0 
document.querySelector('#reload')

document.querySelector('#reload').addEventListener('click', () =>
{

window.location.reload(true)

})




// code on how to match cards based on Marina Ferreira (freeCodeCamp.Org) Youtube video: "Memory Card Game-JavaScript Tutorial"

// Match cards by data type, same card click (prevent card getting stuck if double clicked) and lock-board//

const cards = document.querySelectorAll('.flip-card')




let hasFlippedCard = false

let lockBoard = false

let firstCard, secondCard




function flipCard() {

// NOTE run the clock if the user flips a card

clock()




if (!gameOn) return

if (lockBoard) return

if (this === firstCard) return




this.classList.add('flip')




if (!hasFlippedCard) {

hasFlippedCard = true

firstCard = this

return

}




secondCard = this




checkForMatch()

}




// NOTE: isMatch is a boolean value, not int; it can't be used to determine in the game has ended.




function checkForMatch() {

let isMatch = firstCard.dataset.framework === secondCard.dataset.framework




// NOTE: removed ternary if statement to add additional logic

if (isMatch) {

// increase the number of total matches made in the game

disableCards()

noOfMatches++

} else {

unflipCards()

}




if (noOfMatches === 8) {

gameOn = false

// alert(

// 'game over! You took ' + currentTime + ' seconds to complete the game!'

// )

showmodalDisplayHandler(noOfMatches)

}




console.log(noOfMatches, currentTime)

}




function disableCards() {

firstCard.removeEventListener('click', flipCard)

secondCard.removeEventListener('click', flipCard)




resetBoard()

}




function unflipCards() {

lockBoard = true




setTimeout(() => {

firstCard.classList.remove('flip')

secondCard.classList.remove('flip')




resetBoard()

}, 600)

}




function resetBoard() {

;[hasFlippedCard, lockBoard] = [false, false]

;[firstCard, secondCard] = [null, null]

}




cards.forEach((card) => card.addEventListener('click',
flipCard))




// Shuffle Cards CODE FROM Youtube Mar//

;(function shuffle() {

cards.forEach((card) => {

let ramdomPos = Math.floor(Math.random()
* 12)

card.style.order = ramdomPos

})

})()




//Timer code inspired by stackoverflow




// NOTE changed "var" to "let" here

let myTimer




function clock() {

if (myTimer) {

return

}

if (!gameOn) {

return

}




myTimer = setInterval(myClock, 1000)

var c = 60




function myClock() {

document.getElementById('timer').innerHTML = --c

currentTime = c

if (c === 0) {

gameOn = false

clearInterval(myTimer)

showmodalDisplayHandler(noOfMatches)

} else if (!gameOn) {

clearInterval(myTimer)

return

}

}

}


//WEBSCHOOL Rules of Game

function on() {

document.getElementById('overlay').style.display = 'block'

}




function off() {

document.getElementById('overlay').style.display = 'none'

}




// =========================================================================

// Add modals to screen

// =========================================================================




// declare the button so that we can listen for the user to click on it

// const modalButton = document.querySelector('.modalDisplayButton')




// when the user clicks on the button, the showModalHandler function will run

// button.addEventListener('click', showmodalDisplayHandler)




//=======================================================

// Function that will put the modal onscreen

//=======================================================




function showmodalDisplayHandler(correctCards) {

if (modalDisplay) {

return

}




// if all didn't go well

//if()




// say that the modal will be a <div> element

modalDisplay = document.createElement('div')

modalDisplay.className = 'modalDisplay'




// populate the modal with text

const modalDisplayText = document.createElement('p')




// if all went well

if (correctCards === 8) {

modalDisplayText.textContent =

'Congratulations! You matched all cards correctly in ' +

(60 - currentTime) +

' seconds!'

} else {

modalDisplayText.textContent =

'You ran out of time, but you matched ' + correctCards + ' pairs of cards'

}




// add the text to the modalDisplay

modalDisplay.append(modalDisplayText)




// create the <button> element inside of the modalDisplay

const modalDisplayButton = document.createElement('button')




// populate and style the button

modalDisplayButton.textContent = 'Confirm'

modalDisplayButton.className = 'modal-btn'




// when the button is clicked, we close the modalDisplay

modalDisplayButton.addEventListener('click', closemodalDisplayHandler)




// attach the button to the modalDisplay

modalDisplay.append(modalDisplayButton)




// attach the modalDisplay to the body of the index.html page

document.body.append(modalDisplay)




// define and style the grey backgroundDisplay <div> that will sit behind the modalDisplay when its called to the screen

backgroundDisplay = document.createElement('div')

backgroundDisplay.className = 'backgroundDisplay'




// if the backgroundDisplay is clicked, the modalDisplay will close

backgroundDisplay.addEventListener('click', closemodalDisplayHandler)




// attach the backgroundDisplay to the screen

document.body.append(backgroundDisplay)

}




//=======================================================

// Function that removes the modalDisplay from the screen

//=======================================================

function closemodalDisplayHandler() {

// remove both from the screen

modalDisplay.remove()

backgroundDisplay.remove()

// for modal to display again on screen 

modalDisplay = null

backgroundDisplay = null

}


