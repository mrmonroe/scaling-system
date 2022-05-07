export default class Controls {
  constructor(scene) {
    this.Direction = {
      IDLE: 'Idle',
      LEFT: 'Left',
      RIGHT: 'Right',
      JUMP: 'Jump',
      DOWN: 'Down',
    };

    this.controlState = this.Direction.IDLE;
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  updateControls() {
    if (this.cursors.left.isDown) {
      this.controlState = this.Direction.LEFT;
    }
    if (this.cursors.right.isDown) {
      this.controlState = this.Direction.RIGHT;
    }

    if (this.cursors.up.isDown) {
      this.controlState = this.Direction.JUMP;
    }
    if (this.cursors.down.isDown) {
      this.controlState = this.Direction.DOWN;
    }
  }
}
