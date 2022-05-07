export default class Player {
  /**
   * Player base class extends ellipse. Body of player is a circle from Ellipse class.
   * @param {Phaser.Scene} scene - Scene passed to Player instance for other f(x)
   * @param {number} locX - starting x location
   * @param {number} locY - starting y location
   * @param {string} name - name of the player
   * @param {number} lives - starting number of lives
   */
  constructor(scene, locX, locY, name = 'Player 1', lives = 3) {
    this.color = 0xffffff;
    this.name = name;
    this.score = 0;
    this.lives = lives;
    this.health = 100;
    this.alive = true;
    this.height = 10;
    this.width = 10;
    this.wheel = scene.add.ellipse(
      locX,
      locY,
      this.width,
      this.height,
      this.color
    );
    this.speed = 100;
    scene.physics.add.existing(this.wheel, false);
    this.wheel.body.setBounce(0.2);
    this.wheel.body.setCollideWorldBounds(true, 0.2, 0.2);
  }

  playerMove(state) {
    switch (state) {
      case 'Left':
        this.wheel.body.setVelocityX(-this.speed);
        break;
      case 'Right':
        this.wheel.body.setVelocityX(this.speed);
        break;
      case 'Jump':
        this.wheel.body.setVelocityY(-this.speed);
        break;
      case 'Down':
        this.wheel.body.setVelocityY(this.speed);
        break;
      default:
        break;
    }
  }

  playerHit() {
    this.health !== 0 ? (this.health -= 10) : this.playerDie();
  }

  playerDie() {
    this.alive = false;
  }
  /**
   * @return {Player} A Player Object
   */
}
