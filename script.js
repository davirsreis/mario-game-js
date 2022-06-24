const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scenery = document.querySelector('.scenery');
const startboard = document.querySelector('.start-game');
const restartboard = document.querySelector('.end-game');
const audioJump = document.querySelector('.jump-audio');
const audioGameOver = document.querySelector('.game-over-audio');
const audioThemeSong = document.querySelector('.theme-song-audio');
const btJump = document.querySelector('.button-jump');

const start = () => {
    pipe.classList.add('pipe-animation');
    startboard.style.display = 'none';
    btJump.style.display = 'block';
    audioThemeSong.volume = 0.1;
    audioThemeSong.play();
}

const restart = () => {
    
    location.reload();
    
    /*
    startboard.style.display = 'flex';
    restartboard.style.display = 'none';
    mario.src = './img/mario.gif'
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
    pipe.style.left = '-80px';
    */
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

    }

}, 10)


document.addEventListener('keydown', jump);

