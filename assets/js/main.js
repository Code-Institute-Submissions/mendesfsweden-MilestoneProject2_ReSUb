class Music {
    constructor() {
        this.gameSound = new Audio('assets/audio/game-song.mp3');
        this.winSound = new Audio('assets/audio/win-sound.wav');
        this.gameOverSound = new Audio('assets/audio/game-over-sound.wav');
    }

    /**
     * play game song
     */
    startMusic() {
        this.gameSound.play();
    }
    /**
     * Pauses the song and set 
     */
    stopMusic() {
        this.gameSound.pause();
        // currentTime property sets the song back to the begining
        this.gameSound.currentTime = 0;
    }

    playWinSound() {
        this.stopMusic();
        this.winSound.play();
    }

    playgameOverSound() {
        this.stopMusic();
        this.gameOverSound.play();
    }

    mute() {
        this.gameSound.muted = true;
        this.winSound.muted = true;
        this.gameOverSound.muted = true;
    }

    unmute() {
        this.gameSound.muted = false;
        this.winSound.muted = false;
        this.gameOverSound.muted = false;
    }
}

/**
 * MarioMatch contains all the game logic
 */
class MarioMatch {
    constructor(totalTime, cards) {
        this.totalTime = totalTime;
        this.cards = cards;
        this.timeLeft = totalTime;
        this.time = document.getElementById('remaining-time');
        this.score = document.getElementById('score');
        this.music = new Music();
    }

    startGame() {
        this.cardToCheck = null;
        this.totalScore = 1000;
        this.timeLeft = this.totalTime;
         /*all the cards matched throughout the game will be pushed into 
        this array in order to check against the total cardsArray
        to see if there is a victory or not*/
        this.matchedCards = [];
        this.flipping = true;
        /*setTimeout exists to create a smoother start of the game 
        once the page is loaded or there is a game over/victory*/
        setTimeout(() => {
            this.music.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.flipping = false;
        }, 500);
        this.cards.forEach(card => card.classList.remove('flip'));
        //reset both the score and time when a new game starts
        this.time.innerText = this.timeLeft;
        this.score.innerText = this.totalScore;
    }

    /**
     * Flips the card if not flipped yet 
     * @param {Element} card - the card to flip
     */
    flip(card) {
        if (!this.canFlip(card)) return;
        this.totalScore -= 20;
        this.score.innerText = this.totalScore;
        card.classList.add('flip');

        if (this.cardToCheck) this.checkMatch(card);
        else this.cardToCheck = card;
    }

    checkMatch(card) {
        if (this.getType(card) === this.getType(this.cardToCheck))
            this.cardsMatched(card, this.cardToCheck);
        else 
            this.cardsMisMatched(card, this.cardToCheck);
        this.cardToCheck = null;
    }

    cardsMatched(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if (this.matchedCards.length === this.cards.length)
            this.win();
    }

    cardsMisMatched(card1, card2) {
        this.flipping = true;
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            this.flipping = false;
        }, 750);
    }

    getType(card) {
        return card.getElementsByClassName('card-front')[0].src;
    }

    startCountDown() {
        return setInterval(() => {
            this.timeLeft--;
            this.time.innerText = this.timeLeft;
            if (this.timeLeft === 0)
                this.gameOver();
        }, 1000);
        /* this makes the function be called every 1000 miliseconds (1 second), since the user has 60 sec to finish to game,
        once the countDown reaches 0 we check for game over and call the gameOver()*/
    }

    gameOver() {
        //time stops counting down and it is reset to 60 (initial value) in the startGame()
        clearInterval(this.countDown);
        this.music.playgameOverSound();
        document.getElementById('game-over-text').classList.add('visible');
    }

    win() {
        //time stops counting down and it is reset to 60 (initial value) in the startGame()
        clearInterval(this.countDown);
        this.music.playWinSound();
        document.getElementById('win-text').classList.add('visible');
    }

    shuffleCards() {
        //loop through the array backwards due performance 
        for (let i = this.cards.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            this.cards[randomIndex].style.order = i;
            this.cards[i].style.order = randomIndex;
        }
        /* Fisher and Yates shuffle algorithm - 1st we loop through the array backwards, 2st we create a random float 
        between 0 and 1 (not 1 inclusive) multiplied by i+1 - the number we get is rounded down (so we get a random integer), 
        3rd as we are using css grid we are using the order css grid property therefore we are not shuffling the array itself
         but instead shuffling the order of the cards the way it's being displayed*/
    }

    /**
     * Verifies if card can be flipped
     * @param {Element} card - the card to be checked
     * @returns {boolean} tells if the card can be flipped or not
     */
    canFlip(card) {
        /* Includes(card) call comes last due to effectiveness.
        It verifies first the other two conditions that are faster
        to check*/ 
        return !(this.flipping || card === this.cardToCheck || this.matchedCards.includes(card));
    }

    restartGame() {
        //time stops counting down and it is reset to 60 (initial value) in the startGame()
        clearInterval(this.countDown);
        this.music.stopMusic();
        this.startGame();
    }

    muteMusic() {
        this.music.mute();
    }

    unmuteMusic() {
        this.music.unmute();
    }
}

function start() {

    const btns = Array.from(document.querySelectorAll('div.cover-text button'))

    const cards = Array.from(document.getElementsByClassName('card'));
    // creates an array of the elements with a class name of "card"

    const game = new MarioMatch(60, cards);
    //creates instance of the MarioMatch object

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            game.startGame();
            btn.parentElement.classList.remove('visible')
        })
    })

    /*loops through each element and on a click event it removes the class "visible" - 
    this happens when the game starts, when the user loses or when the user wins - the clicking event 
    also calls the startGame() function, initializing the game */

    cards.forEach(card => card.addEventListener('click', MarioMatch.prototype.flip.bind(game, card)));
    //loops through each element and on a click event it calls the flipcard() function, fliping the card clicked -
    document.getElementById('restart').addEventListener('click', MarioMatch.prototype.restartGame.bind(game));

    const muteBtn = document.getElementById('mute');

    muteBtn.addEventListener('click', () => {
        if (muteBtn.innerText === 'Mute') {
            game.muteMusic();
            muteBtn.innerText = 'Unmute';
        }
        else {
            game.unmuteMusic();
            muteBtn.innerText = 'Mute';
        }
    })
}

document.addEventListener('DOMContentLoaded', start)
