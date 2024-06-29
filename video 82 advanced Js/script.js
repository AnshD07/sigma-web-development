async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("this is ansh")
            resolve(45)
        }, 1000);
    })
}


(async function () {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    let [x,y,...rest] = [1,2,3,5,7,5,6,5,7]
    // console.log(x,y);
    // console.log(rest);

    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a:extract1,b:extract2} = obj;  //! extraction value from object
    console.log(extract1,extract2)


    let arr = [1,2,3,4,5,6,7,8]

    // console.log(sum(...arr))

    let a="the",b="your"
    const c = {a,b}
    console.log(c);


})()