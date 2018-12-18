abstract class EntityBase extends Phaser.Sprite {

    /**
     * Create an entity
     * @param game The game instance for which the entity is made.
     * @param x The X coordinate to spawn at.
     * @param y The Y coordinate to spawn at.
     */
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.game.physics.p2.enable(this, false, false);
        this.game.add.existing(this);
    }
}