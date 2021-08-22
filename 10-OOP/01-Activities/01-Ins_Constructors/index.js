// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function

//the function name must have an upper case to identify it as a constructor 
function Animal(raining, noise) {
  this.raining = raining; // this. is scoped to the parent ...if the parent didnt exist it would be the terminal
  this.noise = noise;
  this.makeNoise = () => {  // you can add a function as an object
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, 'Woof!');  // you have to use new to animal to use it again later
const cats = new Animal(false, 'Meow!');

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);
