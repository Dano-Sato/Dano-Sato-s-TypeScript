class Animal
{
  name: string;
  constructor(theName: string)
  {
    this.name = theName;
  }

  move(distanceInMeters: number = 0)
  {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal 
{
  constructor(name: string) { super(name)}
  move(distanceInMeters = 5)
  {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal
{
  constructor(name: string) { super(name)}
  move(distanceInMeters = 45)
  {
    console.log("히히힝");
    super.move(distanceInMeters);
  }
}

const horse = new Horse("Jane");
horse.move(10);

