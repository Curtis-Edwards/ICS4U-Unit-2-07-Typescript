
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
  constructor(color: String, maxSpeed: number, LicensePlateNumber: String) {
    super(color, maxSpeed)
    this.LicensePlateNumber = LicensePlateNumber
  }

  /*
  * Gets the LicensePlateNumber.
  */
  public get LicensePlateNumber(): string {
    return this.LicensePlateNumber
  }

  /*
  * Sets the LicensePlateNumber.
  */
  public set LicensePlateNumber(value: String) {
    this.LicensePlateNumber = value
  }

  /*
  * The status method.
  */
  public status() {
    super.status()
    console.log(" -> License Plate: " + this.LicensePlateNumber)
  }

  /*
  * The applyAir method.
  */
  public applyAir(airPressure: number) {
    this.speed = this.speed - airPressure / 2
    // Can't have negative speed
    if (this.speed < 0) {
      this.speed = 0
    }
  }

  /*
  * The accelerate method.
  */
  public accelerate(accelerationPower: number, accelerationTime: number) {
    super.accelerate(accelerationPower, accelerationTime)
  }
}
