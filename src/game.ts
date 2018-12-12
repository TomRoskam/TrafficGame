class Game {
    private game:Phaser.Game;
    private car:Car;
    private cursors: Phaser.CursorKeys;

    constructor(width: number, height: number){
        this.game = new Phaser.Game(
            width,
            height,
            Phaser.AUTO,
            '',
            {
                preload: this.preload,
                create: this.create,
                update: this.update,
                render: this.render
            },
            false
        );
        
    }

    private preload = () => {
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

    private create = () => {

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.car = this.createCar();
    }

    private update = () => {
        if (this.cursors.left.isDown)
        {
            // sprite.body.rotateLeft(12);
        }
        else if (this.cursors.right.isDown)
        {
            // sprite.body.rotateRight(12);
        }

        if (this.cursors.up.isDown)
        {
            this.car.getParentSprite().body.thrustLeft(20);
        }
        else if (this.cursors.down.isDown)
        {
            this.car.getParentSprite().body.thrustRight(20);
        }
    }
    private render = () => {
        this.game.debug.text(this.car.getParentSprite().body.rotation, 30, 30);
    }

    private createCar() {
        return new Car(this.game, this.game.width / 2, this.game.height / 2);
    }
}



window.onload = function () {
    const game = new Game(window.innerWidth, window.innerHeight);
}