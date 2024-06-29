
 
let a = Math.ceil(Math.random()*3)  ;
let b = Math.ceil(Math.random()*3)  ;
let c = Math.ceil(Math.random()*3)  ;
let adj = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
};
let shpname = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
};
let word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
};
console.log(`${adj[a]} ${shpname[b]} ${word[c]}`);