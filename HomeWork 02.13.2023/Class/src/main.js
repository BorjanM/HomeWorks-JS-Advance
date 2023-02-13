import Animal from "./models/animal/animal.js";
import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";









// console.log('Main class');


// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica('Kiko', 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');

// pudlica1.comeAlive()

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)






// console.log(horse1);


// const starZenskiSarplaninec = new StarZenskiSarplaninec("Lajka", 11);
// console.log(starZenskiSarplaninec);












// od tuka nadole e za domasna

import Human from "./models/human/human.js";
import Musician from "./models/human/musician.js";
import Worker from "./models/human/worker.js";
console.log(Human)
// document.getElementById("button").addEventListener("click", function () {


// const newAnimal = new Animal(`Rex`, 15, `male`);
// console.log(newAnimal);

// const newHorse = new Horse(`Dorco`, 10, `male`);
// console.log(newHorse);

// const newPudlica = new Pudlica(`Mina`, 5, `female`);
// console.log(newPudlica);

// const newSarplaninec = new StarZenskiSarplaninec(`Minka`, 15, `female`);
// console.log(newSarplaninec);

//       console.log("Thats all");
// });

const human = new Human(`borjan`, 30, `male`)
console.log(human);

const worker = new Worker(`borjance`, 30, `male`)
console.log(worker)

const musician = new Musician(`Pero`, 30, `male`);
console.log(musician);
musician.music()


