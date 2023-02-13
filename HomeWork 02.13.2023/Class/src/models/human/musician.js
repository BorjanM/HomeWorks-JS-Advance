import Human from "./human.js";
export default class Musician extends Human {
  constructor(name, age, gender) {
    super(name, age, gender);

    this.numberOfLegs = 2;
    this.barks = false;
    this.goToMusicianShool = true;
    this.hasHelmet = false;
    this.isSigning = true;
  }

  music() {
    this.musicType = `house`;

    console.log(
      `I love ${this.musicType} music`
    );
  }
}