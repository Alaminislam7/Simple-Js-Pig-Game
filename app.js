
var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
        //1.Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Updated the round score IF the roll number was not a 1
        if( dice !== 1){
            //add score
            roundScroe += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScroe;
        }else{
            //Next player
            nextPlayer();
        }


});


document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add current score to global score
    scores[activePlayer] += roundScroe;

    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //cheack if player won the game
    if( scores[activePlayer] >= 20 ){
        document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
        //Next player
        nextPlayer();
    }
});


function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScroe = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
    scores = [ 0, 0];
    roundScroe = 0;
    activePlayer = 0;
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}






/* document.querySelector('#current-' + activePlayer).textContent = disc;
var x = document.querySelector('#score-0').textContent;
console.log(x); */



