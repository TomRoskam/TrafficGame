class Level extends Phaser.State {

    private car:Car;
    private mapScale: number;
    private speed: number;
    private map: any;
     
    preload() {
        this.game.load.spritesheet(
            'sprite', 
            './assets/images/CityPack/Spritesheet/map.png',
            16,
            16,
            -1,
            0,
            1
        );
        this.game.load.image('map', './assets/map/map.jpg');
        this.game.load.image('carGreen', './assets/entities/carGreenHorRight.png');
        
        this.game.load.physics(
            "physics",
            "./assets/js/physics.json"
        );
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.car = this.createCar();

        this.mapScale = 0.0000737 * innerWidth;
        this.speed = 10;
        console.log("test");
        this.map = this.game.add.image(0, 0, 'map'); 
        this.map.scale.setTo(this.mapScale,this.mapScale);
        console.log(this.speed);

        this.game.camera.atLimit
       // this.game.camera.follow(this.car);
        this.game.world.setBounds(0, 0, 1920, 1920);

    }

    update() {

    }

    render() {
        this.game.debug.cameraInfo(this.game.camera, 100,100);
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