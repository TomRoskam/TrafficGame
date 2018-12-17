abstract class EntityControllerBase {
    protected game: Phaser.Game;
    protected entity : EntityBase;

    /**
     * A controller for an entity. E.G. an AI or a player controller of sorts.
     * @param ent The entity to make a controller for.
     */
    constructor(ent: EntityBase){
        this.entity = ent;
        this.game = ent.game;
    }

    /**
     * A method that's called every game update.
     */
    abstract update(): void;
}