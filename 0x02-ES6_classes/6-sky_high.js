import Building from './5-building';

/**
 * REpresents a SkyHighBuilding extending Building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding
   * @param {Number} sqft
   * @param {Number} floors
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
