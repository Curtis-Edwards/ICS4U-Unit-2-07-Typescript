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
    super(color, maxSpeed)
    this.cadence = 0
  }

  /*
  * Gets the cadence.
  */
  public get cadence() {
    return this.cadence
  }

  /*
  * Sets the LicensePlateNumber.
  */
  public set cadence(cadence: number) {
    this.cadence = value
  }

  /*
  * The method status method.
  */
  public status() {
    super.status()
    console.log(" -> Cadence: " + this.cadence)
  }

  /*
  * The accelerate method.
  */
  public accelerate(appliedPower: number) {
    this.cadence = this.cadence + appliedPower
  }

  /*
  * The ringBell method.
  */
  public ringBell() {
    console.log("Ding ding!\n")
  }
}
