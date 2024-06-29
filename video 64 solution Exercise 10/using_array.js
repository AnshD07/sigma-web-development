/* Bussioness name generator */

let first = ["Crazy", "Amazing", "Fire"]
let second = ["Engine", "Foods", "Garments"]
let third = ["Bros", "Limited", "Hub"]


let BussionessNameGenerator = () => {
    first = first[Math.floor(Math.random() * first.length)]
    second = second[Math.floor(Math.random() * second.length)]
    third = third[Math.floor(Math.random() * third.length)]

    return `${first} ${second} ${third}`
}

console.log(BussionessNameGenerator())