function findTwoSum(nums,target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){

            if(nums[i] + nums[j] === target) return [i,j]
        }
    }
}

console.log(findTwoSum([9,8,7],16))
console.log(findTwoSum([9,8,7,1,0,7],8)) 