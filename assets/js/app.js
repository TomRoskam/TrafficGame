console.log("I LIVE");
window.onload = function () {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(scale);
    var scale = 0.0000737 * innerWidth;
    var speed = 10;
    var carGreen1;
    var game = new Phaser.Game(window.innerWidth, (24960 * scale) - 5500 * scale, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
    function preload() {
        game.load.image('map', './assets/map/map.jpg');
        game.load.image('carGreen', './assets/entities/carGreenHorRight.png');
    }
    function create() {
        console.log("test");
        var map = game.add.image(0, -5500 * scale, 'map');
        map.scale.setTo(scale, scale);
        carGreen1 = game.add.sprite(4500 * scale, (2340 * scale), 'carGreen');
        carGreen1.scale.setTo(scale * 10, scale * 10);
        carGreen1.anchor.setTo(0.5, 0.5);
        game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.A,
            Phaser.Keyboard.D,
            Phaser.Keyboard.W,
            Phaser.Keyboard.S,
        ]);
    }
    function update() {
        carGreen1.body.setZeroVelocity();
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            carGreen1.body.velocity.x -= 10;
            console.log(carGreen1.x);
            console.log("<--");
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            carGreen1.body.velocity.x += 10;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            carGreen1.y += 10;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            carGreen1.y -= 10;
        }
    }
    function render() {
        game.debug.cameraInfo(game.camera, 32, 32);
    }
};
//# sourceMappingURL=app.js.map