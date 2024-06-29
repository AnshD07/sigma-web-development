let button = document.getElementById("btn")

button.addEventListener("click", () => { 
    //  document.body.style.backgroundColor = "black" 
    document.querySelector(".box").innerHTML = "<h1>Hey How are you</h1>"

})

document.addEventListener("contextmenu",()=>{
    alert("Dont hack with right click please :(     ")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key,e.keyCode)
})