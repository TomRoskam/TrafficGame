console.log("I LIVE");

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, './assets/images/grass.png', { preload: preload, create: create });

    function preload() {

        game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 16, 16, -1, 0, 1, 0);

    }

    function create() {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'map', 710);
        logo.anchor.setTo(0.5, 0.5);

        game.stage.backgroundColor = "#43a011"
        // var mysprite = this.game.add.sprite(15, 30, 'map');
        // mysprite.frame = 3;

    }
}