/*
 * Bike class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-13
 */
import { Vehicle } from "./Vehicle"


export class Bike extends Vehicle {
  // variables
  private cadence: number

  /*
  * Constructor.
  */
  constructor(color: String, maxSpeed: number) {
    super(color, maxSpeed, speed)
    this.cadence = 0
    // how to get speed here???
  }

  /*
  * This method gets the cadence.
  */
  public get cadence() {
    return this.cadence
  }

  /*
  * This method sets the LicensePlateNumber.
  */
  public set cadence(cadence: number) {
    this.cadence = value
  }

  /*
  * This method shows the status of the truck
  */
  public status() {
    console.log(" -> Speed: " + this._speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Color: " + this.color)
    console.log(" -> Cadence: " + this.cadence)
  }

  /*
  * The Acceelerate method.
  */
  public Acceelerate(appliedPower: number) {
    this.speed = this.cadence + appliedPower
  }

  /*
  * The ringBell method.
  */
  public ringBell(appliedPower: number) {
    console.log("Ding ding!\n")
  }
}
