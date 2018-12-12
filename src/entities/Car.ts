class Car extends EntityBase {

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.updateSprites();
    }

    private updateSprites() {
        this.parent.body.clearShapes();
        this.parent.body.loadPolygon("physics", "New Bitmap Image (2)");

        for (let ii = 0; ii < 2; ii++) {
            for (let jj = 0; jj < 3; jj++) {
                this.parent.addChild(this.game.add.sprite(
                    +15 - jj * 15,
                    -ii * 15,
                    'map',
                    37 * (18 - ii) - 4 - jj
                ));
            }
        }
    }
}