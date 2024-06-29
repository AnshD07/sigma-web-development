function nice(name) {
    return "Parth";
}

console.log("hey i am " + nice() + " Good boy")
console.log("hey i am " + nice() + " kem chho")
console.log("hey i am " + nice() + " shu chale")
console.log("hey i am " + nice() + " mja ma chho nice")


function sum(a, b, c = 2) {
    // console.log(a + b);
    console.log(a, b, c);
    return (a + b + c);
}


result1 = sum(5);
result2 = sum(2, 23);
result3 = sum(1, 4, 1); 

console.log("the sum of this number is: ", result1);
console.log("the sum of this number is: ", result2);
console.log("the sum of this number is: ", result3);


// Arrow Function

const func1 = (x) => {
    console.log("I am a Arrow Function", x)
}

func1(34);
func1(2);
func1(98);  