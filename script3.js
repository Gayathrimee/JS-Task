// function fetchData(urls){

//     fetch(urls)
//         .then((response) => {
//             return response.json
//         })
// }

// ----

// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
// }


// ---

// async function fetchData(url){
//     const response = await fetch(url)
//     const data = await response.json()
// }             

// ---

// const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3'
// ]
// async function fetchData(urls) {
//     urls.forEach(url => {
//         const repsonse = await fetch(url) 

//         const data = await repsonse.json()
//         console.log(data)
//     })

// }

// fetchData()

// ----

async function fetchData() {
        const repsonse = await fetch(url) 

        const data = await repsonse.json()
        console.log(data)
}

fetchData()