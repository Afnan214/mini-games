const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]
cardArray.sort(() => 0.5 -Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenID = []
const cardsWon = []
function createBoard(){
    for(let i=0; i<cardArray.length ;i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute( 'data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }
}
createBoard()
function check_match()
{
    const cards = document.querySelectorAll('img')
    const option_one = cardsChosenID[0]
    const option_two = cardsChosenID[1]
    if(option_one == option_two)
    {
        cards[cardsChosenID[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenID[1]].setAttribute('src', 'images/white.png')
        alert('you have clicked the same image!')
    }
    if(cardsChosen[0]==cardsChosen[1])
    {
        alert('you found a match!')
        cards[cardsChosenID[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenID[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenID[0]].removeEventListener('click', flipcard)
        cards[cardsChosenID[1]].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)

    }
    else{
        cards[cardsChosenID[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenID[1]].setAttribute('src', 'images/blank.png')
        alert('sorry: try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenID = []
    if(cardsWon.length == cardArray.length/2)
    {
        resultDisplay.innerHTML = 'congradulations'
    }
}
function flipcard(){

    const card_id = this.getAttribute('data-id')
    cardsChosen.push(cardArray[card_id].name)
    cardsChosenID.push(card_id)
    this.setAttribute('src', cardArray[card_id].img)
    if(cardsChosen.length === 2)
    {
        setTimeout(check_match, 500)
    }
}