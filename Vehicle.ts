/*
 * Vehicle class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-13
 */

export class Vehicle {
  // variables
  private color: string
  readonly maxSpeed: number
  readonly speed: number

  /*
  * Constructor
  */
  constructor(color, maxSpeed) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.speed = 0
  }

  /*
  * This method gets the color
  */
  public get color(): string {
    return this.color
  }

  /*
  * This method gets the speed
  */
  public get speed(): number {
    return this.speed
  }

  /*
  * This method gets the max speed
  */
  public get maxSpeed(): number {
    return this.maxSpeed
  }

  /*
  * This method sets the color
  */
  public set color(value) {
    this.color = value
  }

  /*
  * This method changes the speed via the accelerating formula
  */
  public accelerate(accelerationPower, accelerationTime) {
    this.speed = (accelerationPower * accelerationTime) + this.speed
    // check if speed exceeds max speed 
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  /*
  * This method changes the speed via the braking formula
  */
  public break(breakPower, breakTime) {
    this.speed = this.speed - (breakPower * breakTime)
    // check if speed is less than 0, because speed can't be negative! 
    if (this.speed < 0) {
      this.speed = 0
    }
  }
}
