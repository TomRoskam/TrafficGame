class Level extends Phaser.State {

    private car: Car;
    private cursors: Phaser.CursorKeys;

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

        this.game.load.image('map', './assets/map/map4MP.jpg');
        // this.game.load.image('carGreen', './assets/entities/carGreenHorRight.png');

        this.game.load.physics(
            "physics",
            "./assets/js/physics.json"
        );
    }

    create() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.add.sprite(0, 0, "map");

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.car = this.createCar();
        this.car.body.damping = 1;

        this.game.camera.follow(this.car, Phaser.Camera.FOLLOW_TOPDOWN, 0.1, 0.1);
        this.game.world.setBounds(0, 0, 1920 - 450 - 3, 3000 - 275);

    }

    private speed = 10;
    update() {
        if (this.cursors.right.isDown)  this.car.body.x += this.speed;
        if (this.cursors.left.isDown)   this.car.body.x -= this.speed;
        if (this.cursors.down.isDown)   this.car.body.y += this.speed;
        if (this.cursors.up.isDown)     this.car.body.y -= this.speed;
    }

    render() {
    }


    /**
     * Custom methods 
     * 
     * 
     * 
     */

    private createCar() {
        return new Car(this.game, 400, 890);
    }
}