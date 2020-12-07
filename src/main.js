const Phaser = require("phaser");

window.onload = () =>
{
    const config = {
        type: Phaser.AUTO,
        width: 500,
        height: 500,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    const game = new Phaser.Game(config);

    function preload()
    {
        this.load.image("logo", "assets/phaser3-logo.png");
    }

    function create()
    {
        this.sprite = this.add.sprite(250, 250, "logo");
    }

    function update()
    {
        this.sprite.angle += 1;
    }
};
