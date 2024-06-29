// Read Notes Of Code With harry

// async function getData() {
//     // simulate getting data from the server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3000);
//     })
// }


/*

settle means resolve or reject

resolve means promise has settled succesfully

reject means promise has not settles succesfully


*/



async function getData() {
    // Api is getting data from the server 
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')


    // POST Request

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })




    // pars data into json or text
    let data = await x.json();

    return data;
}

async function wrap() {

    console.log("Loading Modules")
    console.log("Do something Else")
    console.log("load Data")

    let data = await getData()
    // here from here wait for reslove getData() Function

    console.log(data)
    console.log("Process Data")
    console.log("data task")

}

wrap();


// data.then((v)=>{
//     console.log("Process Data")
//     console.log("data task")
// })
