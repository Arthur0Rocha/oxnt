
var cdim = {x: 800, y: 600};
var vel = 300;
var ppos = {x: cdim.x/2, y: cdim.y*9/10};
var epos = {x: cdim.x/2, y: cdim.y/10};
var cursors;
var player;
var enemy;

window.onload = ()=>{
    var config = {
        type: Phaser.AUTO,
        backgroundColor:0x00af00,
        scale: {
            parent: 'game-exemplo1',
            width: cdim.x,
            height: cdim.y
        },
        physics: {
            default: 'arcade'
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    window.focus();
}

function preload () {
    this.load.image('player_shape', 'images/player.png');
    this.load.image('enemy_shape', 'images/enemy.png');
}
function create () {
    cursors = this.input.keyboard.createCursorKeys();
    enemy = this.physics.add.image(epos.x, epos.y, 'enemy_shape');
    player = this.physics.add.image(ppos.x, ppos.y, 'player_shape');
    player.setCollideWorldBounds(true);
}
function update ()
{
    player.setVelocity(0);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-vel);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(vel);
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-vel);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(vel);
    }
}


