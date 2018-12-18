class Car extends EntityBase {
    private lastOrientata: number;
    public orientation = 0;
    private controller: EntityControllerBase;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.updateSprites();
     
        this.controller = new PlayerCarController(this);
        this.body.clearShapes();
        this.body.loadPolygon("physics", "New Bitmap Image (2)"); //Something wrong
    }

    update(){
        super.update();
        
        this.controller.update();

        this.body.rotation = 0;

        // this.updateSprites();
    }

    private updateSprites() {
        //Get the orientation in 4 possible states(0 and 4 are the same state)
        const orientata = this.orientation;

        //Only reset all sprites if orientation is actually different.
        if (orientata !== this.lastOrientata){
            this.removeChildren();
            if (orientata === 0 || orientata === 4){
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 3; jj++) {
                        this.addChild(this.game.add.sprite(
                            +15 - jj * 15,
                            -ii * 15,
                            'sprite',
                            37 * (18 - ii) - 4 - jj
                        ));
                    }
                }
                
            } else if (orientata === 1) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 2; jj++) {
                        this.addChild(this.game.add.sprite(
                            +15 - jj * 15,
                            -ii * 15,
                            'sprite',
                            37 * (20 - ii) - 5 - jj
                        ));
                    }
                }
            } else if (orientata === 2) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 3; jj++) {
                        this.addChild(this.game.add.sprite(
                            +15 - jj * 15,
                            -ii * 15,
                            'sprite',
                            37 * (18 - ii) - 1 - jj
                        ));
                    }
                }
            } else if (orientata === 3) {
                for (let ii = 0; ii < 2; ii++) {
                    for (let jj = 0; jj < 2; jj++) {
                        this.addChild(this.game.add.sprite(
                            +15 - jj * 15,
                            -ii * 15,
                            'sprite',
                            37 * (20 - ii) - 3 - jj
                        ));
                    }
                }
            }

            //Save last orientation
            this.lastOrientata = orientata;
        }
    }
}