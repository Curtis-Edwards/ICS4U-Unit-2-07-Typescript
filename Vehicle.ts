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
  * Constructor.
  */
  constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.speed = 0
  }

  /*
  * Gets the color.
  */
  public get color(): string {
    return this.color
  }

  /*
  * Gets the speed.
  */
  public get speed(): number {
    return this.speed
  }

  /*
  * Gets the max speed.
  */
  public get maxSpeed(): number {
    return this.maxSpeed
  }

  /*
  * Sets the color.
  */
  public set color(value: string) {
    this.color = value
  }

  /*
  * The status method.
  */
  public status() {
    console.log(" -> Speed: " + this.speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Color: " + this.color)
  }

  /*
  * The accelerate method.
  */
  public accelerate(accelerationPower: number, accelerationTime: number) {
    this.speed = (accelerationPower * accelerationTime) + this.speed
    // check if speed exceeds max speed 
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  /*
  * The break method.
  */
  public break(breakPower: number, breakTime: number) {
    this.speed = this.speed - (breakPower * breakTime)
    // check if speed is less than 0, because speed can't be negative! 
    if (this.speed < 0) {
      this.speed = 0
    }
  }
}
