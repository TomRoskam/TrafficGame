class Boot extends Phaser.State {

    preload() {
        this.game.load.spritesheet(
            'map', 
            './assets/images/CityPack/Spritesheet/map.png',
            16,
            16,
            -1,
            0,
            1
        );
        this.game.load.physics("physics", "./assets/js/physics.json")
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        const car = new Car(this.game, 500, 500);
    }

    update() {
        
    }

    render() {
    }
}