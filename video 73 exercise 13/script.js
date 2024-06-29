let viewCalculater = function(view){
    if(view>=100000000){
        return `${Math.round(view/100000000)}B`
    }
    else if(view>=1000000){
        return `${Math.round(view/100000)}M`
    }
    else if(view>=1000){
        return `${Math.round(view/1000)}K`
    }
    else if(view < 1000){
        return view
    }
}

function createCard(titalname,cName,view,monthsOld,duration,thumbnail){

    let div = document.createElement("div")
    view = viewCalculater(view)

    div.innerHTML= `
        <div class="container">
        <div class="div1">
            <img
                src="${thumbnail}"
                alt="">

            <div class="time">
                ${duration}
            </div>
        </div>
        <div class="div2">
            <h1 class="header">
                ${titalname}
            </h1>
            <div class="info">
                <div class="cname">${cName}</div>
                <span></span>
                <div class="view">${view} views</div>
                <span></span>
                <div class="old">${monthsOld} months ago</div>
            </div>
        </div>
    </div>
    `
    
    document.body.appendChild(div)
}


createCard("Installing VS Code &amp; How Websites Work | Sigma Web Development Course - Tutorial #1","codewithharry",1000000000,4,"20:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

