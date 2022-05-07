export default class Platform {
  /**
   * Base class for Platform
   * @param {Phaser.scene} scene - Current scene
   * @param {number} xPos - x origin
   * @param {number} yPos - y origin
   * @param {number} width - width of rectangle
   * @param {number} height - height of rectangle
   * @param {number} xScale - width scaling
   * @param {number} yScale - height scaling
   * @param {boolean} isFloor - Is this a floor/ground platform?
   * @param {number} color - The color of the platform
   * @param {Phaser.Physics.Arcade.StaticGroup} group - Group physics body platform should belong to
   */
  constructor(
    scene,
    xPos = 800,
    yPos = 600,
    width = 800,
    height = 50,
    xScale = 2,
    yScale = 1,
    isFloor = true,
    color = 0x6666ff
  ) {
    // Default floor: 800, 600, 800, 50, 0x6666ff;

    // x, y , length, height, color
    this.rect = scene.add.rectangle(xPos, yPos, width * 2, height, color);
    scene.physics.add.existing(this.rect, true);
  }

  addToGroup(group) {
    group.add(this.rect);
  }
}
