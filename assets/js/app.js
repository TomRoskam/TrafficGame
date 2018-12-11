console.log("I LIVE");
window.onload = function () {
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, './assets/images/grass.png', { preload: preload, create: create });
    function preload() {
        game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 16, 16, -1, 0, 1, 0);
    }
    function create() {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'map', 710);
        logo.anchor.setTo(0.5, 0.5);
        game.stage.backgroundColor = "#43a011";
    }
};
//# sourceMappingURL=app.js.map