document.addEventListener('DOMContentLoaded', start)

class Music {
    constructor() {
        this.gameSound = new Audio('assets/audio/game-song.mp3');
        this.winSound = new Audio('assets/audio/win-sound.wav');
        this.gameOverSound = new Audio('assets/audio/game-over-sound.wav');
    }

    /**
     * Play game sound
     */
    startMusic() {
        this.gameSound.play();
    }
    /**
     * Pauses the sound and set 
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
 * The game requires the user to match all
 * the cards within the total time specificied 
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

    /**
     * Starts a new job that repeats itself every second
     * and updates the timeLeft property
     * @returns the token associated with the job
     */
    startCountDown() {
        return setInterval(() => {
            this.timeLeft--;
            this.time.innerText = this.timeLeft;
            if (this.timeLeft === 0)
                this.gameOver();
        }, 1000);
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
    /**
     * Shuffles the cards using the 
     * Fisher and Yates algorithm 
     */
    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            this.cards[randomIndex].style.order = i;
            this.cards[i].style.order = randomIndex;
        }
    }

    /**
     * Verifies if card can be flipped
     * @param {Element} card - the card to be checked
     * @returns {boolean} tells if the card can be flipped or not
     */
    canFlip(card) {
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
/**
 * Game entry point
 */
function start() {
    const btns = Array.from(document.querySelectorAll('div.cover-text button'))

    const cards = Array.from(document.getElementsByClassName('card'));

    const game = new MarioMatch(60, cards);

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            game.startGame();
            btn.parentElement.classList.remove('visible')
        })
    })

    cards.forEach(card => card.addEventListener('click', MarioMatch.prototype.flip.bind(game, card)));

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
