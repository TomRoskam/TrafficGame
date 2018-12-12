abstract class EntityBase {
    protected game: Phaser.Game;
    protected parent: Phaser.Sprite;

    constructor(game: Phaser.Game, x: number, y: number) {
        this.game = game;
        this.parent = game.add.sprite(x, y);
        this.game.physics.p2.enable(this.parent, false, false);
    }

    public getParentSprite(): Phaser.Sprite {
        return this.parent;
    }
}