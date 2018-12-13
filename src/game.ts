console.log("I LIVE");

window.onload = function () {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(window.innerWidth, (24960*0.127)-550, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

    function preload() {
    
        game.load.image('map', './assets/map/map.jpg');
        
    
    }
    
    function create() {
    
        //  This simply creates an Image using the picture we loaded above and positions it at 100 x 100
    
        //  The difference between an Image and a Sprite is that you cannot animate or add a physics body to an Image
        console.log("test");
        var map = game.add.image(0, -550, 'map');map.scale.setTo(0.127,0.127);
        
    
    }
}