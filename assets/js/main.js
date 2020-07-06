class AudioController {
    constructor() {
        this.bgMusic = new Audio('');
        this.winSound = new Audio('');
        this.gameOverSound = new Audio('');
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    victory() {
        this.stopMusic();
        this.winSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}