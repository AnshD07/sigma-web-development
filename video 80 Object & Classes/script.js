let animal = {
    eats:true,
    walk:function(){
        console.log("yes animal can walk");
    }
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal  //! adding property of animal object to rabbit obj becase rabbit also an animal

//* set rabbit prototype 
//? What is prototype ======> addition property of object
console.log(rabbit);


class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
        console.log("object is created..........");
    }

    greet(){
        console.log(`hey everyone this is my class animal i am one of them ${this.name} and my age is ${this.age}`); 
    }
}

let Horse = new Animal("charli", 12)
console.log(Horse.greet());


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("i am lion ....");
    }

}

let l = new Lion("shera")
console.log(l);