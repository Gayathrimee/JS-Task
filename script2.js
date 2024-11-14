// function uniqueValues (arr) {
    
//     return [new Set([arr])]
// }

// console.log(uniqueValues(['sdf']))

// ---


function uniqueValues (arr) { 
    return [... new Set(arr.split(''))]
}
console.log(uniqueValues('roooooaasdjhfsdf'))


// ---

// function uniqueValues(arr){
//     const arrays = []
//     const newAr = [... new Set(arr)]

//     arrays.push(newAr)
// }

// console.log(uniqueValues(['dfad']))