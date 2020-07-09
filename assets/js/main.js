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
    win() {
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
        this.totalScore = 1000;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        /*all the cards matched throughout the game will be pushed into this array in order to check against the total cardsArray
        to see if there is a victory or not*/
        this.busy = true;
        setTimeout(() => {
            this.music.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        //setTimeout exists to create a smoother start of the game once the page is loaded or there is a game over/victory
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.scorer.innerText = this.totalScore;
        //reset both the score and time when a new game starts
 
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('flip');
        });
    }

    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.totalScore -=20;
            this.scorer.innerText = this.totalScore;
            card.classList.add('flip');

            if(this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if(this.matchedCards.length === this.cardsArray.length)
            this.win(); 
    }
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            this.busy = false;
        }, 750);
    }

    getCardType(card) {
        return card.getElementsByClassName('card-front')[0].src;
    }
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
        /* this makes the function be called every 1000 miliseconds (1 second), since the user has 60 sec to finish to game,
        once the countDown reaches 0 we check for game over and call the gameOver()*/
    }
    gameOver() {
        clearInterval(this.countDown);
        //time stops counting down and it is reset to 60 (initial value) in the startGame()
        this.music.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }
    win() {
        clearInterval(this.countDown);
        //time stops counting down and it is reset to 60 (initial value) in the startGame()
        this.music.win();
        document.getElementById('win-text').classList.add('visible');
    }
 
     shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
        /* Fisher and Yates shuffle algorithm - 1st we loop through the array backwards, 2st we create a random float 
        between 0 and 1 (not 1 inclusive) multiplied by i+1 - the number we get is rounded down (so we get a random integer), 
        3rd as we are using css grid we are using the order css grid property therefore we are not shuffling the array itself
         but instead shuffling the order of the cards the way it's being displayed*/
    }

    canFlipCard(card) {
        
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
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

start();


