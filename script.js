let score0El=document.getElementById('score--0').textContent=0;
let score1El=document.getElementById('score--1').textContent=0;

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores = [0,0]
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore=0;

        if(activePlayer===0){
            activePlayer=1;
        }
        else{
            activePlayer=0;
        }
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
};

const resetToNormal = function(){
    document.querySelector('.dice').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    currentScore=0;
    scores[0] = 0;
    scores[1] = 0;
}


btnRoll.addEventListener('click',function(){
    let value=Math.trunc(Math.random()*6)+1;
    document.querySelector('.dice').textContent=value;
    
    if(value!=1){
        currentScore += value;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
         switchPlayer();

    }
    });

btnHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        alert(`Player${activePlayer+1} Wins🏆`)
        resetToNormal();
        
    }
    else{
        switchPlayer();
    }
    
})

btnNew.addEventListener('click', function (){

    document.querySelector('.dice').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    currentScore=0;
    scores[0] = 0;
    scores[1] = 0;

});
