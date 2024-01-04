/**
 * Represents a Currency.
 */
export default class Currency {
  /**
   * Creates a new Currency
   * @param {String} code - The currency code
   * @param {String} name - The currency name
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Getter and SEtter for 'code'
   */
  get code() {
    return this._code;
  }
  set code(value) {
    this._code = value;
  }

  /**
   * Getter and Setter for 'name'
   */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
