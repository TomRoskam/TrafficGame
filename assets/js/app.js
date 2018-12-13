console.log("I LIVE");
window.onload = function () {
    var game = new Phaser.Game(window.innerWidth, (24960 * 0.127) - 550, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
    function preload() {
        game.load.image('map', './assets/map/map.jpg');
    }
    function create() {
        console.log("test");
        var map = game.add.image(0, -550, 'map');
        map.scale.setTo(0.127, 0.127);
    }
};
//# sourceMappingURL=app.js.map