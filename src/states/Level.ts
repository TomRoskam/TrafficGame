class Level extends Phaser.State {

    private car:Car;

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
        
        this.game.load.physics(
            "physics",
            "./assets/js/physics.json"
        );
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.car = this.createCar();
    }

    update() {
        
    }

    render() {
        this.game.debug.text("Rot: "+ this.car.body.rotation, 30, 30);
        this.game.debug.text("X: " + this.car.position.x + "; Y: " + this.car.position.y, 30, 60)
    }
    
    
    /**
     * Custom methods 
     * 
     * 
     * 
     */


    private createCar() {
        return new Car(this.game, this.game.width / 2, this.game.height / 2);
    }
}