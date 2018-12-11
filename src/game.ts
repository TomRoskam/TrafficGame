console.log("I LIVE");

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload() {

        game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 16, 16, 16);

    }

    function create() {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        mysprite = this.game.add.sprite(15, 30, 'myguy');
        mysprite.frame = 3;

    }
}