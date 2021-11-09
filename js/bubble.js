// Object-oriented Programming (OOP)

// An object is a collection of key-value pairs (or property-value pairs)

// KEY IDEA: STATE & BEHAVIOUR
// State: values of properties (location, size, color, etc.)
// Behaviour: what the object can do (methods: functions associated with an object)

// Define a Class: a factory for making objects with certain properties and behaviours
// Use Class to make objects: instances of the Class

class Bubble {
  // State (Properties)
  constructor(initX, initY) {
    // constructor will run when the class is used to make a new bubble object
    this.x = initX;
    this.y = initY;
    this.r = randomInt(10, 50);
    this.color = randomRGB();
  }

  // Methods (Behaviour)
  move() {
    this.x += randomDec(-2, 3);
    this.y += randomDec(-2, 3);
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  relocate(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}
