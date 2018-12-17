console.log("I LIVE");

class Game {
    game:Phaser.Game;
    private scale:number;
    private speed: number;
    private carGreen1 : any;
    private map:any;


    constructor(){
        this.game = new Phaser.Game(window.innerWidth,window.innerHeight, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update });
   
    }

    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    // console.log(scale);

    preload(){
        this.game.load.image('map', './assets/map/map4MP.jpg');
        this.game.load.image('carGreen', './assets/entities/carGreenHorRight.png');
    }

    create(){
        this.scale = 0.0000737 * innerWidth;
        this.speed = 10;
        console.log("test");
        this.map = this.game.add.image(0, 0, 'map'); 
        this.map.scale.setTo(this.scale,this.scale);
        this.carGreen1 = this.game.add.sprite(4500 * this.scale, (2340 *this. scale), 'carGreen');
        this.carGreen1.scale.setTo(this.scale * 10, this.scale * 10);
        this.carGreen1.anchor.setTo(0.5, 0.5);
        console.log(this.speed);

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.enable(this.carGreen1);
        this.game.camera.atLimit
        this.game.camera.follow(this.carGreen1);

        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.A,
            Phaser.Keyboard.D,
            Phaser.Keyboard.W,
            Phaser.Keyboard.S,
        ]);
    }
   
    update() {
        //this.carGreen1.body.setZeroVelocity();
        this.carGreen1.body.velocity.x = 0;
        this.carGreen1.body.velocity.y = 0;
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this.carGreen1.body.velocity.x = -this.speed;
            this.game.camera.x -= 4;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this.carGreen1.body.velocity.x = this.speed;
            this.game.camera.x += 4;
        }

        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.carGreen1.body.velocity.y = this.speed;
            this.game.camera.y += 4;
        }

        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.carGreen1.body.velocity.y = -this.speed;
            this.game.camera.y -= 4;
        }
    }

    render() {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);

    }
}


window.onload = () => {

    var game = new Game();

};