const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const time_left = document.querySelector('#time-left')
const score = document.querySelector('#score')
//const restart = document.querySelector('#restart')

let result = 0
let hitPosition
let current_time = 11
let timerID = null
function random_square()
{
    squares.forEach(square=>{
        square.classList.remove('mole')
    })
    let random_square= squares[Math.floor(Math.random()*9)]
    random_square.classList.add('mole')

    hitPosition = random_square.id
}
squares.forEach(square=>{
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null

        }
    })
})
function moveMole()
{

    timerID= setInterval(random_square, 500)
}
moveMole()
function countDown(){
    current_time--
    time_left.textContent = current_time

    if(current_time == 0){
        clearInterval(countDownTimerID)
        clearInterval(timerID)
        alert('GAME OVER! Your final score is '+ result)
    }
}
let countDownTimerID = setInterval(countDown, 500)
//restart.addEventListener('click', Restart())
function restart(){
    window.location.reload("restart")
  }