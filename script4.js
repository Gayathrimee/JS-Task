//Deep clone is a technique that is used to duplicate everything whenever we are
// cloning arrays and objects in js to avoid data loss.

function deepClone(obj){
    
    const flower1 = {
        name:'Jasmine',
        color:'White',
        petals:{
            one: 1,
            two: 2
        }
    } 

    // const flower2 = {... flower1} 
    const flower2 = JSON.parse(JSON.stringify(flower1))
    
    flower1.name = 'Rose'
    flower1.petals.two = 3
    
    console.log(flower2.name)
    console.log(flower1.name)
    console.log(flower1.petals.one)
    console.log(flower1.petals.two)
    console.log(flower2.petals)
} 

deepClone()  