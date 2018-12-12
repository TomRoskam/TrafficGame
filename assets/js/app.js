class Game {
    constructor(width, height) {
        this.preload = () => {
            this.game.load.spritesheet('map', './assets/images/CityPack/Spritesheet/map.png', 16, 16, -1, 0, 1);
            this.game.load.physics("physics", "./assets/js/physics.json");
        };
        this.create = () => {
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.car = this.createCar();
        };
        this.update = () => {
            if (this.cursors.left.isDown) {
            }
            else if (this.cursors.right.isDown) {
            }
            if (this.cursors.up.isDown) {
                this.car.getParentSprite().body.thrustLeft(20);
            }
            else if (this.cursors.down.isDown) {
                this.car.getParentSprite().body.thrustRight(20);
            }
        };
        this.render = () => {
            this.game.debug.text(this.car.getParentSprite().body.rotation, 30, 30);
        };
        this.game = new Phaser.Game(width, height, Phaser.AUTO, '', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render
        }, false);
    }
    createCar() {
        return new Car(this.game, this.game.width / 2, this.game.height / 2);
    }
}
window.onload = function () {
    const game = new Game(window.innerWidth, window.innerHeight);
};
class EntityBase {
    constructor(game, x, y) {
        this.game = game;
        this.parent = game.add.sprite(x, y);
        this.game.physics.p2.enable(this.parent, false, false);
    }
    getParentSprite() {
        return this.parent;
    }
}
class Car extends EntityBase {
    constructor(game, x, y) {
        super(game, x, y);
        this.updateSprites();
    }
    updateSprites() {
        this.parent.body.clearShapes();
        this.parent.body.loadPolygon("physics", "New Bitmap Image (2)");
        for (let ii = 0; ii < 2; ii++) {
            for (let jj = 0; jj < 3; jj++) {
                this.parent.addChild(this.game.add.sprite(+15 - jj * 15, -ii * 15, 'map', 37 * (18 - ii) - 4 - jj));
            }
        }
    }
}
//# sourceMappingURL=app.js.map