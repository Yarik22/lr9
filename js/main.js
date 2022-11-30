const cardsWorth={
    card:['six','seven','eight','nine','ten','jack','queen','king','ace'],
    points:[6,7,8,9,10,2,3,4,11]
}
let nickname=prompt(`Input your nickname`)
while(nickname==null||nickname.trim()=='')
{
    nickname=prompt(`Input your nickname correctly`)
}
const generate=document.querySelector('.btn')
const attemptsText=document.querySelector('.attempts')
const playerCard=document.querySelector('.playerCard').querySelector('img')
const botCard=document.querySelector('.botCard').querySelector('img')
const points=document.querySelectorAll('.points')
const roundsResult=document.querySelector('.result__text')
let attempts=0
let playerPoints=0
let botPoints=0
document.querySelector('.name').textContent=nickname
generate.addEventListener('click',generateCard)
function generateCard() {
    const values=[Math.floor(Math.random()*9),Math.floor(Math.random()*9)]
    attempts++
    attemptsText.textContent=`${attempts} attempts out of 3`
    playerPoints+=cardsWorth.points[values[0]]
    botPoints+=cardsWorth.points[values[1]]
    points[0].textContent=playerPoints
    points[1].textContent=botPoints
    playerCard.setAttribute('src',`img/${cardsWorth.card[values[0]]}.png`)
    botCard.setAttribute('src',`img/${cardsWorth.card[values[1]]}.png`)
    if(attempts==3){
        generate.style=`display:none`
        if(playerPoints>botPoints){
            roundsResult.textContent=`You win`
            roundsResult.style=`color:green`
        }
        if(playerPoints<botPoints){
            roundsResult.textContent=`You lose`
            roundsResult.style=`color:red`
        }
        if(playerPoints==botPoints){
            roundsResult.textContent=`Draw`
            roundsResult.style=`color:gray`
        }
    }
}
