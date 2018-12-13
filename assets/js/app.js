console.log("I LIVE");
class Game {
    constructor() {
        this.scale = 0.0000737 * innerWidth;
        this.speed = 10;
        this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
    }
    preload() {
        this.game.load.image('map', './assets/map/map4mp.jpg');
        this.game.load.image('carGreen', './assets/entities/carGreenHorRight.png');
    }
    create() {
        console.log("test");
        this.map = this.game.add.image(0, 0, 'map');
        this.map.scale.setTo(0.5, 0.5);
        this.carGreen1 = this.game.add.sprite(4500 * this.scale, (2340 * this.scale), 'carGreen');
        this.carGreen1.scale.setTo(this.scale * 10, this.scale * 10);
        this.carGreen1.anchor.setTo(0.5, 0.5);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(this.carGreen1);
        this.game.camera.follow(this.carGreen1);
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
        ]);
    }
    update() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.carGreen1.x -= this.speed;
            this.game.camera.x -= 4;
            console.log(this.carGreen1.x);
            console.log("<--");
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.carGreen1.x += this.speed;
            this.game.camera.x += 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.carGreen1.y += this.speed;
            this.game.camera.y += 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.carGreen1.y -= this.speed;
            this.game.camera.y -= 4;
        }
    }
    render() {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }
}
window.onload = () => {
    var game = new Game();
};
//# sourceMappingURL=app.js.map