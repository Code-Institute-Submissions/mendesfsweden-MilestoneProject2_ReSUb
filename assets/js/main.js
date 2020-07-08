class Music {
    constructor() {
        this.gameSong = new Audio('assets/audio/game-song.mp3');
        this.winSound = new Audio('assets/audio/win-sound.wav');
        this.gameOverAudio = new Audio('assets/audio/game-over-sound.wav');
    }
    startMusic() {
        this.gameSong.play();
        //play the game song
    }
    stopMusic() {
        this.gameSong.pause();
        this.gameSong.currentTime = 0;
        /*pause() - pauses the song - there is no stop function for the Audio object in JS - 
        then use the Audio currentTime property to set the song back to the begining/to 0 for when the user restarts the game*/
    }
    victory() {
        this.stopMusic();
        this.winSound.play();
        //once the user wins,first the stopMusic() is called to pause the game song and only after the winSound() is called
    }
    gameOver() {
        this.stopMusic();
        this.gameOverAudio.play();
        //once the user loses, first the stopMusic() is called to pause the game song and only after the gameOverAudio() is called
    }
}

class MarioMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        /* above this comment are the properties of the object set from the constructor
        under the comment are all the properties set dinamically*/
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('remaining-time');
        this.scorer = document.getElementById('score');
        this.music = new Music();
    }
    startGame() {
        this.cardToCheck = null;
        this.totalScore = 100;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        /*all the cards matched throughout the game will be pushed into this array in order to check against the total cardsArray
        to see if there is a victory or not*/
        this.busy = true;
        



        
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
        });
    }

    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalScore--;
            this.scorer.innerText = this.totalScore;
            card.classList.add('flip');
        }
    }
 
    canFlipCard(card) {
        return true;
        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
        // allows or not the user to flip the card - all 3 statements have to be true in order to flip the card 
    }
    
}


function start() {
    let covers = Array.from(document.getElementsByClassName('cover-text'));
        // creates an array of the elements with a class name of "cover-text"

    let cards = Array.from(document.getElementsByClassName('card'));
        // creates an array of the elements with a class name of "card"

    let game = new MarioMatch(60, cards);
        //creates instance of the MarioMatch object

    covers.forEach(cover => {
        cover.addEventListener('click', () => {
            cover.classList.remove('visible');
            game.startGame();
        });
    });
        /*loops through each element and on a click event it removes the class "visible" - 
        this happens when the game starts, when the user loses or when the user wins - the clicking event 
        also calls the startGame() function, initializing the game */

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
        //loops through each element and on a click event it calls the flipcard() function, fliping the card clicked -
    
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start());
} else {
    start();
}
