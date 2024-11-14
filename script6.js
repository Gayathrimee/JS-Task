function safeParse(jsonString){

    const jsonStrings = '{"title" : "string"}'
    const jsonValue = JSON.parse(jsonStrings)

    console.log(jsonValue)
}

safeParse()



// -----



function safeParse2(jsonString){

    const jsonStrings2 = ''
    const jsonValue2 = JSON.parse(jsonStrings2)

    console.log(jsonValue2)
}

safeParse2() 