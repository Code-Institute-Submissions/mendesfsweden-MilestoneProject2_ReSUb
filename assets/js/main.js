function start() {
    let covers = Array.from(document.getElementsByClassName('cover-text'));
    //array.from creates an array of the elements with a class name of "cover-text"
    let cards = Array.from(document.getElementsByClassName('card'));
    //array.from creates an array of the elements with a class name of "card"

    covers.forEach(cover => {
        cover.addEventListener('click', () => {
            cover.classList.remove('visible');
            //starGame()
        })
    })
    /*loops through each element and on a click event it removes the class "visible" - 
    this happens when the game starts, when the user loses or when the user wins - the clicking event 
    also calls the startGame() function, initializing the game */
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //flipcard(card)
        })
    })
    //loops through each element and on a click event it calls the flipcard() function, fliping the card clicked - 
    
}

start();



class Audio {
    constructor() {
        this.gameSong = new Audio('');
        this.winAudio = new Audio('');
        this.gameOverAudio = new Audio('');
    }
    startMusic() {
        this.gameSong.play();
    }
    stopMusic() {
        this.gameSong.pause();
        this.gameSong.currentTime = 0;
    }
    victory() {
        this.stopMusic();
        this.winSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverAudio.play();
    }
}