export default class Log {
  static info(instanceClass, message) {
    const className = instanceClass.name
    console.log(`[${className}]`, message);
  }

  static warn(instanceClass, message) {
    const className = instanceClass.name
    console.warn(`[${className}]`, message);
  }

  static error(instanceClass, message) {
    const className = instanceClass.name
    console.warn(`[${className}]`, message);
  }
}