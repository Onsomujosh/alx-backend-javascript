import Car from './10-car';

/**
 * Represents an EVcar extending Car
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   * @param {String} range
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
