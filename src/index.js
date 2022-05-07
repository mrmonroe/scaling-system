import Phaser from 'phaser';
import SceneA from './scenes/SceneA.js';
import version from '../package.json';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  parent: 'thegame',
  scene: [SceneA],
  title: 'The Game',
  version,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
    },
  },
  scale: {
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
