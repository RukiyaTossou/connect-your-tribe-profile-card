console.log("Script is running!"); // Check if the script is running

let card = document.querySelector('.card');
let turnButton = document.querySelector('.button-turning');

turnButton.addEventListener('click', flipCard);

function flipCard(){
    console.log("Card clicked!");
    card.classList.toggle('flip');
}
