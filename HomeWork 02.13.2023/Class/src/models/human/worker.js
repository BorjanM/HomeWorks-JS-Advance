import Human from "./human.js";

export default class Worker extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.numberOfLegs = 2;
    this.barks = false;
    this.goToWork = true;
    this.hasHelmet = true;
    this.hasTool = true;
    
  }
}
