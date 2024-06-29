console.log("I am a Tutorial on loops");

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}


let obj = {
    "name": "Ansh",
    rol: "Student",
    college: "rku"
}


for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

for (const c of "AnshDholakiya") {
    console.log(c)
}

let i = 10;

while (i < 6) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 6);  