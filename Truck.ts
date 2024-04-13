
/*
 * Truck class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-13
 */
import { Vehicle } from "./Vehicle"


export class Truck extends Vehicle {
  // variables
  private LicensePlateNumber: string

  /*
  * Constructor.
  */
  constructor(LicensePlateNumber: String) {
    this.LicensePlateNumber = LicensePlateNumber
  }

  /*
  * This method gets the LicensePlateNumber.
  */
  public get LicensePlateNumber() {
    return this.LicensePlateNumber
  }

  /*
  * This method sets the LicensePlateNumber.
  */
  public set LicensePlateNumber(value: String) {
    this.LicensePlateNumber = value
  }

  /*
  * This method shows the status of the truck
  */
  public status() {
    console.log(" -> Speed: " + this._speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Color: " + this.color)
    console.log(" -> License Plate: " + this.LicensePlateNumber)
  }

  /*
  * The applyAir method.
  */
  public applyAir(airPressure: number) {
    this.speed = this.speed - airPressure / 2
    // Can't have negative speed
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
