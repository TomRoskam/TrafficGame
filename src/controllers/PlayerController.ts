class PlayerCarController extends EntityControllerBase {
    cursors: Phaser.CursorKeys;
    constructor(ent: Car) {
        super(ent);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update(): void {
        if (this.cursors.right.justDown)
            if (((<Car>this.entity).orientation += 1) >= 4)
                (<Car>this.entity).orientation = 0;

        if (this.cursors.left.justDown)
            if (((<Car>this.entity).orientation += 1) <= -1)
                (<Car>this.entity).orientation = 0;
    }
}