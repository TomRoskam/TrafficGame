class Game extends Phaser.Game {
    constructor(width, height) {
        super(width, height, Phaser.AUTO, false, null, false, true, null);
        this.state.add("boot", Level, true);
    }
}
window.onload = function () {
    const game = new Game(window.innerWidth, window.innerHeight);
};
class EntityBase extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y);
        this.game.physics.p2.enable(this, true, false);
        this.game.add.existing(this);
    }
}
class EntityControllerBase {
    constructor(ent) {
        this.entity = ent;
        this.game = ent.game;
    }
}
class PlayerCarController extends EntityControllerBase {
    constructor(ent) {
        super(ent);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    update() {
        if (this.cursors.right.justDown)
            if ((this.entity.orientation += 1) >= 4)
                this.entity.orientation = 0;
        if (this.cursors.left.justDown)
            if ((this.entity.orientation += 1) <= -1)
                this.entity.orientation = 0;
    }
}
class Car extends EntityBase {
    constructor(game, x, y) {
        super(game, x, y);
        this.orientation = 0;
        this.updateSprites();
        this.controller = new PlayerCarController(this);
        this.body.clearShapes();
        this.body.loadPolygon("physics", "New Bitmap Image (2)");
    }
    update() {
        super.update();
        this.controller.update();
        this.body.rotation = 0;
        this.updateSprites();
    }
    updateSprites() {
        const orientata = this.orientation;
        if (orientata !== this.lastOrientata) {
            this.removeChildren();
            if (orientata === 0 || orientata === 4) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 3; jj++) {
                        this.addChild(this.game.add.sprite(+15 - jj * 15, -ii * 15, 'map', 37 * (18 - ii) - 4 - jj));
                    }
                }
            }
            else if (orientata === 1) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 2; jj++) {
                        this.addChild(this.game.add.sprite(+15 - jj * 15, -ii * 15, 'map', 37 * (20 - ii) - 5 - jj));
                    }
                }
            }
            else if (orientata === 2) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 3; jj++) {
                        this.addChild(this.game.add.sprite(+15 - jj * 15, -ii * 15, 'map', 37 * (18 - ii) - 1 - jj));
                    }
                }
            }
            else if (orientata === 3) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 2; jj++) {
                        this.addChild(this.game.add.sprite(+15 - jj * 15, -ii * 15, 'map', 37 * (20 - ii) - 3 - jj));
                    }
                }
            }
            this.lastOrientata = orientata;
        }
    }
}
class Boot extends Phaser.State {
    preload() {
        this.game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 16, 16, -1, 0, 1);
        this.game.load.physics("physics", "./assets/js/physics.json");
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
class Level extends Phaser.State {
    preload() {
        this.game.load.spritesheet('sprite', './assets/images/CityPack/Spritesheet/map.png', 16, 16, -1, 0, 1);
        this.game.load.image('map', './assets/map/map.jpg');
        this.game.load.image('carGreen', './assets/entities/carGreenHorRight.png');
        this.game.load.physics("physics", "./assets/js/physics.json");
    }
    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.car = this.createCar();
        this.mapScale = 0.0000737 * innerWidth;
        this.speed = 10;
        console.log("test");
        this.map = this.game.add.image(0, 0, 'map');
        this.map.scale.setTo(this.mapScale, this.mapScale);
        console.log(this.speed);
        this.game.camera.atLimit;
        this.game.world.setBounds(0, 0, 1920, 1920);
    }
    update() {
    }
    render() {
        this.game.debug.cameraInfo(this.game.camera, 100, 100);
    }
    createCar() {
        return new Car(this.game, this.game.width / 2, this.game.height / 2);
    }
}
//# sourceMappingURL=app.js.map