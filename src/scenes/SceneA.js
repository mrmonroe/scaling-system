/* eslint-disable no-unused-expressions */
import Phaser from 'phaser';
import tileImage from '../../assets/tilemaps/tiles/tiles.png';
import tileMap from '../../assets/tilemaps/json/sceneA.json';
import botMoveWithFx from '../../assets/bot/move with FX.png';

export default class SceneA extends Phaser.Scene {
  constructor() {
    super();
    this.sceneName = 'Home Field';
    this.platforms;
    this.jumpovers;
    this.winner;
    this.player;
  }

  preload() {
    this.load.spritesheet('robot', botMoveWithFx, {
      frameWidth: 8,
      frameHeight: 8,
    });

    /** *** TILEMAP ********* */
    this.load.image('tiles', tileImage);
    this.load.tilemapTiledJSON('map', tileMap);
    /** *** END TILEMAP ********* */
  }

  create() {
    // const cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('robot', {
        start: 3,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    });

    /** *** TILEMAP ********* */
    console.log(this.cache.tilemap.entries);
    const map = this.make.tilemap({
      key: 'map',
      tileWidth: 8,
      tileHeight: 8,
    });

    const tileset = map.addTilesetImage('tiles');

    this.platforms = map.createLayer('Platforms', tileset, 0, 0).setScale(4); // layer index, tileset, x, y
    this.jumpovers = map.createLayer('Jumpovers', tileset, 0, 0).setScale(4); // layer index, tileset, x, y
    this.winner = map.createLayer('Winner', tileset, 0, 0).setScale(4); // layer index, tileset, x, y
    this.platforms.setDepth(1);
    this.jumpovers.setDepth(0);
    this.winner.setDepth(0);
    /** *** END TILEMAP ********* */
    this.add.text(16, 16, 'Arrow keys to move', {
      fontSize: '18px',
      fill: '#ffffff',
    });

    this.player = this.physics.add
      .sprite(300, 450, 'robot')
      .setScale(2)
      .setBounce(0.1)
      .setCollideWorldBounds(true)
      .play('right');

    this.physics.add.collider(this.player, this.platforms, this.playerLand());
    // this.physics.add.collider(this.player, this.jumpovers);
  }

  static update() {
    console.log('update');
  }

  playerLand() {
    // eslint-disable-next-line no-undef
    this.player.setVelocity(0, 0);
  }
}
