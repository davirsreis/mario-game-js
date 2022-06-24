const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scenery = document.querySelector('.scenery');
const startboard = document.querySelector('.start-game');
const restartboard = document.querySelector('.end-game');
const audioJump = document.querySelector('.jump-audio');
const audioGameOver = document.querySelector('.game-over-audio');
const audioThemeSong = document.querySelector('.theme-song-audio');
const btJump = document.querySelector('.button-jump');
const scoreboard = document.querySelector('.score-board');
let score = document.querySelector('.score-count'); 

const start = () => {
    pipe.classList.add('pipe-animation');
    startboard.style.display = 'none';
    btJump.style.display = 'flex';
    scoreboard.style.display= 'flex';
    audioThemeSong.volume = 0.1;
    audioThemeSong.play();
    Score(30)
}

const restart = () => {
    location.reload();
}

const jump = () => {
    mario.classList.add('jump');
    audioJump.currentTime = 0.2;
    audioJump.volume = 0.1;
    audioJump.play();

    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 500) 
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const sceneryPosition = scenery.offsetLeft;

    if (pipePosition <= 120 && marioPosition < 100 && pipePosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        scenery.style.animation = 'none';
        scenery.style.left = `${sceneryPosition}px`

        restartboard.style.display = 'flex';

        audioGameOver.currentTime = 0.2;
        audioGameOver.volume = 0.2;
        audioGameOver.play();
        audioThemeSong.remove();
        btJump.style.display = 'none';

        clearInterval(loop);

        max=limit;

    }

    
}, 10)


document.addEventListener('keydown', jump);

var limit = 0;
var max = 100000;

function Score(delay) {
    if (![10,20,30].includes(delay)){delay = 1;};
    finalDelay = 1 / delay;

    const msDelay = finalDelay * 1_000;
    if (limit < max) {
        score.innerHTML=limit;
        limit++;
        return setTimeout(() => Score(delay), msDelay)
    };
};


