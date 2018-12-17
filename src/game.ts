class Game extends Phaser.Game {

    constructor(width: number, height: number) {
        super(
            width,
            height,
            Phaser.AUTO,
            false,
            null,
            false,
            true,
            null
        );

        this.state.add("boot", Level, true);
    }
}



window.onload = function () {
    const game = new Game(window.innerWidth, window.innerHeight);
}
