// const isPalindrome = (str) => {

//     str = str.replace(/[.,\/#!%$?\^&\*;:{}=\-_`~()]/g, "")
    
//     let j = str.length - 1


//     for (let i = 0; i < str.length; i++){

//         if(str[i] === str[j]){
//             return true
//         }

//         j--
//     }
//     return false 
// }

// console.log(isPalindrome('ii was a saw i.?&'))    // false
// console.log(isPalindrome('bbaab'))           // false


const isPalindrome = (str) => {

    str = str.replace(/[. ,\/#!%$?\^&\*;:{}=\-_`~()]/g, "").toLowerCase()
    
   let reverseValue = str.split('').reverse().join('')
//    let reverse2 = reverseValue.split('').length - 1 

   for (let i = 0; i < str.length; i++){
    
    if( str[i] !== reverseValue[i]){

        return false
    } 
    // reverse2--
   }
 
   return true

}

console.log(isPalindrome('#$ Malayalam ?'))   //true
console.log(isPalindrome('asdflaalfds'))      //false