// массив объектов
const cardsArr = [
    {imageName: "image1", imagePath: "images/image_1.png"},
    
]

// выполнить сортировку массива в случайном порядке
// передать функцию сравнения compare function


// обращение к элементам страницы: тегам span, div
const span = document.querySelector("#span");
const cardsDiv = document.querySelector(".cardsDiv");
const messageDiv = document.querySelector(".messageDiv");


// создать игровое поле из изображений карточек
function createBoard() {
    // создать 12 тегов внутри блока <cardsDiv>
    // типа
    // <img id="счётчик" src="картинка" onclick="flipCard">
    
}  // createBoard()


// вызвать функцию для создания поля из изображений
createBoard();


let cardsChosenArr = [];
let cardsChosenArrId = [];
let nOfOpenedCardsArr = [];


// проверка соответствий карточек
function checkForMatch() {
    // массив всех изображений на странице
    // cards [0: img#0, 1: img#1, ...]
    const cards = document.querySelectorAll("img");
    
    // найдено соответствие и пользователь не кликнул по одной и той же карточке
    if (cardsChosenArr[0] === cardsChosenArr[1] && id1 !== id2) {
        

    } else {
        

    }  // if

    cardsChosenArr = [];
    cardsChosenArrId = [];
    // вывести в тег span количество открытых карточек
    span.textContent = String(nOfOpenedCardsArr.length);

    // если количество открытых карточек равно половине от их общего числа
    if  (nOfOpenedCardsArr.length === cardsArr.length / 2) {
        

    }  // if

}  // checkForMatch()


// перевернуть карточку
function flipCard() {

    

}  // flipCard()
