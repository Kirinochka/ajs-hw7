class Validator {
  static validateUsername(name) {
    const regexp = /^[A-Za-z]([A-Za-z-_]?([0-9]){0,3})+[A-Za-z]$/g;
    return regexp.test(name);
  }
}

export default Validator;
