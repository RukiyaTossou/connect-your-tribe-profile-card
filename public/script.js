let card = document.querySelector('.card');

card.addEventListener('click', cardflip);

function cardflip() {
    console.log("Kaart is omgedraaid"); // Controleer of de functie wordt uitgevoerd
    card.classList.toggle("flip");
}