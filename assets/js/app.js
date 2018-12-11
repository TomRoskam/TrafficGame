console.log("I LIVE");
window.onload = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
    function preload() {
        game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 81, 65, 16);
    }
    function create() {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
};
//# sourceMappingURL=app.js.map