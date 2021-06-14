/*function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
      return rect.width * rect.height;
    };
    return rect;
  }
  const myRect=createRect(15,10)
  console.log(myRect);
  console.log(myRect.getArea());
  const getArea=myRect.getArea
  console.log(getArea());
  console.log(getArea);*/
/*class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);
console.log(square.calcArea()); // 100

class Circle {
        constructor(radius) {
         this.radius = radius; 
    }
        get diameter() {
         return 2 * this.radius; 
    }
        set diameter(diameter) {
            this.radius = diameter / 2;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
    }
      var c1=new Circle(100)
      console.log(c1);
    
   //class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // Method
      getArea() {
            return this.height * this.width;
        }
    }
    var r1=new Rectangle(100,200)
console.log(r1);
console.log(r1.getArea());*/

function fly() {
    console.log(this);
}

let hero = {
    name: 'Superman',
    fly: fly,
    laserEyes: function() { //function notation
        console.log(this.name + ' - Shoot lasers');
        console.log(this)
    },
    stopBulets() { //expretion
        console.log(this);
    },
    punch: () => {  //aero
        console.log('Punch');
        console.log(this);
    }
}

hero.laserEyes();
let shootLasers = hero.laserEyes;
shootLasers();
hero.punch()

