import Phaser from 'phaser';
import Controls from '../Controls.js';
import Platform from '../Platform.js';
import Player from '../Player.js';

export default class SceneA extends Phaser.Scene {
  constructor() {
    super();
    this.controls;
    this.player;
  }
  // preload() {}

  create() {
    // platforms
    this.floor = new Platform(this);
    this.player = new Player(this, 400, 400);

    this.platforms = this.physics.add.staticGroup();
    this.floor.addToGroup(this.platforms);

    this.physics.add.collider(this.player.wheel, this.platforms);

    this.controls = new Controls(this);
  }

  update(time, delta) {
    this.controls.updateControls();
    this.player.playerMove(this.controls.controlState);
  }
}
