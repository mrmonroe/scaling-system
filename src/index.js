import Phaser from 'phaser';
import SceneA from './scenes/SceneA.js';
import version from '../package.json';

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 680,
  backgroundColor: '#000000',
  parent: 'thegame',
  scene: [SceneA],
  title: 'The Game',
  version,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  banner: {
    text: '#ffffff',
    background: ['#fff200', '#38f0e8', '#00bff3', '#ec008c'],
    hidePhaser: true,
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
