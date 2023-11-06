{
  // oob -class
  class animal {
    name: string;
    specific: string;
    sound: string;

    constructor(name: string, specific: string, sound: string) {
      this.name = name;
      this.specific = specific;
      this.sound = sound;
    }
    makeSound() {
      console.log(`This ${this.name} says ${this.sound}`);
    }
  }

  const dog = new animal("germany dog", "dog", "gew gew");
  const cat = new animal("persian cat", "Cat", "mew mew");
  dog.makeSound();
}
