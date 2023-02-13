import Mammal from "../mammal.js";

export default class Human extends Mammal {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.speaks = true;
    this.hasFur = false;
    this.Consciousness = true;
  }
}
