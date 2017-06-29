let animal = {
  animalType: 'animal',

  describe () {
    return `An ${this.animalType} with ${this.furColor} fur,
      ${this.legs} legs, and a ${this.tail} tail.`;
  }
};

let mouseFactory = function mouseFactory () {
  return Object.assign(Object.create(animal), {
    animalType: 'mouse',
    furColor: 'brown',
    legs: 4,
    tail: 'long, skinny'
  });
};

let mickey = mouseFactory();

module.exports = mickey;
