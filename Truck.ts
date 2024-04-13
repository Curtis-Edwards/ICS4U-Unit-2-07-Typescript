
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
  * Constructor
  */
  constructor(LicensePlateNumber: String) {
    this.LicensePlateNumber = LicensePlateNumber
  }

  /*
  * This method gets the LicensePlateNumber
  */
  public get LicensePlateNumber() {
    return this.LicensePlateNumber
  }

  /*
  * This method sets the LicensePlateNumber
  */
  public set LicensePlateNumber(value: String) {
    this.LicensePlateNumber = value
  }

  /*
  * This method changes the speed via the accelerating formula
  */
  public accelerate(accelerationPower: number, accelerationTime) {
    this._speed = (accelerationPower * accelerationTime) + this._speed
    // check if speed exceeds max speed 
    if (this._speed > this.maxSpeed) {
      this._speed = this.maxSpeed
    }
  }

}
